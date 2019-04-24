import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/shared/models/activity';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {
activity:Activity;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.activity = new Activity();

  }
  load(idActivity: number): void {
    this.apiService.getObjectById(idActivity, 'activity').subscribe(
      data => {
        this.activity = data;
        console.log(this.activity);
      }
    );
  }


}
