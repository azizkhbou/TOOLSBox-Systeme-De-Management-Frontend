import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Activity } from 'src/app/shared/models/activity';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Participant } from 'src/app/shared/models/participant';
import { Organism } from 'src/app/shared/models/organism';
import { Need } from 'src/app/shared/models/need';
import { Training } from 'src/app/shared/models/training';

@Component({
  selector: 'app-create-training',
  templateUrl: './create-training.component.html',
  styleUrls: ['./create-training.component.css']
})
export class CreateTrainingComponent implements OnInit {

  @Output() submitted = new EventEmitter<boolean>();
  participantToAdd: Participant = new Participant();
  organismToAdd: Organism = new Organism();

  createTrainingForm: FormGroup;
  activities: Activity[] = [];
  participants: Participant[] = [];
  organisms: Organism[] = [];
  needs: Need[] = [];
  dayNumber: any;
  dayManCost: any;
  financialCost: any;
  schedualDate: any;
  realDate: any;


  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private apiService: ApiService) { }

  ngOnInit() {
    this.createTrainingForm = this.formBuilder.group({
      object: ['', Validators.required],
      type: ['', Validators.required],
      required: ['', Validators.required],
      status: ['', Validators.required],
      nbrOfParticipants: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      participants: ['', Validators.required],
      trainer: ['', Validators.required],
      organisms: ['', Validators.required],
      dayNumber: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      dayManCost: ['', Validators.required],
      financialCost: ['', Validators.required],
      schedualDate: ['', Validators.required],
      realDate: ['', Validators.required],
      activity: ['', Validators.required],
    });

  }
  getActivities(): void {
    this.apiService.getAllObjects('activity').subscribe(data => {
      this.activities = data;
    });
  }
  getParticipants(): void {
    this.apiService.getAllObjects('participant').subscribe(data => {
      this.participants = data;
    });
  }
  getOrganisms(): void {
    this.apiService.getAllObjects('organism').subscribe(data => {
      this.organisms = data;
    });
  }
  reset(): void {
    this.ngOnInit();
    this.participants = [];
    this.organisms = [];

  }
  get f() {
    return this.createTrainingForm.controls;
  }
  submit(): void {
    let training: Training = new Training();
    training.need.object = this.f.object.value;
    training.need.type = this.f.type.value;
    training.need.required = this.f.required.value;
    training.status = this.f.status.value;
    training.need.nbrOfParticipants = this.f.nbrOfParticipants.value;
    training.need.participants = this.participants;
    training.organisms = this.f.organisms.value;
    training.trainer = this.f.trainer.value;
    training.dayNumber = this.dayNumber.value;
    training.dayManCost = this.dayManCost.value;
    training.financialCost = this.financialCost.value;
    training.schedualDate = this.schedualDate.value;
    training.realDate = this.realDate.value;
    training.activity = this.f.activity.value;
    console.log('display training');
    console.log(training);

    this.apiService.createObject(training, 'training').subscribe(
      data => {
        console.log('display data');
        console.log(data);
        if (data) {
          this.submitted.emit(true);
          this.toastr.success('Training successfully created', 'Creating training');
        } else {
          this.toastr.error('Training unsuccessfully created', 'Creating training');
        }
      }
    );
  }
  addParticipant(firstName: String, lastName: String) {


    const participant = new Participant();
    participant.firstName = firstName;
    participant.lastName = lastName;

    this.participants.push(participant);
    this.participantToAdd.firstName = null;
    this.participantToAdd.lastName = null;

  }

  deleteParticipant(participant: any) {

    this.participants.forEach((element, index) => {

      if (participant.firsName === element.firstName) {

        this.participants.splice(index, 1);

      }

    });
  }
  addOrganism(name: String, cost: number, cvAvailability: String, planning: String) {


    const organism = new Organism();
    organism.name = name;
    organism.cost = cost;
    organism.cvAvailability = cvAvailability;
    organism.planning = planning;

    this.organisms.push(organism);
    this.organismToAdd.name = null;
    this.organismToAdd.cost = null;
    this.organismToAdd.cvAvailability = null;
    this.organismToAdd.planning = null;

  }
}
