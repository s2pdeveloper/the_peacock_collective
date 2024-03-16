import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { CustomPaginationComponent } from "../../core/components/custom-pagination/custom-pagination.component";
import { ShopFormComponent } from "./shop-form/shop-form.component";
import { SharedModule } from "src/app/theme/shared/shared.module";
// import { NgxFileDropModule } from "ngx-file-drop";

const routes: Routes = [
  {
    path: "",
    redirectTo: "shop-form",
    pathMatch: "full",
  },
  { path: "shop-form", component: ShopFormComponent },
];

@NgModule({
  declarations: [ShopFormComponent],
  imports: [
    NgbTooltipModule,
    NgxSpinnerModule,
    RouterModule.forChild(routes),
    SharedModule,
    CustomPaginationComponent,
    // NgxFileDropModule
  ],
})
export class ShopModule {}
