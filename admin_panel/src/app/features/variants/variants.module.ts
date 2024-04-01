import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VariantListComponent } from "./variant-list/variant-list.component";
import { VariantFormComponent } from "./variant-form/variant-form.component";
import { RouterModule, Routes } from "@angular/router";
import { CustomPaginationComponent } from "@core/components/custom-pagination/custom-pagination.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { VariantImagesComponent } from './variant-images/variant-images.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: "variant-list",
    pathMatch: "full",
  },
  { path: "variant-list", component: VariantListComponent },
  { path: "variant-form", component: VariantFormComponent },
  { path: "variant-images", component: VariantImagesComponent },
];

@NgModule({
  declarations: [VariantListComponent, VariantFormComponent, VariantImagesComponent],
  imports: [CommonModule, RouterModule.forChild(routes),CustomPaginationComponent,FormsModule,ReactiveFormsModule,NgSelectModule],
})
export class VariantsModule {}
