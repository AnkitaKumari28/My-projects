import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { MaterialsModule } from '../materials/materials.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule
  ],
  exports:[
    EmployeeComponent
  ]
})
export class EmployeeModule { }
