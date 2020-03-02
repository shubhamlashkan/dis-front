import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
<<<<<<< HEAD
import { checkList, TempList, settings, facultyName} from '../timetableModel';
import { TimetableService } from '../timetable.service';
import { element } from '@angular/core/src/render3/instructions';
import { ToastrManager } from 'ng6-toastr-notifications';
=======
import { SemtimetableService } from '../semtimetable.service';
import { SemTimeTableSettings } from '../semTimeTableModel';
import { HttpClient } from '@angular/common/http';
import { apiSetting } from 'src/app/urls/apisetting';
import { map } from 'rxjs/operators';
>>>>>>> db8b21fcc2ca14a666b6c35974b6ef4b31b01654

@Component({
  selector: 'app-sem-time-table',
  templateUrl: './sem-time-table.component.html',
  styleUrls: ['./sem-time-table.component.scss']
})
export class SemTimeTableComponent implements OnInit {
<<<<<<< HEAD
 valueslist : checkList[]=[];
 xyzlist :TempList;
  days:string[]; 
 timeslot:string[];
 checkedList:checkList[]=[];
 rowCount:number;
 columnCount:number;
 valuesListSize:number;
 @ViewChild('s') settingForm: NgForm;
  setting : settings;
  fData : facultyName[]= [];
  
  // xyzlist = [
  //   {
  //     value1: 'monday',
  //     value2: '10:00-11:00'
  //   },
  //   {
  //     value1: 'tuesday',
  //     value2: '10:00-11:00'
  //   },
  //   {
  //     value1: 'wednesday',
  //     value2: '10:00-11:00'
  //   },
  //   {
  //     value1: 'thursday',
  //     value2: '10:00-11:00'
  //   },
  //   {
  //     value1: 'friday',
  //     value2: '10:00-11:00'
  //   },
  // ];







  constructor(private timetableService : TimetableService,public toastr: ToastrManager) { 

  }


  ngOnInit() {


    this.getFacultyData();
    this.days = ['monday','tuesday','wednesday','thursday','friday'];
    
    this.timeslot = ['10:00-11:00','11:00-12:00','12:00-1:00','2:00-3:00','3:00-4:00','4:00-5:00','5:00-6:00'];
    this.columnCount = this.days.length;
    this.rowCount = this.timeslot.length;
    for(var i=0;i<this.rowCount;i++)
    {
      for(var j=0;j<this.columnCount;j++)
      {
          this.xyzlist = new TempList(this.timeslot[i],this.days[j]);
          this.valueslist.push(this.xyzlist);
        //  this.valueslist[this.valuesListSize].value2=this.timeslot[j];
      }
    }
    //console.log(this.xyzlist[0].value1);
    console.log(this.valueslist);
    
   // console.log(this.checkedList);
  }
  

  onCheckboxChange(option, event) {
    if(event.target.checked) {
      this.checkedList.push(option);
    } else {
    for(var i=0 ; i < this.valueslist.length; i++) {
      if(this.checkedList[i] == option) {
        this.checkedList.splice(i,1);
     }
   }
  }
  console.log(this.checkedList);
  }

  uncheckAll()
  {
    this.valuesListSize = this.checkedList.length;
    for(var i=0 ; i <this.valuesListSize; i++)
     {
             this.checkedList.pop();
     } 
     // console.log(this.checkedList);
      
    $('input[type="checkbox"]:checked').prop('checked',false);
    
      // element.checked= false;
    }

saveSetting(){
  this.setting=new settings(null,this.settingForm.value.timetableSettings.lectureLength,
                                 this.settingForm.value.timetableSettings.lunchEndTime,
                                 this.settingForm.value.timetableSettings.lunchTime,
                                 null,null);
                                 console.log(this.setting);

this.timetableService.saveSetting(this.setting).subscribe(
  response => {
            
    if(response.ok) {
      //this.router.navigate(['/']);
      this.toastr.successToastr(response.body['message'], 'Success!');
      console.log(response.body['message']);
      this.ngOnInit();
    }
  },
  error => {
    if(error.status === 400) {
      this.toastr.errorToastr(error.error['message'], 'Alert!');
  
   console.log(error.error['message']);
  
  }
}


  
);
              
  }
  getFacultyData(): void{
    this.timetableService.getFacultyName()
      .subscribe(response => this.fData= response.body);
      console.log(this.fData);
      
  }
  

    
=======

  semSettings:SemTimeTableSettings[]=[];
  constructor(private service:SemtimetableService,private http: HttpClient) { }
  ngOnInit() {
    this.getSemTimeTableSettings();
  }

  
  apiUrl: string = apiSetting.apiAcademics + '/timeTable'

  getSemTimeTableSettings(){
     return this.http.get<{[key:string]: SemTimeTableSettings}>(this.apiUrl+'/getSemTimeTableSettings').pipe(map(responseData => {
      const semSettings: SemTimeTableSettings[] =[];
      for(const key in responseData)
      {
        if(responseData.hasOwnProperty(key))
        {
          semSettings.push({ ...responseData[key], id:key})
        }
      }
      return semSettings;
    })).subscribe(semData=>{
        this.semSettings = semData;
         });
  }

  // getSemTimeTableSettings()
  // {
  //   this.service.getSemTimeTableSettings().subscribe(semData=>{
  //     console.log(semData)
  //   });
    
  // }
 
>>>>>>> db8b21fcc2ca14a666b6c35974b6ef4b31b01654
}

