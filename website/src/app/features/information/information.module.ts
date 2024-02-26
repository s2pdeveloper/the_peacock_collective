import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { LegalNoticeComponent } from './components/legal-notice/legal-notice.component';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
];

@NgModule({
  declarations: [
    InformationComponent,
    AboutUsComponent,
    DeliveryComponent,
    LegalNoticeComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class InformationModule {}
