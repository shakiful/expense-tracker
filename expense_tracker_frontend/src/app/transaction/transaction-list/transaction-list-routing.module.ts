import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TransactionListComponent } from './transaction-list.component';

const route: Routes = [{ path: '', component: TransactionListComponent }];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class TransactionListRoutingModule {}
