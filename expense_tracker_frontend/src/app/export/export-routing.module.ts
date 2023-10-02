import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ExportComponent } from './export.component';

const route: Routes = [{ path: '', component: ExportComponent }];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class ExportRoutingModule {}
