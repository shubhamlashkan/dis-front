import { Component, OnInit } from '@angular/core';
import { JsonToCSVService } from 'src/app/API_Service/json-to-csv.service';
import { CourseDetail } from 'src/app/Model/course-detail.model';
import * as XLSX from 'xlsx';

type AOA = any[][];

export interface SchemeElement {
  name: string;
  code: string;
  credits: number;
  edit: any;
  view : any;
  id:number
}
var header : Array<any> = ['code','name','category','lec_hrs','tut_hrs','practical_hrs','theory_credits','practical_credits','theory_max_marks','practical_max_marks']
var COURSE_DATA : Array<any> = [
  {id:0,code:'CO',name:'DBMS',category:'ABC',lec_hrs:9,tut_hrs:5,practical_hrs:2,theory_credits:5,practical_credits:4,theory_max_marks:5,practical_max_marks:6},
  {id:1,code:'CO63527',name:'HUM',category:'ABC',lec_hrs:4,tut_hrs:5,practical_hrs:2,theory_credits:8,practical_credits:4,theory_max_marks:5,practical_max_marks:6},
]

const SCHEME_DATA: SchemeElement[] = [];

COURSE_DATA.forEach(course => {
  SCHEME_DATA.push({
    name : course.name,
    code : course.code,
    credits : course.theory_credits + course.practical_credits,
    edit : null,
    view : null,
    id : course.id
  })
})

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  course: CourseDetail;
  data: AOA = null;
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';


  constructor(private csvService : JsonToCSVService) { 
    this.course = new CourseDetail(null,null,null,0,0,0,0,0,0,0);
  }

  displayedColumns: string[] = [ 'code','name','credits','edit','view'];
  dataSource = SCHEME_DATA;

  ngOnInit() {
  }

  editCourse(i){
    this.course = { ...COURSE_DATA[i] }; 
    console.log(this.course)
  }

  addCourse(){
    this.course = new CourseDetail(null,null,null,0,0,0,0,0,0,0);
  }

  viewCourse(i){
    this.course = { ...COURSE_DATA[i] };
  }

  getCSV(){
    this.csvService.downloadFile(COURSE_DATA,"courses",header)
  }

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      console.log(this.data);
    };
    reader.readAsBinaryString(target.files[0]);
  }


  export(): void {
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

  

}
