import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { FormComponent } from "./form/form.component";
import { Routes,RouterModule } from "@angular/router";
import { SharedModule } from "src/app/theme/shared/shared.module";
import { CustomPaginationComponent } from "../../core/components/custom-pagination/custom-pagination.component";


const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full",
  },
  {
    path:'list',component:ListComponent
  },
  {
    path:'form',component:FormComponent
  },
];

@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [CommonModule,RouterModule.forChild(routes),SharedModule,CustomPaginationComponent],
})
export class NewInvoiceModule {}
