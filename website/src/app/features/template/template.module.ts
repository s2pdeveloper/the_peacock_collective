import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { RouterModule, Routes } from '@angular/router';
import { RemotePageComponent } from './remote-page/remote-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { register } from 'swiper/element/bundle';
register();
const routes: Routes = [
  { path: ':id', component: RemotePageComponent },
];
@NgModule({
  declarations: [
    TemplateComponent,
    RemotePageComponent,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule,NgbModule, RouterModule.forChild(routes)],
})
export class TemplateModule {}
