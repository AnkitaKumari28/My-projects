import { Injectable } from "@angular/core";

@Injectable()

export class LoginService{

    users:any[]=[
        {username:"admin", password:"admin"}
        // {username:"ankita",password:"ankita" }
    ];
        Validate(name:string,password:string){
                if(name==this.users[0].username && password==this.users[0].password){
                    return true;
                }
                  else{
                   alert("enter valid credentials");
                     return false;
                  }
            }
        
            getusers():any[] {
                return this.users;
            }
           
        }

