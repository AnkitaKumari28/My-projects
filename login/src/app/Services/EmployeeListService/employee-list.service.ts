import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";
import { IEmployee } from "src/app/Model/employeeList.interface";

@Injectable()

export class EmployeeListService{
    emp:any;
    employeeListUrl:string='api/employ';
    constructor(private _http:HttpClient){

    }

       
    // getData(){
    //     return this.employ;
    // }
    
    // getDatabyId(id:string|null){
    //     return this.employ.find(e=>e.code==+(id)!)
    // }

    getEmployeeListByApi():Observable<IEmployee[]>{
        return this._http.get<IEmployee[]>(this.employeeListUrl);
    }

    getDatabyId(id:string):Observable<IEmployee>{
        let subject=new ReplaySubject<IEmployee>()
        this._http.get<IEmployee[]>(this.employeeListUrl).subscribe((data)=>{
            this.emp=data.find(x=>x.code==+(id));
            subject.next(this.emp);
            subject.complete();
    });
    return subject;
}

    
}