import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from 'src/EmployeeList/employeeList.component';
import { employeeRegistration } from 'src/EmployeeRegistration/employeeRegistration.component';

import { AppComponent } from './app.component';


const routes:Routes=[
  { path:'emp',component:employeeRegistration},
  { path:'emp-list',component:EmployeeListComponent}
]
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Emp</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" routerLink="emp" aria-current="page" href="#">Employee</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="emp-list" href="#">Employee List</a>
         
         
        </ul>
      </div>
    </div>
  </nav>
  <router-outlet></router-outlet>
