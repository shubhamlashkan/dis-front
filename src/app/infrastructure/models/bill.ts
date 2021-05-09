

export class addBill{
  private  addressOfSupplier : string;
  private billNo : string;
private cgst : number;
private createdBy: string;
private createdDate: string;
  private dateOfPurchase : Date;
  private id : string;
  private itmeName : string;
  private modifiedBy: string;
  private modifiedDate:string;
  private nameOfSupplier : string;
  private orderNo : string;
  private price : number;
  private quantity : number;
  private sgst : number;
  private specifications : string;
  private status : string;
  private totalPrice : number;
  private warrantyPeriod : number;
  constructor($addressOfSupplier : string,$billNo : string,$cgst : number,$createdBy: string, $createdDate: string, 
$dateOfPurchase : Date, $id : string, $itmeName : string, $modifiedBy: string,$modifiedDate:string,
 $nameOfSupplier : string, $orderNo : string, $price : number, $quantity : number, $sgst : number,
  $specifications : string, $status : string, $totalPrice : number, $warrantyPeriod : number){
      this.addressOfSupplier = $addressOfSupplier;
      this.billNo = $billNo;
      this.cgst = $cgst;
      this.createdBy = $createdBy;
      this.createdDate = $createdDate;
      this.dateOfPurchase = $dateOfPurchase;
      this.id = $id;
      this.itmeName = $itmeName;
      this.modifiedBy = $modifiedBy;
      this.modifiedDate = $modifiedDate;
      this.nameOfSupplier = $nameOfSupplier;
      this.orderNo = $orderNo;
      this.price= $price;
      this.quantity = $quantity;
      this.sgst = $sgst;
      this.specifications = $specifications;
      this.status = $status;
      this.totalPrice = $totalPrice;
      this.warrantyPeriod = $warrantyPeriod;

  }


}
export interface bill {
    addressOfSupplier : string;
  billNo : string;
cgst : number;
createdBy: string;
createdDate: string;
  dateOfPurchase : Date;
  id : string;
   itmeName : string;
 modifiedBy: string;
  modifiedDate:string;
   nameOfSupplier : string;
 orderNo : string;
   price : number;
   quantity : number;
   sgst : number;
   specifications : string;
   status : string;
   totalPrice : number;
   warrantyPeriod : number;
}

export interface infraType{

}