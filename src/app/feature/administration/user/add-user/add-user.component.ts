import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Activity} from '../../../../shared/models/activity';
import {Role} from '../../../../shared/models/role';
import {User} from '../../../../shared/models/user';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {SelectItem} from 'primeng/api';
import {ApiService} from '../../../../core/services/api/api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  @Output() submitted = new EventEmitter<boolean>();


  addUserForm: FormGroup;
  
  activities: Activity[] = [];
  roles: Role [] = [];

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private apiService: ApiService) {

  }

  get f() {
    return this.addUserForm.controls;
  }


  ngOnInit() {
    this.getActivities();
    this.getRoles();
    this.addUserForm = this.formBuilder.group({
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])],
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

  reset(): void {
    this.ngOnInit();
  }

  submit() {
    const user = new User();
    user.lastName = this.f.lastName.value;
    user.firstName = this.f.firstName.value;
    user.username = this.f.username.value;
    user.password = this.f.password.value;
    user.email = this.f.email.value;
    user.activity = this.f.activity.value;
    user.roles = this.f.roles.value;
    console.log(user);
    this.apiService.createObject(user, 'user').subscribe(
      data => {
        if (data) {
          this.submitted.emit(true);
          this.toastr.success('User successfully added', 'Adding user');
        } else {
          this.toastr.error('User unsuccessfully added', 'Adding user');
        }
      }
    );

  }
}



