import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { TermsConditionComponent } from './components/terms-condition/terms-condition.component';
import { ReturnsExchangesComponent } from './components/return-exchange/return-exchange.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'return-exchange', component: ReturnsExchangesComponent },
  { path: 'terms-condition', component: TermsConditionComponent },
];

@NgModule({
  declarations: [
    InformationComponent,
    AboutUsComponent,
    DeliveryComponent,
    ReturnsExchangesComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class InformationModule {}
