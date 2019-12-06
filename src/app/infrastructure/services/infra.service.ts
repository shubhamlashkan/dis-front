import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Laboratory } from '../models/Laboratory';

@Injectable({
  providedIn: 'root'
})
export class InfraService {

  private baseUrl = 'http://localhost:8084/';
  lab: Laboratory;

  constructor(private http: HttpClient) { }

  getLabs(): Observable<any> {
    return this.http.get(`${this.baseUrl}listInfrastructure?type=Laboratory`);
  }

  getOtherInfra(): Observable<any>{
    return this.http.get(`${this.baseUrl}listInfrastructure?type=other`)
  }

  getFacultyRooms(): Observable<any>{
    return this.http.get(`${this.baseUrl}getRooms`)
  }

  setInfraName(lab: Laboratory): void{
    console.log(lab);
    this.lab = lab;
  }

  getInfraName(): Laboratory{
    return this.lab;
  }

}
