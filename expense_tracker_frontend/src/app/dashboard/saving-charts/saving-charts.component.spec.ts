import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingChartsComponent } from './saving-charts.component';

describe('SavingChartsComponent', () => {
  let component: SavingChartsComponent;
  let fixture: ComponentFixture<SavingChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavingChartsComponent]
    });
    fixture = TestBed.createComponent(SavingChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
