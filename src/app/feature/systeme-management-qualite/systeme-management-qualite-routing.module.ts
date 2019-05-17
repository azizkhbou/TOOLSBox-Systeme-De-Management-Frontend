import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SystemeManagementQualiteComponent} from './systeme-management-qualite.component';
import { SmqHomeComponent } from './smq-home/smq-home.component';

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: SystemeManagementQualiteComponent,
    children: [
      { path: 'home', component:  SmqHomeComponent },
      { path: 'needs-management', loadChildren:'./need/need.module#NeedModule' },
      { path: 'trainings-management', loadChildren:'./training/training.module#TrainingModule' },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemeManagementQualiteRoutingModule { }
