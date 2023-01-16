import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employeelist',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList:any[]=[
    {firstname:"Ankita", middlename:"Kumari", lastname:"khan", age:24, dob:"28/03/99" },
    {firstname:"Aman", middlename:"Kumar", lastname:"Gupta", age:24, dob:"28/03/99" },
    {firstname:"jenny", middlename:"aniston", lastname:"Geller", age:24, dob:"28/03/99" },
    {firstname:"Rachel", middlename:"Karen", lastname:"Green", age:24, dob:"28/03/99" }
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
