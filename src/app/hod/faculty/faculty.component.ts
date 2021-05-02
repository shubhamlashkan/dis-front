import { Component, OnInit, ViewChild } from '@angular/core';
import { facultyData, addMember,addMemberResponse } from 'src/app/Model/facultyData';
import { FacultyDataService } from './faculty-data.service';
import { AdministrationService } from 'src/app/API_Service/administration.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import {PanelOfTheoryService} from 'src/app/API_Service/panel.service';
import {NgForm} from "@angular/forms";
import { facultyEnroll } from 'src/app/Model/facultyEnroll.model';
import {FacultyService} from 'src/app/API_Service/facultyEnroll.service';
import { PanelOfTheory } from 'src/app/Model/panelOfTheory.model';
import {staffList } from 'src/app/hod/administration/administrationModel';
import {MatSelectModule} from '@angular/material/select';
import { MatOption } from '@angular/material';


@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {

  //Forms Declared
  @ViewChild('f') addMemberForm : NgForm;
  @ViewChild("f") addFaculty:NgForm;
  @ViewChild("tpanel") addTheoryPanel:NgForm;
  @ViewChild("updateT") updateTheory:NgForm;
  
  //Variable declared to send and receive data from API's
  Member: addMember;
  responseAdd: string;
  errormsg : string;
  searchedRecord : boolean;
  isValidFormSubmitted = false;  
  request:facultyEnroll;
  faculty:facultyEnroll[]=[];

  req:PanelOfTheory;
  theorypanel:any[]=[];
  faculties:string[]=[];
  year:string
  subjectName:string;
  subjectCode:string;
  course:string;
  panelId:string; 
  staffs:staffList[]=[];
  showNullError=false;



  
  fData : facultyData[]= new Array(new facultyData());
  sData :  facultyData[] = new Array (new facultyData());
  allData : facultyData[] = new Array(new facultyData());
  

  constructor(private faculty_service: FacultyDataService, private administrationService:AdministrationService,public toastr: ToastrManager,private facultyEnrollService:FacultyService,private paneloftheoryService:PanelOfTheoryService) { 
    this.getFacultyData();
    this.getStaffData();
  
  }
  ngOnInit() {
    
    this.subjectCode="";
    this.faculties=[];
    this.year="";
    this.subjectName="";
    this.course="";
    this.searchedRecord = false;
    
    this.administrationService.getStaffList().subscribe((response=>this.staffs=response.body));

    this.paneloftheoryService.gettheorypanel().subscribe(data=>{
      console.log(data);
      this.theorypanel=data;
      console.log(this.theorypanel);
      
    });
  
  }

  //Get Faculty Data
  getFacultyData(): void{
    this.faculty_service.getFacultyData()
      .subscribe(response => this.fData= response.body);
      console.log(this.fData);
  }
  //Get Staff Data
  getStaffData(): void{
    this.faculty_service.getStaffData()
      .subscribe(data =>this.sData = data.body);
      console.log(this.sData);
  }

  //Search Staff Data by Name
  getStaffDataByName(name: string){
   
    if(name == ''){
      this.searchedRecord=false;
    }
    else{
      this.faculty_service.getStaffDataByName(name).subscribe(response => this.allData= response.body,
        );
      console.log(this.allData);
      this.searchedRecord=true;
    }

  }

  //Add New Faculty or Staff Details
  onSubmit(){
  this.Member = new addMember(this.addMemberForm.value.addMemberData.class, this.addMemberForm.value.addMemberData.designation,
    this.addMemberForm.value.addMemberData.dob, this.addMemberForm.value.addMemberData.email, this.addMemberForm.value.addMemberData.emp_id,
    this.addMemberForm.value.addMemberData.date_j, this.addMemberForm.value.addMemberData.number, this.addMemberForm.value.addMemberData.name1,
    this.addMemberForm.value.addMemberData.type);
    console.log(this.Member);
    this.faculty_service.addMemberDetails(this.Member).subscribe( 
      response => {

      if(response.ok) {
        //this.router.navigate(['/']);
        this.toastr.successToastr(response.body['message'], 'Success!');
        console.log(response.body['message']);
      }
    },
    error => {
      if(error.status === 400) {
        this.toastr.errorToastr(error.error['message'], 'Alert!');
    
     console.log(error.error['message']);
    
    }
  }
    );
    this.addMemberForm.resetForm();
    


  }

  getPanelOfTheory(subjectCode:string,year:string,faculties:string[],subjectName:string,course:string){
  this.subjectCode=subjectCode;
  this.faculties=faculties;
  this.year=year;
  this.subjectName=subjectName;
  this.course=course;
  }

  showTheoryPanel() {
document.getElementById('main').style.display = 'none';
document.getElementById('view panel').style.display = 'block';
this.closeNav();
  }

  createTheoryPanel() {
document.getElementById('main').style.display = 'block';
document.getElementById('view panel').style.display = 'none';
this.closeNav();
  }

  closeNav() {

document.getElementById('main').className = 'col-lg-12';
document.getElementById('view panel').className = 'col-lg-12';
  }
  
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  onTheoryPanelSubmit(){
  
  if(this.addTheoryPanel.value.course==null){
       this.showNullError=true
       this.delay(3000).then(any=>{
        this.showNullError= false;   
   })
  }
  else if( this.addTheoryPanel.value.subjectcode==null){
    this.showNullError=true;
    this.delay(3000).then(any=>{
      this.showNullError= false;   
 })
  }
  else if(this.addTheoryPanel.value.subjectname==null){
    this.showNullError=true;
    this.delay(3000).then(any=>{
      this.showNullError= false;   
 })
  }
  else if( this.addTheoryPanel.value.faculty==null){
    this.showNullError=true;
    this.delay(3000).then(any=>{
      this.showNullError= false;   
 })
  }
  else{
    
    this.req=new PanelOfTheory();
    this.req.year=new Date().getFullYear().toString();
    this.req.course = this.addTheoryPanel.value.course;
    this.req.subjectCode = this.addTheoryPanel.value.subjectcode;
    this.req.subjectName = this.addTheoryPanel.value.subjectname;
    this.req.faculties = this.addTheoryPanel.value.faculty;
    this.paneloftheoryService.addtheorypanel(this.req);
    // this.ngOnInit();
    this.paneloftheoryService.gettheorypanel().subscribe(data=>{
      console.log(data);
      this.theorypanel=data;
      console.log(this.theorypanel);
      
    });
   
    this.toastr.successToastr('Theory Panel Created', 'Success!');
    this.addTheoryPanel.reset();
    
  }
  }

  UpdateTheory(){

var req={subjectCode:this.updateTheory.value.subjectcode,faculties:this.updateTheory.value.faculties
        ,year:new Date().getFullYear().toString(),course:this.updateTheory.value.course,subjectName:this.updateTheory.value.subjectname}
this.paneloftheoryService.updatePanelOfTheory(req);
this.paneloftheoryService.gettheorypanel().subscribe(data=>{
  console.log(data);
  this.theorypanel=data;
  console.log(this.theorypanel);
  
});

this.toastr.successToastr('Theory Panel Updated', 'Success!');

  }

  deletePanelofTheory(){
  var req={subjectCode:this.subjectCode,year:this.year}
  this.paneloftheoryService.deleteRequest(req).subscribe((data)=>{
    console.log("success");
    this.ngOnInit();

});
this.toastr.successToastr('Theory Panel deleted', 'Success!');

  }

}


