import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorFormComponent } from './vendor-form/vendor-form.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CustomPaginationComponent } from '@core/components/custom-pagination/custom-pagination.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "vendor-list",
    pathMatch: "full",
  },
  { path: "vendor-list", component: VendorListComponent },
  { path: "vendor-form", component: VendorFormComponent },
];

@NgModule({
  declarations: [
    VendorFormComponent,
    VendorListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    CustomPaginationComponent
  ]
})
export class VendorModule { }
