import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SemtimetableService } from '../semtimetable.service';
import { SemTimeTableSettings } from '../semTimeTableModel';
import { HttpClient } from '@angular/common/http';
import { apiSetting } from 'src/app/urls/apisetting';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sem-time-table',
  templateUrl: './sem-time-table.component.html',
  styleUrls: ['./sem-time-table.component.scss']
})
export class SemTimeTableComponent implements OnInit {

  semSettings:SemTimeTableSettings[]=[];
  constructor(private service:SemtimetableService,private http: HttpClient) { }
  ngOnInit() {
    this.getSemTimeTableSettings();
  }

  
  apiUrl: string = apiSetting.apiAcademics + '/timeTable'

  getSemTimeTableSettings(){
     return this.http.get<{[key:string]: SemTimeTableSettings}>(this.apiUrl+'/getSemTimeTableSettings').pipe(map(responseData => {
      const semSettings: SemTimeTableSettings[] =[];
      for(const key in responseData)
      {
        if(responseData.hasOwnProperty(key))
        {
          semSettings.push({ ...responseData[key], id:key})
        }
      }
      return semSettings;
    })).subscribe(semData=>{
        this.semSettings = semData;
         });
  }

  // getSemTimeTableSettings()
  // {
  //   this.service.getSemTimeTableSettings().subscribe(semData=>{
  //     console.log(semData)
  //   });
    
  // }
 
}
