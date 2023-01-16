import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../Model/productList.interface';
import { ProductService } from '../Services/ProductService/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  
})
export class ProductComponent implements OnInit {
 ProductList:IProduct[]=[];
 displayedColumns: string[] = ['image', 'category','name','color', 'code', 'price',  'Actions'];
 dataSource:IProduct[]=[];

  constructor(private _product:ProductService, private _router:Router) { }

  ngOnInit(): void {

    this.ProductList=this._product.getProducts();
    this.dataSource=this.ProductList;
  }
  
  navigateToProductEdit(prodCode:string){
    this._router.navigate(['/product-list-by-reactive/edit', prodCode])
  }
  navigateToProductView(prodCode:string){
    this._router.navigate(['/product-list-by-reactive/view', prodCode]);
  }
}
