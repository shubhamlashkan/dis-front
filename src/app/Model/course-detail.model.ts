export class CourseDetail {
    code : any
    name : string;
    category : string;
    lec_hrs : number;
    tut_hrs : number;
    practical_hrs : number;
    theory_credits : number;
    practical_credits : number;
    theory_max_marks : number;
    practical_max_marks : number;

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

    public getName(){
        return this.name;
    }
}
