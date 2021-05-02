import { facultyEnroll } from '../Model/facultyEnroll.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class FacultyService{
    faculty:facultyEnroll[]=[];

  
    getfaculty(){
        return this.faculty;
    
    }
    addfaculty(req:facultyEnroll){
        this.faculty.push(req);
    }
}
