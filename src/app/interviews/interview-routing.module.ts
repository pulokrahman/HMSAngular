import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewCreateComponent } from './interview-create/interview-create.component';
import { InterviewlistComponent } from './interviewlist/interviewlist.component';


const routes: Routes = [{path:"create",component:InterviewCreateComponent},{path:"list",component:InterviewlistComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewRoutingModule { }
