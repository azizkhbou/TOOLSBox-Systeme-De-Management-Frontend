import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { DeleteActivityComponent } from './delete-activity/delete-activity.component';
import { UpdateActivityComponent } from './update-activity/update-activity.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { DropdownModule } from 'primeng/dropdown';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Interceptor } from 'src/app/core/interceptors/interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [ActivityComponent, AddActivityComponent, DeleteActivityComponent, UpdateActivityComponent, ActivityDetailComponent, ActivityListComponent],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    CommonModule,
    ActivityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ListboxModule,
    DropdownModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers:[ApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  }]
})

export class ActivityModule { }
