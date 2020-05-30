import { Component, OnInit, ViewChild, ChangeDetectorRef, OnDestroy} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort ,Sort} from '@angular/material/sort';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { TokenStorageService } from 'src/app/authentication/token-storage.service';
import { NotificationsService } from 'src/app/API_Service/notifications.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material';


export interface UserData {
  id: string;
  heading: string;
  description: string;
  status: string;
  date: Date
}

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
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
  markAsReadData= {
    notificationId : null,
    username : null
  }
  markAllAsReadData= {
    username : null
  }
  columnsToDisplay: string[] = ['date', 'heading','link' ,'status'];
  dataSource: MatTableDataSource<UserData>;
  expandedElement: UserData | null;
  pipe: DatePipe;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  

  
filterForm = new FormGroup({
  fromDate: new FormControl(),
  toDate: new FormControl(),
});

get fromDate() { return this.filterForm.get('fromDate').value; }
get toDate() { return this.filterForm.get('toDate').value; }

  constructor(private _snackBar: MatSnackBar,private notificationsService : NotificationsService,private auth: TokenStorageService,private changeDetectorRefs: ChangeDetectorRef) {

 
  }
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
    const fromDate = value.fromDate;
    const toDate = value.toDate;
    this.dataSource.data = this.dataSource.data.filter(e=>e.date > fromDate && e.date < toDate ) ;
    console.log(fromDate, toDate);
  }

  refresh(){
    this.subscription = timer(0, 10000*3).pipe(
      switchMap(() => this.notificationsService.getMyNotifications(this.auth.getUsername()))
    ).subscribe((notifi) => {
      this.notificationsData=notifi;
      this.dataSource = new MatTableDataSource(this.notificationsData);
      console.log(this.notificationsData);

    //   this.pipe = new DatePipe('en');
    // console.log(this.dataSource.filterPredicate);
    // const defaultPredicate=this.dataSource.filterPredicate;
    // this.dataSource.filterPredicate = (data, filter) =>{
    //   const formatted=this.pipe.transform(data.date,'MM/dd/yyyy');
    //   return formatted.indexOf(filter) >= 0 || defaultPredicate(data,filter) ;
    // }
      //console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      const sortState: Sort = {active: 'date', direction: 'desc'};
      this.sort.active = sortState.active;
      this.sort.direction = sortState.direction;
      this.sort.sortChange.emit(sortState);
      this.changeDetectorRefs.detectChanges();
      //this.table.renderRows();
        });
  }

  markAsRead(id :String)
  {
    this.markAsReadData.notificationId=id;
    this.markAsReadData.username=this.auth.getUsername();
    this.notificationsService.markAsRead(this.markAsReadData).subscribe(data =>{
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
    this.markAllAsReadData.username=this.auth.getUsername();
    this.notificationsService.markAllAsRead(this.markAllAsReadData).subscribe(data =>{
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
 
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

