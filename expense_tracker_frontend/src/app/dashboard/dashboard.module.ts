import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { EarningChartsComponent } from './earning-charts/earning-charts.component';
import { LoanChartsComponent } from './loan-charts/loan-charts.component';
import { SavingChartsComponent } from './saving-charts/saving-charts.component';
import { SpendingChartsComponent } from './spending-charts/spending-charts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EarningByMonthChartsComponent } from './earning-by-month-charts/earning-by-month-charts.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../shared/modal/modal.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header/dashboard-header.component';
import { DashboardModalComponent } from './dashboard-modal/dashboard-popup/dashboard-modal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    EarningChartsComponent,
    LoanChartsComponent,
    SavingChartsComponent,
    SpendingChartsComponent,
    EarningByMonthChartsComponent,
    ModalComponent,
    SidebarComponent,
    DashboardHeaderComponent,
    DashboardModalComponent,
  ],
  imports: [
    RouterModule,
    DashboardRoutingModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
