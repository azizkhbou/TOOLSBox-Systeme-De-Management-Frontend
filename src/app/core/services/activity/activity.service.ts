import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../../shared/models/user';
import {Activity} from '../../../shared/models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  private activityUrl = 'http://localhost:8080/activity';

  public getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activityUrl + '/all');
  }


}
