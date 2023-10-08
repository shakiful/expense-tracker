import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingChartsComponent } from './spending-charts.component';

describe('SpendingChartsComponent', () => {
  let component: SpendingChartsComponent;
  let fixture: ComponentFixture<SpendingChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpendingChartsComponent]
    });
    fixture = TestBed.createComponent(SpendingChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
