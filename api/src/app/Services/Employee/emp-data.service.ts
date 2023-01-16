import { InMemoryDbService } from "angular-in-memory-web-api";
import { IEmployee } from "src/app/Model/employeeL.interface";

export class EmpDataService implements InMemoryDbService{

    constructor(){}
 
    //ONE WAY (throwing error)
    // employees:IEmployee[]=[
    //     {code:1, name:"Ankita", gender:"female"} ,
    //     {code:2, name:"Nikita", gender:"female"} ,
    //     {code:3, name:"Amit", gender:"male"} 
    //  ];
    // createDb() {   
    //     return this.employees;
    // }


    //SECOND WAY
    createDb() {
    
        return {
            employees:[
                {code:1, name:"Ankita", gender:"female"} ,
                {code:2, name:"Nikita", gender:"female"} ,
                {code:3, name:"Amit", gender:"male"} 
            ]
        };
    }
}