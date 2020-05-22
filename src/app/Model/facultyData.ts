export class facultyData{
    //    id : string;
        name : string;
        nameAcronym: string;
        profilePicture: string;
        currentDesignation: string;
        email:string;
        mobileNo: number;
        alternateMobileNo: number;

 }
 export class addMember{

     private classs: string;
     private currentDesignation: string;
    private dob: string;
    private email: string;
    private employeeId : string;
    private joiningDate: string;
    private mobileNo: number;
     private name: string;
     private type: string

     constructor($classs : string,$currentDesignation : string,$dob : string,$email : string,$employeeId : string, $joiningDate : string,$mobileNo : number,$name : string,$type : string) {
       this.classs = $classs;
       this.currentDesignation= $currentDesignation;
       this.dob=$dob;
       this.email=$email;
       this.employeeId=$employeeId;
       this.joiningDate=$joiningDate;
       this.mobileNo=$mobileNo;
       this.name=$name;
       this.type=$type;
      }

 }
 export interface addMemberResponse {
  
    message: string;
  }