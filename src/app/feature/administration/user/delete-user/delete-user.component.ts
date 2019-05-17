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
  id: number;
  constructor(private apiService: ApiService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  initIdUser(id: number): void {
    this.id = id;
  }

  deleteUser(): void {
    this.apiService.deleteObject(this.id, 'user').subscribe(
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
