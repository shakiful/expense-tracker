import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetServiceComponent } from './budget-service.component';

describe('BudgetServiceComponent', () => {
  let component: BudgetServiceComponent;
  let fixture: ComponentFixture<BudgetServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetServiceComponent]
    });
    fixture = TestBed.createComponent(BudgetServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
