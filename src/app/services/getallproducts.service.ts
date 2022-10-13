import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // this is the root apiurl to get request from data.json file .
  private apiUrl = 'assets/data.json';


  // inject httpclient to my service to make a get request and fetchdata as observable<product[]>
  constructor(private http: HttpClient) {

  }

  // this method return an observable of array of product model
  GetAllProducts(): Observable<Product[]> {

    return this.http.get<Product[]>(this.apiUrl);

  }
}
