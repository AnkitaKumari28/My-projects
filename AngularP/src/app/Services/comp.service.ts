import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class CompService{
    name$:any=new Subject();
}