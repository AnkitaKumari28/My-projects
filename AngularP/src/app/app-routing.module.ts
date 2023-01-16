import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { empComponent } from 'src/emp/emp.component';
import { empListComponent } from 'src/empList/empList.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {path:'emp', component:empComponent},
  {path:'emp/:id', component:ShowComponent},
  {path:'empList', component:empListComponent},
  {path:'empList/:id', component:empListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
