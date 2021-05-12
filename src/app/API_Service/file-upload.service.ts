import { Injectable } from '@angular/core'; 
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ 
    providedIn: 'root'
  }) 
export class fileUploadService{
//   private baseUrl="http://3.142.77.234:8081";
//   constructor(private http: HttpClient) { }
//   postFile(fileToUpload: File): Observable <any> {
//     const endpoint = 'your-destination-url';
//     const formData: FormData = new FormData();
//     formData.append('fileKey', fileToUpload, fileToUpload.name);
//     this.http.post<any>(`${this.baseUrl}/syllabus/upload`,fileToUpload).subscribe(data=>{
//         console.log(data);
//     })
//     return this.http.post(endpoint, formData, { headers: yourHeadersConfig })
//       .map(() => { return true; })
//       .catch((e) => this.handleError(e));
// }
//     handleError(e: any) {
//         throw new Error('Method not implemented.');
//     }

  
  }

