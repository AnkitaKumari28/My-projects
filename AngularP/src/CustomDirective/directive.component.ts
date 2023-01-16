import { Component } from "@angular/core";

@Component({
    selector: 'cus-dir',
    templateUrl: './directive.component.html',
    styleUrls: ['./directive.component.css']
})

export class DirectiveComponent{
    showColor:boolean=true;

    employees: any[]=[
        {code:1, name:"Matt", gender:"male", address:"India", salary:40000},
        {code:2, name:"Lee", gender:"male", address:"UK", salary:50000},
        {code:3, name:"Amy", gender:"female", address:"US", salary:45000},
        {code:4, name:"Rachel", gender:"female", address:"AUS", salary:42000}
    ];
}