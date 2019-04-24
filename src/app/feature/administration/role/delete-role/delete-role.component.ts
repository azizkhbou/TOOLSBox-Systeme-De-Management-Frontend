import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ApiService} from '../../../../core/services/api/api.service';

@Component({
  selector: 'app-delete-role',
  templateUrl: './delete-role.component.html',
  styleUrls: ['./delete-role.component.css']
})
export class DeleteRoleComponent implements OnInit {

  @Output() submitted = new EventEmitter<boolean>();
  idRole: number;

  constructor(private toastr: ToastrService, private apiService: ApiService) { }

  ngOnInit() {
  }

  initIdRole(idRole: number): void {
    this.idRole = idRole;
  }

  deleteRole(): void {
    this.apiService.deleteObject(this.idRole, 'role').subscribe(
      data => {
        if (data) {
          this.submitted.emit(true);
          this.toastr.success('Role successfully deleted', 'Deleting Role');
        } else {
          this.toastr.error('Role unsuccessfully deleted', 'Deleting Role');
        }
      }
    );
  }

}
