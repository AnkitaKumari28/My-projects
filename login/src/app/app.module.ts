import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { RegistrationModule } from './registration/registration.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmpDataService } from './Services/EmployeeListService/emp-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductModule } from './Product/product.module';
import { ProductService } from './Services/ProductService/product.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EmployeeDetailsCanDeactivateGuardService } from './Services/EmployeeListService/emp-data-can-deactivate.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent
   
       
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    DashboardModule,
    RegistrationModule,
    ProductModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(EmpDataService)
    
    
  ],
  providers: [ProductService, EmployeeDetailsCanDeactivateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
