import {Injectable} from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';

const USER_NAME = 'UserName';
const TOKEN_KEY = 'AuthToken';
@Injectable()
export class UserStorageService {

  constructor(private route: Router) { }

  signOut() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_NAME);
    localStorage.clear();
    this.route.navigate(['/login']);
  }

  public saveToken(data: any) {


    localStorage.setItem(USER_NAME, data.username);
    localStorage.setItem(TOKEN_KEY,  data.token);
  }
  public getUsername(): string {
    return localStorage.getItem(USER_NAME);
  }
  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public getPrivilegesToken(): string[] {
    const token = this.getToken();
    if (token) {
      const decoded = jwt_decode(token);
      return decoded.privileges;
    }
    return null;

  }
  public isTokenExisting(): boolean {
    if (this.getToken()) {
      return true;
    }
    return false;
  }
}
