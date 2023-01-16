import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  name:string="";


  constructor() { }
   message="";
   mes2="";
  onClick(event: any){
    console.log(event);
    this.message="It is showing :)";
  }
  show(value:any){
    console.log(value);
  }
  ngOnInit(): void {
  }

}
