import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BudgetFormComponent } from './budget-form.component';

@NgModule({
  declarations: [BudgetFormComponent],
  imports: [FormsModule, RouterModule],
})
export class BudgetFormModule {}
