import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'datatables.net';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  public tableWidget: any;
  constructor() { }

  ngOnInit() {
   this.initDatatable()
  }
  private initDatatable(): void {
    let exampleId: any = $('#myNotificationTable');
    this.tableWidget = exampleId.DataTable({
      select: true
    });
  }
}
