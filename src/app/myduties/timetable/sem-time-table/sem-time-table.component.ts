import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { checkList, TempList, settings, facultyName, semSetting, infraList, sCode, semtimetable} from '../timetableModel';
import { TimetableService } from '../timetable.service';
import { element } from '@angular/core/src/render3/instructions';
import { ToastrManager } from 'ng6-toastr-notifications';
import { course } from '../../library/thesisDataObj';
import { ThrowStmt } from '@angular/compiler';
import { ɵregisterLocaleData } from '@angular/common';

@Component({
  selector: 'app-sem-time-table',
  templateUrl: './sem-time-table.component.html',
  styleUrls: ['./sem-time-table.component.scss']
})
export class SemTimeTableComponent implements OnInit {
  @ViewChild('s') settingForm: NgForm;
  @ViewChild('save') checkForm: NgForm;
 valueslist : checkList[]=[];
 xyzlist :TempList;
  days:string[]; 
 startTime:string[];
 endTime:string[];
 checkedList:checkList[]=[];
 rowCount:number;
 columnCount:number;
 valuesListSize:number;
 listSize : number;

  setting : settings;
  fData : facultyName[]= [];
  semsettings: semSetting;
  course: course[]=[];
  year : string;
  sem:string;
  lType:string;
  infra : infraList[]=[];
  codeCourse:string;
  subCode : sCode[]=[];
  addSem : semtimetable[]=[];
  lectureInHr : boolean;
  today:Date = new Date();
  currentYear : number=this.today.getFullYear();
  toYear:number= this.currentYear-1;
  fromYear:number=this.currentYear+1;
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
    this.getsetting();
    this.getcourse();
    console.log(this.today);
    
    // this.days = ['monday','tuesday','wednesday','thursday','friday'];
    
    // this.startTime = ['10:00','11:00','12:00','2:00','3:00','4:00','5:00'];
    // this.endTime = ['11:00','12:00','1:00','3:00','4:00','5:00','6:00'];
    

    // this.columnCount = this.days.length;
    // this.rowCount = this.startTime.length;
    // for(var i=0;i<this.rowCount;i++)
    // {
    //   for(var j=0;j<this.columnCount;j++)
    //   {
    //       this.xyzlist = new TempList(this.startTime[i],this.days[j],this.endTime[i]);
    //       this.valueslist.push(this.xyzlist);
    //     //  this.valueslist[this.valuesListSize].value2=this.timeslot[j];
    //   }
    // }
    // //console.log(this.xyzlist[0].value1);
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
  this.setting=new settings(this.settingForm.value.timetableSettings.id,this.settingForm.value.timetableSettings.lectureLength,
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
      .subscribe(response =>this.fData= response.body);  
  }

  getsetting(): void{
    this.timetableService.getSetting().subscribe(response => {this.semsettings=response.body

      this.days = ['monday','tuesday','wednesday','thursday','friday'];
      this.listSize = this.valueslist.length;
    if(this.semsettings.lectureLength == 60)
    {
      this.startTime = ['10:00','11:00','12:00','02:00','03:00','04:00','05:00'];
      this.endTime = ['11:00','12:00','1:00','03:00','04:00','05:00','06:00'];
      this.lectureInHr=true;
      this.uncheckAll();
      for(var i=0 ; i < this.listSize;i++){
      this.valueslist.pop(); 
      }
    } 
    else{
      this.startTime = ['10:00','10:50','11:40','12:30','02:20','03:10','04:00','04:50'];
      this.endTime = ['10:50','11:40','12:30','01:20','03:10','04:00','04:50','05:40'];
      this.lectureInHr=false;
      this.uncheckAll();
      for(var i=0 ; i < this.listSize;i++){
        this.valueslist.pop(); 
        }
    }

    this.columnCount = this.days.length;
    this.rowCount = this.startTime.length;
    for(var i=0;i<this.rowCount;i++)
    {
      for(var j=0;j<this.columnCount;j++)
      {
          this.xyzlist = new TempList(this.startTime[i],this.days[j],this.endTime[i]);
          this.valueslist.push(this.xyzlist);
        //  this.valueslist[this.valuesListSize].value2=this.timeslot[j];
      }
    }
    delete this.xyzlist;
    //console.log(this.
    });
  }
  getcourse() : void{
    this.timetableService.getCourse().subscribe(response => this.course=response.body);
  }
  onSelectYear(event:any) {
    this.year = event.target.value;
  
  } 
  onSelectSem(event:any) {
    this.sem = event.target.value;
   
  }
  onSelectCourse(event:any){
    this.codeCourse = event.target.value;
  }
  onSelectLectureType(event:any) {
    this.lType = event.target.value;
    console.log(this.lType);
   
  }
  getRoom() : void{
    if(this.lType=="Theory"){
      this.timetableService.getClassroom().subscribe(response => this.infra=response.body
      );
    }
    if(this.lType=="Practical"){
      this.timetableService.getLabs().subscribe(response => this.infra=response.body);
    }

  }

  getSubjectCode(): void{
    this.timetableService.getSubjectCode(this.codeCourse,this.year,this.sem).subscribe(response=> {this.subCode=response.body
      
    });
  }
  onAdd(){
    for(var i = 0;i<this.checkedList.length;i++)
    { 
      this.addSem[i] = new semtimetable(this.checkForm.value.semtimetable.facultyName,
              this.checkForm.value.semtimetable.course,
              this.checkForm.value.semtimetable.sem,
              this.checkForm.value.semtimetable.year,
              this.checkForm.value.semtimetable.scode,
              this.checkForm.value.semtimetable.ltype,
              this.checkForm.value.semtimetable.roomNo,
              this.checkedList[i].sTime,this.checkedList[i].Day,this.checkedList[i].eTime); 
    }

    for(var i=0;i<this.checkedList.length;i++)
    {
        console.log(this.addSem[i]);
    }
  }

  
  
  



    
}

