import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './registration.component';

const route: Routes = [{ path: '', component: RegistrationComponent }];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class RegistrationRoutingModuleModule {}
