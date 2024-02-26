import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand.component';
import { BrandCatalogueComponent } from './components/brand-catalogue/brand-catalogue.component';
import { BrandListComponent } from './components/brand-list/brand-list.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'brand-list' },
  { path: 'brand-list', component: BrandListComponent },
  { path: 'brand-catalogue', component: BrandCatalogueComponent },
];

@NgModule({
  declarations: [BrandComponent, BrandCatalogueComponent, BrandListComponent],
  imports: [CommonModule,SharedModule, RouterModule.forChild(routes)],
})
export class BrandModule {}
