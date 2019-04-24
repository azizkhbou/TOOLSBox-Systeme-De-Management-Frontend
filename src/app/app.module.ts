import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './feature/authentication/authentication.component';
import { FeatureComponent } from './feature/feature.component';
import {Interceptor} from './core/interceptors/interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import {UserStorageService} from './core/services/authentication/user-storage.service';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: false
    }),
    HttpClientModule
  ],
  providers: [ UserStorageService, {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true}, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
