import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pcBrand } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  // private api_url = "https://survey-api-ontop.herokuapp.com"
  private api_url = "http://localhost:8080"

  constructor(private httpClient: HttpClient) { }

  getBrands(): Observable<any> {
    const url = `${this.api_url}/brands`;
    const req = this.httpClient.get(url);
    return req;
  }

  getSurveysRecords(email: string): Observable<any> {
    const url = `${this.api_url}/main/getsurvey?email=${email}`;
    const req = this.httpClient.get(url);
    return req;
  }

}
