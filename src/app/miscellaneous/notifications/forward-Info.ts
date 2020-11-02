export class ForwardInfo {
    usernameList: string[];
    notificationId: string;
    comment: string;
   
    constructor(usernameList: string[], notificationId: string, comment: string) {
        this.usernameList = usernameList;
		this.notificationId = notificationId;
		this.comment = comment;
        console.log(usernameList);
    }
  }