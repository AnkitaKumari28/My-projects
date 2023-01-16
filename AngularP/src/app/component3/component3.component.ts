import { Component, OnInit } from '@angular/core';
import { CompService } from '../Services/comp.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
name3:string='';
  constructor(private _compService:CompService) { }

  ngOnInit(): void {
    this._compService.name$.subscribe((name:string)=>{
      this.name3=name})
  }

}
