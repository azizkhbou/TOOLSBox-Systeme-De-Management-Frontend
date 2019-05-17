import { Component, OnInit } from '@angular/core';
import {User} from '../../../../shared/models/user';
import {ApiService} from '../../../../core/services/api/api.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.user = new User();
  }

  load(id: number): void {
    this.apiService.getObjectById(id, 'user').subscribe(
      data => {
        this.user = data;
        console.log(this.user);
      }
    );
  }

}
