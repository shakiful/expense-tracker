import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BudgetSummaryComponent } from './budget-summary.component';

const route: Routes = [{ path: '', component: BudgetSummaryComponent }];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class BudgetSummaryRoutingModule {}
