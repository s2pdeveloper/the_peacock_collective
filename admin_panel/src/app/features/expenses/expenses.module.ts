import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { SharedModule } from "src/app/theme/shared/shared.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CustomPaginationComponent } from "../../core/components/custom-pagination/custom-pagination.component";
import { Routes, RouterModule } from "@angular/router";

let routes: Routes = [{path:'',redirectTo:'list',pathMatch:'full'},
  { path: "list", component: ListComponent },
  { path: "form", component: FormComponent },
];

@NgModule({
  declarations: [
    ListComponent,
    FormComponent
  ],
  imports: [
    CommonModule,  ReactiveFormsModule,
    SharedModule,
    FormsModule,
    CustomPaginationComponent,
    RouterModule.forChild(routes),
  ]
})
export class ExpensesModule { }
