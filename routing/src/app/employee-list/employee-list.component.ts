import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],

})
export class EmployeeListComponent implements OnInit {

  constructor( private _router:Router) { }

  ngOnInit(): void {
  }
 employ:any[]=[
        {code:1, name:"Messy", gender:"male", address:"India", salary:40000},
        {code:2, name:"Rehan", gender:"male", address:"UK", salary:50000},
        {code:3, name:"Amy", gender:"female", address:"US", salary:45000},
        {code:4, name:"Rachel", gender:"female", address:"AUS", salary:42000}
    ];

    //navigation through ts 

    navigate(emp:any){
      //alert(emp.name);
      this._router.navigate(['/employee',emp.code]);
    }
    // getEmpById(id:string):any{
    //   this.employ.filter(e=>e.code==id);
     
    // }

}
