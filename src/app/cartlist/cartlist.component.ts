import { Product, CustomerInfo } from './../models/product';
import { GetallproductsService } from './../services/getallproducts.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.scss']
})
export class CartlistComponent implements OnInit {

  // cartitems , total , customer info model properties
  total:number=0;
  cartItems: Product[] = [];
  customer:CustomerInfo={fullname:"",address:"",creditcard:""};

  // inject product service and router service to component constractor
  constructor(
    private productService: GetallproductsService,
    private route:Router
  ) {


  }

  ngOnInit(): void {
    // get cartitems  which has the cart property true and intializse the cartItems property
    this.productService.allProducts.subscribe(res => this.cartItems = res.filter(x => x.cart == true));

    // get total of products by multiply price by amount and sum each item
   this.total= this.getTotal();
  }

      //  this method return total of products by multiply price by amount and sum each item
  getTotal(): number {
    this.total=0;
    let calc= this.cartItems.map(t=>t.amount*t.price);
    calc.forEach((x)=> this.total+=x);

    return this.total;
  }

  // this submit method  get customer info  and navigate to the confirm order sucess with paramters
  Submit():void{

    this.route.navigate(["/confirmorder"],{queryParams:{fullname:this.customer.fullname,orderTotal:this.total}});
  }



}
