import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/Validators/validators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {
  @ViewChild('productForm') createProductForm!:NgForm;

  productForm!:FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.productForm=this._fb.group({
        category:[''],
        name:['', Validators.required],
        color:[''],
        code:[''],
        quantity:[],
        price:[null,[Validators.required, Validators.min(0),Validators.max(50000)]],
        email:['',[Validators.required,CustomValidators.emailCheckParam('gmail.com')]],
        description:['']
    })

  }
  submit(){
    console.log(this.productForm);
    // console.log(this.productForm.get('name'));
    // console.log(this.productForm.get('name')!.errors!['required']);
    // console.log(this.productForm.get('price')!.errors!['required']);
    // console.log(this.productForm.get('price')!.errors!['min']);
    // console.log(this.productForm.get('price')!.errors!['max']);
    // console.log(this.productForm.get('email')!.errors!['required']);
    

    
    
   
  
    
  }
 

}