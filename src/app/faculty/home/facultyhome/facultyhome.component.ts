import { Component, OnInit } from '@angular/core';
import { TimetableService } from 'src/app/API_Service/timetable.service';

@Component({
  selector: 'app-facultyhome',
  templateUrl: './facultyhome.component.html',
  styleUrls: ['./facultyhome.component.scss'],
  providers : [TimetableService]
})
export class FacultyhomeComponent implements OnInit {

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
