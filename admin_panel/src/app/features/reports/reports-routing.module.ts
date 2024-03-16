import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ReportsComponent } from "./reports.component";
import { InvoiceReportsComponent } from "./components/invoice-reports/invoice-reports.component";
import { BalanceInventoryComponent } from "./components/balance-inventory/balance-inventory.component";
import { ProductWiseReportsComponent } from "./components/product-wise-report/product-wise-reports.component";
const routes: Routes = [
  { path: "tabs", component: ReportsComponent },
  { path: "invoice", component: InvoiceReportsComponent },
  { path: "bal-inv", component: BalanceInventoryComponent },
  { path: "pr-inv", component: ProductWiseReportsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportsRoutingModule {}
