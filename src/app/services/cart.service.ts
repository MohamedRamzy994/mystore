import { ProductService } from './getallproducts.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// this service is responsible for shopping cart tasks as reviewer asked to seprate my services
export class CartService {
  // using rxjs behaviorsubject to remain state shared between independent components (prouctlis,productdetails,cartlist)
 private allProductsData = new BehaviorSubject<Product[]>([]);
 public allProducts= this.allProductsData.asObservable();


  // this is the root apiurl to get request from data.json file .
  private apiUrl = 'assets/data.json';


  // inject httpclient to my service to make a get request and fetchdata as observable<product[]>
  constructor(private productService:ProductService) {

    this.productService.GetAllProducts().subscribe(res=> this.allProductsData.next(res));

  }

  // this method is responsible for adding product to shopping cart
  addToCart(product:Product):void{
      this.allProducts.subscribe(res=>{

      let selected=  res.filter(x=>x.id== product.id).map(x=>{
        x.cart=true; x.amount=product.amount
      return x
      });

      this.allProductsData.next(selected);




      })
  }


}
