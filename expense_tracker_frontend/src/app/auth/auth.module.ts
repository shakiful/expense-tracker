import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { RegistrationModule } from './registration/registration.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [LoginModule, RegistrationModule, AuthRoutingModule],
})
export class AuthModule {}
