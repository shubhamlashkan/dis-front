export class AddALEComplaint{
    lab : string;
    systemNo: string;
    details : string;
    constructor(lab : string,systemNo:string,details:string)
    {
        this.lab=lab;
        this.systemNo=systemNo
        this.details=details;
    }
}