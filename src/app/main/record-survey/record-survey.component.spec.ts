import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordSurveyComponent } from './record-survey.component';

describe('RecordSurveyComponent', () => {
  let component: RecordSurveyComponent;
  let fixture: ComponentFixture<RecordSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
