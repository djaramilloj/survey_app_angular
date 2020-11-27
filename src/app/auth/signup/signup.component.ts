import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userSignUp } from '../../core/models/user.model';
import { SetDataService } from '../../core/services/set-data.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  private emailPattern = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
  private pwdPattern = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})[a-zA-Z0-9]{8,}$/;  // at least one capital letter and numbers
  errorMsg: boolean = false;
  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private setData: SetDataService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(){
    // Creation of the registration formBuilder
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(this.pwdPattern)]],
      name: ['', [Validators.required]],
    })
  }

  signUp() {
    this.errorMsg = false;
    const formValue = this.signUpForm.value;
    const data: userSignUp = {
      name: formValue.name,
      email: formValue.email,
      password: formValue.password
    };
    this.setData.signupByUsernameAndPassword(data)
      .toPromise()
      .then(data => {
        if (data.status === 201) {
          this.router.navigate(['/auth/login']);
        } else if(data.status === 403){
          this.errorMsg = true;
        }
      })
      .catch(error => {
        console.error('there was an error: ', error);
      }) 
  }

}
