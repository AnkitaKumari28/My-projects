import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector:'emp',
    templateUrl:'./employeeRegistration.component.html'
})
export class employeeRegistration{

    firstname:string="";
    middlename:string="";
    lastname:string="";
    age:number=0;
    Gender:string="";
    dob:any;
    address1:string="";
    address2:string="";
    pincode:number=0;
    


    gender:any[]=[
        {value:"male"},
        {value:"female"}
    ];

    

    saveForm(form:NgForm){
        console.log(form);
        console.log(form.value);
    }
    
    
}