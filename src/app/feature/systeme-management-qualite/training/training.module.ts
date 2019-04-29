import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingRoutingModule } from './training-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import { NgbModule, NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { TrainingComponent } from './training.component';
import { ApiService } from 'src/app/core/services/api/api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from 'src/app/core/interceptors/interceptor';
import { AddTrainingComponent } from './add-training/add-training.component';
import {SliderModule} from 'primeng/slider';
import { TrainingListComponent } from './training-list/training-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {SpinnerModule} from 'primeng/spinner';
import {TranslateModule} from '@ngx-translate/core';
import {ButtonModule} from 'primeng/button';
import { TrainingDetailComponent } from './training-detail/training-detail.component';
import { DeleteTrainingComponent } from './delete-training/delete-training.component';
import { TrainingManagerSpaceComponent } from './training-manager-space/training-manager-space.component';

@NgModule({
  declarations: [TrainingComponent, AddTrainingComponent, TrainingListComponent, TrainingDetailComponent, DeleteTrainingComponent, TrainingManagerSpaceComponent],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ListboxModule,
    DropdownModule,
    InputTextareaModule,
    SliderModule,
    NgbModule,
    NgxPaginationModule,
    SpinnerModule,
    TranslateModule.forRoot(),
    ButtonModule
  ],
  
  providers: [ ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true}, NgbPopoverConfig]
})
export class TrainingModule { }
