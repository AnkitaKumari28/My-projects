import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ViewComponent } from './view/view.component';



const routes: Routes = [
  {path:'emplist', component:EmployeeListComponent},
  {path:'emplist/:id', component:EditComponent},
  {path:'emplist/:view', component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
