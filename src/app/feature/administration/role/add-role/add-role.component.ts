import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Privilege} from '../../../../shared/models/privilege';
import {ToastrService} from 'ngx-toastr';


import {SelectItem} from 'primeng/api';
import {Role} from '../../../../shared/models/role';
import {ApiService} from '../../../../core/services/api/api.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {

  @Output() submitted = new EventEmitter<boolean>();
  addRoleForm: FormGroup;
  privileges: Privilege[] = [];

  constructor(private toastr: ToastrService, private formBuilder: FormBuilder,
              private apiService: ApiService) {
  }

  ngOnInit() {
    this.getPrivileges();
    this.addRoleForm = this.formBuilder.group({
      title: ['', Validators.required],
      privileges: ['', Validators.required]
    });

  }

  submit(): void {
    const role = new Role();
    role.titre = this.f.title.value;
    role.privileges = this.f.privileges.value;
    this.apiService.createObject(role, 'role').subscribe(
      data => {
        if (data) {
          this.submitted.emit(true);
          this.toastr.success('Role successfully added', 'Adding role');
        } else {
          this.toastr.error('Role unsuccessfully added', 'Adding role');
        }
      }
    );

  }

  get f() {
    return this.addRoleForm.controls;
  }

  getPrivileges(): void {
    this.apiService.getAllObjects('privilege').subscribe(data => {
      this.privileges = data;
    });
  }

  reset(): void {
    this.ngOnInit();
  }

}

