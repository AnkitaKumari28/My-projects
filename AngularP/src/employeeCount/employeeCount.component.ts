import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'empCount',
    templateUrl:'./employeeCount.component.html'
})

export class employeeCountComponent{
    @Input()
    allCount:number=0;

    @Input()
    maleCount:number=0;

    @Input()
    femaleCount:number=0;

    selectedRBValue:string="All";

    @Output()
   rbselectionChange:EventEmitter<string>=new EventEmitter<string>();

   onRadioButtonSelectionChange(){
    this.rbselectionChange.emit(this.selectedRBValue);
   }
}