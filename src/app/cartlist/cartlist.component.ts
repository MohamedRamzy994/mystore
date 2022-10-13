import { CartService } from './../services/cart.service';
import { Product, CustomerInfo } from './../models/product';
import { ProductService } from './../services/getallproducts.service';
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

  // inject cart service and router service to component constractor
  constructor(
    private cartService: CartService,
    private route:Router
  ) {


  }

  ngOnInit(): void {
    // get cartitems  which has the cart property true and intializse the cartItems property
    this.cartService.allProducts.subscribe(res => this.cartItems = res.filter(x => x.cart == true));

    // get total of products by multiply price by amount and sum each item
   this.total= this.getTotal({id:0,amount:0,cart:false,description:"",name:"",price:0,url:""});
  }

      //  this method return total of products by multiply price by amount and sum each item
      // here  i resolved the remove from cart specification as reviewer asked me to modify it
  getTotal(product:Product): number {


    //  this condition to calc for first time
    if (product.id == 0) {
      this.total=0;
      let calc= this.cartItems.map(t=>t.amount!*t.price!);
      calc.forEach((x)=> this.total+=x);

      return this.total;
    }
    //  this condition to calc for every time  ng modelchange fired from the child using eventemiiter output decorator from cartitem component
    // here  i resolved the remove from cart specification as reviewer asked me to modify it
    else {

      // debugger;
      this.total=0;
      if(product.amount==0){


      this.cartItems=  this.cartItems.filter(x=>x.id!=product.id);

      alert(" successfuly removed the product from the shopping cart  !");

      }else{

        this.cartItems.filter(x=>x.id==product.id).map(t=>t.amount=product.amount);
        let calc= this.cartItems.map(t=>t.amount! * t.price! );
         calc.forEach((x)=> this.total+=x);
      }



      return this.total;
    }

  }

  // this submit method  get customer info  and navigate to the confirm order sucess with paramters
  Submit():void{

    this.route.navigate(["/confirmorder"],{queryParams:{fullname:this.customer.fullname,orderTotal:this.total}});
  }



}
