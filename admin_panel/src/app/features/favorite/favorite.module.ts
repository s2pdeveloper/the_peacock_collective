import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavListComponent } from './fav-list/fav-list.component';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";
import { CustomPaginationComponent } from "@core/components/custom-pagination/custom-pagination.component";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {
    path: "",
    redirectTo: "fav-list",
    pathMatch: "full",
  },
  { path: "fav-list", component: FavListComponent },
];

@NgModule({
  declarations: [
    FavListComponent
  ],
  imports: [
    CommonModule,FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    NgxSpinnerModule,
    CustomPaginationComponent,
    NgbTooltipModule,
    RouterModule.forChild(routes),
  ]
})
export class FavoriteModule { }
