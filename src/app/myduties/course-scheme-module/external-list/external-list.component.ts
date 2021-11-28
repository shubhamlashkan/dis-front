import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { JsonToCSVService } from 'src/app/API_Service/json-to-csv.service';
import { CourseArray } from 'src/app/Model/course-detail.model';
import { ExternalData } from 'src/app/Model/external-data.model';
import * as XLSX from 'xlsx';

type AOA = any[][];

export interface SchemeElement {
  name: string;
  institute: string;
  id : number;
}

var header : Array<string> = ['name','institute','email','contact','course']

var EXTERNAL_DATA : Array<any> = [
  { id: 0,name: 'Prof. John Doe', institute: "IIT Indore", email: 'john@test.com', contact: '9458962359', course:['DBMS','OOPS'] },
  { id: 1,name: 'Prof. John Doe', institute: "IIT Indore", email: 'john@test.com', contact: '9999999999', course:['DBMS'] },

]

const SCHEME_DATA: SchemeElement[] = [];

EXTERNAL_DATA.forEach(external => {
  SCHEME_DATA.push({
    name: external.name,
    institute :external.institute,
    id: external.id
  })
})


@Component({
  selector: 'app-external-list',
  templateUrl: './external-list.component.html',
  styleUrls: ['./external-list.component.scss']
})


export class ExternalListComponent implements OnInit {
  external : ExternalData;
  selectedCourses = new Set();
  courses = []
  coursesSettings:IDropdownSettings={};

  data: AOA = null;
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';


  constructor( private csvService : JsonToCSVService ) { 
    this.external = new ExternalData(null,null,null,null,null);
  }

  displayedColumns: string[] = [ 'name','institute','details','edit'];
  dataSource = SCHEME_DATA;


  ngOnInit() {
    var i = 1;
    CourseArray.forEach(c => {
      this.courses.push({
        id: i, name : c.name
      })
      i++;
    });
    this.coursesSettings = {
      idField : 'id',
      textField : 'name',
    };
  }
  onItemSelect(item: any) {
    this.selectedCourses.add(item.name)
    console.log('onItemSelect', this.selectedCourses);
  }
  onSelectAll(items: any) {
    items.forEach(item => {
      this.selectedCourses.add(item.name)
    });
    console.log('onSelectAll', this.selectedCourses);
  }
  
  onItemDeSelect(item : any){
    this.selectedCourses.delete(item.name)
    console.log(this.selectedCourses)
  }

  onDeSelectAll(item : any){
    this.selectedCourses = new Set();
  }
  viewExternal(i){
    this.external = { ...EXTERNAL_DATA[i] };
  }
  editExternal(i){
    this.external = {...EXTERNAL_DATA[i]} 
    console.log(this.external)
  }
  
  addExternal(){
    this.external = new ExternalData(null,null,null,null,null);
  }

  getCSV(){
    this.csvService.downloadFile(EXTERNAL_DATA,"external data",header)
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
