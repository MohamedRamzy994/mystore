import { Product } from './../models/product';
import { GetallproductsService } from './../services/getallproducts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
   allProducts: Product[]=[];

   // inject my service to component class constractor and subscribe to the observalble and assign response to allproducts property
  constructor(private productService:GetallproductsService) {

     productService.allProducts.subscribe(res=>{ this.allProducts = res; }  );

   }

  ngOnInit(): void {

  }



}
