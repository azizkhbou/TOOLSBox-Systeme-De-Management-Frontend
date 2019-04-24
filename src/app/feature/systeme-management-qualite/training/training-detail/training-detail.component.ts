import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/shared/models/training';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-training-detail',
  templateUrl: './training-detail.component.html',
  styleUrls: ['./training-detail.component.css']
})
export class TrainingDetailComponent implements OnInit {

training : Training;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.training = new Training();
  }
  load(idTraining: number): void {
    this.apiService.getObjectById(idTraining, 'training').subscribe(
      data => {
        this.training = data;
      }
    );
  }
}
