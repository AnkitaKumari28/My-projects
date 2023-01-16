import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HRComponent } from './hr.component';



@NgModule({
  declarations: [
    HRComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HRComponent]
})
export class HRModule { }
