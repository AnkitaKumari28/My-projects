import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { employeeListService } from "src/app/Service/service.component";

@Component({
    selector:'empList',
    templateUrl:'./empList.component.html',
    providers:[employeeListService]
})
export class empListComponent{
    
    constructor(public _data:employeeListService){

    } 
    employ:any[]=this._data.getData();   
    selectedRbValue:string="All";
    
    // employ:any[]=[
    //     {code:1, name:"Messy", gender:"male", address:"India", salary:40000},
    //     {code:2, name:"Rehan", gender:"male", address:"UK", salary:50000},
    //     {code:3, name:"Amy", gender:"female", address:"US", salary:45000},
    //     {code:4, name:"Rachel", gender:"female", address:"AUS", salary:42000}
    // ];

   getTotalEmployeeCount():number{
    return this.employ.length;
   }
    
   getMaleEmployeeCount():number{
    return this.employ.filter(e=>e.gender==="male").length;
   }

   getFemaleEmployeeCount():number{
    return this.employ.filter(e=>e.gender==="female").length;
   }

   gettingtheSelectedRadioButtonValue(value:string){
    this.selectedRbValue=value;
   }
//    navigate(empy:any){
//         alert(empy.code);
//    }
   
}