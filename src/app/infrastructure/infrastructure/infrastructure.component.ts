import { Component, OnInit, ViewChild } from '@angular/core';
import { InfraService } from '../services/infra.service';
import { Laboratory } from "../models/Laboratory";
import { Others } from '../models/Others';
import { FacultyRoom } from '../models/FacultyRoom';
import { facultyData } from 'src/app/Model/facultyData';
import { FacultyDataService } from 'src/app/hod/faculty/faculty-data.service';
import { NgForm } from '@angular/forms';
import { facultyName, staffName, infraType, infrastructure, addInfra, addLoc ,infrabyid} from '../models/infra';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.scss']
})
export class InfrastructureComponent implements OnInit {

  @ViewChild('f') addInfraForm: NgForm;

  @ViewChild('e') editInfraForm: NgForm;

  labs: Laboratory[] = new Array (new Laboratory());
  others: Others[] = new Array (new Others());
  crooms: Others[] = new Array (new Others());
  facultyRooms: FacultyRoom = new FacultyRoom();
  lab: Laboratory = new Laboratory();
  fData : facultyName[]= [];
  sData :  staffName[] = [];
  infratype: infraType[]=[];
  locations: infraType[];
  infrastructure:infrastructure[];
  infraById:infrastructure;
  showSearchedRecords:boolean;
  searchInfrastructure:string;
  infra : addInfra;
  infraUpdate : addInfra;
  newLocation:addLoc;
  infraId:string;
  locAdd:string;
  infrast : infrabyid;
  facultyid:string;
  staffid:string;
  constructor(private infraservice: InfraService,public toastr: ToastrManager) { 
    
  }
  
  getallLabs(): void {
    this.infraservice.getLabs()
        .subscribe(response => this.labs = response.body);
  }

  getallClass(): void {
    this.infraservice.getClassroom()
        .subscribe(response => this.crooms = response.body);
  }
  getallOthers(): void {
    this.infraservice.getOtherInfra()
        .subscribe(response=>this.others=response.body);
    
  }

  getFacultyRooms(): void{
    this.infraservice.getFacultyRooms()
      .subscribe(data =>this.facultyRooms = data);
  }

  infraName(l: Laboratory): void{
    this.infraservice.setInfraName(l);
  }

  
  
  getFacultyData(): void{
    this.infraservice.getFacultyName()
      .subscribe(response => this.fData= response.body);
      
  }
  
  getStaffData(): void{
    this.infraservice.getStaffName()
      .subscribe(data =>this.sData = data.body);
    
  }
  getInfraType(): void{
    this.infraservice.getInfraType()
      .subscribe(data =>this.infratype = data.body);
    
  }
  getInfraLocation():void{
    this.infraservice.getLocation().subscribe(response => this.locations=response.body);
  }

  getInfrastructure(searchInfrastructure: string):void{
    if(searchInfrastructure==''){
      this.showSearchedRecords=false;
    }
    else{ 
      this.infraservice.getInfrastructure(searchInfrastructure).subscribe(response=>{this.infrastructure=response.body
      this.showSearchedRecords = true;
      
      
      });
    
    }
  
   
  }
  
  
  
//  getInfraById(infraId : string): void{
//    this.infraservice.getInfrastructureById(infraId).subscribe((body:any)=>{
//       this.infrast = new infrabyid(JSON.parse(body));
//       console.log(this.infrast);
//    });
   
//  }
getInfraById(infraId:string): void{
  this.infraservice.getInfrastructureById(infraId).subscribe(response=>{this.infraById=response.body
    //console.log(this.infraById.noofChairs);
  });

}

  onAdd(){

    this.infra=new addInfra(this.addInfraForm.value.addInfraData.infraArea,
                            this.addInfraForm.value.addInfraData.associateIncharge,
                            this.addInfraForm.value.addInfraData.attendant,
                            null,null,
                            this.addInfraForm.value.addInfraData.infraDes,
                            null,
                            this.addInfraForm.value.addInfraData.incharge,
                            this.addInfraForm.value.addInfraData.infraLocation,
                            null,null,
                            this.addInfraForm.value.addInfraData.infraName,
                            this.addInfraForm.value.addInfraData.infraAcronym,
                            null,null,null,null,
                            this.addInfraForm.value.addInfraData.staff,
                            this.addInfraForm.value.addInfraData.infraType);
                 console.log(this.infra);     
                 this.infraservice.addInfrastructure(this.infra).subscribe( 
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

                if(!this.locations.includes(this.addInfraForm.value.addInfraData.infraLocation))
                {
                  this.newLocation = new addLoc(this.addInfraForm.value.addInfraData.infraLocation);
                  this.infraservice.addLocation(this.newLocation).subscribe(response=>{this.locAdd=response.body['message']});
                  // console.log(this.locAdd);
                }
                this.addInfraForm.resetForm();    

    }


getInfra(id:string){
this.infraId=id;

}
removeInfra(){
  this.infraservice.deleteInfra(this.infraId).subscribe(response=>{
    if(response.ok){
      
      this.toastr.successToastr(response.body['message'],'Success!');
      console.log(response.body['message']);
      this.ngOnInit();
    }
  },
  error => {
    if(error.status === 400) {
      this.toastr.errorToastr(error.error['message'], 'Alert!');
   console.log(error.error['message']);
  }
});
}

onUpdate()
{
  // for (let i of this.fData)
  // {
  //   if(i.name.includes( this.editInfraForm.value.editInfraData.incharge))
  //   {
  //     console.log(i.id);
  //   } 
  // }

  this.infraUpdate=new addInfra(this.editInfraForm.value.editInfraData.infraArea,
                          this.editInfraForm.value.editInfraData.associateIncharge,
                          this.editInfraForm.value.editInfraData.attendant,
                          this.infraById.createdBy,this.infraById.createdDate,
                          this.editInfraForm.value.editInfraData.infraDes,
                          this.editInfraForm.value.editInfraData.infraId,
                          this.editInfraForm.value.editInfraData.incharge,
                          this.editInfraForm.value.editInfraData.infraLocation,
                          null,null,
                          this.editInfraForm.value.editInfraData.infraName,
                          this.editInfraForm.value.editInfraData.infraAcronym,
                          this.infraById.noofAlmirah,
                            this.infraById.noofChairs,
                            this.infraById.noofComputerTables,
                            this.infraById.noofTables,
                          this.editInfraForm.value.editInfraData.staff,
                          this.editInfraForm.value.editInfraData.infraType);
               //console.log(this.editInfraForm.value.editInfraData.infraName);     
               this.infraservice.updateInfrastructure(this.infraUpdate).subscribe( 
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

             
              this.addInfraForm.resetForm();    

  }
  
  ngOnInit() { 
    this.searchInfrastructure = null;;
    this.showSearchedRecords = false;
    this.getallLabs();
    this.getallOthers();
    this.getFacultyRooms();
     this.getFacultyData();
     this.getStaffData();
     this.getallClass();
     this.getInfraType();
     this.getInfraLocation();
  }

}
