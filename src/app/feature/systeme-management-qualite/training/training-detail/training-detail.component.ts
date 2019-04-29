import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Training } from 'src/app/shared/models/training';
import { ApiService } from 'src/app/core/services/api/api.service';
import { ToastrService } from 'ngx-toastr';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {

  @Output() submitted = new EventEmitter<boolean>();

  idTraining: number;
  training: Training;
  trainingPlugForm: any;
  validation: string;
  constructor(private apiService: ApiService, private toastr: ToastrService) { }

  ngOnInit() {
    this.training = new Training();
  }



  load(idTraining: number): void {
    this.apiService.getObjectById(idTraining, 'training').subscribe(
      data => {
        this.training = data;
        this.idTraining = idTraining;
      }
    );
  }


  submit() {
    let training: Training = new Training();
    console.log(this.idTraining);
    console.log(this.validation);
    this.apiService.validateTraining(this.idTraining, this.validation).subscribe(
      data => {

        if (data) {
          this.submitted.emit(true);
          if (this.validation == "validated") {
            this.toastr.success('Plug validated', 'Validating Plug');
          } else if (this.validation == "notvalidated") {
            this.toastr.success('Plug not validated', 'Validating Plug');

          }

        }
      }
    );
  }
}
