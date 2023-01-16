import { Component, OnInit } from '@angular/core';
import { CompService } from '../Services/comp.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {
  name4:string='';
  constructor(private _compService:CompService) { }

  ngOnInit(): void {
    this._compService.name$.subscribe((name:string)=>{
      this.name4=name
    })
  }

}
