import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/Employee/employeeL.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  employees:any[]=[];
    constructor(private _empService:EmployeeService) { }

  ngOnInit() {
    
    this._empService.getEmployeeByApi().subscribe((empdata=>{
      this.employees=empdata;
      }))
  }


}

