 
 export interface categoryList{
    id:string;
    name:string;
}

export interface taskList{
    id:string;
    name:string;
}

export interface staffList{
    email:string; 
    id:string;
    name:string;
}
 export class assignTaskData{
     private deadline:string;
     private description:string;
     private status:string;
     private taskId:string;
     private userId:string;
	constructor($deadline: string, $description: string, $status: string, $taskId: string, $userId: string) {
		this.deadline = $deadline;
		this.description = $description;
		this.status = $status;
		this.taskId = $taskId;
		this.userId = $userId;
	}   
}

export interface searchTask{
    id:string;
    createdDate:string;
    deadline:string;
    description:string;
    status:string;
    taskId:string;
    taskName:string;
    userId:string;
    userName:string;
}