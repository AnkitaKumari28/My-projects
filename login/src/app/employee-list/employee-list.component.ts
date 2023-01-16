import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IEmployee } from '../Model/employeeList.interface';
import { EmployeeListService } from '../Services/EmployeeListService/employee-list.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers:[EmployeeListService]
})

export class EmployeeListComponent implements OnInit {
 
  empoly:any[]=[]; 

  constructor(public _data:EmployeeListService, private _router:Router, private dialog:MatDialog) { }
   
  ngOnInit() {
    this._data.getEmployeeListByApi().subscribe((empdata)=>{
      this.dataSource=empdata;
    })
  }

    dataSource:IEmployee[]=[];
    displayedColumns: string[] = ['code', 'name','gender', 'Actions'];
    

    navigateToView(empIDcode:string){
      this._router.navigate(["/employee-list/view",empIDcode]);
    }

    navigateToDelete(empIDcode:string){
      this._router.navigate(["/employee-list/delete", empIDcode]);
    }
   
    navigateToEdit(empIDcode:string){
      this._router.navigate(["/employee-list/edit", empIDcode]);
    
    }
    
}
