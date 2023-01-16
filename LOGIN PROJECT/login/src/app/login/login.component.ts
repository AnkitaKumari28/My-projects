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
//  user:string="";
//  pass:string="";
//  isLogin:boolean=false;
//  issignup:any;


 constructor(private _loginservice:LoginService){}

 user1=this._loginservice.getusers();
 
 ngOnInit(): void {
 }

 LoginForm(form:NgForm){
  console.log(form);
  console.log(form.value);
 }
// onClick(){
//   if(this.user==this.user1[0].username && this.pass==this.user1[0].password){
//   this.isLogin=!this.isLogin;
//   }
//   else{
//     alert("Invalid credentials");
//   }
// }
// onclicksignup(){
//   this.issignup=!this.issignup;
//   this.isLogin=!this.isLogin;

// }

}
