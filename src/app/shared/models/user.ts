import {Role} from './role';
import {Activity} from './activity';

export class User {

  email: string;
  id: number;
  firstName: string;
  password: string;
  lastName: string;
  roles: Role[];
  username: string;
  activity: Activity;
  constructor() {
    this.activity = new Activity();
    this.roles = [];
  }
}
