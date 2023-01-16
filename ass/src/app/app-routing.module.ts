import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {path:'person', component:PersonComponent},
  {path:'student', component:StudentListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
