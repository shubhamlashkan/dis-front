import { Component, OnInit } from '@angular/core';
import { OverviewService } from '../overview.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  constructor(public overviewHandler: OverviewService) { }

  ngOnInit() {
    this.overviewHandler.getOverview().subscribe(data => {
      console.log(data);
    })
  }

}
