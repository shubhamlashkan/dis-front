import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CalendarService } from '../../../../API_Service/calendar.service';
import { TokenStorageService } from '../../../../authentication/token-storage.service';
import { group_participant } from '../group_participant-model';

export interface userListObject {
  userName: string;
  name: string;
  type: string;
}

@Component({
  selector: 'app-update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.scss']
})
export class UpdateGroupComponent implements OnInit {

  @Output() updatedGroup = new EventEmitter();
  @Input() currentGroup: any;
  participantListController = new FormControl();
  titleFormController = new FormControl('', [
    Validators.required,
  ]);
  options: userListObject[];
  participantList = new Set<userListObject>();
  filteredOptions: Observable<userListObject[]>;
  academic_personnel: any = [];
  be_students: any = [];
  me_students: any = [];
  phd_students: any = [];
  is_academic_checked: boolean;
  is_be_checked: boolean;
  is_me_checked: boolean ;
  is_phd_checked: boolean ;
  currentUser: string;
  currentGroupId: string;

  constructor(private calendarService: CalendarService, private storage: TokenStorageService) { }

  ngOnInit() {
    this.currentUser = this.storage.getUsername();
    this.is_academic_checked = true;
    this.is_be_checked = false;
    this.is_me_checked =false;
    this.is_phd_checked = false;
    this.resolveParticipants().then(userData => this.generateUserwiseLists(userData));
    this.titleFormController.setValue(this.currentGroup.groupName);
    this.currentGroup.participants.forEach(element => {
      this.participantList.add({
        userName: element.participantId,
        name: element.participantName,
        type: element.userType
      })
    });
    this.currentGroupId = this.currentGroup.groupId
  }

  private resolveParticipants(): Promise<any> {
    return new Promise((resolve) => {
      this.calendarService.getAllUsers(this.currentUser).subscribe(userData => {
        resolve(userData);
      });
    });
  }

  generateUserwiseLists(data: any) {
      console.log(data);
      data.forEach(element => {
        if(element.participantType === 'Academic Personnel') {
          element.participant.forEach(participant => {
            this.academic_personnel.push([participant[0], participant[1], 'academic personnel']);
          });
        } 
        else if(element.participantType === 'Student') {
          element.participant.forEach(participant => {
            if(participant[2] === 'C1') {
              this.be_students.push([participant[0], participant[1], 'B.E.']);
            } 
            else if(participant[2] === 'C2') {
              this.me_students.push([participant[0], participant[1], 'M.E.']);
            } 
            else {
              this.phd_students.push([participant[0], participant[1], 'PhD']);
            }
          });
        }
      });
      this.generateOptions();
  }

  generateOptions() {
    this.options = [];
    if(this.is_academic_checked) {
      this.academic_personnel.forEach(person => {
        if(person[0] !== this.currentUser) {
          this.options.push({userName: person[0], name: person[1], type: person[2]})
        }
      });
    }
    if(this.is_be_checked) {
      this.be_students.forEach(person => {
        this.options.push({userName: person[0], name: person[1], type: person[2]})
      });
    }
    if(this.is_me_checked) {
      this.me_students.forEach(person => {
        this.options.push({userName: person[0], name: person[1], type: person[2]})
      });
    }
    if(this.is_phd_checked) {
      this.phd_students.forEach(person => {
        this.options.push({userName: person[0], name: person[1], type: person[2]})
      });
    }
    this.filteredOptions = this.participantListController.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    console.log(this.options);
  }

  private _filter(value: string): userListObject[] {
    if(typeof value === 'string') {
      const filterValue = value.toLowerCase();
      return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
    }
  }

  onEnter() {
    this.participantList.add(this.participantListController.value);
    this.participantListController.setValue('');
  }

  remove(participant) {
    this.participantList.delete(participant);
  }

  validate() {
    return !((this.participantList.size > 0) && (!this.titleFormController.hasError('required')));
  }

  updateCurrentGroup() {
    let final_participants: group_participant[] = [];
    this.participantList.forEach(prt => {
      final_participants.push({
        participantName: prt.name,
        participantId: prt.userName,
        userType: prt.type
      })
    });
    let grp_op = this.calendarService.updateGroup({
      groupName: this.titleFormController.value,
      participants: final_participants,
      createdBy: this.currentUser
    }, this.currentGroupId);
    grp_op.subscribe(new_grp => {
      this.updatedGroup.emit(new_grp);
    })
  }
}
