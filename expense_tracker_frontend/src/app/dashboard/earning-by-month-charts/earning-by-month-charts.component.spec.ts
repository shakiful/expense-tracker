import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningByMonthChartsComponent } from './earning-by-month-charts.component';

describe('EarningByMonthChartsComponent', () => {
  let component: EarningByMonthChartsComponent;
  let fixture: ComponentFixture<EarningByMonthChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EarningByMonthChartsComponent]
    });
    fixture = TestBed.createComponent(EarningByMonthChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
