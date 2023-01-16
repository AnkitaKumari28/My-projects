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
    Gender:string="";
    dob:any;
    country: string="";
    state: string="";
    city:string="";


    gender:any[]=[
        {value:"male"},
        {value:"female"}
    ];

    Country:any[]=[
        {value:"INDIA"},
        {value:"US"},
        {value:"FRANCE"}
    ];

    State:any[]=[
        
        {country :"INDIA", state:["Bihar", "UP","Delhi" ]},
        {country :"US", state:["Utah", "Texas","Virginia" ]},
        {country :"FRANCE", state:["Corsica","Paris" ]}
        
    ];
    stateList:any[]=[];

    City:any[]=[
        {State :"Bihar", city:["Bgp", "Muzaffarpur","Siwan" ]},
        {State :"UP", city:["Banaras", "Kanpur","Nodia" ]},
        {State :"Delhi", city:["Siri", "Firozabad","New Delhi" ]},


        {State :"Utah", city:["Provo", "Park City"]},
        {State :"Texas", city:["Austin", "Dallas"]},
        {State :"Virginia", city:["Hampton", "Chesapeake"]},

        {State :"Corsica", city:["Calvi", "Piana"]},
        {State :"Paris", city:["Auteuil", "Bastille"]},

        
    ];
    cityList:any[]=[];

    saveForm(form:NgForm){
        console.log(form);
        console.log(form.value);
    }
    countrySelection(){
        this.stateList=this.State.find(e=>e.country==this.country).state;
    }

    citySelection(){
        this.cityList=this.City.find(e=>e.state==this.state).city;
    }
}