import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CreateComponent } from "src/app/Product/Create/create.component";

@Injectable()
export class  ProductDetailsCanDeactivateGuardService implements CanDeactivate<CreateComponent>{

    constructor(){}
    canDeactivate(component:CreateComponent ):boolean {
        if(component:createProductForm.dirty)
        {
            return confirm('Are you sure you want to discard your changes?')
        }
        else
            return true;
       
        
    }
        
    }

