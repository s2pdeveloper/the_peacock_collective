import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from './order.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyOrderComponent } from './components/my-order/my-order.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { StriveComponent } from './components/strive/strive.component';
import { NgxSpinnerModule } from 'ngx-spinner';

const routes: Routes = [
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'my-orders', component: MyOrderComponent },
  { path: 'wishlist', component: WishlistComponent },
];
@NgModule({
  declarations: [OrderComponent, CartComponent, CheckoutComponent,MyOrderComponent,WishlistComponent,StriveComponent],
  imports: [CommonModule,FormsModule,ReactiveFormsModule,NgxSpinnerModule, RouterModule.forChild(routes)],
})
export class OrderModule {}
