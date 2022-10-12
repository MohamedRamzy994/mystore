import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmorder',
  templateUrl: './confirmorder.component.html',
  styleUrls: ['./confirmorder.component.scss']
})
export class ConfirmorderComponent implements OnInit {

  // this properties for confirming the order message
 customerName:string | null="";
 orderTotal:string| null="";

  constructor(private route:ActivatedRoute) {


  }

  ngOnInit(): void {

    // here i am receiving paramters from the naviagte  route method and assign it to the above properties
    this.customerName =  this.route.snapshot.queryParamMap.get("fullname");
    this.orderTotal =  this.route.snapshot.queryParamMap.get("orderTotal");


  }

}
