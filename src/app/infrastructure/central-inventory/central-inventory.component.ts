import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-central-inventory',
  templateUrl: './central-inventory.component.html',
  styleUrls: ['./central-inventory.component.scss']
})
export class CentralInventoryComponent implements OnInit {
equipment : string;
equipType: string;
  constructor() { }

  ngOnInit() {
  }
showEquipment(equipment:string) : void{
  console.log(equipment);
  this.equipType= equipment;
}
showEquipmentbyRoom(room:string) : void{
  console.log(room);
  this.equipType= room;
}

}
