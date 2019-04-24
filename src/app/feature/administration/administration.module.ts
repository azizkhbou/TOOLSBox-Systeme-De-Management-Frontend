import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { RoleComponent } from './role/role.component';
import {AdministrationComponent} from './administration.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {Interceptor} from '../../core/interceptors/interceptor';
import {LogoutComponent} from '../../shared/template/logout/logout.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ApiService} from '../../core/services/api/api.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdministrationComponent, HomeComponent],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    SharedModule

  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true}]
})
export class AdministrationModule { }
