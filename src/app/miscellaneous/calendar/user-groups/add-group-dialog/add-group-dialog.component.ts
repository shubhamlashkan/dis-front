import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CalendarService } from '../../../../API_Service/calendar.service';
import { TokenStorageService } from '../../../../authentication/token-storage.service';
import { group_participant } from '../group_participant-model';
import { MatSnackBar } from '@angular/material';

export interface userListObject {
  userName: string;
  name: string;
  type: string;
}

@Component({
  selector: 'app-add-group-dialog',
  templateUrl: './add-group-dialog.component.html',
  styleUrls: ['./add-group-dialog.component.scss']
})
export class AddGroupDialogComponent implements OnInit {

  @Output() createdGroup = new EventEmitter();
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

  constructor(private calendarService: CalendarService, private storage: TokenStorageService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.currentUser = this.storage.getUsername();
    this.is_academic_checked = true;
    this.is_be_checked = false;
    this.is_me_checked =false;
    this.is_phd_checked = false;
    this.resolveParticipants().then(userData => this.generateUserwiseLists(userData));
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
            this.academic_personnel.push([participant[0], participant[1], 'Academic Personnel']);
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

  resetForm() {
    this.is_academic_checked = true;
    this.is_be_checked = false;
    this.is_me_checked =false;
    this.is_phd_checked = false;
    this.titleFormController.reset();
    this.participantList.clear();
  }

  createNewGroup() {
    let final_participants: group_participant[] = [];
    this.participantList.forEach(prt => {
      final_participants.push({
        participantName: prt.name,
        participantId: prt.userName,
        userType: prt.type
      })
    });
    let grp_op = this.calendarService.createGroup({
      groupName: this.titleFormController.value,
      participants: final_participants,
      createdBy: this.currentUser
    });
    grp_op.subscribe(new_grp => {
      this.createdGroup.emit(new_grp);
      this.snackBar.open('Group created', 'OK', {
        duration: 5000
      });
    },
    error => {this.snackBar.open('Oops! Server Error', 'OK',{
        duration: 5000,
        });
    })
    this.resetForm();
  }
}
