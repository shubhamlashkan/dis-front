import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiSetting } from '../urls/apisetting';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: HttpClient) { }
   private baseUrl= apiSetting.apiAdministration;
  getSections():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/getSectionName`)
  }
  
  getFolderInSection(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/getFoldersInSection?sectionId=`+id);
  }

  getSubFolderInFolder(id:number,folderId:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/getFoldersInSection?sectionId=`+id+"&folderId="+folderId);
  }

}
