import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from '../../../../shared/models/user';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Activity} from '../../../../shared/models/activity';
import {Role} from '../../../../shared/models/role';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {ApiService} from '../../../../core/services/api/api.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  @Output() submitted = new EventEmitter<boolean>();
  updateUserForm: FormGroup;
  activities: Activity[];
  roles: Role [] = [];
  user: User;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private toastr: ToastrService) { }

  ngOnInit() {
    this.getActivities();
    this.getRoles();
    this.updateUserForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      username: ['', Validators.required],
      password: [{value : '', disabled: true}, Validators.required],
      email: ['', Validators.required],
      activity: ['', Validators.required],
      roles: ['', Validators.required]
    });

  }

  getActivities(): void {
    this.apiService.getAllObjects('activity').subscribe(data => {
      this.activities = data;
    });
  }

  getRoles(): void {
    this.apiService.getAllObjects('role').subscribe(data => {
      this.roles = data;

    });
  }


  get f() {
    return this.updateUserForm.controls;
  }
  initForm(): void {
    this.updateUserForm = this.formBuilder.group({
      nom: [this.user.nom, Validators.required],
      prenom: [this.user.prenom, Validators.required],
      username: [this.user.username, Validators.required],
      password: [{value : '', disabled: true}, Validators.required],
      email: [this.user.email, Validators.required],
      activity: ['', Validators.required],
      roles: ['', Validators.required]
    });
    this.updateUserForm.controls.roles.setValue(this.user.roles);
    this.updateUserForm.controls.activity.setValue(this.user.activity);


  }

  submit() {

    this.user.nom = this.f.nom.value;
    this.user.prenom = this.f.prenom.value;
    this.user.username = this.f.username.value;
    this.user.email = this.f.email.value;
    this.user.activity = this.f.activity.value;
    this.user.roles = this.f.roles.value;


    this.apiService.updateObject(this.user, 'user').subscribe(
      data => {
        if (data) {
          this.submitted.emit(true);
          this.toastr.success('User successfully updated', 'Updating user');
        } else {
          this.toastr.error('User unsuccessfully updated', 'Updating user');
        }
      }
    );

  }

  load(idUser: number): void {
    this.apiService.getObjectById(idUser, 'user').subscribe(
      data => {
        this.user = data;
        this.initForm();
      }
    );
  }
}

