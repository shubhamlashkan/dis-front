export interface allThesis{
    title : string;
    submittedBy : string;
    guidedBy : string;
    course : string;
    
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