import {Role} from './role';
import {Activity} from './activity';

export class User {

  email: string;
  idUser: number;
  nom: string;
  password: string;
  prenom: string;
  roles: Role[];
  username: string;
  activity: Activity;
  constructor() {
    this.activity = new Activity();
    this.roles = [];
  }
}
