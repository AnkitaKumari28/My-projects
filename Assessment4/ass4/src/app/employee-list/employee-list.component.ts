import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Services/employeeL.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: any[]=[];
  displayedColumns: string[] = ['SrNo', 'name', 'email','contactnumber', 'dob', 'address'];
  dataSource:any[]=[];
  constructor(private _empService:EmployeeService) { }

ngOnInit() {
  
    this._empService.getEmployeeByApi().subscribe((empdata)=>{
      this.dataSource=empdata})
}
}
