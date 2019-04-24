import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/core/services/api/api.service';
import { Activity } from 'src/app/shared/models/activity';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {
 
  @Output() submitted = new EventEmitter<boolean>();
 
  addActivityForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastr: ToastrService, private apiService: ApiService) { }

  ngOnInit() {
    this.addActivityForm=this.formBuilder.group({
     title:['',Validators.required]
    
    });
  }
  Submit():void{
const activity=new Activity();
activity.title= this.f.title.value; 
this.apiService.createObject(activity,'activity').subscribe(
  data=>{
    if (data){
    this.submitted.emit(true);
    this.toastr.success('Activity successfully added', 'Adding activity');
  } else {
    this.toastr.error('Activity unsuccessfully added', 'Adding activity');
  }
}
  
);
}
reset(): void {
  this.ngOnInit();
}
get f() {
  return this.addActivityForm.controls;
}
}
