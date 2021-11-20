import { CourseDetail } from "./course-detail.model";
export class Scheme{
    scheme_id:string;
    courses: (CourseDetail)[];
    file_link: string;
}


export class SchemeSyllabus{
    course: String;
    semester: String;
    file: File;
}