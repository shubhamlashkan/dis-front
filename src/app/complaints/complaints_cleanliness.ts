export class AddACleanlinessComplaint{
    location : string;
    levelOfDust: number;
    details : string;
    constructor(location : string,levelOfDust:number,details:string)
    {
        this.location=location;
        this.levelOfDust=levelOfDust;
        this.details=details;
    }
}