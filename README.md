# MyStore Project

This project acts as an ecommercial shopping cart  , you can see a list of products and select the product you want to add to you shopping cart with your selected amount or quantity  if you want to see your selected product details you will click on the picture of th product and you can see all details of the product in details page if you would like to add this product to you shopping cart you will click button addtocart then select your cart from th header to see you selected products and fill your information for checkout and shippign this project help you for shopping online in orgnized way, this projects is depending on angular-cross-skilling programe . 

## Getting Started

To get started using this project right away:

- install all project dependencies with `npm install`
- start the development server with `ng serve -o`
- open your browser in port 4200 you will get your project ready 

## Prerequisites
What things you need to install the software and how to install them

```
- you should have installed nodejs with npm in your local machine
- you will need code editor like vscode
- you need a browser which has javascript enabled 
```

## Important

The backend API is provided using data.json
* `data.json`. You may fetch the list of products for your store from the API created in the previous course of this Nanodegree program. In lieu of using that data, you may also choose to have your application read the provided `data.json` file to populate your store.


MYSTORE application reflects the same user experience as that of a real-world e-commerce website, including a(n):
* **Product list** page, which displays the available products for the user to choose and add to their cart (in various quantities) this is  (productlist component)
* **Product details** page, which displays more information about any particular product
this is  (productdetils component)
* **Shopping cart**, which includes the products that the user has added to their cart
this is  (cartlist component)
* **Checkout form**, which collects information about the user (e.g., name, address, payment details, etc.)
this is  (cartlist component)
* **Order confirmation page**, which shows the outcome after the user completes the checkout process (i.e., submits the checkout form)
this is  (confirmorder component)

#### Development strategy

we've included the following walkthrough the help you get up and running.

1. **Scaffold your project** using the Angular CLI, and install any dependencies.
2. **Generate the product list component**. Having the product list as the "main" page is a great start for your users.
3. **Begin building the component logic and template** What is the function of the product list? What logic is included in the TypeScript component, and how does its HTML template function? Does this component collect any user input? If so, how does information entered by the user relate to properties in the TypeScript component?
3. **Consider the hierarchy of components**. Which other components do you anticipate you'll need to build in this application? Which component(s) should render other components? Which components should represent a parent-child relationship? Feel free to draw out this hierarchy as a chart to help you visualize the relationships between components.
4. **Create the TypeScript model** for products in the app. Any available product should be of this type, rather than an ordinary object.
5. **Generate the service(s)**. Which service(s) make the most sense? For any particular service, what is its function? Hint: You may want to create a service to handle any asynchronous data.
6. **Fetch data** from the API (or included `data.json` file) and render products in your product list.
7. **Generate and create other components**. How do these components interact, if at all, with the component you first created? How can we facilitate sharing information between them?
8. **Create routing** between components. Which components are linked by the router? How is the app routing module set up and configured to make sure the page doesn't reload during navigation?
9. **Ensure that inputs are validated** in the client. For example, your checkout form needs to collect information from the user in order for them to complete the checkout process. How do you ensure that you are collecting accurate information from the user?

## Contributing

This repository is free to use 

## Authors

* **Mohamed Ramzy** - *Updated work* 

## License
  - see the LICENSE.md file for details

