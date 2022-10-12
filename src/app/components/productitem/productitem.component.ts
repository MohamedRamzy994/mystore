import { GetallproductsService } from './../../services/getallproducts.service';
import { Product } from './../../models/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.scss']
})
export class ProductitemComponent implements OnInit {

  // this property is passed from parent to child component
@Input() product:Product;
  constructor( private productService:GetallproductsService) {

    // here i'm intializing the passed property or product
    this.product  = {id:0,name:"",price:0,url:"", description:'',amount:1, cart:false};

   }

  ngOnInit(): void {
  }

  // this method is responsible for adding current product to the shopping cart  and alert the user with successful message
  addToCart():void{
    this.product.cart= true;
    alert(`${this.product.name} Product addedd successfully to the shopping cart ! `);
   }

}
