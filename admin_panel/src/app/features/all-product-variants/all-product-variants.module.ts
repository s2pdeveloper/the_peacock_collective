import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AllProductVariantsComponent } from "./all-product-variants.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "all" },
  { path: "all", component: AllProductVariantsComponent },
];
@NgModule({
  declarations: [AllProductVariantsComponent],
  imports: [CommonModule, RouterModule.forChild(routes),ReactiveFormsModule,FormsModule],
})
export class AllProductVariantsModule {
  
}
