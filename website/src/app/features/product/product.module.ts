import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './product.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FormsModule } from '@angular/forms';
import { ProductCompareComponent } from './components/product-compare/product-compare.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'product-list',
  },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'product-compare', component: ProductCompareComponent },
];
@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductCompareComponent,
  ],
  imports: [CommonModule,NgxSliderModule,FormsModule, RouterModule.forChild(routes)],
})
export class ProductModule {}
