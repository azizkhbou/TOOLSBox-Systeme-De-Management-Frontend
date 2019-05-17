import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Activity } from 'src/app/shared/models/activity';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-update-activity',
  templateUrl: './update-activity.component.html',
  styleUrls: ['./update-activity.component.css']
})
export class UpdateActivityComponent implements OnInit {
  @Output() submitted = new EventEmitter<boolean>();
  updateActivityForm: FormGroup;
  activity: Activity;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService,
    private apiService: ApiService) { }

  ngOnInit() {
    this.updateActivityForm=this.formBuilder.group({
     title:['',Validators.required]
    
  });
  }
  get f() {
    return this.updateActivityForm.controls;
  }
  submit() {
    this.activity.title = this.f.title.value;
    this.apiService.updateObject(this.activity, 'activity').subscribe(
      data => {
        if (data) {
          this.submitted.emit(true);
          this.toastr.success('Activity successfully updated', 'Updating activity');
        } else {
          this.toastr.error('Activity unsuccessfully updated', 'Updating activity');
        }
      }
    );
  }
  initForm(): void {

    this.updateActivityForm = this.formBuilder.group({
      title: [this.activity.title, Validators.required],
    });
 }
 load(id: number): void {
  this.apiService.getObjectById(id, 'activity').subscribe(
    data => {
      this.activity = data;
      this.initForm();
    }
  );
}


}
