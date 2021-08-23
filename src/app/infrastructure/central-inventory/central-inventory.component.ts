import { Component, OnInit, ViewChild } from '@angular/core';
import { addEquip, equipment, equipmentType} from '../models/equipment';
import { NgForm } from '@angular/forms';
import { InfraService } from '../services/infra.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { addBill, bill } from '../models/bill';
import { Laboratory } from '../models/Laboratory';
import { Others } from '../models/Others';
import { FacultyRoom } from '../models/FacultyRoom';
import { infraType } from '../models/infra';
import * as XLSX from "xlsx";

export class StockBillData {
	constructor(
		public SNo: number,
		public BillNo: string,
		public NameofSupplier: string,
		public itemName: string,
		public Dateofpurchase: Date,
    public TotalPrice : number,
    public cgst : number,
    public sgst: number,
    public warranty_period:number,
    public specification :string,
    public addressofsupplier:string,
    public price : number,
    public quantity : number
	) {}
}
export class Data {
	constructor(
		public SNo: number,
		public Name: string,
		public Quantity: number,
		public BillNo: string,
		public RoomName: string,
	) {}
}
@Component({
  selector: 'app-central-inventory',
  templateUrl: './central-inventory.component.html',
  styleUrls: ['./central-inventory.component.scss']
})
export class CentralInventoryComponent implements OnInit {
  @ViewChild('f') addEquipForm : NgForm;
  @ViewChild('g') addBillForm : NgForm;
  @ViewChild('e') updateEquipForm : NgForm;
  @ViewChild('b') updateBillForm: NgForm;
equipments : string;
equipType: string;
equipmentType:equipmentType[]=[];
equip : addEquip;
updateEquip : addEquip;
bill : addBill;
updateBill:addBill;
equipByRoom : equipment[] =[];
EquipmentToBeUpdated: equipment[]=[];
billBy : string;
searchBill : string;
billKey : string;
billDate:Date;
purchasedOn:Date;
showSearchedRecord:boolean=false;
searchByDate:boolean= false;
equipmentCount:number;
equipId:string;
stockBill : bill[] = [];
BillToBeUpdated:bill[]=[];
labs: Laboratory[] = [];
  others : Others[] = [];
  crooms: Others[] = new Array (new Others());
  facultyRooms: FacultyRoom[] = [];
  infratype: infraType[]=[];
  i: number;
  j: number;
  billId: string;
  constructor(private infraservice: InfraService,public toastr: ToastrManager) { }

  ngOnInit() {
    this.showSearchedRecord=false;
    this.searchByDate = false;
    this.billDate = new Date();
    this.purchasedOn = new Date();
    this.getEquipmentTypeList();
    this.getInfraType();
    console.log(this.infratype);
  }


  getInfraType(): void{
    this.infraservice.getInfraType()
      .subscribe(data =>this.infratype = data.body);
     
        
          this.infraservice.getClassroom()
          .subscribe(response => this.crooms = response.body);
          
       
          this.infraservice.getFacultyRooms()
      .subscribe(data =>this.facultyRooms = data);
        
       
          this.infraservice.getLabs()
        .subscribe(response => this.labs = response.body);
        
        
          this.infraservice.getOtherInfra()
        .subscribe(response=>this.others=response.body);
  }

// for getting equipment from their types (mouse, monitor etc.)
showEquipment(equipments:string) : void{
 console.log(equipments);
  this.equipType= equipments;
  this.infraservice.getEquipmentByType(this.equipType).subscribe(response=>{this.equipByRoom=response.body
    //console.log(this.infraById.noofChairs);
  });
}

getEquipmentById(equipmentId:string):void{
  this.infraservice.getAllEquipments().subscribe(response=>{this.equipByRoom=response.body});
  this.equipmentCount = this.equipByRoom.length;
  for(this.i=0;this.i<this.equipmentCount;this.i++)
  {
      if(this.equipByRoom[this.i].id == equipmentId)
      {
          this.EquipmentToBeUpdated[0] = this.equipByRoom[this.i];
          console.log(this.EquipmentToBeUpdated);
      }
  }
}

getBillById(Id:string):void{
  this.infraservice.getBill().subscribe(response=>{this.stockBill=response.body});
  for(this.i=0;this.i<this.stockBill.length;this.i++)
  {
    if(this.stockBill[this.i].id==Id)
    {
      this.BillToBeUpdated[0] = this.stockBill[this.i];
      console.log(this.BillToBeUpdated);
    }
  }
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


onUpdateEquip()
{
  console.log(1);
  this.updateEquip = new addEquip(this.updateEquipForm.value.editEquipData.billNo,
    this.EquipmentToBeUpdated[0].createdBy,this.EquipmentToBeUpdated[0].createdDate,
    this.updateEquipForm.value.editEquipData.equipmentName,this.updateEquipForm.value.editEquipData.equipmentType,
    this.EquipmentToBeUpdated[0].id,null,null,this.updateEquipForm.value.editEquipData.noOfEquipment,
    this.updateEquipForm.value.editEquipData.roomName);
    console.log(this.updateEquip);
    this.infraservice.addEquipment(this.updateEquip).subscribe( 
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
    this.addBillForm.value.addBillData.warrantyPeriod
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
 

onUpdateBill()
{
  this.updateBill = new addBill(this.updateBillForm.value.editBillData.address,
    this.updateBillForm.value.editBillData.bill_no,this.updateBillForm.value.editBillData.cgst,
    this.BillToBeUpdated[0].createdBy,this.BillToBeUpdated[0].createdDate,this.updateBillForm.value.editBillData.purchasedOn,
    this.BillToBeUpdated[0].id,this.updateBillForm.value.editBillData.item_name,
    null,null,this.updateBillForm.value.editBillData.name_s,this.updateBillForm.value.editBillData.order_no,
    this.updateBillForm.value.editBillData.price,this.updateBillForm.value.editBillData.quantity,
    this.updateBillForm.value.editBillData.sgst,this.updateBillForm.value.editBillData.sp,
    this.BillToBeUpdated[0].status,this.updateBillForm.value.editBillData.price_t,this.updateBillForm.value.editBillData.warrantyPeriod);
    console.log(this.updateBill);
    this.infraservice.addBill(this.updateBill).subscribe( 
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
  
  if(this.searchBill == "Date of Purchase")
  {
    this.searchByDate = true;
  }
  if(!this.showSearchedRecord)
  {
    this.infraservice.getBill().subscribe(response=>{this.stockBill =response.body
    });
  }

}




// to get bill from search value
getBill(searchValue: string){
this.billKey = searchValue;
console.log(this.billKey)
// if(this.searchBill == "Bill No")  {
//   this.infraservice.getBill(this.equipType).subscribe(response=>{this.equipByRoom=response.body
//     //console.log(this.infraById.noofChairs);
//   });
// }
if(this.searchBill == "Supplier Name"){
  this.showSearchedRecord = true;
  this.infraservice.getBillBySupplierName(this.billKey).subscribe(response=>{this.stockBill =response.body
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

removeEquipment(Id:string){
  this.equipId = Id;
  this.infraservice.deleteEquipment(this.equipId).subscribe(response=>{
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

removeBill(Id:string){
  this.billId = Id;
  this.infraservice.deleteBill(this.billId).subscribe(response=>{
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


getEquipmentTypeList(): void{
  this.infraservice.getEquipmentTypeList()
    .subscribe(data =>this.equipmentType = data.body);
    
}


getBillByDate()
{

  
  // console.log(this.billDate);
  // console.log(typeof this.billDate)
  if(this.searchBill == "Date of Purchase"){
    this.infraservice.getBillByDate(this.billDate).subscribe(response=>{this.stockBill =response.body
      //console.log(this.infraById.noofChairs);
    });
    
  }
}

resetSearch()
{
  this.showSearchedRecord = false;
  this.billDate = new Date();
  this.infraservice.getBill().subscribe(response=>{this.stockBill =response.body
  });
}

exportToCSV() {
  let exportArray = [];
  for (var i = 0; i < this.equipByRoom.length; i++) {
    let obj = this.equipByRoom[i];
    
          exportArray.push(new Data(i+1,obj.equipmentName,obj.noOfEquipment,obj.billNo,obj.roomName));
         
        
  }

  const fileName ="ShowInventoryReport.xlsx";
  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportArray);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "sheet1");
  XLSX.writeFile(wb, fileName);
}

exportToExcel() {
  let exportArray = [];
  for (var i = 0; i < this.stockBill.length; i++) {
    let obj = this.stockBill[i];
    
          exportArray.push(new StockBillData(i+1,obj.billNo,obj.nameOfSupplier,obj.itmeName,obj.dateOfPurchase,obj.totalPrice,obj.cgst,obj.sgst,obj.warrantyPeriod,obj.specifications,obj.addressOfSupplier,obj.price,obj.quantity));
         
        
  }

  const fileName ="ShowStockBillReport.xlsx";
  const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(exportArray);
  const wb: XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "sheet1");
  XLSX.writeFile(wb, fileName);
}

}
