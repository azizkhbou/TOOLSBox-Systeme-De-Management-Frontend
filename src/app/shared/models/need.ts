import { Organism } from './organism';

import { Participant } from './participant';

export class Need {

  id: number;
  object: string;
  type: string;
  required: string;
  nbrOfParticipants: number;
  objectif: string;
  page: number;
  participants: Participant[];
  organisms: Organism[];

  category: string;
  validation: string;
  constructor() {
    this.participants = [];
    this.organisms = [];
  }

}
