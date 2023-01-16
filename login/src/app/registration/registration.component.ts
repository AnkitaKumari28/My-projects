import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 name1:string="";
 email2:string="";
 password2:string="";
 password3:string="";

  constructor() { }

  ngOnInit(): void {
  }
  RegisterForm(form:NgForm){
    console.log(form);
    console.log(form.value);
   }
}
