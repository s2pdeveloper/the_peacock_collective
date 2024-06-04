import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingLayoutComponent } from './landing-layout.component';
import { MainComponent } from './components/main/main.component';
import { FollowUsComponent } from './components/follow-us/follow-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { PackbagComponent } from './components/packbag/packbag.component';
import { NewCollectionComponent } from './components/new-collection/new-collection.component';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
import { ConnectComponent } from './components/connect/connect.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HomeProductPipe } from "../../pipes/home-product.pipe";
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: LandingLayoutComponent }];

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
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        ReactiveFormsModule,
        NgbModule, SharedModule,
        HomeProductPipe
    ]
})
export class LandingLayoutModule { }
