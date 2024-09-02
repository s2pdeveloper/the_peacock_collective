import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryMailsListComponent } from './query-mails-list/query-mails-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CustomPaginationComponent } from '@core/components/custom-pagination/custom-pagination.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full",
  },
  { path: "list", component: QueryMailsListComponent },
];
@NgModule({
  declarations: [
  
    QueryMailsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,ReactiveFormsModule,
    ToastrModule,
    NgxSpinnerModule,
    CustomPaginationComponent,
    NgbTooltipModule,
  ]
})
export class QueryMailsModule { }
