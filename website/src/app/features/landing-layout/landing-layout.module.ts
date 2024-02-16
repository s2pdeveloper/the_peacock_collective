import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingLayoutRoutingModule } from './landing-layout-routing.module';
import { LandingLayoutComponent } from './landing-layout.component';


@NgModule({
  declarations: [
    LandingLayoutComponent
  ],
  imports: [
    CommonModule,
    LandingLayoutRoutingModule
  ]
})
export class LandingLayoutModule { }
