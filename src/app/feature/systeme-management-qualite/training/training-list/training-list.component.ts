import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/shared/models/training';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {

  trainings: Training[];
  total: number;
  p = 1;
  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.getAllTrainings(0);

  }
  private onPageChange = (pageNumber) => {
    this.getAllTrainings(pageNumber - 1);
  }
  getAllTrainings(page: number): void {
    this.apiService.getTrainings(page).subscribe(data => {
      this.trainings = data.content;
      this.total = data.totalElements;
      console.log(this.trainings);
    });
  }

  load(submitted: boolean) {
      if (submitted) {
    this.getAllTrainings(0);
}
  }
}
