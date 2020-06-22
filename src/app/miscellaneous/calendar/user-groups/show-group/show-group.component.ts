import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { CalendarService } from '../../../../API_Service/calendar.service';

@Component({
  selector: 'app-show-group',
  templateUrl: './show-group.component.html',
  styleUrls: ['./show-group.component.scss']
})
export class ShowGroupComponent implements OnChanges {

  @Input() selectedGroup: any;
  @Output() finalUpdate = new EventEmitter();
  @Output() isDeleted = new EventEmitter();
  currentGroup: any;
  showGroupData: boolean;
  showEditForm: boolean;
  constructor(private calendarService: CalendarService) { }

  ngOnChanges() {
    this.showEditForm = false;
    this.showGroupData = true;
    this.currentGroup = this.selectedGroup;
  }

  updateGroupDetails($event) {
    let oldId = this.currentGroup.groupId;
    this.currentGroup = $event;
    this.showEditForm = false;
    this.showGroupData = true;
    this.finalUpdate.emit(true);
  }

  editGroup() {
    this.showEditForm = true;
    this.showGroupData = false;
  }

  deleteGroup() {
    let deleteResponse = this.calendarService.deleteGroup([this.currentGroup.groupId]);
    deleteResponse.subscribe(() => {
      console.log("group deleted");
      this.isDeleted.emit(true);
    })
  }
}
