import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/shared/models/activity';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

 activities: Activity[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllActivities();
  }

  getAllActivities(): void {
    this.apiService.getAllObjects('activity').subscribe(data => {
      this.activities = data;
    });
  }

  load(submitted: boolean) {
    if (submitted) {
      this.getAllActivities();
    }
  }
}

