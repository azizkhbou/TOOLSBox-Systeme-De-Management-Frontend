import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  attemptAuth(ussername: string, passsword: string): Observable<any> {
    const credentials = {username: ussername, password: passsword};
    console.log('attempAuth ::');
    return this.http.post('http://localhost:8080/auth/signin', credentials);
  }

}
