import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from './order.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyOrderComponent } from './components/my-order/my-order.component';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'my-orders', component: MyOrderComponent },
];
@NgModule({
  declarations: [OrderComponent, CartComponent, CheckoutComponent,MyOrderComponent],
  imports: [CommonModule,FormsModule,ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class OrderModule {}
