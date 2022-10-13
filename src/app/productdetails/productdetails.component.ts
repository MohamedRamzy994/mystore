import { CartService } from './../services/cart.service';
import { Product } from './../models/product';
import { ProductService } from './../services/getallproducts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  // this property is responsible to store select product details
  public currentProducts!: Product ;

  constructor(private productService:ProductService ,
     private route:ActivatedRoute, private cartService:CartService) {

    // initialise the select product from product list
    this.currentProducts  = {id:0,name:"",price:0,url:"", description:'',amount:1, cart:false};


   }

  ngOnInit(): void {


    this.getProduct();


  }
  // this method is responsible for adding current product to the shopping cart  and alert the user with successful message

  addToCart():void{
   this.cartService.addToCart(this.currentProducts);
   alert(`${this.currentProducts?.name} Product addedd successfully to the shopping cart ! `);
  }

  // this method responsible for receiving the paramter passed id and update state of selected product in the service
  getProduct():void{

      this.productService.GetAllProducts().subscribe(
        res=> {

          let product= res.find(x=>x.id==parseInt(this.route.snapshot.paramMap.get("id") || "" ,10));

            this.currentProducts  = {id:product?.id,name:product?.name,price:product?.price,
              url:product?.url, description:product?.description,amount:product?.amount, cart:product?.cart};

        }
      );
}
}
