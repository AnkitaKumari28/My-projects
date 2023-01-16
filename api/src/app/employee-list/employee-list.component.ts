import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../Model/employeeL.interface';
import { EmployeeService } from '../Services/Employee/Employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  // employees: IEmployee[]=[];
  employees: any[]=[];
  displayedColumns: string[] = ['code', 'name', 'gender'];
  //dataSource:IEmployee[]=[];
  dataSource:any[]=[];

  constructor(private _empService:EmployeeService) { }

  ngOnInit(): void {

    this._empService.getEmployeeByApi().subscribe((empdata)=>{
      this.dataSource=empdata})  
      
         
  }
 
   
  }

