import { Component, OnInit } from '@angular/core';
import { CompService } from '../Services/comp.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
name:string='';
  constructor(private _compService:CompService) { }

  ngOnInit(): void {
  }
  submit(){
    this._compService.name$.next(this.name);
  }

}
