import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Need } from 'src/app/shared/models/need';
import { Participant } from 'src/app/shared/models/participant';

@Component({
  selector: 'app-add-need',
  templateUrl: './add-need.component.html',
  styleUrls: ['./add-need.component.css']
})
export class AddNeedComponent implements OnInit {

  @Output() submitted = new EventEmitter<boolean>();

  trainingNeedsForm: FormGroup;
  participants: Participant[] = [];
  participantToAdd: Participant = new Participant();
  participantsInit: Participant[] = [];


  constructor(private toastr: ToastrService, private formBuilder: FormBuilder,
    private apiService: ApiService) { }

  ngOnInit() {
    this.getParticipants();
    let i: number;
    this.participantsInit = this.participants;
    for (i = 0; i < this.participantsInit.length; i++) {
      this.participantsInit[i].firstName += (' ' + this.participantsInit[i].lastName);
    }

    this.trainingNeedsForm = this.formBuilder.group({
      object: ['', Validators.required],
      type: ['', Validators.required],
      required: ['', Validators.required],
      objectif: ['', Validators.required],
      nbrOfParticipants: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      participants: ['', Validators.required],
      participantsInit: ['', Validators.required],

      category: ['', Validators.required]
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
    let need: Need = new Need();
    need.object = this.f.object.value;
    need.type = this.f.type.value;
    need.required = this.f.required.value;
    need.objectif = this.f.objectif.value;
    need.nbrOfParticipants = this.f.nbrOfParticipants.value;
    need.participants = this.f.participants.value;
    need.category = this.f.category.value;
    console.log('display need');
    console.log(need);

    this.apiService.createObject(need, 'need').subscribe(
      data => {
        console.log('display data');
        console.log(data);
        if (data) {
          this.submitted.emit(true);
          this.toastr.success('Need successfully added', 'Adding need');
        } else {
          this.toastr.error('Need unsuccessfully added', 'Adding need');
        }
      }
    );
  }

  addParticipant(firstName: string, lastName: string) {
    const participant = new Participant();
    participant.firstName = firstName;
    participant.lastName = lastName;
    this.participants.push(participant);
    this.participantToAdd.firstName = null;
    this.participantToAdd.lastName = null;
  }

  reload() {
    console.log("display ghassen test");
  }


}


