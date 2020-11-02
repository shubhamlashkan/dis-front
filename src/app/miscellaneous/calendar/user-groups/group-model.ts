import { group_participant } from './group_participant-model';

export interface group {
    groupId: string;
    groupName: string;
    createdBy: string;
    createdDate: Date;
    modifiedBy: string;
    modeifiedDate: string;
    participants: group_participant[];
  }