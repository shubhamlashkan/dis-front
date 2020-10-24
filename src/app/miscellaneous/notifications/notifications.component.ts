import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort ,Sort} from '@angular/material/sort';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { NotificationsService } from 'src/app/API_Service/notifications.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatSnackBar, MatDialogConfig, MatDialog, DateAdapter, MAT_DATE_LOCALE } from '@angular/material';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { ForwardDialogComponent } from './forward-dialog/forward-dialog.component';
import * as _moment from 'moment';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

export interface UserData {
  id: string;
  heading: string;
  description: string;
  read: Boolean;
  date: Date;
  isFavourite: Boolean;
  link: String;
  comment: String
}

const moment = _moment;

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  providers: [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  }],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class NotificationsComponent implements OnInit , OnDestroy{

  subscription: Subscription;
  columnsToDisplay: string[] = ['favourite' ,'date', 'heading','forwarded','link' ,'action'];
  dataSource: MatTableDataSource<UserData>;
  expandedElement: UserData | null;
  pipe: DatePipe;
  startDate;
  showUnread=false;
  showStarred=false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  

  
filterForm = new FormGroup({
  fromDate: new FormControl(),
  toDate: new FormControl(),
});

get fromDate() { return this.filterForm.get('fromDate').value; }
get toDate() { return this.filterForm.get('toDate').value; }

  constructor(public dialog: MatDialog,private _snackBar: MatSnackBar,private notificationsService : NotificationsService,private changeDetectorRefs: ChangeDetectorRef) { }
  notificationsData : UserData[]=[];

  ngOnInit() {
    this.refresh()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 getDateRange(value) {
    this.dataSource.data = this.notificationsData;
    const fromDate = moment(value.fromDate)
    const toDate = moment(value.toDate)
    this.dataSource.data = this.dataSource.data.filter(e=>moment(e.date) >= fromDate && moment(e.date) <= toDate ) ;
    this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      const sortState: Sort = {active: 'date', direction: 'asc'};
      this.sort.active = sortState.active;
      this.sort.direction = sortState.direction;
      this.sort.sortChange.emit(sortState);
  }


  refresh(){
    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.notificationsService.getMyNotifications())
    ).subscribe((notifi) => {
	var check=JSON.stringify(notifi) === JSON.stringify(this.notificationsData);
	//console.log(check);
      if(!check){
      this.notificationsData=notifi;
      this.dataSource = new MatTableDataSource(this.notificationsData);
      console.log(this.notificationsData);
      this.activePaginatorAndSort();
      this.changeDetectorRefs.detectChanges();
      //this.table.renderRows();
    }
        });
  }

  markAsRead(id :String)
  {
    this.notificationsService.markAsRead(id).subscribe(data =>{
      //console.log(data)
      this._snackBar.open('Notification marked as read', 'OK', {
        duration: 5000,
        horizontalPosition: "right",
        verticalPosition:"top",
      });
    },
    error=>{this._snackBar.open('Server Error', 'OK',{
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition:"top",
    });
    }
    );
  }
  markAllAsRead(){
    this.notificationsService.markAllAsRead().subscribe(data =>{
      //console.log(data)
      this._snackBar.open('All notifications marked as read', 'OK', {
        duration: 5000,
        horizontalPosition: "right",
        verticalPosition:"top",
      });
    },
    error=>{this._snackBar.open('Server Error', 'OK',{
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition:"top",
    });});
  }

  filter(){
    if(this.showUnread && this.showStarred)
    {
      this.dataSource = new MatTableDataSource(this.notificationsData);
      this.dataSource.data = this.dataSource.data.filter(e=>(!e.read && e.isFavourite));
      this.activePaginatorAndSort();
      
    }
    else if(!this.showUnread && this.showStarred)
    {
      this.dataSource = new MatTableDataSource(this.notificationsData);
      this.dataSource.data = this.dataSource.data.filter(e=>(e.isFavourite));
      this.activePaginatorAndSort();
      
    }
    else if(this.showUnread && !this.showStarred)
    {
      this.dataSource = new MatTableDataSource(this.notificationsData);
      this.dataSource.data = this.dataSource.data.filter(e=>(!e.read));
      this.activePaginatorAndSort();
      
    }
    else
    {
      this.dataSource = new MatTableDataSource(this.notificationsData);
      this.activePaginatorAndSort();
      
    }
  }
 
  activePaginatorAndSort(){
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      const sortState: Sort = {active: 'date', direction: 'desc'};
      this.sort.active = sortState.active;
      this.sort.direction = sortState.direction;
      this.sort.sortChange.emit(sortState);
  }

  markAsFavourite(id :String)
  {
    this.notificationsService.markAsFavourite(id).subscribe(data =>{
    },
    error=>{this._snackBar.open('Server Error', 'OK',{
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition:"top",
    });
    }
    );
  }

  delete(id:String) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.maxWidth="400px";
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(DeleteDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      {
        this.notificationsService.delete(id).subscribe(data =>{
        this.dataSource.data= this.dataSource.data.filter(e=>(e.id !==id));
        this._snackBar.open('Notification deleted successfully', 'OK',{
          duration: 5000,
          horizontalPosition: "right",
          verticalPosition:"top",
        });
        },
        error=>{
          this._snackBar.open('Server Error', 'OK',{
          duration: 5000,
          horizontalPosition: "right",
          verticalPosition:"top",
        });
        }
        );
      }

    });
    }
  forward(id:string,heading:string) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width ="520px"
      dialogConfig.data = {
        id: id,
        heading: heading
    };
      const dialogRef = this.dialog.open(ForwardDialogComponent, dialogConfig);
  
      dialogRef.afterClosed().subscribe(result => {});
      }
  resetFilter(){
    this.filterForm.reset();
    this.dataSource = new MatTableDataSource(this.notificationsData);
      this.activePaginatorAndSort();

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

