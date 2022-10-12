
// this model for product with all properties
export interface Product {

  id: number,
  name: string,
  price: number,
  url: string
  description: string,
  amount:number,
  cart:boolean

}

// this model for customer information checkpout  with all properties

export interface CustomerInfo{

  fullname:string,
  address:string,
  creditcard:string

}
