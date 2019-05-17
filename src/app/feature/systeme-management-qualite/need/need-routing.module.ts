import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NeedComponent } from './need.component';
import { TrainingComponent } from '../training/training.component';
import { AddNeedComponent } from './add-need/add-need.component';

const routes: Routes = [
  { path: '', component: NeedComponent},
  { path: 'add-need', component: AddNeedComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeedRoutingModule { }
