import { Component, OnInit } from '@angular/core';
import { Need } from 'src/app/shared/models/need';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-need-list',
  templateUrl: './need-list.component.html',
  styleUrls: ['./need-list.component.css']
})
export class NeedListComponent implements OnInit {

 needs: Need[];
  total: number;
  p = 1;

  testValidate: string = "validated";
  testNotValidate: string = "not validated";

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
    this.getAllNeeds(0);

  }
  private onPageChange = (pageNumber) => {
    this.getAllNeeds(pageNumber - 1);
  }
  getAllNeeds(page: number): void {
    this.apiService.getNeeds(page).subscribe(data => {
      this.needs = data.content;
      this.total = data.totalElements;
      console.log(this.needs);
    });
  }

  load(submitted: boolean) {
      if (submitted) {
    this.getAllNeeds(0);
}
  }
}
