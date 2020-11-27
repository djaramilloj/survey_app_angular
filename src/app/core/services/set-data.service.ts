import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userSignUp, userLogIn, Survey } from '../../core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SetDataService {
  // private api_url = "https://survey-api-ontop.herokuapp.com"
    private api_url = "http://localhost:8080"

  constructor(private httpClient: HttpClient) { }

  signupByUsernameAndPassword(data: userSignUp): Observable<any> {
    const url = `${this.api_url}/auth/signup`;
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    const req = this.httpClient.post(url, data, {headers: headers, responseType: 'json'});
    return req;
  }

  loginByUsernameAndPassword(data: userLogIn): Observable<any> {
    const url = `${this.api_url}/auth/login`;
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    const req = this.httpClient.post(url, data, {headers: headers, responseType: 'json'});
    return req;
  }

  sendSurvey(data: Survey): Observable<any> {
    const url = `${this.api_url}/main/survey`;
    let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });
    const req = this.httpClient.post(url, data, {headers: headers, responseType: 'json'});
    return req;
  }
}
