import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from './order.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
];
@NgModule({
  declarations: [OrderComponent, CartComponent, CheckoutComponent],
  imports: [CommonModule,FormsModule,ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class OrderModule {}
