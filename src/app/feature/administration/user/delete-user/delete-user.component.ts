import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {ApiService} from '../../../../core/services/api/api.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  @Output() submitted = new EventEmitter<boolean>();
  idUser: number;
  constructor(private apiService: ApiService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  initIdUser(idUser: number): void {
    this.idUser = idUser;
  }

  deleteUser(): void {
    this.apiService.deleteObject(this.idUser, 'user').subscribe(
      data => {
        if (data) {
          this.submitted.emit(true);
          this.toastr.success('User successfully deleted', 'Deleting User');
        } else {
          this.toastr.error('User unsuccessfully deleted', 'Deleting User');
        }
      }
    );
  }

}
