import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DirectiveComponent } from 'src/CustomDirective/directive.component';
import { EmployeeTitlePipe } from 'src/customPipe/customPipe';
import { empComponent } from 'src/emp/emp.component';
import { empListComponent } from 'src/empList/empList.component';
import { employeeCountComponent } from 'src/employeeCount/employeeCount.component';
//import { eCountComponent } from 'src/eCount/eCount.component';
//import { eListComponent } from 'src/eList/eList.component';
//import { empListComponent } from 'src/empList/empList.component';
//import { DepartmentListComponent } from 'src/employee-list/department-list/department-list.component';
// import { DepartmentComponent } from 'src/department/department.component';
// import { EmployeeComponent } from 'src/employee/employee.component';
//import { EmployeeListComponent } from 'src/employee-list/employee-list.component';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShowComponent } from './show/show.component';
import { employeeListService } from './Service/service.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CompService } from './Services/comp.service';

@NgModule({
  declarations: [
    AppComponent, empListComponent, employeeCountComponent, EmployeeTitlePipe, DirectiveComponent,empComponent, ShowComponent, Component1Component, Component2Component, Component3Component, Component4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
    
  ],
  providers: [CompService],
  bootstrap: [AppComponent]
})
export class AppModule { }
