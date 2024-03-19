import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttibuteListComponent } from './attibute-list/attibute-list.component';
import { AttibuteFormComponent } from './attibute-form/attibute-form.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CustomPaginationComponent } from '@core/components/custom-pagination/custom-pagination.component';



@NgModule({
  declarations: [
    AttibuteListComponent,
    AttibuteFormComponent,
    
  ],
  imports: [
    CommonModule,
    CustomPaginationComponent,
    SharedModule
  ]
})
export class AttributeModule { }
