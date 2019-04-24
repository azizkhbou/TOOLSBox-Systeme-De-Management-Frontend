import { Component, OnInit } from '@angular/core';
import {Role} from '../../../../shared/models/role';
import {ApiService} from '../../../../core/services/api/api.service';


@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  roles: Role[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllRoles();
  }

  getAllRoles(): void {
    this.apiService.getAllObjects('role').subscribe(data => {
      this.roles = data;
    });
  }

  load(submitted: boolean) {
    if (submitted) {
      this.getAllRoles();
    }
  }

}
