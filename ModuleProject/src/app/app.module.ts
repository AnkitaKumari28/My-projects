import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountModule } from './Account/account.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './Employee/employee.module';
import { HRModule } from './HR/hr.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    EmployeeModule,
    HRModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
