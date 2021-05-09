import { Component, OnInit } from '@angular/core';
import { TimetableService } from 'src/app/API_Service/timetable.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private timetable : TimetableService) { }

  ngOnInit() {
    this.timetable.getFacultyTimeTable()
    .subscribe(
      data=>{
        console.log(data);
      }
    )
  }

}
