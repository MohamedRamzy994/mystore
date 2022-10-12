import { ConfirmorderComponent } from './confirmorder/confirmorder.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:"" , component: ProductlistComponent},
{path:"productdetails/:id" , component: ProductdetailsComponent},
{path:"cartlist" , component: CartlistComponent},
{path:"confirmorder" , component: ConfirmorderComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
