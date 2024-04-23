import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BespokeRoutingModule } from './bespoke-routing.module';
import { BespokeComponent } from './bespoke.component';
import { register } from 'swiper/element/bundle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
register();

@NgModule({
  declarations: [BespokeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule,FormsModule,ReactiveFormsModule, BespokeRoutingModule],
})
export class BespokeModule {}
