import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { employeeListService } from '../Service/service.component';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  providers:[employeeListService]
})
export class ShowComponent implements OnInit {

  constructor(public _data:employeeListService, public _route:ActivatedRoute) { 

  }
  empId:string|null="";
  empData:any[]=[];

  ngOnInit(): void {
   this.empId=this._route.snapshot.paramMap.get('id');
   this.empData=this._data.getdatabyId(this.empId);


  }


}
