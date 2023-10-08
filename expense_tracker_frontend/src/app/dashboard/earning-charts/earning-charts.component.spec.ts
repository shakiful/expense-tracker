import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningChartsComponent } from './earning-charts.component';

describe('EarningChartsComponent', () => {
  let component: EarningChartsComponent;
  let fixture: ComponentFixture<EarningChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EarningChartsComponent]
    });
    fixture = TestBed.createComponent(EarningChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
