import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  EmployeeForm!:FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.EmployeeForm=this._fb.group({
        firstname:['', Validators.required],
        middlename:[''],
        lastname:['', Validators.required],
        email:['',Validators.required],
        contactNo:[null,[Validators.required, Validators.min(0),Validators.max(9999999999)]],
        gender:[null,[Validators.required]],
        dob:['',Validators.required],
        employeetype:[''],
        address:['',Validators.required],
        pincode:[null,[,Validators.required, Validators.min(0),Validators.max(999999)]]
    })
    
}
gender:any[]=[
  {value:"male"},
  {value:"female"}
];

employeetype:any[]=[
  {value:"Contract"},
  {value:"Permanent"}
];
submit(){
}
}
