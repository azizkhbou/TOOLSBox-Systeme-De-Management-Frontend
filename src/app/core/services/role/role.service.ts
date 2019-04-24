import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Role} from '../../../shared/models/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }
  private roleUrl = 'http://localhost:8080/role';

  public getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(this.roleUrl + '/all');
  }

}
