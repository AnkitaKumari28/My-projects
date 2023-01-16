import { Injectable } from "@angular/core";

@Injectable()

export class LoginService{
    
 user:string="";
 pass:string="";
 isLogin:boolean=false;
 issignup:any;

    users:any[]=[
        {username:"admin", password:"admin"}
    ];

    
    onClick(){
        if(this.user==this.users[0].username && this.pass==this.users[0].password){
        this.isLogin=!this.isLogin;
        }
        else{
          alert("Invalid credentials");
        }
      }
    
    onclicksignup(){
        this.issignup=!this.issignup;
        this.isLogin=!this.isLogin;
      
      }

    public getusers():any[]{
        return this.users;
    }

}