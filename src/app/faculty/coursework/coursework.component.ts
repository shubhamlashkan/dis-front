import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FacultyService } from "src/app/API_Service/faculty.service";
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
  constructor(private facultyService: FacultyService) {}

  ngOnInit() {
    this.selectedGradeItem=[];
    this.selectedTagName=[];
    this.tags = {};
    this.per = [];
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
  }

  changeTab2(){
    this.currentTab="SW";
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
    console.log(marksByTag);
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
      scores.push(totalWeight*sum)
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
    var weightArray=this.weightageForm.form.value;
    var grouped={};
    for (const [key, value] of Object.entries(weightArray)) {
      if(this.selectedTagName.includes(key)){
        grouped[key]={items:[],weight:value,itemWeightage:[]}
        for (const [key2, value2] of Object.entries(weightArray))
          if(this.tags[key].includes(key2)){
            grouped[key].items.push(key2)
            grouped[key].itemWeightage.push(value2)
          } 
      }
    }
    
    var totalScore=[];
    
    for(const key in grouped){
      grouped[key].itemWeightage.sort(function(a, b){return b - a});
      var dataByTag=this.bestOf(grouped[key].items);
      var scores=this.calculateScore(dataByTag, grouped[key].itemWeightage, grouped[key].weight);
      for (var i = 0; i < this.graderReport.length; i++)
        this.graderReport[i].key = scores[i];
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

  getCW() {
    var sum = 0;
    const arrSum = (arr) => arr.reduce((a, b) => a + b, 0);
    sum = arrSum(this.per);
    if (sum < 100) {
      alert("sum is less than 100");
      return;
    } else if (sum > 100) {
      alert("sum is greater than 100");
      return;
    } else {
      this.show = true;
      this.facultyService
        .getGraderReport(this.courseId, 0)
        .subscribe((data) => {
          console.log(data);
          this.graderReport = data;
          this.graderReportGradeItems = this.graderReport[0];

          for (let i in data) {
            var temp = 0;
            for (let j = 0; j < data[i].length - 1; j++) {
              temp = temp + (this.per[j] * data[i][j + 1].percentage) / 100;
            }
            this.graderReport[i].CW = temp;
            console.log(temp);
          }
        });
    }
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
