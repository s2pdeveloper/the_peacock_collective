import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { CategoryFormComponent } from "./category-form/category-form.component";
import { CategoryListComponent } from "./category-list/category-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";
import { CustomPaginationComponent } from "@core/components/custom-pagination/custom-pagination.component";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { SubcategoryListComponent } from './subcategory-list/subcategory-list.component';
import { NgSelectModule } from "@ng-select/ng-select";
import { SharedModule } from "src/app/theme/shared/shared.module";
const routes: Routes = [
  {
    path: "",
    redirectTo: "category-list",
    pathMatch: "full",
  },
  { path: "category-form", component: CategoryFormComponent },
  { path: "category-list", component: CategoryListComponent },
];

@NgModule({
  declarations: [CategoryFormComponent, CategoryListComponent, SubcategoryListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    NgxSpinnerModule,
    CustomPaginationComponent,
    NgbTooltipModule,
    SharedModule,
    NgSelectModule,
    RouterModule.forChild(routes),
  ],
})
export class CategoryModule {}
