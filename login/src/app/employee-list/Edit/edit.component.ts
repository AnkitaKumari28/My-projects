import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployee } from 'src/app/Model/employeeList.interface';
import { EmployeeListService } from 'src/app/Services/EmployeeListService/employee-list.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  providers:[EmployeeListService]
})


export class EditComponent implements OnInit {
  @ViewChild('empEdit') editEmpForm!:NgForm


    storeCode:string='';
    empList:IEmployee={
      code: 0,
      name: '',
      gender: '',
      address: '',
      salary: 0
    };

  constructor(private _routed:ActivatedRoute, private _List:EmployeeListService, private _route:Router) { }

  ngOnInit(): void {
    this.storeCode= this._routed.snapshot.paramMap.get('id')!
   
    this._List.getDatabyId(this.storeCode).subscribe(x=>this.empList=x);


  }

  saveForm(form:NgForm){

  }
  back(){
    this._route.navigate(['/employee-list']);
  }
}