import { Component, OnInit, Input } from '@angular/core';
import {User} from '../../../../shared/models/user';
import {ApiService} from '../../../../core/services/api/api.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  users: User[];
  total: number;
  p = 1;
  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.getAllUsers(0);

  }
  private onPageChange = (pageNumber) => {
    this.getAllUsers(pageNumber - 1);
  }
  getAllUsers(page: number): void {
    this.apiService.getUsers(page).subscribe(data => {
      this.users = data.content;
      this.total = data.totalElements;
    });
  }

  load(submitted: boolean) {
      if (submitted) {
    this.getAllUsers(0);
}
  }
}
