import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './employee-list/Delete/delete.component';

import { EditComponent } from './employee-list/Edit/edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ViewComponent } from './employee-list/View/view.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateComponent } from './Product/Create/create.component';
import { EditProductComponent } from './Product/edit-product/edit-product.component';
import { ProductComponent } from './Product/product.component';
import { ViewProductComponent } from './Product/view-product/view-product.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'product-list-by-reactive', component:ProductComponent},
  {path:'create', component:CreateComponent},
  {path:'logout', component:LoginComponent},
  // {path:'employee-list', component:EmployeeListComponent},
  // {path:'view/:id', component:ViewComponent},
  // {path:'employee-list/edit/:id', component:EditComponent},
  // {path:'employee-list/delete/:id', component:DeleteComponent},
  {path:'product-list-by-reactive/edit/:id', component:EditProductComponent},
  {path:'product-list-by-reactive/view/:id', component:ViewProductComponent},
  {path:'employee-list',
    loadChildren:()=>import('./employee-list/employee-list.module').then(x=>x.EmployeeListModule)
  },
  {path:'**', component:PagenotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

