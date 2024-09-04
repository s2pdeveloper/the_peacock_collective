import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AllProductVariantsComponent } from "./all-product-variants.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomPaginationComponent } from "../../core/components/custom-pagination/custom-pagination.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "all" },
  { path: "all", component: AllProductVariantsComponent },
];
@NgModule({
  declarations: [AllProductVariantsComponent],
  imports: [
    CommonModule,
    CustomPaginationComponent,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class AllProductVariantsModule {}
