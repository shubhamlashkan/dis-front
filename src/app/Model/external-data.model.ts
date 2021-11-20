import { CourseDetail } from "./course-detail.model";

export class ExternalData {
    name : string;
    institute : string;
    email: string;
    contact: string;
    course : Array<string>

    constructor(name,institute,email,contact,course){
        name = this.name,
        institute =this.institute,
        email = this.email,
        contact=this.contact,
        course=this.course
    }
}
