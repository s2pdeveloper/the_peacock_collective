import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttibuteListComponent } from './attibute-list/attibute-list.component';
import { AttibuteFormComponent } from './attibute-form/attibute-form.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CustomPaginationComponent } from '@core/components/custom-pagination/custom-pagination.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "attribute-list",
    pathMatch: "full",
  },
  { path: "attribute-form", component: AttibuteFormComponent },
  { path: "attribute-list", component: AttibuteListComponent },
];


@NgModule({
  declarations: [
    AttibuteListComponent,
    AttibuteFormComponent,

  ],
  imports: [
    CommonModule,
    CustomPaginationComponent,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class AttributeModule { }
