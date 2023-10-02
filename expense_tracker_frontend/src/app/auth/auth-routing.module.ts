import { RegistrationComponent } from './registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';

const route: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'registration',
        component: RegistrationComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
