import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import {AuthenticationComponent} from './authentication/authentication.component';
import {FeatureComponent} from './feature.component';
import {AuthService} from '../core/services/authentication/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthGuard} from '../core/guards/auth.guard';
import {AdminGuard} from '../core/guards/admin.guard';
import {SystemeManagementQualiteGuard} from '../core/guards/systeme-management-qualite.guard';
import {UserStorageService} from '../core/services/authentication/user-storage.service';
import {Interceptor} from '../core/interceptors/interceptor';

@NgModule({
  declarations: [AuthenticationComponent, FeatureComponent],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService, UserStorageService, AuthGuard, AdminGuard, SystemeManagementQualiteGuard, {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true}],
})
export class FeatureModule { }
