import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";
import { CustomPaginationComponent } from "@core/components/custom-pagination/custom-pagination.component";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { BespokeFormComponent } from "./bespoke-form/bespoke-form.component";
import { BespokeListComponent } from "./bespoke-list/bespoke-list.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "bespoke-list",
    pathMatch: "full",
  },
  { path: "bespoke-form", component: BespokeFormComponent },
  { path: "bespoke-list", component: BespokeListComponent },
];

@NgModule({
  declarations: [BespokeFormComponent, BespokeListComponent],
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
export class BespokeModule {}
