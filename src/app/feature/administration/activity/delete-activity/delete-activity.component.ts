import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-delete-activity',
  templateUrl: './delete-activity.component.html',
  styleUrls: ['./delete-activity.component.css']
})
export class DeleteActivityComponent implements OnInit {
  @Output() submitted = new EventEmitter<boolean>();
  idActivity: number;
  constructor(private toastr: ToastrService, private apiService: ApiService) { }

  ngOnInit() {
  }
  initIdActivity(idActivity: number): void {
    this.idActivity = idActivity;
  }
  deleteActivity(): void {
    this.apiService.deleteObject(this.idActivity, 'activity').subscribe(
      data => {
        if (data) {
          this.submitted.emit(true);
          this.toastr.success('Activity successfully deleted', 'Deleting Activity');
        } else {
          this.toastr.error('Activity unsuccessfully deleted', 'Deleting Activity');
        }
      }
    );
  }
}
