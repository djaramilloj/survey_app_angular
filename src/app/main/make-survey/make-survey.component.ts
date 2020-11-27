import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SetDataService } from '../../core/services/set-data.service';
import { FetchDataService } from '../../core/services/fetch-data.service';
import { pcBrand, Survey } from '../../core/models/user.model';

@Component({
  selector: 'app-make-survey',
  templateUrl: './make-survey.component.html',
  styleUrls: ['./make-survey.component.scss']
})
export class MakeSurveyComponent implements OnInit {

  surveyForm: FormGroup;
  emailPerson: string;
  pcBrands: pcBrand[];
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private setData: SetDataService,
    private fetchData: FetchDataService
  ) { }

  async ngOnInit() {
    this.buildForm();
    await this.getPcBrands();
    this.emailPerson = localStorage.getItem('userEmail');
    this.surveyForm.get('email').setValue(this.emailPerson);
  }

  private buildForm(){
    // Creation of the registration formBuilder
    this.surveyForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      docNumber: ['', [Validators.required]],
      brandId: ['', [Validators.required]],
      comments: ['', [Validators.required]]
    })
  }

  private async getPcBrands() {
    await this.fetchData.getBrands()
      .toPromise()
      .then(data => {
        this.pcBrands = data;
      })
  }

  sendSurvey() {
    const data: Survey = {
      email: this.surveyForm.value.email,
      doc: this.surveyForm.value.docNumber,
      brand: this.surveyForm.value.brandId,
      comments: this.surveyForm.value.comments
    } 
    this.setData.sendSurvey(data)
      .toPromise()
      .then(data => {
        if (data.status === 400) {
          alert('Incomplete Information');
        } else {
          alert('Survey successfully sent!!!');
          this.router.navigate(['/main/home']);
        }
      })
      .catch(error => {
        console.error(error);
      })
  }
}
