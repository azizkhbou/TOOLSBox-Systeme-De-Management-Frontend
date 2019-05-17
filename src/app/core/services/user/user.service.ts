import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../../shared/models/user';
import {UserStorageService} from '../authentication/user-storage.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private userStorage: UserStorageService) { }

  private userUrl = 'http://localhost:8080/user';

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl + '/all');
  }

  public getUserByUsername(): Observable<User> {
    const username = this.userStorage.getUsername();
    return this.http.get<User>(this.userUrl + '/username/' + username);
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get<User>(this.userUrl + '/id/' + id);
  }


  public createUser(user: User): Observable<any> {
    return this.http.post(this.userUrl + '/create', user);
  }

  public updateUser(user: User): Observable<any> {
    return this.http.put(this.userUrl + '/update', user);
  }

  public deleteUser(id: number): Observable<any> {
    return this.http.delete(this.userUrl + '/delete/' + id);
  }
}
