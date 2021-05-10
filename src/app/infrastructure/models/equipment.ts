export class addEquip{
    private billNo : string;
    private createdBy: string;
    private createdDate: string;
    private equipmentName : string;
    private equipmentType: string; 
    private id : string;
    private modifiedBy: string;
    private modifiedDate:string;
    private noOfEquipment : number;
    private roomName : string;
    constructor($billNo : string, $createdBy: string, $createdDate: string,$equipmentName : string,$equipmentType: string, 
        $id : string, $modifiedBy: string, $modifiedDate:string, $noOfEquipment : number, $roomName : string) {
            this.billNo = $billNo;
            this.createdBy =$createdBy;
            this.createdDate= $createdDate;
            this.equipmentName = $equipmentName;
            this.equipmentType= $equipmentType;
            this.id= $id;
            this.modifiedBy= $modifiedBy;
            this.modifiedDate= $modifiedDate;
            this.noOfEquipment=$noOfEquipment;
            this.roomName= $roomName;
            
        }
}
export interface equipment{
    billNo : string;
    createdBy: string;
 createdDate: string;
  equipmentName : string;
 equipmentType: string; 
     id : string;
 modifiedBy: string;
     modifiedDate:string;
    noOfEquipment : number;
    roomName : string;
}

export interface equipmentType
{
    id:string;
    type:string;
}

