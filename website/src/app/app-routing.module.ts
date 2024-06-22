import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, Route, RouterModule, Routes, withEnabledBlockingInitialNavigation } from '@angular/router';
import { ExtraOptions } from '@angular/router';
import { Observable, of } from 'rxjs';

export class CustomPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // Check if the route should be preloaded based on a custom condition
    if (route.data && route.data['preload']) {
      return load();
    } else {
      return of(null);
    }
  }
}

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
    data: { preload: true }
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
    path: 'about-us',
    loadChildren: () =>
      import('./features/about-us/about-us.module').then((m) => m.AboutUsModule),
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

const options: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  initialNavigation: 'enabledNonBlocking',
  preloadingStrategy: CustomPreloadingStrategy
}

@NgModule({
  imports: [
    RouterModule.forRoot(routes, options),
  ],
  exports: [RouterModule],
  providers: [CustomPreloadingStrategy]
})
export class AppRoutingModule { }
