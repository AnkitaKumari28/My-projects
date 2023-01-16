import { Component, OnInit } from '@angular/core';
import { CompService } from '../Services/comp.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
name2:string='';
  constructor(private _compService:CompService) { }

  ngOnInit(): void {
    this._compService.name$.subscribe((name:string)=>{
      this.name2=name
    })
  }

}
