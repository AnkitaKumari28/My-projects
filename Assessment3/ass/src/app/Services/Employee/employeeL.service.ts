import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core'
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {
    navigate(arg0: any[]) {
      throw new Error('Method not implemented.');
    }
    
    employeeURL:string='api/employees';
    constructor(private _http:HttpClient){

    }
    getEmployeeByApi():Observable<any[]>{
       return this._http.get<any[]>(this.employeeURL);
    }
    
}