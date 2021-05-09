export class AddAStudentComplaint{
    studentRollNo : string; 
    studentName : string;
    course : string;
    year : string;
    details : string;
    constructor(a : string,b:string,c:string,d:string,e:string)
    {
        this.studentRollNo=a;
        this.studentName=b;
        this.course=c;
        this.year=d;
        this.details=e;
    }
}