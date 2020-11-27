import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SetDataService } from '../../core/services/set-data.service';
import { userLogIn } from '../../core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInForm: FormGroup;
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
    this.logInForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  logIn(){
    this.errorMsg = false;
    const formValue = this.logInForm.value;
    const data: userLogIn = {
      email: formValue.email,
      password: formValue.password
    };
    this.setData.loginByUsernameAndPassword(data)
      .toPromise()
      .then(data => {  
        if (data.status === 200) {
          localStorage.setItem('userEmail', data.message);
          this.router.navigate(['/main/home']);
        } else if (data.status === 403) {
          this.errorMsg = true;
        }
      })
      .catch(error => {
        console.error('there was an error: ', error);
      }) 
  }

  goSignUp() {
    this.router.navigate(['/auth/signup']);
  }

}
