import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TransactionFormRoutingModule } from './transaction-list-routing.module';
import { TransactionFormComponent } from './transaction-form.component';

@NgModule({
  declarations: [TransactionFormComponent],
  imports: [FormsModule, RouterModule, TransactionFormRoutingModule],
})
export class TransactionFormModule {}
