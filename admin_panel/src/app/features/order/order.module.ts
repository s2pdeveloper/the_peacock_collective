import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RouterModule, Routes } from "@angular/router";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrderViewComponent } from "./order-view/order-view.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { NgxSpinnerModule } from "ngx-spinner";
import { CustomPaginationComponent } from "@core/components/custom-pagination/custom-pagination.component";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {
    path: "",
    redirectTo: "order-list",
    pathMatch: "full",
  },
  { path: "order-view", component: OrderViewComponent },
  { path: "order-list", component: OrderListComponent },
];

@NgModule({
  declarations: [OrderListComponent, OrderViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    NgxSpinnerModule,
    CustomPaginationComponent,
    NgbTooltipModule,
    RouterModule.forChild(routes),
  ],
})
export class OrderModule {}
