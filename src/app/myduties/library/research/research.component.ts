import { Component, OnInit } from '@angular/core';
import { LibraryService } from 'src/app/API_Service/library.service';
import { previousIssueHistoryBook } from '../bookDataObj';
import { previousIssueHistoryThesis } from '../thesisDataObj';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {
  searchBy:number;
  selected:optionSearch = new optionSearch(1 ,'bookId');
  options = [
     new optionSearch(1, 'bookId' )
  ];
  searchTerm:any=null;
  booksRes:previousIssueHistoryBook[];
  thesisRes:previousIssueHistoryThesis[];
  usernameRes:previousIssueHistoryBook[];
  constructor(private service: LibraryService) { }

  ngOnInit() {
  }

  onSelect(optionId) { 
    //console.log(optionId);
    this.selected = null;
    for (var i = 0; i < this.options.length; i++)
    {
      if (this.options[i].id == optionId) {
        this.selected = this.options[i];     
        this.searchBy = this.options[i].id;
        this.searchTerm = '';
      }
    }
}

findBy(typedValue)
  {
    console.log(this.searchBy);
    this.searchTerm = typedValue;
    if(this.searchBy==1)
    {
      this.service.getPreviousIssuesByBookId(<string>this.searchTerm).subscribe((res:previousIssueHistoryBook[])=>{
        this.booksRes = res;
      });
    }
    else if(this.searchBy==2)
    {
      this.service.getPreviousIssuesByThesisId(<number>this.searchTerm).subscribe((res:previousIssueHistoryThesis[])=>{
        this.thesisRes = res;
      });
    }
    else 
    {
        this.service.getPreviousIssuesByUsername(<string>this.searchTerm).subscribe((res:previousIssueHistoryBook[])=>{
          this.usernameRes=res;
        });
    }
  }


}

export class optionSearch {
  constructor(public id: number, public name: string) { }
}
