

export interface facultyName{

}
export interface staffName{

}
export interface infraType{

}
export interface infrastructure{

  area: string;
  associateIncharge: string;
  attendant: string;
  createdBy: string;
  createdDate: string;
  description: string;
  id: string;
  incharge: string;
  location: string;
  modifiedBy: string;
  modifiedDate:string;
  name: string;
  nameAcronym: string;
  noofAlmirah: number;
  noofChairs: number;
  noofComputerTables: number;
  noofTables: number;
  staff: string;
  type: string;

}

export class addInfra{

 private area: string;
 private associateIncharge: string;
 private attendant: string;
 private createdBy: string;
 private createdDate: string;
 private description: string;
 private id: string;
 private incharge: string;
 private location: string;
 private modifiedBy: string;
 private modifiedDate:string;
 private name: string;
 private nameAcronym: string;
 private noofAlmirah: number;
 private noofChairs: number;
 private noofComputerTables: number;
 private noofTables: number;
 private staff: string;
 private type: string;
	constructor($area: string, $associateIncharge: string, $attendant: string, $createdBy: string, $createdDate: string, $description: string, $id: string, $incharge: string, $location: string, $modifiedBy: string, $modifiedDate: string, $name: string, $nameAcronym: string, $noofAlmirah: number, $noofChairs: number, $noofComputerTables: number, $noofTables: number, $staff: string, $type: string) {
		this.area = $area;
		this.associateIncharge = $associateIncharge;
		this.attendant = $attendant;
		this.createdBy = $createdBy;
		this.createdDate = $createdDate;
		this.description = $description;
		this.id = $id;
		this.incharge = $incharge;
		this.location = $location;
		this.modifiedBy = $modifiedBy;
		this.modifiedDate = $modifiedDate;
		this.name = $name;
		this.nameAcronym = $nameAcronym;
		this.noofAlmirah = $noofAlmirah;
		this.noofChairs = $noofChairs;
		this.noofComputerTables = $noofComputerTables;
		this.noofTables = $noofTables;
		this.staff = $staff;
		this.type = $type;
	}
 

}
export class addLoc
{

	
	private location:string;
	constructor($location: string) {
		this.location = $location;
	}
}

