import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../Services/LoginService/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

//  users:any[]=[];
 user:string="";
 password:string="";
 isLogin:boolean=false;
 issignup:boolean=false;
 


 constructor(private _loginservice:LoginService){}

 user1=this._loginservice.getusers();
 
 ngOnInit(): void {
 }

 LoginForm(form:NgForm){
  console.log(form);
  console.log(form.value);
 }
onClick(){

  this.isLogin=this._loginservice.Validate(this.user, this.password); 

}
onclicksignup(){
  this.issignup=!this.issignup;
 

}

}

