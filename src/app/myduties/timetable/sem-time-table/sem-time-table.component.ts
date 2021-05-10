import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { checkList, TempList, settings, facultyName, semSetting, infraList, sCode} from '../timetableModel';
import { TimetableService } from '../timetable.service';
import { element } from '@angular/core/src/render3/instructions';
import { ToastrManager } from 'ng6-toastr-notifications';
import { course } from '../../library/thesisDataObj';
import { ThrowStmt } from '@angular/compiler';
import { ɵregisterLocaleData } from '@angular/common';
import { facultyTimeTableEntry,semTimeTable,getTimeTable} from '../semTimeTableModel';
@Component({
  selector: 'app-sem-time-table',
  templateUrl: './sem-time-table.component.html',
  styleUrls: ['./sem-time-table.component.scss']
})
export class SemTimeTableComponent implements OnInit {
    /* Forms Declared */
  @ViewChild('s') settingForm: NgForm;
  @ViewChild('save') checkForm: NgForm;
    /* Variable declared*/
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
  facultyId:string;
  session:string;
  lectureInHr : boolean;
  today:Date ;
  currentYear : number;
  toYear:number;
  fromYear:number;
  showBatch:boolean=false;
  facultyTimeTableEntries:facultyTimeTableEntry[]=[];
  semData:semTimeTable;
  message:string;
  yearList:string[]=[];
  getSemDataForEdit:getTimeTable;
  currentCheckList:TempList[]=[];
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
  batchList:string[]; 
  checkedBatch:string[]=[];
  batch:string="";
  subjectEdit:string;
  toBechecked:number;


  constructor(private timetableService : TimetableService,public toastr: ToastrManager) { 

  }


  ngOnInit() {

    this.getFacultyData();
    this.getsetting();
    this.getcourse();
      /* List of batched*/
    this.batchList =  ["B1","B2","B3","B4"];
    this.batch = "";
    //console.log(this.batchList);
   this.today = new Date();
     /* Calculating  Session from today date  */
   this.currentYear =this.today.getFullYear();
   this.toYear= this.currentYear-1;
   this.fromYear=this.currentYear+1;
    
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
   // console.log(this.valueslist);
    
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
 // console.log(this.checkedList);
  }

  onBatchSelected(option,event)
  {
    if(event.target.checked)
    {
      this.checkedBatch.push(option);
    }
    else
    {
      this.batch = "";
      for(var i=0;i<this.batchList.length;i++)
      {
        if(this.checkedBatch[i]==option)
        {
          this.checkedBatch.splice(i,1);
        }
      }
    }
    console.log(this.checkedBatch);
  }
/* To uncheck all checkboxes */
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

      /* Updating Time Table Settings */
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
      /* Get all faculties names */         
  }
  getFacultyData(): void{
    this.timetableService.getFacultyName()
      .subscribe(response =>this.fData= response.body);  
  }
    /* Get Time table settings */
  getsetting(): void{
    this.timetableService.getSetting().subscribe(response => {this.semsettings=response.body

      this.days = ['monday','tuesday','wednesday','thursday','friday'];
      this.listSize = this.valueslist.length;
    if(this.semsettings.lectureLength == 60)
    {
      this.startTime = ['10:00:00','11:00:00','12:00:00','02:00:00','03:00:00','04:00:00','05:00:00'];
      this.endTime = ['11:00:00','12:00:00','01:00:00','03:00:00','04:00:00','05:00:00','06:00:00'];
      this.lectureInHr=true;
      this.uncheckAll();
      for(var i=0 ; i < this.listSize;i++){
      this.valueslist.pop(); 
      }
    } 
    else{
      this.startTime = ['10:00:00','10:50:00','11:40:00','12:30:00','02:20:00','03:10:00','04:00:00','04:50:00'];
      this.endTime = ['10:50:00','11:40:00','12:30:00','01:20:00','03:10:00','04:00:00','04:50:00','05:40:00'];
      this.lectureInHr=false;
      this.uncheckAll();
      for(var i=0 ; i < this.listSize;i++){
        this.valueslist.pop(); 
        }
    }

    this.columnCount = this.days.length;
    this.rowCount = this.startTime.length;
      /* Creatinf Check box based on settigs retrieved */
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
    /* Get All courses*/
  getcourse() : void{
    this.timetableService.getCourse().subscribe(response => this.course=response.body);
  }
  /* Set Year variable based on input*/
  onSelectYear(event:any) {
    this.year = event.target.value;
  
  } 
  /* Set Sem variable based on input*/
  onSelectSem(event:any) {
    this.sem = event.target.value;
   
  }
  /* Show year list based on course selected*/
  onSelectCourse(event:any){
    this.codeCourse = event.target.value;
    if(this.codeCourse=="BE"){
      this.yearList=["I","II","III","IV"];
    }
    else if (this.codeCourse=="ME"){
      this.yearList=["I","II"];
    }
  }
  /* Set lType variable based on lecture type input */
  onSelectLectureType(event:any) {
    this.lType = event.target.value;
   // console.log(this.lType);
   
  }
  /* Fetch rooms list based on theory or practical lecture*/
  getRoom() : void{
    if(this.lType=="Theory"){
      this.timetableService.getClassroom().subscribe(response => this.infra=response.body
      );
      this.showBatch = false;
    }
    if(this.lType=="Practical"){
      this.timetableService.getLabs().subscribe(response => this.infra=response.body);
      this.showBatch = true;
    }

  }
/* Get Subject code on the basis of course,year and sem */
  getSubjectCode(): void{
    this.timetableService.getSubjectCode(this.codeCourse,this.year,this.sem).subscribe(response=> {this.subCode=response.body
      
    });
  }

/* Check all the lecture of faculty on given day of specific subject and save */
  onAdd(){

    if(this.checkForm.value.semtimetable.ltype == "Theory")
    {
    this.batch = null;
    }
    else  
    {
      for(var i = 0;i<this.checkedBatch.length;i++)
      {
        this.batch = this.batch + this.checkedBatch[i];
        if(i<this.checkedBatch.length-1)
        {
          this.batch = this.batch + ',';
        }
      }
    }
    console.log(this.checkForm.value.semtimetable.withEffectFrom);
    for(var i = 0;i<this.checkedList.length;i++)
    { 
      // this.addSem[i] = new semtimetable(this.checkForm.value.semtimetable.facultyName,
      //         this.checkForm.value.semtimetable.course,
      //         this.checkForm.value.semtimetable.sem,
      //         this.checkForm.value.semtimetable.year,
      //         this.checkForm.value.semtimetable.scode,
      //         this.checkForm.value.semtimetable.ltype,
      //         this.checkForm.value.semtimetable.roomNo,
      //         this.checkedList[i].sTime,this.checkedList[i].Day,this.checkedList[i].eTime); 

      this.facultyTimeTableEntries[i] = new facultyTimeTableEntry(this.batch,null,null,this.checkedList[i].Day,
        this.checkedList[i].eTime,
                        this.checkForm.value.semtimetable.facultyName,null,null,null,this.checkForm.value.semtimetable.roomNo,null,this.checkedList[i].sTime,
                        "2020-06-30");

      
    }


    this.semData = new semTimeTable(this.checkForm.value.semtimetable.course,this.facultyTimeTableEntries,this.checkForm.value.semtimetable.ltype,
      this.checkForm.value.semtimetable.sem,this.session,this.checkForm.value.semtimetable.scode,this.checkForm.value.semtimetable.year);

      console.log(this.semData);

      this.timetableService.saveSemTimeTable(this.semData).subscribe(
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

    for(var i=0;i<this.checkedList.length;i++)
    {
        //console.log(this.addSem[i]);
    }
  }
/* Set Faculty ID based on faculty name */
  onSelectFaculty(event:any)
  {
    this.facultyId = event.target.value;
   // console.log(this.facultyId);
  }
/*Set Session */
  onSelectSession(event:any)
  {
    this.session = event.target.value;
   // console.log(this.session);
  }
  /* Get subject code*/
  getScodeByFaculty()
  {
    this.timetableService.getScodeByFacultyIdandSession(this.facultyId,this.session).subscribe(response => {this.subCode = response.body
    console.log(this.subCode);
    })
  } 
  

  onSelectScode(event:any)
  {
    this.subjectEdit = event.target.value;
  }

/* Get timetable by Subject code, faculty and session */
  getTimeTable()
  {
    this.timetableService.getTimeTableByScodeFacutlySession(this.facultyId,this.session,this.subjectEdit).subscribe(response => {this.getSemDataForEdit = response.body
      //console.log(this.getSemDataForEdit.facultyTimeTableEntries);
      this.toBechecked = this.getSemDataForEdit.facultyTimeTableEntries.length;
      for(var i=0;i<this.toBechecked;i++)
      {
        // this.currentCheckList[i].sTime = this.getSemDataForEdit.facultyTimeTableEntries[i].startTime;
        // this.currentCheckList[i].eTime = this.getSemDataForEdit.facultyTimeTableEntries[i].endTime;
        // this.currentCheckList[i].Day = this.getSemDataForEdit.facultyTimeTableEntries[i].day;
        this.currentCheckList[i] = new TempList(this.getSemDataForEdit.facultyTimeTableEntries[i].startTime,this.getSemDataForEdit.facultyTimeTableEntries[i].day,this.getSemDataForEdit.facultyTimeTableEntries[i].endTime);
      }
      this.toBechecked = this.currentCheckList.length;
      console.log(this.currentCheckList);
      this.listSize = this.valueslist.length;
      console.log(this.listSize);
      for(var i=0;i<this.listSize;i++)
      {
        for(var j=0;j<this.toBechecked;j++)
        {
          if(this.valueslist[i].Day == this.currentCheckList[j].Day && this.valueslist[i].sTime == this.currentCheckList[j].sTime && this.valueslist[i].eTime == this.currentCheckList[j].eTime)
          {
          var  name = "object_"+i;
          console.log
            //console.log(val);
            //$("input[value='" + val + "']").prop('checked',true);
            //$("input[name='checkbox'][value='"+this.currentCheckList[j]+"']").prop('checked',true);
            $("#" + name).prop('checked', true);
          } 
        }
      }

    })
  }
    
}

