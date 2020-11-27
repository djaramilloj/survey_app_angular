import { Component, AfterViewInit } from '@angular/core';
import { Survey, pcBrand } from '../../core/models/user.model';
import { FetchDataService } from '../../core/services/fetch-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-record-survey',
  templateUrl: './record-survey.component.html',
  styleUrls: ['./record-survey.component.scss']
})
export class RecordSurveyComponent implements AfterViewInit {

  displayedColumns: string[] = ['brand', 'comments', 'document'];
  displayedColumnsBrand: string[] = ['id', 'name'];
  data: Survey[] = [];
  dataBrand: pcBrand[] = [];
  emailUser: string; 
  constructor(private fetchData: FetchDataService, private router: Router) { }

  ngAfterViewInit(): void {
    this.emailUser = localStorage.getItem('userEmail');
    this.fetchData.getSurveysRecords(this.emailUser)
      .subscribe(data => {
        this.data = data;
      })
    this.fetchData.getBrands()
      .subscribe(dataBrand => {
        this.dataBrand = dataBrand;
      })
  }

  returnHome() {
    this.router.navigate(['/main/home']);
  }

}
