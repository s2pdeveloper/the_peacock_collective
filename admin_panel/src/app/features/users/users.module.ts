import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { UserListComponent } from "./user-list/user-list.component";
import { UserFormComponent } from "./user-form/user-form.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { CustomPaginationComponent } from "../../core/components/custom-pagination/custom-pagination.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "user-list",
    pathMatch: "full",
  },
  { path: "user-list", component: UserListComponent },
  { path: "user-form", component: UserFormComponent },
];

@NgModule({
  declarations: [UserListComponent, UserFormComponent],
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
export class UsersModule {}
