import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from '../dashboard/dashboard.module';
import { RegistrationModule } from '../registration/registration.module';
import { MaterialsModule } from '../materials/materials.module';


@NgModule({
  declarations: [
    LoginComponent, 
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialsModule,   
    DashboardModule,
    RegistrationModule
  ],
  exports:[
    LoginComponent
    
  ]
})
export class LoginModule { }
