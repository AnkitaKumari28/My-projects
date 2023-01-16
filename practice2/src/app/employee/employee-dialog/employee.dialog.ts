import { DialogRef } from "@angular/cdk/dialog";
import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";


@Component({
    templateUrl:'./employee.dialog.html'
})

export class EmployeeDialogComponent{
    constructor(private dialogref:MatDialogRef<EmployeeDialogComponent>){

    }

    close(){
        this.dialogref.close();
    }
}