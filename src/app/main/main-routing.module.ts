import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MakeSurveyComponent } from './make-survey/make-survey.component';
import { RecordSurveyComponent } from './record-survey/record-survey.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'make-survey',
    component: MakeSurveyComponent
  },
  {
    path: 'record-survey',
    component: RecordSurveyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
