import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReportComponent } from './report.component';

const route: Routes = [{ path: '', component: ReportComponent }];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class ReportRoutingModule {}
