import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerFormComponent } from "./customer-form/customer-form.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { CustomPaginationComponent } from "../../core/components/custom-pagination/custom-pagination.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "customer-list",
    pathMatch: "full",
  },
  { path: "customer-list", component: CustomerListComponent },
  { path: "customer-form", component: CustomerFormComponent },
];

@NgModule({
  declarations: [CustomerListComponent, CustomerFormComponent],
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
export class CustomerModule {}
