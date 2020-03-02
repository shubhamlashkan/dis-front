export class checkList{
value1 : string;
value2:string;
}


export class TempList{
     value1:string;
     value2:string;
    constructor($value1:string,$value2:string)
    {
        this.value1 = $value1;
        this.value2 = $value2;
    }
}
export class settings{

  private id: string;
  private lectureLength: number;
  private lunchEndTime: string;
  private lunchStartTime: string;
  private modifiedBy: string;
  private modifiedDate: string;
  constructor($id : string,$lectureLength : number,$lunchEndTime: string,$lunchStartTime: string,$modifiedBy: string,$modifiedDate: string)
  {
         this.id = $id;
         this.lectureLength=$lectureLength;
         this.lunchEndTime=$lunchEndTime;
         this.lunchStartTime=$lunchStartTime;
         this.modifiedBy=$modifiedBy;
         this.modifiedDate=$modifiedDate;

  }

}
export interface facultyName{
	id:string;
	name:string;

}