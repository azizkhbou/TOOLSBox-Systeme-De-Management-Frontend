import { Organism } from './organism';
import { Need } from './need';
import { Activity } from './activity';


export class Training {

  id: number;

  status: String;
  page: number;
  organisms: Organism[];
  needs: Need[];
  trainer: String;
  dayNumber: number;
  dayManCost: number;
  financialCost: number;
  schedualDate: Date;
  realDate: Date;
  activity: Activity;


  validation: String;
  need: any;
  
  constructor() {
    this.organisms = [];
    this.needs = [];
    this.activity = new Activity();

  }

}