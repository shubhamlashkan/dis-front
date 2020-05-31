export class EventInfo {
    title: string;
    startDate: Date;
    endDate: Date;
    description: string;
    participants: any[];
    eventIncharge: string;
    createdBy: string;
    createdDate: Date;
    location: string;
    attachment: File;
  
    constructor(title: string, startDate: Date, endDate: Date, description: string, participants: string[], eventIncharge: string, createdBy: string, createdDate: Date, location: string, attchment: File) {
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.eventIncharge = eventIncharge;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.participants = [];
        console.log(participants);
        for (let i = 0; i < participants.length; i++) {
            this.participants.push({participantId: participants[i]});
        }
        this.location = location;
        this.attachment = attchment;
    }
  }