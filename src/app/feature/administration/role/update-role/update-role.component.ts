import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Role} from '../../../../shared/models/role';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Privilege} from '../../../../shared/models/privilege';
import {ApiService} from '../../../../core/services/api/api.service';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {

  @Output() submitted = new EventEmitter<boolean>();
  updateRoleForm: FormGroup;
  privileges: Privilege[] = [];
  role: Role;

  constructor( private formBuilder: FormBuilder, private toastr: ToastrService,
               private apiService: ApiService) { }

  ngOnInit() {
    this.getPrivileges();
    this.updateRoleForm = this.formBuilder.group({
      title: ['', Validators.required],
      privileges: ['', Validators.required]
    });
  }

  getPrivileges(): void {
    this.apiService.getAllObjects('privilege').subscribe(data => {
      this.privileges = data;
    });
  }

  get f() {
    return this.updateRoleForm.controls;
  }

  submit() {
    this.role.titre = this.f.title.value;
    this.role.privileges = this.f.privileges.value;
    this.apiService.updateObject(this.role, 'role').subscribe(
      data => {
        if (data) {
          this.submitted.emit(true);
          this.toastr.success('Role successfully updated', 'Updating role');
        } else {
          this.toastr.error('Role unsuccessfully updated', 'Updating role');
        }
      }
    );
  }

  initForm(): void {

    this.updateRoleForm = this.formBuilder.group({
      title: [this.role.titre, Validators.required],
      privileges: ['', Validators.required]
    });
    this.updateRoleForm.controls.privileges.setValue(this.role.privileges);


  }

  load(idRole: number): void {
    this.apiService.getObjectById(idRole, 'role').subscribe(
      data => {
        this.role = data;
        this.initForm();
      }
    );
  }

}
