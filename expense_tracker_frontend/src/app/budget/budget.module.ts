import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BudgetRoutingModule } from './budget-routing.module';
import { BudgetComponent } from './budget.component';
import { BudgetSummaryModule } from './budget-summary/budget-summary.module';
import { BudgetFormModule } from './budget-form/budget-form.module';

@NgModule({
  declarations: [BudgetComponent],
  imports: [
    RouterModule,
    BudgetRoutingModule,
    BudgetSummaryModule,
    BudgetFormModule,
  ],
})
export class BudgetModule {}
