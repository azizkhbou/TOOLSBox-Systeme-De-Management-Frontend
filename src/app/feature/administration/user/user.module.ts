import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {AddUserComponent} from './add-user/add-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import {UserListComponent} from './user-list/user-list.component';
import {UserComponent} from './user.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {Interceptor} from '../../../core/interceptors/interceptor';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {ListboxModule} from 'primeng/listbox';
import {DropdownModule} from 'primeng/dropdown';
import {ApiService} from '../../../core/services/api/api.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [AddUserComponent, UpdateUserComponent, UserListComponent, UserComponent, DeleteUserComponent, UserDetailComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ListboxModule,
    DropdownModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [ApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  }]
})
export class UserModule {
}
