import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardModalComponent } from './dashboard-modal.component';

describe('DashboardModalComponent', () => {
  let component: DashboardModalComponent;
  let fixture: ComponentFixture<DashboardModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardModalComponent]
    });
    fixture = TestBed.createComponent(DashboardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
