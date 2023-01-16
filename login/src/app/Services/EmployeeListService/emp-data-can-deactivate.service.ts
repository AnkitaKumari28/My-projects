import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { EditComponent } from "src/app/employee-list/Edit/edit.component";

@Injectable()

export class EmployeeDetailsCanDeactivateGuardService implements CanDeactivate<EditComponent>{

    constructor(){}

    canDeactivate(component: EditComponent):boolean{
        if(component.editEmpForm.dirty)
        {
         return confirm('Are you sure you want to discard your changes?')
        }
        else
        return true;
    }
}