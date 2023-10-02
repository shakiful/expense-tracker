import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExportComponent } from './export.component';
import { ExportRoutingModule } from './export-routing.module';

@NgModule({
  declarations: [ExportComponent],
  imports: [RouterModule, ExportRoutingModule],
})
export class ExportModule {}
