import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: HttpClient) { }
   private baseUrl="http://localhost:8083";
  getSections():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/getSectionName`)
  }
  
  getFolderInSection(id:number):Observable<any>{
    return this.http.get("http://localhost:8083/getFoldersInSection?sectionId="+id);
  }

  getSubFolderInFolder(id:number,folderId:number):Observable<any>{
    return this.http.get("http://localhost:8083/getFoldersInSection?sectionId="+id+"&folderId="+folderId);
  }

}
