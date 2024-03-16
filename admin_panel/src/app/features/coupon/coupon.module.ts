import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CouponListComponent } from "./coupon-list/coupon-list.component";
import { CouponFormComponent } from "./coupon-form/coupon-form.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { CustomPaginationComponent } from "../../core/components/custom-pagination/custom-pagination.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "coupon-list",
    pathMatch: "full",
  },
  { path: "coupon-list", component: CouponListComponent },
  { path: "coupon-form", component: CouponFormComponent },
];

@NgModule({
  declarations: [CouponListComponent, CouponFormComponent],
  imports: [
    CommonModule,
    NgbTooltipModule,
    NgxSpinnerModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    CustomPaginationComponent,
  ],
})
export class CouponModule {}
