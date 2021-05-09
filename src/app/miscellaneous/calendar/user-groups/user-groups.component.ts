import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialogRef, MatSnackBar} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { CalendarService } from '../../../API_Service/calendar.service';
import { TokenStorageService } from '../../../authentication/token-storage.service';
import { group } from './group-model';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss']
})
export class UserGroupsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserGroupsComponent>, private calenderService: CalendarService, private storage: TokenStorageService, private snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['select', 'name'];
  selection = new SelectionModel<group>(true, []);
  myGroups: group[];
  dataSource = new MatTableDataSource<group>();
  openViewGroup: boolean = false;
  openCreateGroup: boolean = true;
  selectedGroup: group;

  ngOnInit() {
    this.displayAllGroups();
    this.dataSource.filterPredicate = function(data, filter: string): boolean {
      return data.groupName.toLowerCase().includes(filter);
    };
  }

  displayAllGroups() {
    this.calenderService.getMyGroups(this.storage.getUsername()).subscribe( groups => {
      this.myGroups = groups;
      this.myGroups.sort((g1, g2)=> {return new Date(g2.createdDate).getTime() - new Date(g1.createdDate).getTime()})
      this.dataSource.data = this.myGroups;
    })
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: group): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.groupId}`;
  }

  deleteSelectedGroups() {
    let grpsToBeDeleted: string[] =[];
    this.selection.selected.forEach(grp => {
      grpsToBeDeleted.push(grp.groupId);
    });
    let deleteResponse = this.calenderService.deleteGroup(grpsToBeDeleted);
    deleteResponse.subscribe(() => {
      this.displayAllGroups();
      this.snackBar.open('Groups deleted', 'OK', {
        duration: 5000
      });
    },
    error => {this.snackBar.open('Oops! Server Error', 'OK',{
      duration: 5000,
      });
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getRecord(groupInfo) {
    this.openCreateGroup = false;
    this.openViewGroup = true;
    this.selectedGroup = groupInfo;
  }

  getCreatedGroup($event) {
    console.log($event);
    this.displayAllGroups();
  }

  openCreateForm() {
    this.openCreateGroup = true;
    this.openViewGroup = false;
  }

  refreshGroupList($event) {
   if($event===true) {
     this.displayAllGroups();
     this.openCreateForm();
   }
  }
}
