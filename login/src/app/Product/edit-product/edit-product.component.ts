import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/Model/productList.interface';
import { ProductService } from 'src/app/Services/ProductService/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productEditForm!:FormGroup;
  constructor(private _fb:FormBuilder, private _routed:ActivatedRoute, private _prod:ProductService) { }
  product:IProduct={
    image: '',
    category: '',
    name: '',
    color: '',
    code: '',
    quantity: 0,
    price: 0,
    description: ''
  };
  storeProductCode:string=''
  ngOnInit(): void {

    this.storeProductCode= this._routed.snapshot.paramMap.get('id')!;
    this.product=this._prod.getSingleProduct(this.storeProductCode)!;
    this.productEditForm=this._fb.group({
      
      category:[`${this.product.category}`],
      name:[`${this.product.name}`, Validators.required],
      color:[`${this.product.color}`],
      code:[`${this.product.code}`],
      quantity:[`${this.product.quantity}`],
      price:[`${this.product.price}`,[Validators.required, Validators.min(0), Validators.max(50000)]],
      email:['',Validators.required],
      description:[`${this.product.description}`]
    })
 

}
submitEditedForm(){

}

}
