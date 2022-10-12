import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError ,BehaviorSubject} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GetallproductsService {
  // using rxjs behaviorsubject to remain state shared between independent components (prouctlis,productdetails,cartlist)
 private allProductsData = new BehaviorSubject<Product[]>([]);
 public allProducts= this.allProductsData.asObservable();
 private selectedProductData = new BehaviorSubject<Product>({id:0,name:"",price:0,url:"",description:"",amount:0, cart:false});
 public selectedProduct = this.selectedProductData.asObservable();


  // this is the root apiurl to get request from data.json file .
  private apiUrl = 'assets/data.json';


  // inject httpclient to my service to make a get request and fetchdata as observable<product[]>
  constructor(private http:HttpClient) {

    this.GetAllProducts().subscribe(res=> this.allProductsData.next(res));

  }

   // this method return an observable of array of product model
   GetAllProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(this.apiUrl);

  }

   // this method return void and  used internal to update state of selected product model

  GetSelectedProduct(product:number):void {

    this.allProducts.subscribe(res=>{

      this.selectedProductData.next(res.find(x=>x.id== product) as Product);


    })


  }
}
