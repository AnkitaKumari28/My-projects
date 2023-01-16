import { DataSource } from "@angular/cdk/collections";

import { Component, OnInit } from "@angular/core";
import{EmployeeService} from 'src/Services/Employee/employee.service';
@Component({
    selector:'emp',
    templateUrl:'./emp.component.html'
})

export class EmployeeComponent implements OnInit{
    employees:any[]=[];
    displayedColumns: string[]= ['firstname', 'middlename', 'lastname','gender','address1','address2','salary','pincode','usertype'];
    dataSource:any[]=[];

    constructor(protected employee:EmployeeService){
        
        }
    ngOnInit(): void{
        this.employees=this.employee.getEmployees();
        this.dataSource=this.employees;
    }
   
}