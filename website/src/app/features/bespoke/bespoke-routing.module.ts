import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BespokeComponent } from './bespoke.component';

const routes: Routes = [{ path: '', component: BespokeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BespokeRoutingModule { }
