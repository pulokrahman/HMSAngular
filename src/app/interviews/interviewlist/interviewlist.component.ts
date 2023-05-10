import { Component } from '@angular/core';
import { InterviewsService } from 'src/app/shared/services/interviews.service';

@Component({
  selector: 'app-interviewlist',
  templateUrl: './interviewlist.component.html',
  styleUrls: ['./interviewlist.component.css']
})
export class InterviewlistComponent {
constructor(private interviewService:InterviewsService){
this.getAll();
}
getAll(){
this.interviewService.getInterviews().subscribe(Interviews=>console.log(Interviews))

}
}
