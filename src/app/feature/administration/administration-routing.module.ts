import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdministrationComponent} from './administration.component';
import {HomeComponent} from './home/home.component';
import {RoleComponent} from './role/role.component';

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: AdministrationComponent,
    children: [
      { path: 'home', component:  HomeComponent },
      { path: 'users', loadChildren: './user/user.module#UserModule' },
      { path: 'roles', loadChildren: './role/role.module#RoleModule' },
      { path:'activities', loadChildren:'./activity/activity.module#ActivityModule'},
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
