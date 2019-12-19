export class librarySettingsthesis {

  private id: string;
  private noOfBooksAllowed: number;
  private penaltyPerDay: number;
  private returnDeadlineDays: number;

  constructor($id: string, $noOfBooksAllowed: number, $penaltyPerDay: number, $returnDeadlineDays: number) {
    this.id = $id;
    this.noOfBooksAllowed = $noOfBooksAllowed;
    this.penaltyPerDay = $penaltyPerDay;
    this.returnDeadlineDays = $returnDeadlineDays;
  }

}
export interface allThesis{
  title : string;
  submittedBy : string;
  guidedBy : string;
  course : string;
  
}
export interface course{

}


export class addThesisData{

course : string;
guidedBy : string;
remarks : string;
submittedBy : string;
title : string;
year : string;
cdStatus : string;


}
export interface addThesisResponse{
thesisId : string;
message : string;
}

export interface getThesisByThesisId{

  cdStatus: string;
  course: string;
  entryDate: string;
  guidedBy: string;
  remarks: string;
  status: string;
  submittedBy:string;
  submittedby: string;
  thesisId: number;
  title: string;
  year: string;
}
export class updateThesisData{
  
    private cdStatus: string;
    private  course: string;
    private guidedBy: string;
    private submittedBy: string;
    private title: string;
    private year: string;


	constructor($cdStatus: string, $course: string, $guidedBy: string, $submittedBy: string, $title: string, $year: string) {
		this.cdStatus = $cdStatus;
		this.course = $course;
		this.guidedBy = $guidedBy;
		this.submittedBy = $submittedBy;
		this.title = $title;
		this.year = $year;
	}  
  
}
export interface updateThesisResponse{
  thesisId: string;
  message: string;
}

export class removeThesisData{
  private thesisId : number;
  
    constructor($thesisId : number){
      this.thesisId=$thesisId;
    }
}
export class checkLimitDataThesis {
  enrollments: string;
}
export class checkPenaltyDataThesis {
  thesisId: number;
}

export interface checkPenaltyResponseThesis {
  penalty: string;
  username: string;
}
