import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingLayoutRoutingModule } from './landing-layout-routing.module';
import { LandingLayoutComponent } from './landing-layout.component';
import { MainComponent } from './components/main/main.component';
import { FollowUsComponent } from './components/follow-us/follow-us.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { PackbagComponent } from './components/packbag/packbag.component';
import { NewCollectionComponent } from './components/new-collection/new-collection.component';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
import { ConnectComponent } from './components/connect/connect.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { register } from 'swiper/element/bundle';
register();
@NgModule({
  declarations: [
    LandingLayoutComponent,
    MainComponent,
    FollowUsComponent,
    WhoWeAreComponent,
    PackbagComponent,
    NewCollectionComponent,
    NewArrivalsComponent,
    ConnectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LandingLayoutRoutingModule,
    NgbModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports:[LandingLayoutComponent]
})
export class LandingLayoutModule { }
