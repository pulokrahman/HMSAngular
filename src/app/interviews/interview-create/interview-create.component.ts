import { Component } from '@angular/core';
import { NgForm,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { InterviewsService } from 'src/app/shared/services/interviews.service';

@Component({
  selector: 'app-interview-create',
  templateUrl: './interview-create.component.html',
  styleUrls: ['./interview-create.component.css']
})
export class InterviewCreateComponent {
interview={
  name: "",
  interviewRound:0,
}
constructor(private interviewService:InterviewsService){}
OnSubmit(interviewForm:NgForm){
 this.interview.name= interviewForm.value.name;
 this.interview.interviewRound=interviewForm.value.interviewRnd;

this.interviewService.makeInterview(this.interview)

}
}
