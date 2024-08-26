import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCompareComponent } from './components/product-compare/product-compare.component';
import { register } from 'swiper/element/bundle';
register();
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'product-list',
  },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'product-compare', component: ProductCompareComponent },
];
@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductCompareComponent,
  ],
  imports: [CommonModule,ReactiveFormsModule,NgxSliderModule,FormsModule, RouterModule.forChild(routes)],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductModule {}
