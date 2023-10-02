import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TransactionFormComponent } from './transaction-form.component';

const route: Routes = [{ path: '', component: TransactionFormComponent }];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class TransactionFormRoutingModule {}
