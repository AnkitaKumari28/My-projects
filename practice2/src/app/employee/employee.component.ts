import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeDialogComponent } from './employee-dialog/employee.dialog';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  firstname:string="";
  middlename:string="";
  lastname:string="";
  email:string="";

   emp(item:any){
    console.log(item);
   }
  

  constructor(private dialog:MatDialog) { 

  }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(EmployeeDialogComponent);
  }

}
