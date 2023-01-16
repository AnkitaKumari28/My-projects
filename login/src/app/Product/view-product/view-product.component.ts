import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Model/productList.interface';
import { ProductService } from 'src/app/Services/ProductService/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

    image: string='';
    category:string= '';
    name: string='';
    color:string='';
    code: string='';
    quantity: number=0;
    price:number= 0;
    email:string='';
    description:string= '';
    storeProductViewCode: string='';

  prodList:IProduct={
    image: '',
    category: '',
    name: '',
    color: '',
    code: '',
    quantity: 0,
    price: 0,
    description: ''
  }
  constructor(private _prod:ProductService, private _routed:ActivatedRoute, private _route:Router) { }

  ngOnInit(): void {
    this.storeProductViewCode= this._routed.snapshot.paramMap.get('id')!
    this.prodList=this._prod.getSingleProduct(this.storeProductViewCode)!;

    this.category=this.prodList.category;
    this.name=this.prodList.name;
    this.color=this.prodList.color;
    this.code=this.prodList.code;
    this.quantity=this.prodList.quantity;
    this.price=this.prodList.price;
    this.email
    this.description=this.prodList.description
  }

  // viewBack(){
  //   this._route.navigate(['/']);
  // }
}
