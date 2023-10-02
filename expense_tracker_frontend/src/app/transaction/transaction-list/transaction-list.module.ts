import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TransactionListRoutingModule} from './transaction-list-routing.module';
import { TransactionListComponent } from './transaction-list.component';

@NgModule({
  declarations: [TransactionListComponent],
  imports: [FormsModule, RouterModule, TransactionListRoutingModule],
})
export class TransactionListModule {}
