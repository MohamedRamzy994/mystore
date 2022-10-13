import { Product } from './../../models/product';
import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.scss']
})
export class CartitemComponent implements OnInit {

      // here  i resolved the second issue  using output decorator to share data from child to parent  specification as reviewer asked me to modify it

  @Input() cartitem:Product;
  @Output() GetTotal: EventEmitter<Product> = new  EventEmitter<Product>();
  constructor() {

    this.cartitem  = {id:0,name:"",price:0,url:"", description:'',amount:1, cart:false};

   }

  ngOnInit(): void {
  }

  // this method to emit the value here it is the product itself to the parent component which is cartlist component
  getTotal():void{

    this.GetTotal.emit(this.cartitem);

  }

}
