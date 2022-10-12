import { Product } from './../models/product';
import { GetallproductsService } from './../services/getallproducts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  // this property is responsible to store select product details
  public currentProducts: Product ;

  constructor(private productService:GetallproductsService , private route:ActivatedRoute) {

    // initialise the select product from product list
    this.currentProducts  = {id:0,name:"",price:0,url:"", description:'',amount:1, cart:false};


   }

  ngOnInit(): void {


    this.getProduct();
    this.productService.selectedProduct.subscribe(res=>this.currentProducts = res);

  }
  // this method is responsible for adding current product to the shopping cart  and alert the user with successful message

  addToCart():void{
   this.currentProducts.cart= true;
   alert(`${this.currentProducts.name} Product addedd successfully to the shopping cart ! `);
  }

  // this method responsible for receiving the paramter passed id and update state of selected product in the service
  getProduct():void{

      this.productService.
      GetSelectedProduct(parseInt(this.route.snapshot.paramMap.get("id") || "" ,10));


  }

}
