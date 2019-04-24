import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemeManagementQualiteRoutingModule } from './systeme-management-qualite-routing.module';
import {SystemeManagementQualiteComponent} from './systeme-management-qualite.component';
import { ApiService } from 'src/app/core/services/api/api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from 'src/app/core/interceptors/interceptor';
import { SmqHomeComponent } from './smq-home/smq-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TrainingComponent } from './training/training.component';

@NgModule({
  declarations: [SystemeManagementQualiteComponent,SmqHomeComponent],
  imports: [
    CommonModule,
    SystemeManagementQualiteRoutingModule,
  SharedModule
  ],
  providers:[ApiService,{provide:HTTP_INTERCEPTORS,
  useClass:Interceptor,
  multi:true}
  ]
})
export class SystemeManagementQualiteModule { }
