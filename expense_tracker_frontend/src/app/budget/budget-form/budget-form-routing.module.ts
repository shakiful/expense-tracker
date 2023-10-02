import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BudgetFormComponent } from './budget-form.component';

const route: Routes = [{ path: '', component: BudgetFormComponent }];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class BudgetFormRoutingModule {}
