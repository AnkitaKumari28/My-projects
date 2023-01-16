import { Component } from "@angular/core";
@Component({
    selector:'emp-list',
    templateUrl: './employeeList.component.html'
})

export class EmployeeListComponent{
    list:any[]=[
        {firstname:"Ankita",middlename:"Kumari",lastname:"singh",age:22, gender:"f", dob:"12/2/99", address:"ind"},
        {firstname:"arima",middlename:"Kumari",lastname:"singh",age:22, gender:"f", dob:"12/12/99", address:"ind"},
        {firstname:"ajay",middlename:"Kumar",lastname:"singh",age:25, gender:"m", dob:"3/12/99", address:"ind"},
        {firstname:"aman",middlename:"Kumar",lastname:"singh",age:22, gender:"m", dob:"1/12/99", address:"ind"},
        {firstname:"Ankita",middlename:"Kumari",lastname:"singh",age:22, gender:"f", dob:"12/12/99", address:"ind"},
    ];
}