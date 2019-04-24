import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FeatureComponent} from './feature.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {AuthGuard} from '../core/guards/auth.guard';
import {AdminGuard} from '../core/guards/admin.guard';
import {SystemeManagementQualiteGuard} from '../core/guards/systeme-management-qualite.guard';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './administration/administration.module#AdministrationModule',
    canActivate: [AdminGuard],
    data: {privileges: ['Gestion des utilisateurs']}
  },
  {
    path: 'SMQ',
    loadChildren: './systeme-management-qualite/systeme-management-qualite.module#SystemeManagementQualiteModule',
    canActivate: [SystemeManagementQualiteGuard]
  },
  {
    path: 'login',
    component: AuthenticationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login'
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule {
}
