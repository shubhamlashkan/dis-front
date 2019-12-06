import { Component, OnInit,Input } from '@angular/core';
import { DocumentsService } from 'src/app/API_Service/documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
 
  @Input() getSectionData:any;
  @Input() getFolderSectionData:any;
  @Input() getSubfolderInSectionData:any;
  getSectionInfo:any[];
  getFolderInSection:any[]=[];
  getSubfolderInSection:any[]=[];
  constructor(private documents : DocumentsService) { }
  //sectionId:number[]=[]; we can store sectionId's in this but they will not be in use as when we got outside of  this.getSectionData=this.documents.getSections() 
  //value get automatically assigned to undefined
    
  ngOnInit() {
    this.getSectionData=this.documents.getSections()
    .subscribe(
      data=>{
        this.getSectionInfo=data;
        console.log(this.getSectionInfo);
      for (let a = 0 ; a<this.getSectionInfo.length;a++)
      {
        this.getFolderSectionData=this.documents.getFolderInSection(this.getSectionInfo[a].id)
        .subscribe(
        data=>{
          this.getFolderInSection.push(data);
          console.log(this.getFolderInSection);
        });
        for(let b=0;b<this.getFolderInSection.length;b++)
        {
          for(let c=0;c<this.getFolderInSection[b].length;c++)
          {
            this.getSubfolderInSectionData=this.documents.getSubFolderInFolder(this.getSectionInfo[a].id,this.getFolderInSection[b][c])
            .subscribe(
              data=>{
                console.log(data);
              });
          }
        }
      }
    });
      //ngOnInit ends
  }
  
}
