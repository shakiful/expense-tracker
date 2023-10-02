import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TransactionComponent } from './transaction.component';
import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionFormModule } from './transaction-form/transaction-form.module';
import { TransactionListModule } from './transaction-list/transaction-list.module';

@NgModule({
  declarations: [TransactionComponent],
  imports: [
    FormsModule,
    RouterModule,
    TransactionRoutingModule,
    TransactionFormModule,
    TransactionListModule,
  ],
})
export class TransactionModule {}
