mport { Component, OnInit, ViewChild } from '@angular/core';
import { facultyData, addMember,addMemberResponse } from 'src/app/Model/facultyData';
import { FacultyDataService } from './faculty-data.service';
import { AdministrationService } from 'src/app/API_Service/administration.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import {PanelOfTheoryService} from 'src/app/API_Service/panel.service';
import {PanelOfPracticalService} from 'src/app/API_Service/panel.service';
import {NgForm,Validators,FormControl,FormGroup, FormBuilder} from "@angular/forms";
import { facultyEnroll } from 'src/app/Model/facultyEnroll.model';
import {FacultyService} from 'src/app/API_Service/facultyEnroll.service';
import { PanelOfTheory } from 'src/app/Model/panelOfTheory.model';
import { PanelOfPractical, External } from 'src/app/Model/panelOfPractical.model';
import {staffList } from 'src/app/hod/administration/administrationModel';
import {MatSelectModule} from '@angular/material/select';
import { MatOption } from '@angular/material';
import { apiSetting } from 'src/app/urls/apisetting';


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
  @ViewChild("ppanel") addPracticalPanel:NgForm;
  @ViewChild("updateT") updateTheory:NgForm;
  @ViewChild("updateP") ReJoinP:NgForm;
  @ViewChild("addSyllabus") addSyllabus:NgForm;
  @ViewChild("f1") addEx:NgForm;
  @ViewChild("f2") updateEx:NgForm;
  
  //Variable declared to send and receive data from API's
  Member: addMember;
  responseAdd: string;
  errormsg : string;
  searchedRecord : boolean; 
  isValidFormSubmitted = false;  
 

  baseUrl : string = apiSetting.apiUser;
  showMsg: boolean = false;
  request:facultyEnroll;
  faculty:facultyEnroll[]=[];
  req:PanelOfTheory;
  theorypanel:any[]=[];
  preq:PanelOfPractical;
  ereq:External;
  practicalpanel:PanelOfPractical[]=[];
  fileToUpload: File = null;
  form:FormGroup;
  faculties:string[]=[];
  year:string
  subjectName:string;
  subjectCode:string;
  course:string;
  panelId:string; 
  staffs:staffList[]=[];
  showNullError=false;
  showPanelMsg: boolean = false;
  
  fData : facultyData[]= new Array(new facultyData());
  sData :  facultyData[] = new Array (new facultyData());
  allData : facultyData[] = new Array(new facultyData());
  eData:any[]=[];
  erequest: any[]=[];
  id: any;

  constructor(private faculty_service: FacultyDataService, private administrationService:AdministrationService,public toastr: ToastrManager,private facultyEnrollService:FacultyService,private paneloftheoryService:PanelOfTheoryService,private panelofpracticalservice:PanelOfPracticalService, public fb: FormBuilder, private facultyservice: FacultyService) { 
    this.getFacultyData();
    this.getStaffData();
    this.form=this.fb.group({
      "file": [null]   })
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

 deletePanelofTheory(){
  var req={subjectCode:this.subjectCode,year:this.year}
  this.paneloftheoryService.deleteRequest(req).subscribe((data)=>{
    console.log("success");
    this.ngOnInit();

});
this.toastr.successToastr('Theory Panel deleted', 'Success!');

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



showPracticalPanel() {
document.getElementById('practical main').style.display = 'none';
document.getElementById('view practical panel').style.display = 'block';
this.closeNav();
}

createPracticalPanel() {
document.getElementById('practical main').style.display = 'block';
document.getElementById('view practical panel').style.display = 'none';
this.closeNav();
}

closePracticalNav() {

document.getElementById('practical main').className = 'col-lg-12';
document.getElementById('view practical panel').className = 'col-lg-12';
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


//Practical
  
UpdatePractical(){
this.preq=new PanelOfPractical();
this.preq.subjectCode=this.ReJoinP.value.subjectcode;
this.preq.subjectName=this.ReJoinP.value.subjectname;
this.preq.internalFaculty1=this.ReJoinP.value.faculty1;
this.preq.internalFaculty2=this.ReJoinP.value.faculty2;
this.preq.externalFaculty=this.ReJoinP.value.external;
this.preq.labAssistant=this.ReJoinP.value.labassistant;
this.preq.labTechnician=this.ReJoinP.value.labtechnician;
this.panelofpracticalservice.updatePractical(this.preq,this.id);
this.ngOnInit();
}

onPracticalPanelSubmit(){
  
  this.preq=new PanelOfPractical();
  this.preq.subjectCode = this.addPracticalPanel.value.subjectcode;
  this.preq.subjectName = this.addPracticalPanel.value.subjectname;
  this.preq.internalFaculty1 = this.addPracticalPanel.value.faculty1;
  this.preq.internalFaculty2 = this.addPracticalPanel.value.faculty2;
  console.log(this.addPracticalPanel.value)
  this.preq.externalFaculty = this.addPracticalPanel.value.external;
  this.preq.labAssistant = this.addPracticalPanel.value.labassistant;
  this.preq.labTechnician = this.addPracticalPanel.value.labtechnician;
  this.panelofpracticalservice.addpracticalpanel(this.preq)
  this.ngOnInit();
  
  this.showPanelMsg=true;
  this.delay(3000).then(any=>{
    this.showPanelMsg= false;
    this.addPracticalPanel.reset();
})
  
  

}

handleFileInput(files: FileList) {
  this.fileToUpload = files.item(0);
  this.form.patchValue({
    file: this.fileToUpload
  });
  this.form.get('file').updateValueAndValidity();
  console.log(this.fileToUpload)
  
}

onSubmit1(){
  this.facultyservice.postFile(this.form).subscribe( 
    response => {
      this.toastr.successToastr('Successfully Uploaded the Faculty File..!');
      console.log(response.body['message']);
    },error => {
    if(error.status === 417) {
      this.toastr.errorToastr('Alert ! Not able to Upload Student File');
   console.log(error.error['message']);
  }
}
  );
    this.addSyllabus.resetForm()
    this.ngOnInit();
}


addExternal(){
  console.log("success")
  this.ereq=new External();
  this.ereq.name = this.addEx.value.name;
  this.ereq.emailId = this.addEx.value.emailId;
  this.ereq.designation = this.addEx.value.designation;
  this.ereq.mobileNo = this.addEx.value.mobileNo;
  this.ereq.bankName=this.addEx.value.bankName;
  this.ereq.branchAddress = this.addEx.value.branchAddress;
  this.ereq.AccountNumber = this.addEx.value.AccountNumber;
  this.ereq.ifscCode = this.addEx.value.ifscCode;
  console.log(this.ereq);
  console.log(this.addEx.value);
  this.panelofpracticalservice.addExternalExaminer(this.ereq);
  this.ngOnInit()
  
}

getExternalById(Id:any){
  this.panelofpracticalservice.getExternalById(Id).subscribe(data=>{
    this.erequest=data;
    this.id=Id
  });
}
updateExternal(){
  this.ereq = new External();
  this.ereq.name=this.updateEx.value.name;
  this.ereq.emailId=this.updateEx.value.emailId;
  this.ereq.designation=this.updateEx.value.designation;
  this.ereq.mobileNo=this.updateEx.value.mobileNo;
  this.ereq.bankName=this.updateEx.value.bankName;
  this.ereq.branchAddress = this.updateEx.value.branchAddress;
  this.ereq.AccountNumber = this.updateEx.value.AccountNumber;
  this.ereq.ifscCode = this.updateEx.value.ifscCode;
  this.panelofpracticalservice.updateExternal(this.ereq,this.id);
  this.id=0
  this.ngOnInit()
}
CancelPractical(){
  console.log(this.id)
  this.panelofpracticalservice.deleteRequest(this.id).subscribe( 
    response => {
      this.toastr.successToastr('Successfully removed the panel!');
      console.log(response.body['message']);},error => {
        if(error.status === 400) {
          this.toastr.errorToastr('Alert ! Not able to remove the panel');
       console.log(error.error['message']);
      }
    });
  this.id=0
    }

  getId(id:any){
    this.id=id;
    
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
	
	
    this.panelofpracticalservice.getExternalExaminer().subscribe(data=>{
      this.eData=data;
      
    });
	
    this.panelofpracticalservice.getpracticalpanel().subscribe(data=>{
      this.practicalpanel=data;
      
    });
    this.id=0;
    this.searchedRecord = false;
    this.dropdownList = this.fData;
    this.selectedItems = [
     
    ];
    this.dropdownSettings = {
      singleSelection: false,
      limitSelection:2,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      itemsShowLimit: 50,
      allowSeachFilter: true
   }

  }
  }
