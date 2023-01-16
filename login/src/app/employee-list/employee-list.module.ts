import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import { MaterialsModule } from '../materials/materials.module';
import { ViewComponent } from './View/view.component';
import { DeleteDialogComponent } from './Delete/delete.dialog';
import { EditComponent } from './Edit/edit.component';
import { FormsModule } from '@angular/forms';
import { DeleteComponent } from './Delete/delete.component';
import { EmployeeListRoutingModule } from './employee-list-routing.module';




@NgModule({
  declarations: [EmployeeListComponent, ViewComponent, DeleteDialogComponent, EditComponent, DeleteComponent,DeleteDialogComponent ],

  imports: [
    CommonModule,
    MaterialsModule,
    FormsModule,
    EmployeeListRoutingModule
    
  ],
  exports:[EmployeeListComponent, ViewComponent, DeleteDialogComponent, EditComponent, DeleteComponent,DeleteDialogComponent]
})
export class EmployeeListModule { }
