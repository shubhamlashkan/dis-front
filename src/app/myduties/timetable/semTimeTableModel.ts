

export class semTimeTable{


	constructor($course: string, $facultyTimeTableEntries: facultyTimeTableEntry[], $lectureType: string, $semester: string, $session: string, $subjectCode: string, $year: string) {
		this.course = $course;
		this.facultyTimeTableEntries = $facultyTimeTableEntries;
		this.lectureType = $lectureType;
		this.semester = $semester;
		this.session = $session;
		this.subjectCode = $subjectCode;
		this.year = $year;
	}

    private course:string;
    private facultyTimeTableEntries:facultyTimeTableEntry[];
    private lectureType:string;
    private semester:string;
    private session:string;
    private subjectCode:string;
    private year:string;
}

export class facultyTimeTableEntry{

	constructor($batch: string, $createdBy: string, $createdDate: string, $day: string, $endTime: string, $facultyId: string, $id: string, $modifiedBy: string, $modifiedDate: string, $roomId: string, $semTimeTableId: string, $startTime: string, $withEffectFrom: string) {
		this.batch = $batch;
		this.createdBy = $createdBy;
		this.createdDate = $createdDate;
		this.day = $day;
		this.endTime = $endTime;
		this.facultyId = $facultyId;
		this.id = $id;
		this.modifiedBy = $modifiedBy;
		this.modifiedDate = $modifiedDate;
		this.roomId = $roomId;
		this.semTimeTableId = $semTimeTableId;
		this.startTime = $startTime;
		this.withEffectFrom = $withEffectFrom;
	}
    private batch:string;
    private createdBy:string;
    private createdDate:string;
    private day:string;
    private endTime:string;
    private facultyId:string;
    private id:string;
    private modifiedBy:string;
    private modifiedDate:string;
    private roomId:string;
    private semTimeTableId:string;
    private startTime:string;
    private withEffectFrom:string;
}




export interface getTimeTable{


	

     course:string;
    facultyTimeTableEntries:getFacultyTimeTable[];
     lectureType:string;
     semester:string;
     session:string;
     subjectCode:string;
 year:string;
}


export interface getFacultyTimeTable{
     batch:string;
     createdBy:string;
     createdDate:string;
     day:string;
     endTime:string;
     facultyId:string;
    	id:string;
     modifiedBy:string;
     modifiedDate:string;
     roomId:string;
     semTimeTableId:string;
     startTime:string;
     withEffectFrom:string;
}