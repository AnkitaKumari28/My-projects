import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { MaterialsModule } from '../materials/materials.module';



@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ],
  exports:[RegistrationComponent]
})
export class RegistrationModule { }
