import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

employeetype:any[]=[
  {value:"Contractual"},
  {value:"Permanent"}

];
}
