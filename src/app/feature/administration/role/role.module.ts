import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {Interceptor} from '../../../core/interceptors/interceptor';
import {UserRoutingModule} from '../user/user-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RoleComponent} from './role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { UpdateRoleComponent } from './update-role/update-role.component';
import {ListboxModule} from 'primeng/listbox';
import { DeleteRoleComponent } from './delete-role/delete-role.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import {ApiService} from '../../../core/services/api/api.service';
@NgModule({
  declarations: [RoleComponent, RoleListComponent, AddRoleComponent, UpdateRoleComponent, DeleteRoleComponent, RoleDetailComponent],
  imports: [
    CommonModule,
    RoleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ListboxModule
  ],
  providers: [ApiService,  {
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  }]
})
export class RoleModule { }
