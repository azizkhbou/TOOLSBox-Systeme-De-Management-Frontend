import { Component, OnInit } from '@angular/core';
import {Role} from '../../../../shared/models/role';
import {ApiService} from '../../../../core/services/api/api.service';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {

  role: Role;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.role = new Role();
  }

  load(idRole: number): void {
    this.apiService.getObjectById(idRole, 'role').subscribe(
      data => {
        this.role = data;
        console.log(this.role);
      }
    );
  }

}
