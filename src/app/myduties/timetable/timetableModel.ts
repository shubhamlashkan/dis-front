export class checkList{
  sTime : string;
  Day:string;
  eTime:string;
  }
  
  
  export class TempList{
       sTime:string;
       Day:string;
       eTime:string;
      constructor($value1:string,$value2:string,$value3:string)
      {
          this.sTime = $value1;
          this.Day = $value2;
          this.eTime = $value3;
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
  export interface semSetting{
    id: string;
    lectureLength: number;
    lunchEndTime: string;
    lunchStartTime: string;
    modifiedBy: string;
    modifiedDate: string;
  
  }
  export interface course{
  
  }
  export interface infraList{
    id: string;
    name: string;
    nameAcronym: string;
  
  }
  export interface sCode{
  
  }


  