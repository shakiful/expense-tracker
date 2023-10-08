import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanChartsComponent } from './loan-charts.component';

describe('LoanChartsComponent', () => {
  let component: LoanChartsComponent;
  let fixture: ComponentFixture<LoanChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanChartsComponent]
    });
    fixture = TestBed.createComponent(LoanChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
