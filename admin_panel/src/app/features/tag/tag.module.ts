import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagFormComponent } from './tag-form/tag-form.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomPaginationComponent } from "@core/components/custom-pagination/custom-pagination.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";


const routes : Routes=[
{
  path:"",
  redirectTo : "tag-list",
  pathMatch:"full",
},
{ path:"tag-form" , component:TagFormComponent},
{ path:"tag-list" , component:TagListComponent}

];

@NgModule({
  declarations: [
    TagFormComponent,
    TagListComponent
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
export class TagModule { }
