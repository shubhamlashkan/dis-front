export class CourseDetail {
    code : any
    name : String;
    category : String;
    lec_hrs : Number;
    tut_hrs : Number;
    practical_hrs : Number;
    theory_credits : Number;
    practical_credits : Number;
    theory_max_marks : Number;
    practical_max_marks : Number;

    constructor (code,name,category,lec_hrs,tut_hrs,practical_hrs,theory_credits,practical_credits,theory_max_marks,practical_max_marks){
        code = this.code,
        name = this.name,
        category = this.category,
        lec_hrs = this.lec_hrs,
        tut_hrs = this.tut_hrs,
        practical_hrs = this.practical_hrs,
        theory_credits = this.theory_credits,
        practical_credits = this.practical_credits,
        theory_max_marks = this.theory_max_marks;
        practical_max_marks = this.practical_max_marks
    }
}
