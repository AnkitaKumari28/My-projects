import { InMemoryDbService, RequestInfo } from "angular-in-memory-web-api";
import { Observable } from "rxjs";

export class EmpDataService implements InMemoryDbService{
    constructor(){

    }
    createDb(){

        return {
            employ:[
                {code:1, name:"Messy", gender:"male", address:"India", salary:40000},
                {code:2, name:"Rehan", gender:"male", address:"UK", salary:50000},
                {code:3, name:"Amy", gender:"female", address:"US", salary:45000},
                {code:4, name:"Rachel", gender:"female", address:"AUS", salary:42000},
                {code:5, name:"Ross", gender:"male", address:"AUS", salary:42000},
                {code:6, name:"Chandler", gender:"male", address:"ENG", salary:45000},
                {code:7, name:"Phoebe", gender:"female", address:"AUS", salary:55000},
                {code:8, name:"Sheldon", gender:"male", address:"ENG", salary:42000},
                {code:9, name:"Lenerd", gender:"male", address:"AUS", salary:42000}
            ]
        };
        
    }
    

}