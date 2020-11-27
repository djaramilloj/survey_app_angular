import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from '../demo-material-module';
import { MakeSurveyComponent } from './make-survey/make-survey.component';
import { RecordSurveyComponent } from './record-survey/record-survey.component';


@NgModule({
  declarations: [HomeComponent, MakeSurveyComponent, RecordSurveyComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    DemoMaterialModule,
    ReactiveFormsModule,
  ]
})
export class MainModule { }
