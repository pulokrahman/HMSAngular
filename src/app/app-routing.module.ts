import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { InterviewRoutingModule } from './interviews/interview-routing.module';
import { authGuard } from './shared/guard/auth.guard';
import { AccessForbiddenComponent } from './access-forbidden/access-forbidden.component';
import { LoginComponent } from './login/login.component';
import { redirect } from 'react-router';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'app',component:LayoutComponent,
canActivate:[authGuard] ,children:[{path:"interview", loadChildren:()=>import('./interviews/interviews.module').then(m=>m.InterviewsModule)}],

}

//{path:'**',component:AccessForbiddenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
