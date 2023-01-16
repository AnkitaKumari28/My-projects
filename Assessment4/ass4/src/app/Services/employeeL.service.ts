import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core'
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {
   
    
    employeeURL:string='api/employees';
    constructor(private _http:HttpClient){

    }
    getEmployeeByApi():Observable<any[]>{
       return this._http.get<any[]>(this.employeeURL);
    }
    
}