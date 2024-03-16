import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomPaginationComponent } from "../../core/components/custom-pagination/custom-pagination.component";
import { QRCalculationComponent } from "./QRCalculation/QRCalculation.component";

const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListComponent },
  { path: "qr-list", component: QRCalculationComponent },
];
@NgModule({
  declarations: [ListComponent, QRCalculationComponent],
  imports: [
    CustomPaginationComponent,
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SaleRateModule {}
