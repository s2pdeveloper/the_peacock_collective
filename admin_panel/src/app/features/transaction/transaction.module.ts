import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CustomPaginationComponent } from '@core/components/custom-pagination/custom-pagination.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

const routes : Routes=[
  {
    path:"",
    redirectTo : "trans-list",
    pathMatch:"full",
  },
  { path:"trans-list" , component:TransactionListComponent}
  
  ];

@NgModule({
  declarations: [
    TransactionListComponent
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
export class TransactionModule { }
