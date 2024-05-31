import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/landing-layout/landing-layout.module').then(
        (m) => m.LandingLayoutModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth-layout/auth-layout.module').then(
        (m) => m.AuthLayoutModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./features/account/account.module').then((m) => m.AccountModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./features/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./features/order/order.module').then((m) => m.OrderModule),
  },
  { path: 'brand', loadChildren: () => import('./features/brand/brand.module').then(m => m.BrandModule) },
  { path: 'info', loadChildren: () => import('./features/information/information.module').then(m => m.InformationModule) },
  { path: 'pages', loadChildren: () => import('./features/template/template.module').then(m => m.TemplateModule) },
  { path: 'bespoke', loadChildren: () => import('./features/bespoke/bespoke.module').then(m => m.BespokeModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
