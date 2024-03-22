import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomPaginationComponent } from "../../core/components/custom-pagination/custom-pagination.component";
import { ProductInfoFormComponent } from "./product-info-form/product-info-form.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { NgImageSliderModule } from "ng-image-slider";
import { ProductBulkUploadComponent } from "./product-bulk-upload/product-bulk-upload.component";
import { UploadService } from "@shared/services/upload.service";
import { ProductImageComponent } from './product-image/product-image.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: "product-list",
    pathMatch: "full",
  },
  { path: "product-list", component: ProductListComponent },

  { path: "product-form", component: ProductInfoFormComponent },
];
@NgModule({
  declarations: [
    ProductInfoFormComponent,
    ProductListComponent,
    ProductBulkUploadComponent,
    ProductImageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    CustomPaginationComponent,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [UploadService],
})
export class ProductModule {}
