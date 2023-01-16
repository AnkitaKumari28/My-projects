import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IEmployee } from "src/app/Model/employeeList.interface";
import { EmployeeListService } from "src/app/Services/EmployeeListService/employee-list.service";

@Component({
    selector:'app-view',
    templateUrl:'./view.component.html',
    providers:[EmployeeListService]
})

export class ViewComponent{
    
    // list:any[]=[];
    code:number=0;
    name:string='';
    gender:string='';
    address:string='';
    salary:number=0;
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
    console.log(this.empList);
    
    this.code=this.empList.code;
    this.name=this.empList.name;
    this.gender=this.empList.gender;
    this.address=this.empList.address;
    this.salary=this.empList.salary;
    //console.log(this.empList);
    //console.log(this.storeCode);

  }
  viewBack(){
    this._route.navigate(['/employee-list']);
  }
}
