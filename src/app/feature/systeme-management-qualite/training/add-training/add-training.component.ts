import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Training } from 'src/app/shared/models/training';
import { Participant } from 'src/app/shared/models/participant';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent implements OnInit {



  @Output() submitted = new EventEmitter<boolean>();

  trainingNeedsForm: FormGroup;
  participants: Participant [] = [];
  participantToAdd: Participant = new Participant();



  constructor(private toastr: ToastrService, private formBuilder: FormBuilder,
    private apiService: ApiService) { }

  ngOnInit() {

    this.trainingNeedsForm = this.formBuilder.group({
      object: ['', Validators.required],
      type: ['', Validators.required],
      required: ['', Validators.required],
      objectif: ['', Validators.required],
      nbrOfParticipants: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      status: ['', Validators.required],
      participants: ['', Validators.required],
      category: ['',Validators.required]
    });

  }

  getParticipants(): void {
    this.apiService.getAllObjects('participant').subscribe(data => {
      this.participants = data;
    });
  }

  get f() {
    return this.trainingNeedsForm.controls;
  }

  reset(): void {
    this.ngOnInit();
    this.participants = [];
  }

  submit(): void {
    let training: Training = new Training();
    training.object = this.f.object.value;
    training.type = this.f.type.value;
    training.required = this.f.required.value;
    training.objectif = this.f.objectif.value;
    training.nbrOfParticipants = this.f.nbrOfParticipants.value;
    training.status = this.f.status.value;
    training.participants = this.participants;
    training.category = this.f.category.value;
    console.log('display training');
    console.log(training);
   
    this.apiService.createObject(training, 'training').subscribe(
      data => {
        console.log('display data');
        console.log(data);
        if (data) {
          this.submitted.emit(true);
          this.toastr.success('Training successfully added', 'Adding training');
        } else {
          this.toastr.error('Training unsuccessfully added', 'Adding training');
        }
      }
    );
  }


  addParticipant(participantName: String) {
   

    const participant = new Participant();
    participant.participantName = participantName;
    this.participants.push(participant);
    this.participantToAdd.participantName = null;
  }

  deleteParticipant(participant:any) {

    this.participants.forEach((element, index) => {

      if (participant.participantName === element.participantName) {

        this.participants.splice(index, 1);

      }

    });
  }
}


