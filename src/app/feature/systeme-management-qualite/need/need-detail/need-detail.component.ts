import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Need } from 'src/app/shared/models/need';
import { ApiService } from 'src/app/core/services/api/api.service';
import { ToastrService } from 'ngx-toastr';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-need-detail',
  templateUrl: './need-detail.component.html',
  styleUrls: ['./need-detail.component.css']
})
export class NeedDetailComponent implements OnInit {

  @Output() submitted = new EventEmitter<boolean>();

  id: number;
 need: Need;
  needPlugForm: any;
  validation: string;
  constructor(private apiService: ApiService, private toastr: ToastrService) { }

  ngOnInit() {
    this.need = new Need();
  }



  load(id: number): void {
    this.apiService.getObjectById(id, 'need').subscribe(
      data => {
        this.need = data;
        this.id = id;
        console.log(this.need);
      }
    );
  }


  submit() {
    let need: Need = new Need();
    console.log(this.id);
    console.log(this.need.validation);
    this.apiService.validateNeed(this.id, this.need.validation).subscribe(
      data => {

        if (data) {
          this.submitted.emit(true);
          if (this.need.validation == "validated") {
            this.toastr.success('Plug validated', 'Validating Plug');
          } else if (this.need.validation == "not validated") {
            this.toastr.success('Plug not validated', 'Validating Plug');

          }

        }
      }
    );
  }
}
