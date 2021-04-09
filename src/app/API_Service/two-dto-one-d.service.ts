import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwoDToOneDService {

  constructor() { }
  public convertTwoArrayToOneArray(twoDArr:any){
    var newArr=[];
      for(var i = 0; i < twoDArr.length; i++)
      {
        newArr = newArr.concat(twoDArr[i]);
      }
      return newArr;
  }
}
