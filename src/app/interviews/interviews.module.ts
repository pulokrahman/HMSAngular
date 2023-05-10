import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterviewCreateComponent } from './interview-create/interview-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InterviewRoutingModule } from './interview-routing.module';
import { InterviewsService } from '../shared/services/interviews.service';
import { InterviewlistComponent } from './interviewlist/interviewlist.component';



@NgModule({
  declarations: [
    InterviewCreateComponent,
    InterviewlistComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,InterviewRoutingModule
  ],
  providers:[InterviewsService]
})
export class InterviewsModule { }
