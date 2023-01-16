import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from 'src/app/Model/employeeList.interface';
import { EmployeeListService } from 'src/app/Services/EmployeeListService/employee-list.service';
import { DeleteDialogComponent } from './delete.dialog';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  providers:[EmployeeListService ]
  
})
export class DeleteComponent implements OnInit {
  
 
    storeCode:string='';
    empList:IEmployee={
      code: 0,
      name: '',
      gender: '',
      address: '',
      salary: 0
    };
  constructor(private _routed:ActivatedRoute, private _List:EmployeeListService, private _route:Router, private dialog:MatDialog) { }

  ngOnInit(): void {

    this.storeCode= this._routed.snapshot.paramMap.get('id')!

    this._List.getDatabyId(this.storeCode).subscribe(x=>this.empList=x);
  }

  deleteBack(){
    this._route.navigate(['/employee-list']);
  }

  openDialog(){
    this.dialog.open(DeleteDialogComponent);
   }

}