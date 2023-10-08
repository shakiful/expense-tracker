import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { EarningChartsComponent } from './earning-charts/earning-charts.component';
import { LoanChartsComponent } from './loan-charts/loan-charts.component';
import { SavingChartsComponent } from './saving-charts/saving-charts.component';
import { SpendingChartsComponent } from './spending-charts/spending-charts.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    EarningChartsComponent,
    LoanChartsComponent,
    SavingChartsComponent,
    SpendingChartsComponent,
  ],
  imports: [RouterModule, DashboardRoutingModule, MatIconModule, FormsModule],
})
export class DashboardModule {}
