import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './Delete/delete.component';
import { EditComponent } from './Edit/edit.component';
import { EmployeeListComponent } from './employee-list.component';
import { ViewComponent } from './View/view.component';

    const routes:Routes=[
        {
            path:'',
            children:[
                //{path:'employee-list', component:EmployeeListComponent},
                {path:'', component:EmployeeListComponent},
                {path:'view/:id', component:ViewComponent},
                {path:'edit/:id', component:EditComponent},
                {path:'delete/:id', component:DeleteComponent},
            ]
        },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeListRoutingModule { }

