import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-training',
  templateUrl: './delete-training.component.html',
  styleUrls: ['./delete-training.component.css']
})
export class DeleteTrainingComponent implements OnInit {

  @Output() submitted = new EventEmitter<boolean>();
  idTraining: number;
  constructor(private toastr: ToastrService, private apiService: ApiService) { }

  ngOnInit() {
  }
  initIdTraining(idTraining: number): void {
    this.idTraining = idTraining;
  }
  deleteTraining(): void {
    this.apiService.deleteObject(this.idTraining, 'training').subscribe(
      data => {
        if (data) {
          this.submitted.emit(true);
          this.toastr.success('Training successfully deleted', 'Deleting Training');
        } else {
          this.toastr.error('Training unsuccessfully deleted', 'Deleting Training');
        }
      }
    );
  }
}
