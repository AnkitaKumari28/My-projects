import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  EmployeeId:string|null='';
  
  constructor(private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.EmployeeId=this._route.snapshot.paramMap.get('id');
    
  }

}
