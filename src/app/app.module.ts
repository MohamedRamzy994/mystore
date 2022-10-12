import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductitemComponent } from './components/productitem/productitem.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { CartlistComponent } from './cartlist/cartlist.component';
import { ConfirmorderComponent } from './confirmorder/confirmorder.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductitemComponent,
    ProductdetailsComponent,
    CartlistComponent,
    ConfirmorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
