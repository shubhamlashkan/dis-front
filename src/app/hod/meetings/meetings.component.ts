import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {


  List1: any[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  List2: any[] = [
    
  ];
  constructor() { }

  onItemAdded(h, index:number){
    this.List2.push(h);
    this.List1.splice(index, 1);
  }
  onItemDeleted(h, index2: number){
    this.List1.push(h);
    this.List2.splice(index2, 1);
  }
  onAllItemAdded(){
    this.List2.push.apply(this.List2, this.List1);
    this.List1 = [];
  }

  onAllItemDeleted(){
    this.List1.push.apply(this.List1, this.List2);
    this.List2 = [];
  }
  ngOnInit() {
  }

}