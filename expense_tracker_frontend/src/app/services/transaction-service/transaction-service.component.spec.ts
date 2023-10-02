import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionServiceComponent } from './transaction-service.component';

describe('TransactionServiceComponent', () => {
  let component: TransactionServiceComponent;
  let fixture: ComponentFixture<TransactionServiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionServiceComponent]
    });
    fixture = TestBed.createComponent(TransactionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
