import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { ErrorHandlingComponent } from './shared/error-handling/error-handling.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { BudgetModule } from './budget/budget.module';
import { ExportModule } from './export/export.module';
import { TransactionModule } from './transaction/transaction.module';
import { ReportModule } from './report/report.module';
import { DropdowndirectivePipe } from './shared/dropdowndirective.pipe';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShareModule } from './shared/share.module';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchFilterComponent,
    ProfileComponent,
    NotificationComponent,
    ErrorHandlingComponent,
    SpinnerComponent,
    DropdowndirectivePipe,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    BudgetModule,
    ExportModule,
    TransactionModule,
    ReportModule,
    RouterModule,
    FormsModule,
    NgbModule,
    ShareModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
