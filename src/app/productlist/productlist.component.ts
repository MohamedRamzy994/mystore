import { Product } from './../models/product';
import { ProductService } from './../services/getallproducts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
   allProducts: Product[]=[];

   // inject my service to component class constractor and subscribe to the observalble and assign response to allproducts property
  constructor(private productService:ProductService) {

     productService.GetAllProducts().subscribe(res=>{ this.allProducts = res; }  );

   }

  ngOnInit(): void {

  }



}
