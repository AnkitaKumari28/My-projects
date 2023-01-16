import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { EmployeeService } from 'src/Services/Employee/employee.service';
import { EmployeeComponent } from 'src/EMP/emp.component';
import { DEPComponent } from './dep/dep.component';


@NgModule({
  declarations: [
    AppComponent, EmployeeComponent, DEPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
