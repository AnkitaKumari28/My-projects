import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
//import { Observable } from 'rxjs';

export class EmpDataService implements InMemoryDbService{
    employees:any[]= [];
    constructor(){

    }   
    
    createDb() {
       return {
        employees: [
            {code:'1',firstname:"Sunil",middlename:"Kumar",lastname:"Sen", email:"ank@gmail.com", contactnumber:"9876543210",gender:"male", dob:"09/08/1998", employeetype:"Contract", address:"IND",pincode:637452},
            {code:'2',firstname:"Sunita",middlename:"Kumari",lastname:"Sen", email:"ask@gmail.com", contactnumber:"9876543210",gender:"female", dob:"09/08/1998", employeetype:"Permanent", address:"IND",pincode:637452},
            {code:'3',firstname:"Ankit",middlename:"Kumar",lastname:"Sen", email:"ankit@gmail.com", contactnumber:"9876543210",gender:"male", dob:"09/08/1998", employeetype:"Contract", address:"IND",pincode:637452},
            {code:'4',firstname:"Nidhi",middlename:"Kumari",lastname:"Singh", email:"nid@gmail.com", contactnumber:"9876543210",gender:"female", dob:"09/08/1998", employeetype:"Permanent", address:"IND",pincode:637452},
            {code:'5',firstname:"Shubham",middlename:"Kumar",lastname:"Sen", email:"sub@gmail.com", contactnumber:"9876543210",gender:"male", dob:"09/08/1998", employeetype:"Contract", address:"IND",pincode:637452},
            {code:'6',firstname:"Aditi",middlename:"Kumari",lastname:"Singh", email:"adi@gmail.com", contactnumber:"9876556210",gender:"female", dob:"09/08/1998", employeetype:"Permanent", address:"IND",pincode:637452},

        ]
    };    
    }
    

}
