import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-need',
  templateUrl: './delete-need.component.html',
  styleUrls: ['./delete-need.component.css']
})
export class DeleteNeedComponent implements OnInit {

  @Output() submitted = new EventEmitter<boolean>();
  id: number;
  constructor(private toastr: ToastrService, private apiService: ApiService) { }

  ngOnInit() {
  }
  initId(id: number): void {
    this.id = id;
  }
  deleteNeed(): void {
    this.apiService.deleteObject(this.id, 'need').subscribe(
      data => {
        if (data) {
          this.submitted.emit(true);
          this.toastr.success('Need successfully deleted', 'Deleting Need');
        } else {
          this.toastr.error('Need unsuccessfully deleted', 'Deleting Need');
        }
      }
    );
  }
}
