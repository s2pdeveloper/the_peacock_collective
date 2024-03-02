import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template.component';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { register } from 'swiper/element/bundle';
register();
const routes: Routes = [
  { path: 'component-a', component: ComponentAComponent },
  { path: 'component-b', component: ComponentBComponent },
  { path: 'component-c', component: ComponentCComponent },
];
@NgModule({
  declarations: [
    TemplateComponent,
    ComponentAComponent,
    ComponentBComponent,
    ComponentCComponent,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule,NgbModule, RouterModule.forChild(routes)],
})
export class TemplateModule {}
