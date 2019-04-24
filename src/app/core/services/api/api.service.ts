import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserStorageService} from '../authentication/user-storage.service';
import {Observable} from 'rxjs';
import {User} from '../../../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient, private userStorage: UserStorageService) { }

  public getUsers(page: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'user/all/' + page);
  }

  public getAllObjects(type: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + type + '/all');
  }

  public getObjectById(id: number, type: string): Observable<any> {
    return this.http.get<any>(this.baseUrl + type + '/id/' + id);
  }

  public createObject(object: any, type: string): Observable<any> {
    return this.http.post(this.baseUrl + type + '/create', object);
  }

  public updateObject(object: any, type: string): Observable<any> {
    return this.http.put(this.baseUrl + type + '/update', object);
  }

  public deleteObject(id: number, type: string): Observable<any> {
    return this.http.delete(this.baseUrl + type + '/delete/' + id);
  }

  public getUserByUsername(): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'user' + '/username/' + this.userStorage.getUsername());
  }
  public getTrainings(page:number): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'training/all/' + page);
  }
}

