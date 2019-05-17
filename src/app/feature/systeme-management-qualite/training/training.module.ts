import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TrainingRoutingModule } from './training-routing.module';
import { NgbModule, NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { TrainingListComponent } from './training-list/training-list.component';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Interceptor } from 'src/app/core/interceptors/interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SliderModule } from 'primeng/slider';
import { NgxPaginationModule } from 'ngx-pagination';
import { SpinnerModule } from 'primeng/spinner';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { TrainingComponent } from './training.component';
import { CreateTrainingComponent } from '../training/create-training/create-training.component';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [TrainingListComponent,TrainingComponent],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    ListboxModule,
    DropdownModule,
    InputTextareaModule,
    SliderModule,
    NgbModule,
    NgxPaginationModule,
    SpinnerModule,
    TranslateModule.forRoot(),
    ButtonModule,
    CalendarModule
  ],
  providers: [ ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true}, NgbPopoverConfig]
})
export class TrainingModule { }
