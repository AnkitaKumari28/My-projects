import {Injectable} from '@angular/core'
@Injectable()

export class EmployeeService{
    employees:any[]=[
        {firstname:"Ankita",middlename:"Kumari",lastname:"singh", gender:"female",address1:"bgp", address2:"Bihar", salary:20000, pincode:123456, usertype:"permanent"},
        {firstname:"arima",middlename:"Kumari",lastname:"singh", gender:"female", address:"patna", address2:"Bihar", salary:20000, pincode:123456, usertype:"permanent"},
        {firstname:"ajay",middlename:"Kumar",lastname:"singh", gender:"male", address:"gaya", address2:"Bihar", salary:20000, pincode:123456, usertype:"contractual"},
        {firstname:"aman",middlename:"Kumar",lastname:"singh",gender:"male", address:"bgp", address2:"Bihar", salary:20000, pincode:123456, usertype:"permanent"},
        {firstname:"Ankita",middlename:"Kumari",lastname:"singh", gender:"female", address:"patna", address2:"Bihar", salary:20000, pincode:123456, usertype:"contractual"},
        {firstname:"Ankita",middlename:"Kumari",lastname:"singh", gender:"female", address:"gaya", address2:"Bihar", salary:20000, pincode:123456, usertype:"permanent"},
        {firstname:"Rima",middlename:"Kumari",lastname:"singh", gender:"female", address:"bgp", address2:"Bihar", salary:20000, pincode:123456, usertype:"contractual"},
        {firstname:"ajay",middlename:"Kumar",lastname:"singh",gender:"male",address:"patna", address2:"Bihar", salary:20000, pincode:123456, usertype:"permanent"},
        {firstname:"Rahul",middlename:"Kumar",lastname:"singh",gender:"male",address:"gaya", address2:"Bihar", salary:20000, pincode:123456, usertype:"contractual"},
        {firstname:"Nidhi",middlename:"Kumari",lastname:"singh",gender:"female",address:"siwan", address2:"Bihar", salary:20000, pincode:123456, usertype:"permanent"}
    ];
    getEmployees():any[]{
        return this.employees;
    }
}