import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from '../materials/materials.module';
import { EmployeeListComponent } from './employee-list.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialsModule,
    
  ],
  exports:[
   EmployeeListComponent
  ]
})
export class EmployeeListModule { }
