import { Component, OnInit, ViewChild } from '@angular/core';
import { addEquip, equipment } from '../models/equipment';
import { NgForm } from '@angular/forms';
import { InfraService } from '../services/infra.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { addBill, bill } from '../models/bill';
import { Laboratory } from '../models/Laboratory';
import { Others } from '../models/Others';
import { FacultyRoom } from '../models/FacultyRoom';

@Component({
  selector: 'app-central-inventory',
  templateUrl: './central-inventory.component.html',
  styleUrls: ['./central-inventory.component.scss']
})
export class CentralInventoryComponent implements OnInit {
  @ViewChild('f') addEquipForm : NgForm;
  @ViewChild('g') addBillForm : NgForm;

equipments : string;
equipType: string;
equip : addEquip;
bill : addBill;
equipByRoom : equipment[] =[];
billBy : string;
searchBill : string;
billKey : string;
stockBill : bill[] = [];
labs: Laboratory[] = [];
  others : Others[] = [];
  crooms: Others[] = new Array (new Others());
  facultyRooms: FacultyRoom[] = [];
  constructor(private infraservice: InfraService,public toastr: ToastrManager) { }

  ngOnInit() {
  }
// for getting equipment from their types (mouse, monitor etc.)
showEquipment(equipments:string) : void{
 // console.log(equipments);
  this.equipType= equipments;
  this.infraservice.getEquipmentByType(this.equipType).subscribe(response=>{this.equipByRoom=response.body
    //console.log(this.infraById.noofChairs);
  });
}
//for getting equipment of any room 
showEquipmentbyRoom(room:string) : void{
  //console.log(room);
  this.equipType= room;
    this.infraservice.getEquipmentByRoom(this.equipType).subscribe(response=>{this.equipByRoom=response.body
      //console.log(this.infraById.noofChairs);
    });
  
  }

// to add new equipment
onAddEquip(){
  this.equip=new addEquip(this.addEquipForm.value.addEquipData.bill_no,
    null, null,
    this.addEquipForm.value.addEquipData.name,
    this.addEquipForm.value.addEquipData.type,
    null, null, null, 
    this.addEquipForm.value.addEquipData.quantity,
    this.addEquipForm.value.addEquipData.room);
   console.log(this.equip);
 this.infraservice.addEquipment(this.equip).subscribe( 
    response => {

    if(response.ok) {
      //this.router.navigate(['/']);
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
}

  );
}
// to add new bill
onAddBill(){
  this.bill=new addBill(this.addBillForm.value.addBillData.address,
    this.addBillForm.value.addBillData.bill_no,
    this.addBillForm.value.addBillData.cgst,
    null, null,
    this.addBillForm.value.addBillData.date,
    null,
    this.addBillForm.value.addBillData.item_name,
    null, null,
    this.addBillForm.value.addBillData.name_s,
    this.addBillForm.value.addBillData.order_no,
    this.addBillForm.value.addBillData.price,
    this.addBillForm.value.addBillData.quantity,
    this.addBillForm.value.addBillData.sgst,
    this.addBillForm.value.addBillData.sp,
    null,
    this.addBillForm.value.addBillData.price_t,
    this.addBillForm.value.addBillData.duration
    );
   console.log(this.bill);
 this.infraservice.addBill(this.bill).subscribe( 
    response => {

    if(response.ok) {
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
}

  );
}
 

// to select option (supplier name, bill no date etc. willl be called on particular button)
showBillBy(billBy : string){
  this.searchBill=billBy;
this.infraservice.getBill().subscribe(response=>{this.stockBill =response.body
});
}
// to get bill from search value
getBill(searchValue: string){
this.billKey = searchValue;
// if(this.searchBill == "Bill No")  {
//   this.infraservice.getBill(this.equipType).subscribe(response=>{this.equipByRoom=response.body
//     //console.log(this.infraById.noofChairs);
//   });
// }
if(this.searchBill == "Supplier Name"){
  this.infraservice.getBillBySupplierName(this.billKey).subscribe(response=>{this.stockBill =response.body
    //console.log(this.infraById.noofChairs);
  });
  
}
if(this.searchBill == "Date of Purchase"){
  this.infraservice.getBillByDate(this.billKey).subscribe(response=>{this.stockBill =response.body
    //console.log(this.infraById.noofChairs);
  });
  
}
}
// to get name of all the labs
getallLabs(): void {
  this.infraservice.getLabs()
      .subscribe(response => this.labs = response.body);
}
//Get Details of all classes
getallClass(): void {
  this.infraservice.getClassroom()
      .subscribe(response => this.crooms = response.body);
}
// to get name of other rooms
getallOthers(): void {
  this.infraservice.getOtherInfra()
      .subscribe(response=>this.others=response.body);
  
}
//Get Faculty Rooms 
getFacultyRooms(): void{
  this.infraservice.getFacultyRooms()
    .subscribe(data =>this.facultyRooms = data);
}




}
