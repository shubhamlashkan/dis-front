import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Laboratory } from '../models/Laboratory';
import { Others } from '../models/Others';
import { apiSetting } from 'src/app/urls/apisetting';
import { facultyName, staffName,infraType, infrastructure, addInfra, addLoc } from '../models/infra';
import { addEquip, equipment } from '../models/equipment';
import { addBill, bill } from '../models/bill';

@Injectable({
  providedIn: 'root'
})
export class InfraService {

  private baseUrl= apiSetting.apiInfrastructure+ '/infrastructure/';
  lab: Laboratory;

  constructor(private http: HttpClient) { }

  getLabs(): Observable<HttpResponse<Laboratory[]>> {
    return this.http.get<Laboratory[]>(`${this.baseUrl}getInfrastructureByType/laboratory`,{ observe: 'response' });
  }

  getOtherInfra(): Observable<HttpResponse<Others[]>>{
    return this.http.get<Others[]>(`${this.baseUrl}getInfrastructureByType/other`,{ observe: 'response' })
  }
  getClassroom(): Observable<HttpResponse<Others[]>>{
    return this.http.get<Others[]>(`${this.baseUrl}getInfrastructureByType/classroom`,{ observe: 'response' })
  }

  getFacultyRooms(): Observable<any>{
    return this.http.get(`${this.baseUrl}getRooms`)
  }
  getFacultyName(): Observable<HttpResponse<facultyName[]>>{
    return this.http.get<facultyName[]>(`${this.baseUrl}getFacultyNameList`,{ observe: 'response' })
  }
  getStaffName():Observable<HttpResponse<staffName[]>>
  {
    return this.http.get<staffName[]>(`${this.baseUrl}getStaffNameList`,{ observe: 'response' })
  }
  getInfraType():Observable<HttpResponse<infraType[]>>
{
  return this.http.get<infraType[]>(`${this.baseUrl}getInfrastructureTypeList`,{ observe: 'response' })
}
getLocation(): Observable<HttpResponse<infraType[]>>
{
  return this.http.get<infraType[]>(`${this.baseUrl}getListOfInfrastructureLocations`,{ observe: 'response' })
}
getInfrastructure(infraname:string):Observable<HttpResponse<infrastructure[]>>
{
  return this.http.get<infrastructure[]>(`${this.baseUrl}findInfrastructure/${infraname}`,{ observe: 'response' });
}

addInfrastructure(Infra : addInfra) : Observable<HttpResponse<string>> {
  return this.http.post<string>(this.baseUrl + '/addNewInfrastructure', Infra,{ observe: 'response' });
}
// updateInfrastructure(infraId:string,infra:addInfra) : Observable<HttpResponse<string>>{
//   return this.http.put<string>(`${this.baseUrl}/updateBook/${bookId}`,infra,{ observe: 'response' })
// }
deleteInfra(Id:string):Observable<HttpResponse<any>>
  {
    return this.http.delete(`${this.baseUrl}/deleteInfrastructure/${Id}`,{observe:'response'});
  }

addLocation(location:addLoc):Observable<HttpResponse<string>>{
  return this.http.post<string>(this.baseUrl+'/addNewInfrastructureLocation',location,{observe:'response'});
}
  setInfraName(lab: Laboratory): void{
    console.log(lab);
    this.lab = lab;
  }

  getInfraName(): Laboratory{
    return this.lab;
  }
  updateInfrastructure(updateinfra:addInfra) : Observable<HttpResponse<string>>{
    return this.http.put<string>(`${this.baseUrl}/updateInfrastructure`,updateinfra,{observe: 'response'});
  }
  getInfrastructureById(infraId: string): Observable<HttpResponse<infrastructure>>{
    return this.http.get<infrastructure>(`${this.baseUrl}/getInfrastructurebyId/${infraId}`,{observe: 'response'}); 
  }



  addEquipment(Equip : addEquip) : Observable<HttpResponse<string>> {
    return this.http.post<string>(this.baseUrl + '/addEquipmentDetails', Equip,{ observe: 'response' });
  }
  getEquipmentByType(type: string): Observable<HttpResponse<equipment[]>>{
    return this.http.get<equipment[]>(`${this.baseUrl}/getEquipmentByType/${type}`,{observe: 'response'}); 
  }
  getEquipmentByRoom(room: string): Observable<HttpResponse<equipment[]>>{
    return this.http.get<equipment[]>(`${this.baseUrl}/getEquipmentByLab/${room}`,{observe: 'response'}); 
  }
  deleteEquipment(Id:string):Observable<HttpResponse<any>>
  {
    return this.http.delete(`${this.baseUrl}/deleteEquipmentDetailsWithId/${Id}`,{observe:'response'});
  }


  addBill (bill : addBill) : Observable<HttpResponse<string>> {
    return this.http.post<string>(this.baseUrl + '/addStockBill', bill,{ observe: 'response' });
  }
  getBill( ): Observable<HttpResponse<bill[]>>{
    return this.http.get<bill[]>(`${this.baseUrl}/getStockBill`,{observe: 'response'}); 
  }
  getBillByDate(date:string): Observable<HttpResponse<bill[]>>{
    return this.http.get<bill[]>(`${this.baseUrl}/getStockBillByDateOfPurchase/${date}`,{observe: 'response'}); 
  }
  getBillBySupplierName(name:string): Observable<HttpResponse<bill[]>>{
    return this.http.get<bill[]>(`${this.baseUrl}/getStockBillBySupplierName/${name}`,{observe: 'response'}); 
  }
  deleteBill(Id:string):Observable<HttpResponse<any>>
  {
    return this.http.delete(`${this.baseUrl}/deleteBillDetailsWithId/${Id}`,{observe:'response'});
  }

}
