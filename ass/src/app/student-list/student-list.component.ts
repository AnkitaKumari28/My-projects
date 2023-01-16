import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
totalmarks:number=0;
list:any[]=[
  {StudentId:1, FirstName:"Nick",MiddleName:"",LastName:"Mark",Class:"X",RollNo:23,Math:70,English:80,Hindi:70,Science:90,Drawing:90 },
  {StudentId:2, FirstName:"Amy",MiddleName:"grey",LastName:"dilo",Class:"X",RollNo:24,Math:43,English:40,Hindi:50,Science:37,Drawing:69 },
  {StudentId:3, FirstName:"JIm",MiddleName:"",LastName:"gelle",Class:"X",RollNo:25,Math:20,English:80,Hindi:70,Science:90,Drawing:90 },
  {StudentId:4, FirstName:"Rachel",MiddleName:"",LastName:"green",Class:"X",RollNo:32,Math:70,English:80,Hindi:70,Science:90,Drawing:90 },
  {StudentId:5, FirstName:"aman",MiddleName:"kumar",LastName:"singh",Class:"X",RollNo:27,Math:70,English:32,Hindi:70,Science:90,Drawing:90 },
  {StudentId:6,FirstName:"Nicky",MiddleName:"",LastName:"Mark",Class:"X",RollNo:28,Math:30,English:36,Hindi:40,Science:61,Drawing:50 },
  {StudentId:8,FirstName:"mike",MiddleName:"",LastName:"Mark",Class:"X",RollNo:29,Math:70,English:80,Hindi:70,Science:30,Drawing:30 },
  {StudentId:9,FirstName:"Nick",MiddleName:"",LastName:"Mark",Class:"X",RollNo:30,Math:70,English:80,Hindi:70,Science:90,Drawing:90 },
  {StudentId:10,FirstName:"Seva",MiddleName:"",LastName:"Mark",Class:"X",RollNo:31,Math:70,English:80,Hindi:70,Science:21,Drawing:90 }

];

 }

