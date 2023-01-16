import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { MaterialsModule } from '../materials/materials.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule
    
  ],
  exports:[RegistrationComponent]
})
export class RegistrationModule { }
