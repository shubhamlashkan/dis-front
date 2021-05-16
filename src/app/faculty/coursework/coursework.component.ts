import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FacultyService } from "src/app/API_Service/faculty.service";
import { ToastrManager } from 'ng6-toastr-notifications';
import * as XLSX from "xlsx";

@Component({
  selector: "app-coursework",
  templateUrl: "./coursework.component.html",
  styleUrls: ["./coursework.component.scss"],
})

export class CourseworkComponent implements OnInit {
  @ViewChild("f3") weightageForm: NgForm;
  per: any[];
  coursename: any;
  courseId: any;
  gradeItem: any[];
  userReport: any[];
  graderReport: any[];
  graderReportGradeItems: any[];
  show: boolean;
  criterion = "normal";
  tags: any;
  selectedGradeItem=[];
  selectedTagName=[];
  currentTab="CW";
  finalTagName=[];
  automatic=true;
  grouped:any;

  constructor(private facultyService: FacultyService, public toastr: ToastrManager) {}

  ngOnInit() {
    this.selectedGradeItem=[];
    this.selectedTagName=[];
    this.finalTagName=[];
    this.tags = {};
    this.show = false;
    this.facultyService.getAllCourses().subscribe((data) => {
      this.coursename = data;
      this.courseId = this.coursename[0].id;
      this.onSubmit();
    });
  }

  reset(){
    this.ngOnInit();
  }

  changeTab1(){
    this.currentTab="CW";
    this.selectedGradeItem=[];
    this.selectedTagName=[];
    this.finalTagName=[];
    this.tags = {};
    this.show = false;
  }

  changeTab2(){
    this.currentTab="SW";
    this.selectedGradeItem=[];
    this.selectedTagName=[];
    this.finalTagName=[];
    this.tags = {};
    this.show = false;
  }

  checkTab(){
    if(this.currentTab=="CW")
      return true
    else
      return false
  }
  onSubmit() {
    this.show = false;
    this.per = [];
    this.tags = {};
    this.facultyService.getAllTags(this.courseId).subscribe((data) => {
      for (var i = 0; i < data.length; i++) 
        this.tags[data[i].tagRawName] = [];
    });
    this.facultyService.getGraderReport(this.courseId, 0).subscribe((data) => {
      for (var i = 0; i < data.length; i++){
        data[i] = data[i].filter(
          (item) => item.gradeItemName !== "course total"
        );
        data[i] = data[i].filter(
          (item) => item.gradeItemName !== null
        );
      }
      console.log(data);
      this.graderReport=data
      for (var i = 0; i < this.graderReport[0].length; i++)
          this.tags[this.graderReport[0][i].tagRawName].push(this.graderReport[0][i].gradeItemName);
    });
  }

  disableFeature(e){
    if(this.automatic==true)
      this.automatic=false
    else
      this.automatic=true
  }

  onCheckboxChange(e, value, tagName) {
		if (this.selectedGradeItem.includes(value)) {
			var index = this.selectedGradeItem.indexOf(value);
			if (index > -1) {
				this.selectedGradeItem.splice(index, 1);
			}
      index = this.selectedTagName.indexOf(value);
			if (index > -1) {
				this.selectedTagName.splice(index, 1);
			}
		} else {
      this.selectedTagName.push(tagName);
			this.selectedGradeItem.push(value);
		}
	}

  getData(itemList){
    var dataByTag=[];
    for (var i = 0; i < this.graderReport.length; i++){
      var item=[];
      for (var j = 0; j < this.graderReport[i].length; j++){
        if(itemList.includes(this.graderReport[i][j].gradeItemName)){
          item.push(this.graderReport[i][j])
        }
      }
      dataByTag.push(item);
    }
    return dataByTag;
  }

  getMaximumInColumns(data, itemList){
    var col=[]
    for (var i = 0; i < itemList.length; i++){
      var array=[];
      for (var j = 0; j < data.length; j++)
        array.push(data[j][i])
      col.push(Math.max(...array.map(o => o.gradeObtained), 0))
    }
    return col;
  }

  getDataGroupedByTag(itemList){
    var data=this.getData(itemList);
    var marksByTag=[];
    if(this.criterion=="normal"){
      for (var i = 0; i < data.length; i++){
        var item=[];
        for (var j = 0; j < itemList.length; j++){
            item.push(data[i][j].percentage/100)
        }
        marksByTag.push(item);
      }
    }
    else{
      var topper=this.getMaximumInColumns(data, itemList)
      for (var i = 0; i < data.length; i++){
        var item=[];
        for (var j = 0; j < itemList.length; j++){
            item.push(data[i][j].gradeObtained/topper[j])
        }
        marksByTag.push(item);
      }
      
      }
    return marksByTag;
  }

  bestOf(itemList){
    var dataByTag=this.getDataGroupedByTag(itemList);
    for (var i = 0; i < dataByTag.length; i++)
      dataByTag[i].sort(function(a, b){return b - a});
    return dataByTag;
  }

  calculateScore(marks, weight, totalWeight){
    var scores=[]
    for (var i = 0; i < marks.length; i++){
      var sum=0;
      for (var j = 0; j < weight.length; j++){
        sum=sum+(weight[j]/100)*marks[i][j]
      }
      scores.push(parseFloat((totalWeight*sum).toFixed(2)))
    }
    return scores;
  }

  sumArray(array){
    var newArray=[];
    for (var i = 0; i < array[0].length; i++){
      var sum=0
      for (var j = 0; j < array.length; j++)
        sum=sum+array[j][i]
      newArray.push(sum);
    }
    
    return newArray;
  }

  calculateMarks(){
    this.show=false;
    var weightArray=this.weightageForm.form.value;
    var grouped={};
    this.finalTagName=[];
    for (const [key, value] of Object.entries(weightArray)) {
      if(this.selectedTagName.includes(key)){
        this.finalTagName.push(key)
        grouped[key]={items:[],weight:value,itemWeightage:[]}
        for (const [key2, value2] of Object.entries(weightArray))
          if(this.tags[key].includes(key2)){
            grouped[key].items.push(key2)
            grouped[key].itemWeightage.push(value2)
          } 
      }
    }
    this.grouped=grouped;
    const arrSum = (arr) => arr.reduce((a, b) => a + b, 0);
    var s=[];
    var check=0;
    for(const key in grouped)
      s.push(grouped[key].weight);
    check=arrSum(s);
    if(check!=100){
      this.toastr.errorToastr("Percentage of tag names is not adding up to 100%","Alert!", {toastTimeout: 3000});
      return;
    }
    check=0;
    var flag=0;
    for(const key in grouped){
      check=arrSum(grouped[key].itemWeightage)
      if(check!=100){
        flag=1;
        this.toastr.errorToastr("Percentage of grading items under "+key+" is not adding up to 100%","Alert!", {toastTimeout: 5000});
      }
    }
    if(flag==1)
      return;
    
    var totalScore=[];
    
    for(const key in grouped){
      if(this.automatic==true){
        var dataByTag;
        grouped[key].itemWeightage.sort(function(a, b){return b - a});
        dataByTag=this.bestOf(grouped[key].items);
      }
      else{
        dataByTag = this.getDataGroupedByTag(grouped[key].items);
      }

      var scores=this.calculateScore(dataByTag, grouped[key].itemWeightage, grouped[key].weight);
      for (var i = 0; i < this.graderReport.length; i++)
        this.graderReport[i][key] = scores[i];
      totalScore.push(scores);
    }
    var answer=this.sumArray(totalScore);
    if(this.currentTab=="CW"){
      for (var i = 0; i < this.graderReport.length; i++){
        this.graderReport[i].CW = answer[i];
      }
    }
    else{
      for (var i = 0; i < this.graderReport.length; i++){
        this.graderReport[i].SW = answer[i];
      }
    }
    this.show = true;
  }

 
  getCSV(tableId) {
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    let element = document.getElementById(tableId);
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */

    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    /* save to file */

    XLSX.writeFile(wb, `${tableId+this.currentTab}.xlsx`);
  }
}
