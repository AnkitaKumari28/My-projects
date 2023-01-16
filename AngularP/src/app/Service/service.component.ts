import { Injectable } from "@angular/core";
@Injectable()

export class employeeListService{

    employ:any[]=[
        {code:1, name:"Messy", gender:"male", address:"India", salary:40000},
        {code:2, name:"Rehan", gender:"male", address:"UK", salary:50000},
        {code:3, name:"Amy", gender:"female", address:"US", salary:45000},
        {code:4, name:"Rachel", gender:"female", address:"AUS", salary:42000}
    ];

    getdatabyId(id:string| null){
        return this.employ.filter(e=>e.code==id);
    }

    getData(){
        return this.employ;
    }
}