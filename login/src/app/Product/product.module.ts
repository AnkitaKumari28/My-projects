import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';
import { CreateComponent } from './Create/create.component';
import { MaterialsModule } from '../materials/materials.module';
import { AppRoutingModule } from '../app-routing.module';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditComponent } from '../employee-list/Edit/edit.component';
import { ViewProductComponent } from './view-product/view-product.component';


@NgModule({
  declarations: [ProductComponent,CreateComponent, EditProductComponent, ViewProductComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports:[
    CreateComponent,
    EditProductComponent,
    ViewProductComponent
  ]
})
export class ProductModule { }
