import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  emailPerson: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.emailPerson = localStorage.getItem('userEmail');
  }

  goSurvey() {
    this.router.navigate(['/main/make-survey']);
  }

  goSurveyRecords() {
    this.router.navigate(['/main/record-survey']);
  }

  logOut(){
    localStorage.removeItem("userEmail");
    this.router.navigate(['/auth/login']);
  }
}
