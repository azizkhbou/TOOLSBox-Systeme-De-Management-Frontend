import { Participant } from './participant';

export class Training {
  
  idTraining:number;
  object: any;
  type: any;
  required: any;
  nbrOfParticipants: number;
  objectif: any;
  status: any;
  page:number;
  participants: Participant[];
  category: any;
  constructor() {
  this.participants = [];

  }
    
}
