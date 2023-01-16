import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {


firstname:string="";
middlename:string="";
lastname:string="";
Gender:string="";
dob:any;
Department:string="";


 person(item:any){
  console.log(item);
 }
 gender:any[]=[
  {value:"male"},
  {value:"female"}
];

department:any[]=[
  {value:"IT"},
  {value:"HR"},
  {value:"Payroll"},
  {value:"Networking"},
  {value:"Admin"}

];

pop(){
  alert("Your details inserted successfully");
}

  constructor() { }

  ngOnInit(): void {
  }

}
