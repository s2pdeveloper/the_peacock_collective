import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { OffersListComponent } from "./offers-list/offers-list.component";
import { OffersFormComponent } from "./offers-form/offers-form.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { CustomPaginationComponent } from "../../core/components/custom-pagination/custom-pagination.component";
import { SharedModule } from "src/app/theme/shared/shared.module";

const routes: Routes = [
  {
    path: "",
    redirectTo: "offers-list",
    pathMatch: "full",
  },
  { path: "offers-list", component: OffersListComponent },
  { path: "offers-form", component: OffersFormComponent },
];

@NgModule({
  declarations: [OffersListComponent, OffersFormComponent],
  imports: [
    NgbTooltipModule,
    NgxSpinnerModule,
    RouterModule.forChild(routes),
    SharedModule,
    CustomPaginationComponent,
  ],
})
export class OffersModule {}
