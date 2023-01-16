import {InMemoryDbService} from 'angular-in-memory-web-api';


export class EmpDataService implements InMemoryDbService{
    employees:any[]= [];
    constructor(){

    }   
    
    createDb() {
       return {
        employees: [
            {SrNo:'1',firstname:"Sunil",middlename:"Kumar",lastname:"Sen", email:"ank@gmail.com", contactnumber:"9876543210", dob:"09/08/1998",  address:"PAK"},
            {SrNo:'2',firstname:"Sunita",middlename:"Kumari",lastname:"Sen", email:"ask@gmail.com", contactnumber:"9876543210", dob:"09/08/1998", address:"IND"},
            {SrNo:'3',firstname:"Ankit",middlename:"Kumar",lastname:"Sen", email:"ankit@gmail.com", contactnumber:"9876543210", dob:"09/08/1998", address:"IND"},
            {SrNo:'4',firstname:"Nidhi",middlename:"Kumari",lastname:"Singh", email:"nid@gmail.com", contactnumber:"9876543210", dob:"09/08/1998",  address:"USA"},
            {SrNo:'5',firstname:"Shubham",middlename:"Kumar",lastname:"Sen", email:"sub@gmail.com", contactnumber:"9876543210", dob:"09/08/1998",  address:"IND"},
            {SrNo:'6',firstname:"Aditi",middlename:"Kumari",lastname:"Singh", email:"adi@gmail.com", contactnumber:"9876556210", dob:"09/08/1998",  address:"AUS"},
            {SrNo:'7',firstname:"Aditya",middlename:"Kumar",lastname:"Singh", email:"adi1@gmail.com", contactnumber:"9876558210", dob:"08/08/1998",  address:"AUS"},
            {SrNo:'8',firstname:"Aman",middlename:"Kumar",lastname:"Singh", email:"aman@gmail.com", contactnumber:"9876956210", dob:"09/08/1997",  address:"IND"},
            {SrNo:'9',firstname:"Ankita",middlename:"Kumari",lastname:"Singh", email:"anki@gmail.com", contactnumber:"9806556210", dob:"09/08/1998",  address:"IND"},
            {SrNo:'10',firstname:"Karan",middlename:"Kumar",lastname:"Raj", email:"Kar@gmail.com", contactnumber:"9876556211", dob:"09/07/1998",  address:"AUS"},

        ]
    };    
    }
    

}
