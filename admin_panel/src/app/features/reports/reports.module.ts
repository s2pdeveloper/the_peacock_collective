import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ReportsRoutingModule } from "./reports-routing.module";
import { ReportsComponent } from "./reports.component";
import { InvoiceReportsComponent } from "./components/invoice-reports/invoice-reports.component";
import { CustomPaginationComponent } from "@core/components/custom-pagination/custom-pagination.component";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { BalanceInventoryComponent } from "./components/balance-inventory/balance-inventory.component";
import { ProductWiseReportsComponent } from "./components/product-wise-report/product-wise-reports.component";
@NgModule({
  declarations: [
    ReportsComponent,
    InvoiceReportsComponent,
    BalanceInventoryComponent,ProductWiseReportsComponent
  ],
  imports: [
    CommonModule,
    CustomPaginationComponent,
    SharedModule,
    ReportsRoutingModule,
  ],
})
export class ReportsModule {}
