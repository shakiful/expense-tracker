import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BudgetSummaryComponent } from './budget-summary.component';

@NgModule({
  declarations: [BudgetSummaryComponent],
  imports: [FormsModule, RouterModule],
})
export class BudgetSummaryModule {}
