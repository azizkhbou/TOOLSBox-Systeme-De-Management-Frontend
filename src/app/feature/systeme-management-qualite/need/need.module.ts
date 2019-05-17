import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeedRoutingModule } from './need-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import { NgbModule, NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { NeedComponent } from './need.component';
import { ApiService } from 'src/app/core/services/api/api.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from 'src/app/core/interceptors/interceptor';
import { AddNeedComponent } from './add-need/add-need.component';
import {SliderModule} from 'primeng/slider';
import { NeedListComponent } from './need-list/need-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {SpinnerModule} from 'primeng/spinner';
import {TranslateModule} from '@ngx-translate/core';
import {ButtonModule} from 'primeng/button';
import { NeedDetailComponent } from './need-detail/need-detail.component';
import { DeleteNeedComponent } from './delete-need/delete-need.component';
import {CalendarModule} from 'primeng/calendar';
import { CreateTrainingComponent } from '../training/create-training/create-training.component';


@NgModule({
  declarations: [NeedComponent, AddNeedComponent, NeedListComponent, NeedDetailComponent, DeleteNeedComponent,CreateTrainingComponent],
  imports: [
    CommonModule,
    NeedRoutingModule,
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
    ButtonModule,
    CalendarModule
  ],
  
  providers: [ ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi : true}, NgbPopoverConfig]
})
export class NeedModule { }
