/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 69787:
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: () => (/* binding */ app),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   extractRoutes: () => (/* binding */ extractRoutes),
/* harmony export */   renderApplication: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__.renderApplication),
/* harmony export */   renderModule: () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__.renderModule),
/* harmony export */   "ɵSERVER_CONTEXT": () => (/* reexport safe */ _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵSERVER_CONTEXT"])
/* harmony export */ });
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/node */ 55365);
/* harmony import */ var zone_js_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_node__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _angular_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/ssr */ 25286);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ 96255);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node:fs */ 73024);
/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! node:path */ 76760);
/* harmony import */ var node_path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(node_path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_main_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/main.server */ 71117);
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-server */ 51372);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 61504);







// The Express app is exported so that it can be used by serverless Functions.
function app() {
  const server = express__WEBPACK_IMPORTED_MODULE_2__();
  const distFolder = (0,node_path__WEBPACK_IMPORTED_MODULE_4__.join)(process.cwd(), 'dist/website/browser');
  const indexHtml = (0,node_fs__WEBPACK_IMPORTED_MODULE_3__.existsSync)((0,node_path__WEBPACK_IMPORTED_MODULE_4__.join)(distFolder, 'index.original.html')) ? (0,node_path__WEBPACK_IMPORTED_MODULE_4__.join)(distFolder, 'index.original.html') : (0,node_path__WEBPACK_IMPORTED_MODULE_4__.join)(distFolder, 'index.html');
  const commonEngine = new _angular_ssr__WEBPACK_IMPORTED_MODULE_1__.CommonEngine();
  server.set('view engine', 'html');
  server.set('views', distFolder);
  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express__WEBPACK_IMPORTED_MODULE_2__["static"](distFolder, {
    maxAge: '1y'
  }));
  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const {
      protocol,
      originalUrl,
      baseUrl,
      headers
    } = req;
    commonEngine.render({
      bootstrap: _src_main_server__WEBPACK_IMPORTED_MODULE_5__.AppServerModule,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: distFolder,
      providers: [{
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_6__.APP_BASE_HREF,
        useValue: baseUrl
      }]
    }).then(html => res.send(html)).catch(err => next(err));
  });
  return server;
}
function run() {
  const port = process.env['PORT'] || 1946;
  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}
const mainModule = require.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_main_server__WEBPACK_IMPORTED_MODULE_5__.AppServerModule);

  // EXPORTS added by @angular-devkit/build-angular
  
  /**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



async function* getRoutesFromRouterConfig(routes, compiler, parentInjector, parentRoute = '') {
    for (const route of routes) {
        const { path, redirectTo, loadChildren, children } = route;
        if (path === undefined) {
            continue;
        }
        const currentRoutePath = buildRoutePath(parentRoute, path);
        if (redirectTo !== undefined) {
            // TODO: handle `redirectTo`.
            yield { route: currentRoutePath, success: false, redirect: true };
            continue;
        }
        if (/[:*]/.test(path)) {
            // TODO: handle parameterized routes population.
            yield { route: currentRoutePath, success: false, redirect: false };
            continue;
        }
        yield { route: currentRoutePath, success: true, redirect: false };
        if (children?.length) {
            yield* getRoutesFromRouterConfig(children, compiler, parentInjector, currentRoutePath);
        }
        if (loadChildren) {
            const loadedChildRoutes = await (0,_angular_router__WEBPACK_IMPORTED_MODULE_8__["ɵloadChildren"])(route, compiler, parentInjector).toPromise();
            if (loadedChildRoutes) {
                const { routes: childRoutes, injector = parentInjector } = loadedChildRoutes;
                yield* getRoutesFromRouterConfig(childRoutes, compiler, injector, currentRoutePath);
            }
        }
    }
}
async function* extractRoutes(bootstrapAppFnOrModule, document) {
    const platformRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.createPlatformFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_9__.platformCore, 'server', [
        {
            provide: _angular_platform_server__WEBPACK_IMPORTED_MODULE_7__.INITIAL_CONFIG,
            useValue: { document, url: '' },
        },
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵConsole"],
            /** An Angular Console Provider that does not print a set of predefined logs. */
            useFactory: () => {
                class Console extends _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵConsole"] {
                    ignoredLogs = new Set(['Angular is running in development mode.']);
                    log(message) {
                        if (!this.ignoredLogs.has(message)) {
                            super.log(message);
                        }
                    }
                }
                return new Console();
            },
        },
        ..._angular_platform_server__WEBPACK_IMPORTED_MODULE_7__["ɵINTERNAL_SERVER_PLATFORM_PROVIDERS"],
    ])();
    try {
        let applicationRef;
        if (isBootstrapFn(bootstrapAppFnOrModule)) {
            applicationRef = await bootstrapAppFnOrModule();
        }
        else {
            const moduleRef = await platformRef.bootstrapModule(bootstrapAppFnOrModule);
            applicationRef = moduleRef.injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_9__.ApplicationRef);
        }
        // Wait until the application is stable.
        await (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵwhenStable"])(applicationRef);
        const injector = applicationRef.injector;
        const router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router);
        if (router.config.length === 0) {
            // In case there are no routes available
            yield { route: '', success: true, redirect: false };
        }
        else {
            const compiler = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_9__.Compiler);
            // Extract all the routes from the config.
            yield* getRoutesFromRouterConfig(router.config, compiler, injector);
        }
    }
    finally {
        platformRef.destroy();
    }
}
function isBootstrapFn(value) {
    // We can differentiate between a module and a bootstrap function by reading compiler-generated `ɵmod` static property:
    return typeof value === 'function' && !('ɵmod' in value);
}
function buildRoutePath(...routeParts) {
    return routeParts.filter(Boolean).join('/');
}


/***/ }),

/***/ 63973:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);



const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}, {
  path: 'home',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./features/landing-layout/landing-layout.module */ 20690)).then(m => m.LandingLayoutModule)
}, {
  path: 'auth',
  loadChildren: () => __webpack_require__.e(/*! import() */ 824).then(__webpack_require__.bind(__webpack_require__, /*! ./features/auth-layout/auth-layout.module */ 66824)).then(m => m.AuthLayoutModule)
}, {
  path: 'contact',
  loadChildren: () => __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(__webpack_require__, /*! ./features/contact/contact.module */ 61008)).then(m => m.ContactModule)
}, {
  path: 'account',
  loadChildren: () => __webpack_require__.e(/*! import() */ 640).then(__webpack_require__.bind(__webpack_require__, /*! ./features/account/account.module */ 58640)).then(m => m.AccountModule)
}, {
  path: 'product',
  loadChildren: () => __webpack_require__.e(/*! import() */ 520).then(__webpack_require__.bind(__webpack_require__, /*! ./features/product/product.module */ 33520)).then(m => m.ProductModule)
}, {
  path: 'order',
  loadChildren: () => __webpack_require__.e(/*! import() */ 976).then(__webpack_require__.bind(__webpack_require__, /*! ./features/order/order.module */ 47976)).then(m => m.OrderModule)
}, {
  path: 'brand',
  loadChildren: () => __webpack_require__.e(/*! import() */ 500).then(__webpack_require__.bind(__webpack_require__, /*! ./features/brand/brand.module */ 28500)).then(m => m.BrandModule)
}, {
  path: 'info',
  loadChildren: () => __webpack_require__.e(/*! import() */ 400).then(__webpack_require__.bind(__webpack_require__, /*! ./features/information/information.module */ 85400)).then(m => m.InformationModule)
}, {
  path: 'pages',
  loadChildren: () => __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(__webpack_require__, /*! ./features/template/template.module */ 67002)).then(m => m.TemplateModule)
}, {
  path: 'bespoke',
  loadChildren: () => __webpack_require__.e(/*! import() */ 480).then(__webpack_require__.bind(__webpack_require__, /*! ./features/bespoke/bespoke.module */ 78480)).then(m => m.BespokeModule)
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 47865:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/common.service */ 81390);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services */ 9460);
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/state.service */ 19836);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _features_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/shared/components/header/header.component */ 78032);
/* harmony import */ var _features_shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/shared/components/footer/footer.component */ 76012);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 55393);











function AppComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
class AppComponent {
  constructor(commonService, storageService, spinner, stateService, _platformId) {
    this.commonService = commonService;
    this.storageService = storageService;
    this.spinner = spinner;
    this.stateService = stateService;
    this._platformId = _platformId;
    this.title = 'website';
    this.loader = true;
  }
  ngOnInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this._platformId)) {
      this.user = this.storageService.get('Customer');
    }
    this.getAllMasterData();
  }
  getAllMasterData() {
    // this.spinner.show();
    this.commonService.getAllMasterData({}).subscribe(success => {
      // this.spinner.hide();
      this.commonService.allData = success.result;
      this.loader = false;
      // this.stateService.checkAndGetData(ALL_DATA, success.result, {})
      // this.loader = false;
    }, error => {
      console.log("error", error);
      this.loader = false;
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_1__.SpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_state_service__WEBPACK_IMPORTED_MODULE_2__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 1,
    consts: [[4, "ngIf"], ["type", "ball-scale-multiple"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-footer")(3, "ngx-spinner", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loader);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _features_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _features_shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent],
    styles: [".main[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.nav-top[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  top: 0;\n}\n.nav-top[_ngcontent-%COMP%]:hover {\n  background: teal;\n  transition: all 0.5s;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5uYXYtdG9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICAmOmhvdmVye1xuICAgIGJhY2tncm91bmQ6IHRlYWw7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 47724:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 70356);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 63973);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 47865);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 90530);
/* harmony import */ var _features_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/shared/shared.module */ 53020);
/* harmony import */ var _features_landing_layout_landing_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/landing-layout/landing-layout.module */ 20690);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 46584);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ 60301);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 21099);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/services */ 9460);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 55393);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37100);













// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS,
      useClass: _core_services__WEBPACK_IMPORTED_MODULE_4__.AuthInterceptor,
      multi: true
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _features_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _features_landing_layout_landing_layout_module__WEBPACK_IMPORTED_MODULE_3__.LandingLayoutModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
    // BrowserAnimationsModule,
    ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      closeButton: true,
      progressBar: true
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _features_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _features_landing_layout_landing_layout_module__WEBPACK_IMPORTED_MODULE_3__.LandingLayoutModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
    // BrowserAnimationsModule,
    ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_11__.ToastrModule]
  });
})();

/***/ }),

/***/ 4917:
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* binding */ AppServerModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-server */ 51372);
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.module */ 47724);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 47865);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37100);




class AppServerModule {
  static #_ = this.ɵfac = function AppServerModule_Factory(t) {
    return new (t || AppServerModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppServerModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppServerModule, {
    imports: [_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, _angular_platform_server__WEBPACK_IMPORTED_MODULE_3__.ServerModule]
  });
})();

/***/ }),

/***/ 35359:
/*!*********************************************!*\
  !*** ./src/app/core/services/auth.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.service */ 45014);



const authGuard = () => {
  const storage = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_local_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService);
  const router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router);
  let token = storage.get('jSessionId') ?? '';
  if (token) {
    return true;
  } else {
    router.navigateByUrl('auth/login');
    return false;
  }
};

/***/ }),

/***/ 2541:
/*!***************************************************!*\
  !*** ./src/app/core/services/auth.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 21099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 47632);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 28382);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 28967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/toast.service */ 2298);









class AuthInterceptor {
  constructor(router, toast, _platformId) {
    this.router = router;
    this.toast = toast;
    this._platformId = _platformId;
  }
  intercept(request, next) {
    let user = null;
    // const user = this.storageService.get('userData');
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this._platformId)) {
      user = JSON.parse(localStorage.getItem('Customer'));
    }
    const excludePath = [];
    request = request.clone({
      url: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiEndpoint + request.url,
      ...(user && user?.token && {
        setHeaders: {
          authorization: `Bearer ${user.token}`
        }
      })
    });
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(errorResponse => {
      console.log('errorResponse intercept', errorResponse);
      if (errorResponse instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse) {
        if (errorResponse.status == 401) {
          this.router.navigate(['/login']);
          this.toast.error("Unautherise request");
        }
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => errorResponse.error);
    }));
  }
  static #_ = this.ɵfac = function AuthInterceptor_Factory(t) {
    return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: AuthInterceptor,
    factory: AuthInterceptor.ɵfac
  });
}

/***/ }),

/***/ 84361:
/*!**************************************************!*\
  !*** ./src/app/core/services/httpApi.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 21099);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 28382);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37100);




class ApiService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  get(path, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpParams()) {
    return this.httpClient.get(path, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  put(path, body = {}) {
    return this.httpClient.put(path, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  post(path, body = {}) {
    return this.httpClient.post(path, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  delete(path) {
    return this.httpClient.delete(path).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  getFile(path) {
    return this.httpClient.get(path, {
      responseType: 'blob',
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  static #_ = this.ɵfac = function ApiService_Factory(t) {
    return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ApiService,
    factory: ApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9460:
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* reexport safe */ _httpApi_service__WEBPACK_IMPORTED_MODULE_1__.ApiService),
/* harmony export */   AuthInterceptor: () => (/* reexport safe */ _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__.AuthInterceptor),
/* harmony export */   SpinnerService: () => (/* reexport safe */ _spinner_service__WEBPACK_IMPORTED_MODULE_4__.SpinnerService),
/* harmony export */   StorageService: () => (/* reexport safe */ _local_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService),
/* harmony export */   ToastService: () => (/* reexport safe */ _toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService),
/* harmony export */   authGuard: () => (/* reexport safe */ _auth_guard__WEBPACK_IMPORTED_MODULE_5__.authGuard)
/* harmony export */ });
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.interceptor */ 2541);
/* harmony import */ var _httpApi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpApi.service */ 84361);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.service */ 45014);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast.service */ 2298);
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner.service */ 11692);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ 35359);







/***/ }),

/***/ 45014:
/*!********************************************************!*\
  !*** ./src/app/core/services/local-storage.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 94556);



class StorageService {
  constructor(_platformId) {
    this._platformId = _platformId;
  }
  get(key) {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId)) {
      let data = localStorage.getItem(key);
      return localStorage ? JSON.parse(data) : null;
    } else {
      return null;
    }
  }
  set(key, value) {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId)) {
      if (localStorage) {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } else {
      return null;
    }
  }
  remove(key) {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId)) {
      localStorage ? localStorage.removeItem(key) : null;
    } else {
      return null;
    }
  }
  static #_ = this.ɵfac = function StorageService_Factory(t) {
    return new (t || StorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: StorageService,
    factory: StorageService.ɵfac,
    providedIn: "root"
  });
}

/***/ }),

/***/ 11692:
/*!**************************************************!*\
  !*** ./src/app/core/services/spinner.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpinnerService: () => (/* binding */ SpinnerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ 55393);


class SpinnerService {
  constructor(spinner) {
    this.spinner = spinner;
  }
  show() {
    this.spinner.show();
  }
  hide() {
    this.spinner.hide();
  }
  static #_ = this.ɵfac = function SpinnerService_Factory(t) {
    return new (t || SpinnerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SpinnerService,
    factory: SpinnerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2298:
/*!************************************************!*\
  !*** ./src/app/core/services/toast.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastService: () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 60301);


class ToastService {
  constructor(toastService) {
    this.toastService = toastService;
  }
  success(msg, title) {
    this.toastService.success(msg, title);
  }
  warning(msg, title) {
    this.toastService.warning(msg, title);
  }
  error(msg, title) {
    this.toastService.error(msg, title);
  }
  info(msg, title) {
    this.toastService.info(msg, title);
  }
  static #_ = this.ɵfac = function ToastService_Factory(t) {
    return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__.ToastrService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: ToastService,
    factory: ToastService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 88891:
/*!*********************************************************************************!*\
  !*** ./src/app/features/landing-layout/components/connect/connect.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectComponent: () => (/* binding */ ConnectComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 46584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37100);



class ConnectComponent {
  constructor() {
    this.mailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required])
    });
  }
  submit() {
    if (!!this.mailForm.value) {
      console.log('formValue', this.mailForm.value);
    }
  }
  static #_ = this.ɵfac = function ConnectComponent_Factory(t) {
    return new (t || ConnectComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ConnectComponent,
    selectors: [["app-connect"]],
    decls: 11,
    vars: 1,
    consts: [[1, "container-fluid", "connect-page"], [1, "row", "justify-content-center"], [1, "col-11", "col-md-11", "col-lg-5"], [1, "connect-text"], [1, "input-wrapper"], [3, "formGroup"], ["type", "text", "placeholder", "Your email address", "formControlName", "email"], [1, "subs-box"], [3, "click"]],
    template: function ConnectComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Stay connected to get the best deals");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "form", 5)(7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7)(9, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConnectComponent_Template_p_click_9_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.mailForm);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName],
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.connect-page[_ngcontent-%COMP%] {\n  padding: 55px 0;\n  background-color: #000;\n}\n\n.connect-text[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80%;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #fff;\n  color: #fff;\n  min-height: 72px;\n  font-size: 2.2rem;\n  font-weight: bold;\n  text-align: left;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #fff;\n}\n.input-wrapper[_ngcontent-%COMP%]   .subs-box[_ngcontent-%COMP%] {\n  width: 20%;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.input-wrapper[_ngcontent-%COMP%]   .subs-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n@media (max-width: 767px) {\n  .connect-page[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  .connect-text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .input-wrapper[_ngcontent-%COMP%] {\n    padding: 0 2rem;\n  }\n  .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 5vw;\n  }\n}\n@media (max-width: 575px) {\n  .input-wrapper[_ngcontent-%COMP%]   .subs-box[_ngcontent-%COMP%] {\n    width: 35%;\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy1sYXlvdXQvY29tcG9uZW50cy9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFJRjtBQUhFO0VBQ0UsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBS0o7QUFKSTtFQUNFLGFBQUE7QUFNTjtBQUpJO0VBQ0UsV0FBQTtBQU1OO0FBSEU7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUtKO0FBSkk7RUFDRSxXQUFBO0FBTU47O0FBRkE7RUFDRTtJQUNFLGVBQUE7RUFLRjtFQUhBO0lBQ0UsZUFBQTtFQUtGO0VBSEE7SUFDRSxlQUFBO0VBS0Y7RUFKRTtJQUNFLGNBQUE7RUFNSjtBQUNGO0FBSEE7RUFFSTtJQUNFLFVBQUE7SUFDQSxlQUFBO0VBSUo7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4uY29ubmVjdC1wYWdlIHtcbiAgcGFkZGluZzogNTVweCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuLmNvbm5lY3QtdGV4dCB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5wdXQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBpbnB1dCB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWluLWhlaWdodDogNzJweDtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICY6Zm9jdXMtdmlzaWJsZSB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbiAgLnN1YnMtYm94IHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHAge1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbm5lY3QtcGFnZSB7XG4gICAgcGFkZGluZzogNDBweCAwO1xuICB9XG4gIC5jb25uZWN0LXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuICAuaW5wdXQtd3JhcHBlciB7XG4gICAgcGFkZGluZzogMCAycmVtO1xuICAgIGlucHV0IHtcbiAgICAgIGZvbnQtc2l6ZTogNXZ3O1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5pbnB1dC13cmFwcGVyIHtcbiAgICAuc3Vicy1ib3gge1xuICAgICAgd2lkdGg6IDM1JTtcbiAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 95759:
/*!*************************************************************************************!*\
  !*** ./src/app/features/landing-layout/components/follow-us/follow-us.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FollowUsComponent: () => (/* binding */ FollowUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);

class FollowUsComponent {
  constructor() {
    this.showNavigationIndicators = false;
  }
  static #_ = this.ɵfac = function FollowUsComponent_Factory(t) {
    return new (t || FollowUsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FollowUsComponent,
    selectors: [["app-follow-us"]],
    decls: 9,
    vars: 0,
    consts: [[1, "container-fluid", "p-5"], [1, "row"], [1, "col-12", "mb-3"], [1, "text-part", "d-flex", "flex-column", "align-items-center"], [1, "section-heading"], [1, "social-text"], [1, "col-12"]],
    template: function FollowUsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Follow us on Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "@instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.text-part[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy1sYXlvdXQvY29tcG9uZW50cy9mb2xsb3ctdXMvZm9sbG93LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4udGV4dC1wYXJ0IHtcbiAgLnNlY3Rpb24taGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAxLjQ1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1067:
/*!***************************************************************************!*\
  !*** ./src/app/features/landing-layout/components/main/main.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainComponent: () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);

class MainComponent {
  static #_ = this.ɵfac = function MainComponent_Factory(t) {
    return new (t || MainComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MainComponent,
    selectors: [["app-main"]],
    decls: 14,
    vars: 3,
    consts: [[1, "container-fluid"], [1, "row", "main-row"], [1, "col-12", "landing-col"], [1, "main-page"], [1, "video-box"], ["loop", "", 3, "autoplay", "muted", "playsInline"], ["src", "./../../../../assets/videos/landing.mp4", "type", "video/mp4"], [1, "container-fluid", "landing-text"], [1, "row"], [1, "col-12"], [1, "d-flex", "flex-column", "align-items-center"], [1, "fa-solid", "fa-chevron-down"]],
    template: function MainComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "video", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "source", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10)(11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Shop Our Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoplay", true)("muted", true)("playsInline", true);
      }
    },
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.main-row[_ngcontent-%COMP%] {\n  height: 83vh;\n}\n\n.main-page[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 110vh;\n  position: relative;\n}\n.main-page[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.main-page[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.landing-col[_ngcontent-%COMP%] {\n  position: relative;\n  transform: translateY(-27%);\n}\n\n.landing-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 90%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.landing-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .landing-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 2rem;\n}\n\n@media (max-width: 771px) {\n  .main-row[_ngcontent-%COMP%] {\n    height: 35vh;\n  }\n  .main-page[_ngcontent-%COMP%] {\n    height: 70vh;\n  }\n  .landing-col[_ngcontent-%COMP%] {\n    position: relative;\n    transform: translateY(-40%);\n  }\n  .landing-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .landing-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy1sYXlvdXQvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUdGO0FBRkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUlKO0FBSEk7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBS047O0FBREE7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFLRjtBQUpFOztFQUVFLFdBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSEE7RUFDRTtJQUNFLFlBQUE7RUFNRjtFQUpBO0lBQ0UsWUFBQTtFQU1GO0VBSkE7SUFDRSxrQkFBQTtJQUNBLDJCQUFBO0VBTUY7RUFIRTs7SUFFRSxrQkFBQTtFQUtKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLm1haW4tcm93IHtcbiAgaGVpZ2h0OiA4M3ZoO1xufVxuLm1haW4tcGFnZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDExMHZoO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC52aWRlby1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB2aWRlbyB7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxufVxuLmxhbmRpbmctY29sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI3JSk7XG59XG4ubGFuZGluZy10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDkwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcCxcbiAgaSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzcxcHgpIHtcbiAgLm1haW4tcm93IHtcbiAgICBoZWlnaHQ6IDM1dmg7XG4gIH1cbiAgLm1haW4tcGFnZSB7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICB9XG4gIC5sYW5kaW5nLWNvbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDAlKTtcbiAgfVxuICAubGFuZGluZy10ZXh0IHtcbiAgICBwLFxuICAgIGkge1xuICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 57435:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/landing-layout/components/new-arrivals/new-arrivals.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewArrivalsComponent: () => (/* binding */ NewArrivalsComponent)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ 67955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common.service */ 81390);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _pipes_home_product_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../pipes/home-product.pipe */ 95780);






function NewArrivalsComponent_swiper_slide_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "swiper-slide", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NewArrivalsComponent_swiper_slide_10_Template_swiper_slide_click_0_listener() {
      const p_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.navigateTo("/product/product-details", p_r2 == null ? null : p_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 17)(3, "div", 18)(4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", p_r2 == null ? null : p_r2.bannerImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r2 == null ? null : p_r2.productWithCategory == null ? null : p_r2.productWithCategory.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 4, p_r2 == null ? null : p_r2.productWithVariants[0] == null ? null : p_r2.productWithVariants[0].price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r2 == null ? null : p_r2.productWithVariants[0] == null ? null : p_r2.productWithVariants[0].sku);
  }
}
function NewArrivalsComponent_swiper_slide_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "swiper-slide", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 17)(3, "div", 18)(4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", p_r4 == null ? null : p_r4.bannerImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r4 == null ? null : p_r4.productWithCategory == null ? null : p_r4.productWithCategory.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 4, p_r4 == null ? null : p_r4.productWithVariants[0] == null ? null : p_r4.productWithVariants[0].price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r4 == null ? null : p_r4.productWithVariants[0] == null ? null : p_r4.productWithVariants[0].sku);
  }
}
function NewArrivalsComponent_swiper_slide_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "swiper-slide", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 17)(3, "div", 18)(4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h5", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", p_r5 == null ? null : p_r5.bannerImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r5 == null ? null : p_r5.productWithCategory == null ? null : p_r5.productWithCategory.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 4, p_r5 == null ? null : p_r5.productWithVariants[0] == null ? null : p_r5.productWithVariants[0].price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](p_r5 == null ? null : p_r5.productWithVariants[0] == null ? null : p_r5.productWithVariants[0].sku);
  }
}
class NewArrivalsComponent {
  constructor(router, commonService) {
    this.router = router;
    this.commonService = commonService;
    this.smallProducts = [];
    this.mediumProducts = [];
    this.largeProducts = [];
    this.currentIndex = 0;
    this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.sample-slider', {
      loop: true,
      //loop
      autoplay: {
        //autoplay
        delay: 2000
      },
      pagination: {
        //pagination(dots)
        el: '.swiper-pagination'
      },
      navigation: {
        //navigation(arrows)
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
    this.showNavigationIndicators = false;
  }
  ngOnInit() {}
  navigateTo(path, param) {
    this.router.navigate([path], {
      queryParams: {
        id: param
      }
    });
    let ele = document.getElementById('topbar');
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
  static #_ = this.ɵfac = function NewArrivalsComponent_Factory(t) {
    return new (t || NewArrivalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NewArrivalsComponent,
    selectors: [["app-new-arrivals"]],
    decls: 24,
    vars: 7,
    consts: [[1, "container-fluid", "py-5"], [1, "row"], [1, "col-12", "py-4", "d-flex", "justify-content-center"], [1, "section-heading"], [1, "col-12", "product", "large-list"], [1, "row", "product-row"], [1, "col-12", "product-column"], [1, "card", "border-0"], ["slides-per-view", "4", 1, "img-box"], ["class", "px-2 prod-cart", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-12", "product", "medium-list"], ["slides-per-view", "3", 1, "img-box"], ["class", "px-2 prod-cart", 4, "ngFor", "ngForOf"], [1, "col-12", "product", "small-list"], ["slides-per-view", "2", 1, "img-box"], [1, "px-2", "prod-cart", 3, "click"], [1, "img-fluid", "w-100", 3, "src"], [1, "text-box", "p-3"], [1, "d-flex", "justify-content-between"], [1, "cat-name"], [1, "fw-bold", "prod-price"], [1, "prod-name"], [1, "px-2", "prod-cart"]],
    template: function NewArrivalsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "swiper-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, NewArrivalsComponent_swiper_slide_10_Template, 11, 6, "swiper-slide", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "homeProduct");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10)(13, "div", 5)(14, "div", 6)(15, "div", 7)(16, "swiper-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, NewArrivalsComponent_swiper_slide_17_Template, 11, 6, "swiper-slide", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 13)(19, "div", 5)(20, "div", 6)(21, "div", 7)(22, "swiper-container", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, NewArrivalsComponent_swiper_slide_23_Template, 11, 6, "swiper-slide", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.commonService == null ? null : ctx.commonService.allData == null ? null : ctx.commonService.allData.categories[0] == null ? null : ctx.commonService.allData.categories[0].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 4, ctx.commonService.allData.products, ctx.commonService == null ? null : ctx.commonService.allData == null ? null : ctx.commonService.allData.categories[0]));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.commonService.allData.products);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.commonService.allData.products);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe, _pipes_home_product_pipe__WEBPACK_IMPORTED_MODULE_2__.HomeProductPipe],
    styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.section-heading[_ngcontent-%COMP%] {\n  font-size: 3.2rem;\n}\n\n.large-list[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.medium-list[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.small-list[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .product-column[_ngcontent-%COMP%] {\n  padding: 0 0.8rem;\n}\n.product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .prod-cart[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  transition: transform 0.5s;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  height: 90%;\n}\n.product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 55vh;\n  object-fit: cover;\n}\n.product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n  height: 10%;\n}\n\n@media (max-width: 767px) {\n  .section-heading[_ngcontent-%COMP%] {\n    font-size: 2.25rem;\n    padding: 1rem 0;\n  }\n  .product[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .product[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .product-column[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n    padding: 0.25rem !important;\n  }\n  .product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .product-column[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .cat-name[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .product-column[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .cat-price[_ngcontent-%COMP%] {\n    font-size: 0.4rem;\n  }\n  .product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .product-column[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .prod-name[_ngcontent-%COMP%] {\n    width: 50%;\n    line-height: 1;\n    font-size: 0.9rem;\n  }\n  .product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .product-column[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .prod-price[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .product-column[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 55vw;\n    object-fit: cover;\n  }\n  .large-list[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .medium-list[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .small-list[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (min-width: 768px) and (max-width: 992px) {\n  .large-list[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .medium-list[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .small-list[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.slide[_ngcontent-%COMP%] {\n  height: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy1sYXlvdXQvY29tcG9uZW50cy9uZXctYXJyaXZhbHMvbmV3LWFycml2YWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0FBS0Y7O0FBRkU7RUFDRSxhQUFBO0FBS0o7QUFKSTtFQUNFLGlCQUFBO0FBTU47QUFGUTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpREFBQTtBQUlWO0FBRE07RUFDRSxXQUFBO0FBR1I7QUFGUTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUlWO0FBRE07RUFDRSxXQUFBO0FBR1I7O0FBRUE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsZUFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0VBQ0Y7RUFBRTtJQUNFLGVBQUE7RUFFSjtFQUFFO0lBQ0UsZUFBQTtFQUVKO0VBQU07SUFDRSwyQkFBQTtFQUVSO0VBRFE7SUFDRSxrQkFBQTtFQUdWO0VBRFE7SUFDRSxpQkFBQTtFQUdWO0VBRFE7SUFDRSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VBR1Y7RUFEUTtJQUNFLGtCQUFBO0VBR1Y7RUFFVTtJQUNFLFlBQUE7SUFDQSxpQkFBQTtFQUFaO0VBT0E7SUFDRSxhQUFBO0VBTEY7RUFPQTtJQUNFLGFBQUE7RUFMRjtFQU9BO0lBQ0UsY0FBQTtFQUxGO0FBQ0Y7QUFPQTtFQUNFO0lBQ0UsYUFBQTtFQUxGO0VBT0E7SUFDRSxjQUFBO0VBTEY7RUFPQTtJQUNFLGFBQUE7RUFMRjtBQUNGO0FBT0E7RUFDRSx1QkFBQTtBQUxGIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5zZWN0aW9uLWhlYWRpbmcge1xuICBmb250LXNpemU6IDMuMnJlbTtcbn1cbi5sYXJnZS1saXN0e1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tZWRpdW0tbGlzdHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zbWFsbC1saXN0e1xuICBkaXNwbGF5OiBub25lO1xufVxuLnByb2R1Y3Qge1xuICAucHJvZHVjdC1yb3cge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgLnByb2R1Y3QtY29sdW1uIHtcbiAgICAgIHBhZGRpbmc6IDAgMC44cmVtO1xuICAgIH1cbiAgICAuY2FyZCB7XG4gICAgICAucHJvZC1jYXJ0e1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5pbWctYm94IHtcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA1NXZoO1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAudGV4dC1ib3gge1xuICAgICAgICBoZWlnaHQ6IDEwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2VjdGlvbi1oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDIuMjVyZW07XG4gICAgcGFkZGluZzogMXJlbSAwO1xuICB9XG4gIC5wcm9kdWN0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC5zZWN0aW9uLWhlYWRpbmcge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbiAgICAucHJvZHVjdC1yb3cge1xuICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgLnByb2R1Y3QtY29sdW1uIHtcbiAgICAgICAgLnRleHQtYm94IHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgLmNhdC1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhdC1wcmljZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNHJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2QtbmFtZSB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2QtcHJpY2V7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAuaW1nLWJveCB7XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDU1dnc7XG4gICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAubGFyZ2UtbGlzdHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5tZWRpdW0tbGlzdHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5zbWFsbC1saXN0e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCkgYW5kIChtYXgtd2lkdGg6OTkycHgpe1xuICAubGFyZ2UtbGlzdHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5tZWRpdW0tbGlzdHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuc21hbGwtbGlzdHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uc2xpZGV7XG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 41459:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/landing-layout/components/new-collection/new-collection.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewCollectionComponent: () => (/* binding */ NewCollectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);

class NewCollectionComponent {
  static #_ = this.ɵfac = function NewCollectionComponent_Factory(t) {
    return new (t || NewCollectionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NewCollectionComponent,
    selectors: [["app-new-collection"]],
    decls: 16,
    vars: 3,
    consts: [[1, "container-fluid", "collection-page"], [1, "row", "justify-content-center", "justify-content-md-end", "align-items-center"], [1, "col-11", "col-md-5", "col-lg-3", "content-box"], [1, "content"], [1, "title"], [1, "description"], [1, "btn-box"], [1, "btn", "bg-dark", "text-light", "rounded-0"], [1, "col-11", "col-md-5", "col-lg-7", "video-box"], ["loop", "", 3, "autoplay", "muted", "playsInline"], ["src", "../../../../../assets/videos/collection.mp4", "type", "video/mp4"]],
    template: function NewCollectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "New Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "New Heritage Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u201COur collection of timeless silks and rich fabrics, interwoven with intricate zari, and enhanced with stones, sequins and rich handwork, form this ethereal collection. Every bride\u2019s wardrobe must haves, that commemorate and celebrate new beginnings, and weave a love story like no other.\u201D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "The Peacock Collective");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8)(14, "video", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "source", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoplay", true)("muted", true)("playsInline", true);
      }
    },
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.collection-page[_ngcontent-%COMP%] {\n  background-color: #dbc5b2;\n  background-image: linear-gradient(180deg, #dbc5b2 0%, #a58369 100%);\n  padding: 100px 0px 100px 0px;\n}\n.collection-page[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  z-index: 1;\n}\n.collection-page[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 40vw;\n  height: 45vw;\n}\n.collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%] {\n  display: block;\n  z-index: 5;\n  height: 100%;\n}\n.collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 1.75rem;\n}\n.collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: block;\n  padding: 1rem 0;\n}\n.collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 6rem;\n}\n.collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%] {\n  padding: 30px 0;\n}\n.collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  padding: 7px 17.5px;\n}\n\n@media (max-width: 767px) {\n  .collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 1.6rem;\n  }\n  .collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3.2rem;\n    text-align: center;\n    font-weight: 600;\n    line-height: 1;\n  }\n  .collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n  .collection-page[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 100%;\n    align-items: flex-start;\n  }\n  .collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    line-height: 1;\n    font-size: 6rem;\n  }\n  .collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy1sYXlvdXQvY29tcG9uZW50cy9uZXctY29sbGVjdGlvbi9uZXctY29sbGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLG1FQUFBO0VBQ0EsNEJBQUE7QUFFRjtBQURFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUdKO0FBRkk7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSU47QUFERTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUdKO0FBRkk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBSU47QUFITTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFLUjtBQUhNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFLUjtBQUhNO0VBQ0UsZUFBQTtBQUtSO0FBSE07RUFDRSxlQUFBO0FBS1I7QUFKUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQU1WOztBQUFBO0VBR007SUFDRSxXQUFBO0VBQ047RUFBTTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7RUFFUjtFQUFNO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQUVSO0VBQU07SUFDRSxhQUFBO0VBRVI7RUFBTTtJQUNJLGFBQUE7SUFDQSx1QkFBQTtFQUVWO0VBR0k7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQUROO0FBQ0Y7QUFNQTtFQUdNO0lBQ0UsV0FBQTtJQUNBLHVCQUFBO0VBTk47RUFPTTtJQUNFLGFBQUE7RUFMUjtFQU9NO0lBQ0UsY0FBQTtJQUNBLGVBQUE7RUFMUjtFQU9NO0lBQ0Usa0JBQUE7RUFMUjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5jb2xsZWN0aW9uLXBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJjNWIyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZGJjNWIyIDAlLCAjYTU4MzY5IDEwMCUpO1xuICBwYWRkaW5nOiAxMDBweCAwcHggMTAwcHggMHB4O1xuICAudmlkZW8tYm94IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgei1pbmRleDogMTtcbiAgICB2aWRlbyB7XG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgIHdpZHRoOiA0MHZ3O1xuICAgICAgaGVpZ2h0OiA0NXZ3O1xuICAgIH1cbiAgfVxuICAuY29udGVudC1ib3gge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHotaW5kZXg6IDU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC5jb250ZW50IHtcbiAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICAgIH1cbiAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgICB9XG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICAgIH1cbiAgICAgIC5idG4tYm94IHtcbiAgICAgICAgcGFkZGluZzogMzBweCAwO1xuICAgICAgICAuYnRuIHtcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgcGFkZGluZzogN3B4IDE3LjVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb2xsZWN0aW9uLXBhZ2Uge1xuICAgIC5jb250ZW50LWJveCB7XG4gICAgICAuY29udGVudCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzLjJyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5idG4tYm94e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC52aWRlby1ib3gge1xuICAgICAgdmlkZW8ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuY29sbGVjdGlvbi1wYWdlIHtcbiAgICAuY29udGVudC1ib3gge1xuICAgICAgLmNvbnRlbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBoMSB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgZm9udC1zaXplOiA2cmVtO1xuICAgICAgICB9XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 16539:
/*!*********************************************************************************!*\
  !*** ./src/app/features/landing-layout/components/packbag/packbag.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PackbagComponent: () => (/* binding */ PackbagComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);

class PackbagComponent {
  static #_ = this.ɵfac = function PackbagComponent_Factory(t) {
    return new (t || PackbagComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PackbagComponent,
    selectors: [["app-packbag"]],
    decls: 13,
    vars: 0,
    consts: [[1, "container-fluid", "packbag-page"], [1, "row", "justify-content-center"], [1, "col-11", "w-100"], [1, "pack-img"], [1, "text-box"], [1, "title"], [1, "description"], [1, "btn"]],
    template: function PackbagComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Our Timeless Classics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u201CThere\u2019s something so beautiful about a sari, that each time I try to pen it down, I\u2019m lost for words. It\u2019s a timeless classic. My wardrobe is adorned with my grand-mother\u2019s silk Sarees, which I borrowed from my mum and never returned. Complete with a simple string of pearls or polkis or dressed up with a heavy choker, a Saree can be as versatile as we want it to be.\u201D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Collect your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "accessories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
    },
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.packbag-page[_ngcontent-%COMP%] {\n  padding: 100px 40px;\n  position: relative !important;\n}\n.packbag-page[_ngcontent-%COMP%]   .pack-img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  max-width: 100%;\n  background-image: url('packbag.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  padding: 1rem;\n  height: 80vh;\n  transform: scale(1);\n}\n.packbag-page[_ngcontent-%COMP%]   .pack-img[_ngcontent-%COMP%]:hover {\n  background-size: 120%;\n  transform: scale(1);\n  transition-duration: 0.2s;\n  transition-property: transform;\n}\n.packbag-page[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.packbag-page[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 4rem;\n  font-weight: bold;\n  line-height: 1.8em;\n}\n.packbag-page[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 1.5;\n  text-align: center;\n  color: #ffffff;\n  margin-bottom: 1rem;\n}\n.packbag-page[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  border-radius: 0;\n  background: #ffffff;\n  transition: all 0.5s;\n}\n.packbag-page[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: #000;\n  color: #ffffff;\n}\n\n@media (max-width: 767px) {\n  .packbag-page[_ngcontent-%COMP%] {\n    padding: 100px 15px;\n  }\n  .packbag-page[_ngcontent-%COMP%]   .pack-img[_ngcontent-%COMP%]:hover {\n    background-size: cover;\n  }\n  .packbag-page[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    text-align: center;\n    line-height: 1;\n  }\n  .packbag-page[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .packbag-page[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 7px 17.5px;\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy1sYXlvdXQvY29tcG9uZW50cy9wYWNrYmFnL3BhY2tiYWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQUVGO0FBREU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUdKO0FBRkk7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtBQUlOO0FBREU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUdKO0FBRkk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFJTjtBQUZJO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBSU47QUFGSTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBSU47QUFITTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUtSOztBQUFBO0VBQ0U7SUFDRSxtQkFBQTtFQUdGO0VBREk7SUFDRSxzQkFBQTtFQUdOO0VBQ0k7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VBQ047RUFDSTtJQUNFLGlCQUFBO0VBQ047RUFDSTtJQUNFLG1CQUFBO0lBQ0EsZUFBQTtFQUNOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLnBhY2tiYWctcGFnZSB7XG4gIHBhZGRpbmc6IDEwMHB4IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAucGFjay1pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhY2tiYWcuanBnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgaGVpZ2h0OiA4MHZoO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEyMCU7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICB9XG4gIH1cbiAgLnRleHQtYm94IHtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLnRpdGxlIHtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBsaW5lLWhlaWdodDogMS44ZW07XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAucGFja2JhZy1wYWdlIHtcbiAgICBwYWRkaW5nOiAxMDBweCAxNXB4O1xuICAgIC5wYWNrLWltZ3tcbiAgICAgICY6aG92ZXJ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICB9XG4gICAgfVxuICAgIC50ZXh0LWJveCB7XG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICB9XG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgIH1cbiAgICAgIC5idG4ge1xuICAgICAgICBwYWRkaW5nOiA3cHggMTcuNXB4O1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 4881:
/*!***************************************************************************************!*\
  !*** ./src/app/features/landing-layout/components/who-we-are/who-we-are.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WhoWeAreComponent: () => (/* binding */ WhoWeAreComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);

class WhoWeAreComponent {
  static #_ = this.ɵfac = function WhoWeAreComponent_Factory(t) {
    return new (t || WhoWeAreComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: WhoWeAreComponent,
    selectors: [["app-who-we-are"]],
    decls: 26,
    vars: 0,
    consts: [[1, "container-fluid", "py-5", "top-container"], [1, "row"], [1, "col-12", "d-flex", "justify-content-center"], [1, "container-fluid"], [1, "col-11"], [1, "section-heading", "ps-4"], [1, "col-12", "content-box"], [1, "row", "flex-box"], [1, "col-12", "col-md-6", "col-lg-6", "pe-4", "left-part"], [1, "mb-2"], [1, "col-12", "col-md-6", "col-lg-6", "right-part", "ps-4"], [1, "sign-text"]],
    template: function WhoWeAreComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 1)(5, "div", 4)(6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Born in 2024, in the iconic city of Mumbai, we set on an adventure to bring some of India\u2019s finest fashion sensibilities under one roof. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " What started off as a passion project, soon turned into a vision, and we decided it was time to intentionally seek out and bring to all of you a blend of timeless classics, and a collection of unconventional designs. The Peacock Collective is our endeavor to reminisce, reinvent and rethink Indian fashion, while proudly supporting Indian artisans and karigars who partner with us in this journey. Staying true to our brand name, we house a collection of vibrant designs, colors and patterns that exude tones of Indian maximalism, as well as, bring under the same roof, our wide range of minimalist designs that find their way into your everyday wardrobe. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " We are two sisters, who stepped into the world of fashion, constantly asking ourselves one very important question - How do we cut through the noise? The answer was simple. We want to build a brand that disrupts, challenges norms, and solves problems. We want to build a brand that makes the outfit work for you, and not the other way round. A brand that almost always reminds you of India, our fashion sensibilities, the richness of our fabrics, the handwork, and the bling! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10)(18, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " When you drape our saree, it should bring to you the whole nine yards worth of joy that comes from draping a luxurious fabric, and at the same time, having a blouse that fits well, is in vogue, and makes you feel your beautiful self each time you put it on. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Our love story with Indian fabrics and fashion started with the first saree we borrowed from our mothers\u2019 wardrobes, gently placing all the cloves aside to be reused again, and barely managing to drape it. Our love matured, when we designed our first ever lehenga, paired it with a custom blouse we created from scratch and completed the look with an organza dupatta that was hand-embroidered by our karigars. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " This love continues to grow as we share it with you. We are Proudly Made in India. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "signature");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
    },
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  line-height: 1.5;\n}\n\n.content-box[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3rem;\n  justify-content: space-between;\n}\n.content-box[_ngcontent-%COMP%]   .flex-box[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n.content-box[_ngcontent-%COMP%]   .flex-box[_ngcontent-%COMP%]   .sign-text[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  text-align: end;\n  margin-right: 3rem;\n  margin-top: 2rem;\n  font-style: italic;\n  letter-spacing: 4.2px;\n  line-height: 1;\n}\n\n.section-heading[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 2rem;\n}\n\n@media (max-width: 768px) {\n  .top-container[_ngcontent-%COMP%] {\n    padding-top: 1rem !important;\n  }\n  .section-heading[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    margin-bottom: 1rem;\n    text-align: center;\n  }\n  .right-part[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n  .content-box[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .content-box[_ngcontent-%COMP%]   .flex-box[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: 0;\n  }\n  .content-box[_ngcontent-%COMP%]   .flex-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: justify;\n  }\n  .content-box[_ngcontent-%COMP%]   .flex-box[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%], .content-box[_ngcontent-%COMP%]   .flex-box[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy1sYXlvdXQvY29tcG9uZW50cy93aG8td2UtYXJlL3doby13ZS1hcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FBRUY7QUFERTtFQUNFLGVBQUE7QUFHSjtBQUZJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBSU47O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFO0lBQ0UsNEJBQUE7RUFHRjtFQURBO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUFHRjtFQURBO0lBQ0UscUJBQUE7RUFHRjtFQURBO0lBQ0UsZUFBQTtFQUdGO0VBRkU7SUFDRSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSxVQUFBO0VBSUo7RUFISTtJQUNFLG1CQUFBO0VBS047RUFISTs7SUFFRSxXQUFBO0lBQ0EscUJBQUE7RUFLTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5jb250ZW50LWJveCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogM3JlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAuZmxleC1ib3gge1xuICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICAuc2lnbi10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIGxldHRlci1zcGFjaW5nOiA0LjJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cbiAgfVxufVxuXG4uc2VjdGlvbi1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50b3AtY29udGFpbmVye1xuICAgIHBhZGRpbmctdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlY3Rpb24taGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5yaWdodC1wYXJ0IHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNvbnRlbnQtYm94IHtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgLmZsZXgtYm94IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgcCB7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICB9XG4gICAgICAubGVmdC1wYXJ0LFxuICAgICAgLnJpZ2h0LXBhcnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 50163:
/*!**************************************************************************!*\
  !*** ./src/app/features/landing-layout/landing-layout-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingLayoutRoutingModule: () => (/* binding */ LandingLayoutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _landing_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-layout.component */ 93827);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37100);




const routes = [{
  path: '',
  component: _landing_layout_component__WEBPACK_IMPORTED_MODULE_0__.LandingLayoutComponent
}];
class LandingLayoutRoutingModule {
  static #_ = this.ɵfac = function LandingLayoutRoutingModule_Factory(t) {
    return new (t || LandingLayoutRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: LandingLayoutRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LandingLayoutRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 93827:
/*!*********************************************************************!*\
  !*** ./src/app/features/landing-layout/landing-layout.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingLayoutComponent: () => (/* binding */ LandingLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/main/main.component */ 1067);
/* harmony import */ var _components_follow_us_follow_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/follow-us/follow-us.component */ 95759);
/* harmony import */ var _components_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/who-we-are/who-we-are.component */ 4881);
/* harmony import */ var _components_packbag_packbag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/packbag/packbag.component */ 16539);
/* harmony import */ var _components_new_collection_new_collection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/new-collection/new-collection.component */ 41459);
/* harmony import */ var _components_new_arrivals_new_arrivals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/new-arrivals/new-arrivals.component */ 57435);
/* harmony import */ var _components_connect_connect_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/connect/connect.component */ 88891);








class LandingLayoutComponent {
  static #_ = this.ɵfac = function LandingLayoutComponent_Factory(t) {
    return new (t || LandingLayoutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: LandingLayoutComponent,
    selectors: [["app-landing-layout"]],
    decls: 7,
    vars: 0,
    template: function LandingLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-main")(1, "app-new-arrivals")(2, "app-new-collection")(3, "app-packbag")(4, "app-connect")(5, "app-who-we-are")(6, "app-follow-us");
      }
    },
    dependencies: [_components_main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent, _components_follow_us_follow_us_component__WEBPACK_IMPORTED_MODULE_1__.FollowUsComponent, _components_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_2__.WhoWeAreComponent, _components_packbag_packbag_component__WEBPACK_IMPORTED_MODULE_3__.PackbagComponent, _components_new_collection_new_collection_component__WEBPACK_IMPORTED_MODULE_4__.NewCollectionComponent, _components_new_arrivals_new_arrivals_component__WEBPACK_IMPORTED_MODULE_5__.NewArrivalsComponent, _components_connect_connect_component__WEBPACK_IMPORTED_MODULE_6__.ConnectComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 20690:
/*!******************************************************************!*\
  !*** ./src/app/features/landing-layout/landing-layout.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingLayoutModule: () => (/* binding */ LandingLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _landing_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-layout-routing.module */ 50163);
/* harmony import */ var _landing_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-layout.component */ 93827);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main.component */ 1067);
/* harmony import */ var _components_follow_us_follow_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/follow-us/follow-us.component */ 95759);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 90530);
/* harmony import */ var _components_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/who-we-are/who-we-are.component */ 4881);
/* harmony import */ var _components_packbag_packbag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/packbag/packbag.component */ 16539);
/* harmony import */ var _components_new_collection_new_collection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/new-collection/new-collection.component */ 41459);
/* harmony import */ var _components_new_arrivals_new_arrivals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/new-arrivals/new-arrivals.component */ 57435);
/* harmony import */ var _components_connect_connect_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/connect/connect.component */ 88891);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 46584);
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/element/bundle */ 91421);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ 53020);
/* harmony import */ var _pipes_home_product_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/home-product.pipe */ 95780);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37100);
















(0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_9__.register)();
class LandingLayoutModule {
  static #_ = this.ɵfac = function LandingLayoutModule_Factory(t) {
    return new (t || LandingLayoutModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: LandingLayoutModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _landing_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingLayoutRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__.SharedModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](LandingLayoutModule, {
    declarations: [_landing_layout_component__WEBPACK_IMPORTED_MODULE_1__.LandingLayoutComponent, _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent, _components_follow_us_follow_us_component__WEBPACK_IMPORTED_MODULE_3__.FollowUsComponent, _components_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_4__.WhoWeAreComponent, _components_packbag_packbag_component__WEBPACK_IMPORTED_MODULE_5__.PackbagComponent, _components_new_collection_new_collection_component__WEBPACK_IMPORTED_MODULE_6__.NewCollectionComponent, _components_new_arrivals_new_arrivals_component__WEBPACK_IMPORTED_MODULE_7__.NewArrivalsComponent, _components_connect_connect_component__WEBPACK_IMPORTED_MODULE_8__.ConnectComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule, _landing_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingLayoutRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__.SharedModule, _pipes_home_product_pipe__WEBPACK_IMPORTED_MODULE_11__.HomeProductPipe],
    exports: [_landing_layout_component__WEBPACK_IMPORTED_MODULE_1__.LandingLayoutComponent]
  });
})();

/***/ }),

/***/ 46200:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/shared/components/custom-pagination/custom-pagination.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomPaginationComponent: () => (/* binding */ CustomPaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 90530);



function CustomPaginationComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " << ");
  }
}
function CustomPaginationComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " >> ");
  }
}
function CustomPaginationComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " < ");
  }
}
function CustomPaginationComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " > ");
  }
}
function CustomPaginationComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " ... ");
  }
}
function CustomPaginationComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const page_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", page_r1, " ");
  }
}
class CustomPaginationComponent {
  constructor() {
    this.page = 1;
    this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.pageSize = 25;
    this.pageSizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.collection = 0;
    this.collectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.myOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.itemsPerPage = 25;
    this.currentPageLimit = 25;
    this.pageLimitOptions = [{
      value: 10
    }, {
      value: 25
    }, {
      value: 50
    }, {
      value: 100
    }, {
      value: 150
    }, {
      value: 200
    }];
  }
  ngAfterViewInit() {
    // console.log("child", this.pageSize, this.page, this.collection);
  }
  ngOnInit() {
    // console.log("child", this.pageSize, this.page, this.collection);
  }
  onChangePage(pageNo) {
    this.pageChange.emit(this.page);
    this.pageSizeChange.emit(this.pageSize);
    this.collectionChange.emit(this.collection);
    this.myOutput.emit(pageNo);
  }
  static #_ = this.ɵfac = function CustomPaginationComponent_Factory(t) {
    return new (t || CustomPaginationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CustomPaginationComponent,
    selectors: [["app-custom-pagination"]],
    inputs: {
      page: "page",
      pageSize: "pageSize",
      collection: "collection"
    },
    outputs: {
      pageChange: "pageChange",
      pageSizeChange: "pageSizeChange",
      collectionChange: "collectionChange",
      myOutput: "myOutput"
    },
    decls: 9,
    vars: 6,
    consts: [[1, "row", "justify-content-between", "align-items-center", "pt-2", "pagination-sm", "m-0"], [1, "col-md-auto"], [3, "pageChange", "collectionSize", "page", "pageSize", "maxSize", "rotate", "boundaryLinks"], ["ngbPaginationFirst", ""], ["ngbPaginationLast", ""], ["ngbPaginationPrevious", ""], ["ngbPaginationNext", ""], ["ngbPaginationEllipsis", ""], ["ngbPaginationNumber", "", 1, "custompage"]],
    template: function CustomPaginationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "ngb-pagination", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("pageChange", function CustomPaginationComponent_Template_ngb_pagination_pageChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.page, $event) || (ctx.page = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function CustomPaginationComponent_Template_ngb_pagination_pageChange_2_listener() {
          return ctx.onChangePage(ctx.page);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomPaginationComponent_ng_template_3_Template, 1, 0, "ng-template", 3)(4, CustomPaginationComponent_ng_template_4_Template, 1, 0, "ng-template", 4)(5, CustomPaginationComponent_ng_template_5_Template, 1, 0, "ng-template", 5)(6, CustomPaginationComponent_ng_template_6_Template, 1, 0, "ng-template", 6)(7, CustomPaginationComponent_ng_template_7_Template, 1, 0, "ng-template", 7)(8, CustomPaginationComponent_ng_template_8_Template, 1, 1, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("collectionSize", ctx.collection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("page", ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx.pageSize)("maxSize", 5)("rotate", true)("boundaryLinks", true);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbPagination, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbPaginationEllipsis, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbPaginationFirst, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbPaginationLast, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbPaginationNext, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbPaginationNumber, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbPaginationPrevious],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 76012:
/*!***********************************************************************!*\
  !*** ./src/app/features/shared/components/footer/footer.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 46584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37100);



class FooterComponent {
  constructor() {
    this.footerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required])
    });
    this.data = {
      phone: '+48 541 44 27',
      email: 'info@info.com',
      address: '66-764 City, Street 23',
      fbLink: '',
      twitterLink: '',
      googleLink: '',
      instaLink: '',
      ytLink: '',
      pinterestLink: '',
      vimeoLink: ''
    };
  }
  submit() {
    if (!!this.footerForm.value) {
      console.log('formValue', this.footerForm.value);
    }
  }
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 51,
    vars: 13,
    consts: [[1, "container-fluid", "py-5"], [1, "row", "justify-content-center"], [1, "col-11"], [1, "row", "justify-content-between"], [1, "col-12", "col-md-6", "col-lg-4"], [1, "contact-text"], [1, "mb-2", "fw-bold"], [1, "d-flex", "align-items-center", "mb-2"], [1, "fa-solid", "fa-location-pin", "me-2"], [1, "fa-solid", "fa-phone", "me-2"], ["target", "_blank", 3, "href"], [1, "fa-solid", "fa-envelope", "me-2"], [1, "col-12", "col-md-4", "col-lg-3"], [1, "follow-text"], [1, "brands-icons", "d-flex", "justify-content-between", "pb-4"], [1, "fa-brands", "fa-facebook"], [1, "fa-brands", "fa-twitter"], [1, "fa-brands", "fa-instagram"], [1, "fa-brands", "fa-google-plus-g"], [1, "fa-brands", "fa-pinterest"], [1, "fa-brands", "fa-youtube"], [1, "fa-brands", "fa-vimeo-v"], [3, "formGroup"], [1, "input-wrapper"], ["type", "text", "placeholder", "Your email address", "formControlName", "email"], [1, "fa-solid", "fa-envelope", "p-3", 3, "click"], [1, "small-text", "pt-2"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "The Peacock Collective");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p")(16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p")(21, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "iqitcontactpage - module, you can put own text in configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 12)(26, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Follow us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 14)(29, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Newsletter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "form", 22)(46, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_i_click_48_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "tel:" + ctx.data.phone, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "mailto:" + ctx.data.email, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.data.fbLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.data.twitterLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.data.googleLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.data.instaLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.data.ytLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.data.pinterestLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx.data.vimeoLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.footerForm);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName],
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.contact-text[_ngcontent-%COMP%], .follow-text[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 1.7rem;\n}\n\n.fa-brands[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  border: solid 1px #e3e3e3;\n  background-color: #fff;\n  display: flex;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 90%;\n  border: none;\n  padding-left: 1rem;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-bottom: 1px solid #000;\n  background-color: rgba(227, 227, 227, 0.4980392157);\n}\n\n.small-text[_ngcontent-%COMP%] {\n  color: #acaaa6 !important;\n  font-size: 0.75rem;\n}\n\n.brands-icons[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n@media (max-width: 768px) {\n  .brands-icons[_ngcontent-%COMP%] {\n    justify-content: flex-start !important;\n  }\n  .brands-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-right: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7QUFFRjs7QUFBQTs7RUFFRSxpQkFBQTtFQUNBLHFCQUFBO0FBR0Y7O0FBREE7RUFDRSxpQkFBQTtBQUlGOztBQUZBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFLRjtBQUpFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQU1KO0FBTEk7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtREFBQTtBQU9OOztBQUhBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQU1GOztBQUpBO0VBQ0UsZUFBQTtBQU9GOztBQUxBO0VBQ0U7SUFDRSxzQ0FBQTtFQVFGO0VBUEU7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFTSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuYXtcbiAgY29sb3I6ICMwMDA7XG59XG4uY29udGFjdC10ZXh0LFxuLmZvbGxvdy10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIG1hcmdpbi1ib3R0b206IDEuN3JlbTtcbn1cbi5mYS1icmFuZHMge1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cbi5pbnB1dC13cmFwcGVyIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2UzZTNlMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgaW5wdXQge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAmOmZvY3VzLXZpc2libGUge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlMzdmO1xuICAgIH1cbiAgfVxufVxuLnNtYWxsLXRleHQge1xuICBjb2xvcjogI2FjYWFhNiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDAuNzVyZW07XG59XG4uYnJhbmRzLWljb25zIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5icmFuZHMtaWNvbnMge1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCAhaW1wb3J0YW50O1xuICAgIGkge1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 78032:
/*!***********************************************************************!*\
  !*** ./src/app/features/shared/components/header/header.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 90530);
/* harmony import */ var src_app_pipes_tag_category_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pipes/tag-category.pipe */ 18314);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services */ 9460);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 81390);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart.service */ 45761);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 46584);
/* harmony import */ var src_app_pipes_tag_product_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pipes/tag-product.pipe */ 13557);















const _forTrack0 = ($index, $item) => $item.id;
function HeaderComponent_For_32_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 81)(1, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_For_32_div_11_Template_span_click_1_listener() {
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.navigateToDynamic(item_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("textDanger", (item_r7 == null ? null : item_r7.name) == "Sale")("active-category", ctx_r4.activeCategoryId == item_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r7 == null ? null : item_r7.name);
  }
}
function HeaderComponent_For_32_swiper_slide_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "swiper-slide", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_For_32_swiper_slide_15_Template_swiper_slide_click_0_listener() {
      const p_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.navigateTo("/product/product-details", p_r9 == null ? null : p_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 89)(3, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", p_r9 == null ? null : p_r9.bannerImage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](p_r9 == null ? null : p_r9.name);
  }
}
function HeaderComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseover", function HeaderComponent_For_32_Template_a_mouseover_2_listener() {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r4.activeTagId = item_r4.id;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.changeActiveCategory());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 78)(6, "div", 79)(7, "div", 80)(8, "div", 81)(9, "span", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, HeaderComponent_For_32_div_11_Template, 3, 5, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "tagCategory");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 84)(14, "swiper-container", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, HeaderComponent_For_32_swiper_slide_15_Template, 5, 2, "swiper-slide", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "tagProduct");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 4, ctx_r4.commonService.allData.categories, ctx_r4.activeTagId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](16, 7, ctx_r4.commonService.allData.products, ctx_r4.activeTagId, ctx_r4.activeCategoryId));
  }
}
function HeaderComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_69_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.isMenuOpen = !ctx_r4.isMenuOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_div_70_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_70_div_2_Template_div_click_0_listener() {
      const item_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.handleCategory(item_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r13.title);
  }
}
function HeaderComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 94)(1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HeaderComponent_div_70_div_2_Template, 5, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_70_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r4.navigateTo("/contact", null);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.isMenuOpen = !ctx_r4.isMenuOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.commonService.allData.tags);
  }
}
function HeaderComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_72_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.isAccountOpen = !ctx_r4.isAccountOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}
function HeaderComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 94)(1, "div", 95)(2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_73_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r4.navigateTo("/auth/login", null);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.isAccountOpen = !ctx_r4.isAccountOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "My Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_73_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r4.navigateTo("/order/wishlist", null);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.isAccountOpen = !ctx_r4.isAccountOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Wishlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_73_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r4.navigateTo("/order/my-orders", null);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.isAccountOpen = !ctx_r4.isAccountOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "My Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function HeaderComponent_ng_container_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function HeaderComponent_ng_template_83_div_0_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const attr_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", attr_r18.AttrVariantMapWithAttributes.name, " : ", attr_r18 == null ? null : attr_r18.value, " ");
  }
}
function HeaderComponent_ng_template_83_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 102)(1, "div", 103)(2, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_ng_template_83_div_0_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.isCartOpen = !ctx_r4.isCartOpen);
    })("click", function HeaderComponent_ng_template_83_div_0_Template_img_click_2_listener() {
      const p_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.navigateTo("/product/product-details", p_r17 == null ? null : p_r17.cartWithVariants == null ? null : p_r17.cartWithVariants.variantWithProduct == null ? null : p_r17.cartWithVariants.variantWithProduct.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 105)(4, "p", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_ng_template_83_div_0_Template_p_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.isCartOpen = !ctx_r4.isCartOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, HeaderComponent_ng_template_83_div_0_p_6_Template, 2, 2, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 32)(8, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function HeaderComponent_ng_template_83_div_0_Template_input_ngModelChange_8_listener($event) {
      const p_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](p_r17.qty, $event) || (p_r17.qty = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 109)(13, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_ng_template_83_div_0_Template_i_click_13_listener() {
      const p_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.navigateTo("/product/product-details", p_r17 == null ? null : p_r17.cartWithVariants == null ? null : p_r17.cartWithVariants.variantWithProduct == null ? null : p_r17.cartWithVariants.variantWithProduct.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", p_r17 == null ? null : p_r17.cartWithVariants == null ? null : p_r17.cartWithVariants.variantImages[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", p_r17 == null ? null : p_r17.cartWithVariants == null ? null : p_r17.cartWithVariants.variantWithProduct.hsn, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", p_r17 == null ? null : p_r17.cartWithVariants == null ? null : p_r17.cartWithVariants.variantWithAttrVariantMap);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", p_r17.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", p_r17.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("x ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 7, p_r17 == null ? null : p_r17.cartWithVariants == null ? null : p_r17.cartWithVariants.price, "INR"), "");
  }
}
function HeaderComponent_ng_template_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, HeaderComponent_ng_template_83_div_0_Template, 14, 10, "div", 101);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.cartData);
  }
}
function HeaderComponent_div_127_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_127_Template_div_click_0_listener() {
      const cat_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r4.navigateToDynamic(cat_r20 == null ? null : cat_r20.name);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.handleDataRemove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_127_Template_p_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r4.isMenuOpen = !ctx_r4.isMenuOpen;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.handleDataRemove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cat_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", cat_r20 == null ? null : cat_r20.name, " ");
  }
}
function HeaderComponent_swiper_slide_130_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "swiper-slide", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_swiper_slide_130_Template_swiper_slide_click_0_listener() {
      const p_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.navigateTo("/product/product-details", p_r22 == null ? null : p_r22.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 89)(3, "p", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", p_r22 == null ? null : p_r22.bannerImage, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](p_r22 == null ? null : p_r22.name);
  }
}
function HeaderComponent_ng_template_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 113)(2, "i", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class HeaderComponent {
  constructor(_platformId, router, storageService, commonService, tagCatPipe, cartService, toast) {
    this._platformId = _platformId;
    this.router = router;
    this.storageService = storageService;
    this.commonService = commonService;
    this.tagCatPipe = tagCatPipe;
    this.cartService = cartService;
    this.toast = toast;
    this.searchToggle = false;
    this.qty = 1;
    this.closeResult = '';
    this.scrollValue = 0;
    this.isMenuOpen = false;
    this.isAccountOpen = false;
    this.isCatOpen = false;
    this.isCartOpen = false;
    this.cartData = [];
    this.category = {
      title: '',
      categories: []
    };
    this.activeTagId = null;
    this.activeCategoryId = null;
    this.currentVariant = null;
    this.modalService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal);
    // Header Dropdown Data
    this.categoryProducts = [{
      name: 'Product 1',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 2',
      img: '../../../../../assets/images/bride-1.jpeg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 3',
      img: '../../../../../assets/images/bride-4.jpg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 4',
      img: '../../../../../assets/images/bride-2.jpg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 5',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 6',
      img: '../../../../../assets/images/bride-1.jpeg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 7',
      img: '../../../../../assets/images/bride-4.jpg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 8',
      img: '../../../../../assets/images/bride-2.jpg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 9',
      img: '../../../../../assets/images/bride-1.jpeg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 10',
      img: '../../../../../assets/images/bride-2.jpg',
      catName: 'Blouses',
      price: 11.5
    }];
    // Cart Data
    this.product = [{
      name: 'Printed Chiffon Dress',
      img: '../../../../../assets/products/chair.jpg',
      size: 'S',
      color: 'Yellow',
      price: 10.5,
      qty: 5,
      shipCharge: 3.2
    }, {
      name: 'Printed Chiffon Dress',
      img: '../../../../../assets/products/printer.jpg',
      size: 'S',
      color: 'Yellow',
      price: 10.5,
      qty: 1,
      shipCharge: 3.2
    }];
    this.totalShipCharge = this.product.reduce((acc, currValue) => acc + currValue.shipCharge, 0);
    // this.user = this.storageService.get('Customer'); 
  }
  openSearch(content) {
    this.modalService.open(content, {
      size: 'xl',
      centered: true
    });
  }
  get totalItemPrice() {
    let totalPriceArray = this.cartData.reduce((acc, currValue) => acc + currValue.cartWithVariants.price * currValue.qty, 0);
    // return totalPriceArray.reduce(
    //   (acc, currValue) => acc + currValue.totalPrice,
    //   0
    // );
    return totalPriceArray;
  }
  ngOnInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(this._platformId)) {
      window.addEventListener('wheel', event => {
        this.scrollValue = Math.sign(event.deltaY);
      });
    }
  }
  onWindowScroll() {
    const scrollPositionValue = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrollPosition = scrollPositionValue;
  }
  navigateTo(path, id) {
    if (path == '/order/my-orders' || path == '/order/wishlist') {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(this._platformId)) {
        let user = localStorage.getItem('Customer') ? true : false;
        if (!user) {
          this.toast.warning('Please login see this section');
          return;
        }
      }
    }
    this.router.navigate([path], {
      queryParams: {
        id: id
      }
    });
    let ele = document.getElementById('topbar');
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
  navigateWithParams(path, param) {
    this.router.navigate([path], {
      queryParams: {
        brand: param
      }
    });
    let ele = document.getElementById('topbar');
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
  navigateToDynamic(item) {
    console.log("item", item);
    this.activeCategoryId = item.id;
    const path = `pages/${item.id}`;
    this.router.navigate([path]);
    let ele = document.getElementById('topbar');
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
  handleCategory(data) {
    this.activeTagId = data.id;
    let tagCategory = this.tagCatPipe.transform(this.commonService?.allData?.products, this.activeTagId);
    this.category.title = data.title;
    this.category.categories.push(...tagCategory);
    this.isCatOpen = !this.isCatOpen;
    this.isMenuOpen = !this.isMenuOpen;
  }
  handleDataRemove() {
    this.isCatOpen = !this.isCatOpen;
    this.isMenuOpen = !this.isMenuOpen;
    this.category.title = '';
    this.category.categories = [];
  }
  checkout() {
    let checkoutProduts = this.cartData.map(x => {
      return {
        qty: x.qty,
        variantId: x.variantId
      };
    });
    sessionStorage.setItem('products', JSON.stringify(checkoutProduts));
    this.router.navigate(['/order/checkout'], {
      queryParams: {
        type: 'CART'
      }
    });
  }
  showCart() {
    let user = null;
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(this._platformId)) {
      user = localStorage.getItem('Customer') ? true : false;
    }
    if (user) {
      this.isCartOpen = !this.isCartOpen;
      this.getAllCartData();
    } else {
      this.toast.warning('Please login for show your cart');
    }
  }
  getAllCartData() {
    this.cartService.getAll().subscribe(success => {
      this.cartData = success.result.rows;
    });
  }
  changeActiveCategory() {
    const filterCategory = this.commonService.allData.categories.filter(x => x.categoryWithtags.some(y => y.tagId == this.activeTagId));
    if (filterCategory.length) {
      this.activeCategoryId = filterCategory[0].id;
      console.log("this.activeCategoryId", this.activeCategoryId);
    } else {
      this.activeCategoryId = null;
    }
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_pipes_tag_category_pipe__WEBPACK_IMPORTED_MODULE_0__.TagCategoryPipe), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_1__.ToastService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler() {
          return ctx.onWindowScroll();
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([src_app_pipes_tag_category_pipe__WEBPACK_IMPORTED_MODULE_0__.TagCategoryPipe])],
    decls: 134,
    vars: 31,
    consts: [["elseBlock", ""], ["search", ""], [1, "head", 3, "ngClass"], ["id", "topbar", 1, "container-fluid"], [1, "row", "upper-row"], [1, "col-11"], [1, "row"], [1, "col-4", "d-flex", "pointer", 3, "click"], ["width", "55", "src", "../../../../../assets/images/gold-logo.png", "alt", "logo"], [1, "col-8", "col-lg-4", "ship-text"], ["src", "../../../../../assets/images/companyName.png", "alt", "Company Name", 1, "img-fluid", "pointer", 3, "click"], [1, "d-none", "d-md-none", "d-lg-block", "col-lg-4"], [1, "icons-box"], [1, "icons"], [1, "fa-solid", "fa-magnifying-glass", "pointer", 3, "click"], ["ngbDropdown", ""], ["type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn"], [1, "fa-solid", "fa-user", "pointer"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", 1, "p-3", 3, "click"], [1, "fa-solid", "fa-cart-plus", "nav-items", "pointer", 3, "click"], [1, "container-fluid", "header-web"], [1, "row", "justify-content-center"], [1, "row", "justify-content-around"], [1, "col-10"], [1, "d-flex", "h-100"], [1, "nav_menu", "d-flex"], [1, "nav_list", "nav_list_menu"], [1, "nav_link", "text-uppercase", 3, "click"], [1, "nav-items", "pointer"], [1, "col-2", "d-flex", "justify-content-end"], [1, "navbar-brand", "text-uppercase", "textDanger", "nav-items", "pointer", 3, "click"], [1, "d-flex", "align-items-center"], [1, "container-fluid", "header-tablet"], [1, "col-3", "d-flex", "flex-column", "align-items-center", "p-3", "menu-items", 3, "click"], [1, "fa-solid", "fa-bars"], [1, "col-3", "d-flex", "flex-column", "align-items-center", "p-3", "menu-items"], [1, "fa-solid", "fa-magnifying-glass", 3, "click"], [1, "d-flex"], [1, "nav_list"], [1, "d-flex", "justify-content-center", 3, "click"], [3, "ngClass"], [1, "container-fluid"], [1, "search", "d-flex", "justify-content-between", "align-items-center", "p-4", "w-100"], ["type", "text", "placeholder", "Search", 1, "form-control", "w-75"], [1, "fa-solid", "fa-user"], [1, "fa-solid", "fa-bag-shopping"], ["class", "offcanvas-header m-0 px-4 py-2", 4, "ngIf"], ["class", "offcanvas-body m-0", 4, "ngIf"], [1, "cart-header", "m-0", "px-4", "py-3", "border-bottom", "bg-light"], ["type", "button", 1, "btn", "text-dark", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "cart-body", "m-0", "bg-white", "p-3", "d-flex", "flex-column", "justify-content-between"], [1, "product-part"], [4, "ngIf", "ngIfElse"], [1, "info-part"], [1, "row", "py-3", "border-bottom"], [1, "col-12", "d-flex", "justify-content-between"], [1, "row", "py-3"], [1, "col-12", "description"], [1, "col-12", "mb-2"], ["type", "button", 1, "btn", "btn-dark", "py-2", 3, "click", "disabled"], [1, "col-12"], ["type", "button", 1, "btn", "btn-light", "py-2", 3, "click", "disabled"], [1, "offcanvas-header", "m-0", "px-4", "py-3", "border-bottom"], [1, "fw-bold"], [1, "text-dark", "fa-solid", "fa-xmark"], [1, "offcanvas-body", "m-0", "px-4", "d-flex", "flex-column", "justify-content-between"], [1, "option"], [1, "option-item", "border-bottom", "d-flex", "justify-content-between", "py-3", 3, "click"], [1, "d-flex", "align-items-center", "w-25"], [1, "fa-solid", "fa-chevron-left"], [1, "w-75", "text-uppercase", "fw-bold"], ["class", "option-item border-bottom d-flex justify-content-between py-3", 3, "click", 4, "ngFor", "ngForOf"], [1, "dropdownItem", "p-3"], ["slides-per-view", "1", 1, "img-box"], ["class", "px-2 prod-cart", 3, "click", 4, "ngFor", "ngForOf"], [1, "nav_link", "text-uppercase", 3, "mouseover"], [1, "dropDown"], [1, "dropdown-inner", "row"], [1, "col-2", "dropdownItem", "border-end"], [1, "py-2"], [1, "drop-items", "pointer", "fw-bold", "text-capitalize"], ["class", "py-2", 4, "ngFor", "ngForOf"], [1, "col-10", "dropdownItem", "px-3"], ["slides-per-view", "4", 1, "img-box"], [1, "drop-items", "pointer", 3, "click"], [1, "px-2", "prod-cart", 3, "click"], [1, "prod-img", "w-100", 3, "src"], [1, "text-box", "p-3"], [1, "prod-name"], [1, "offcanvas-header", "m-0", "px-4", "py-2"], ["src", "../../../../../assets/images/gold-logo.png", 1, "img-fluid-m", "me-3", "logo-img"], ["type", "button", 1, "btn", 3, "click"], [1, "offcanvas-body", "m-0"], [1, "option", "p-4"], [1, "w-75", "text-uppercase"], [1, "d-flex", "justify-content-end", "align-items-center", "w-25"], [1, "fa-solid", "fa-chevron-right"], [1, "w-100", "d-flex", "align-items-center"], ["src", "../../../../../assets/images/no-product.png", "alt", "", 1, "img-fluid"], ["class", "row border-bottom d-flex", 4, "ngFor", "ngForOf"], [1, "row", "border-bottom", "d-flex"], [1, "col-3"], ["width", "150", "alt", "", 1, "img-fluid", "cart-img", "pointer", 3, "click", "src"], [1, "col-8", "d-flex", "justify-content-center", "bg-white", "flex-column", "p-3"], [1, "pointer", 3, "click"], ["class", "text-color-secondary small-text", 4, "ngFor", "ngForOf"], ["type", "number", 1, "w-50", "border-0", 3, "ngModelChange", "min", "ngModel", "value"], [1, "col-1", "d-flex", "align-items-center", "bg-white"], [1, "fa-solid", "fa-trash", 3, "click"], [1, "text-color-secondary", "small-text"], [1, "w-75", "text-uppercase", 3, "click"], ["type", "text", "placeholder", "Search our catalog", 1, "form-control", "w-75", "background-primary"], [1, "fa-solid", "fa-magnifying-glass"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.navigateTo("/", null));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 9)(8, "p")(9, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_img_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.navigateTo("/", null));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 11)(11, "div", 12)(12, "div", 13)(13, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_i_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          const search_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](133);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.openSearch(search_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 15)(15, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 18)(18, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.navigateTo("/auth/login", null));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, " MY ACCOUNT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.navigateTo("/order/wishlist", null));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, " WISHLIST ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.navigateTo("/order/my-orders", null));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " MY ORDERS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_i_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.showCart());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 21)(26, "div", 22)(27, "div", 5)(28, "div", 23)(29, "div", 24)(30, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](31, HeaderComponent_For_32_Template, 17, 11, "div", 26, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 26)(34, "div", 27)(35, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_35_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.navigateTo("bespoke", null));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Bespoke, by you");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 30)(39, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_39_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.navigateTo("/contact", null));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 32)(42, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_i_click_42_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.showCart());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 33)(44, "div", 6)(45, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_45_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.isMenuOpen = !ctx.isMenuOpen);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 36)(50, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_i_click_50_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.searchToggle = !ctx.searchToggle);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 38)(52, "div", 39)(53, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_p_click_53_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.searchToggle = !ctx.searchToggle);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 41)(56, "div", 42)(57, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](58, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_i_click_59_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.searchToggle = !ctx.searchToggle);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_60_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.isAccountOpen = !ctx.isAccountOpen);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "i", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_64_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.isCartOpen = !ctx.isCartOpen);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](69, HeaderComponent_div_69_Template, 4, 0, "div", 47)(70, HeaderComponent_div_70_Template, 6, 1, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](72, HeaderComponent_div_72_Template, 4, 0, "div", 47)(73, HeaderComponent_div_73_Template, 11, 0, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 41)(75, "div", 49)(76, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](77, "Your Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_78_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.isCartOpen = !ctx.isCartOpen);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](79, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 52)(81, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](82, HeaderComponent_ng_container_82_Template, 3, 0, "ng-container", 54)(83, HeaderComponent_ng_template_83_Template, 1, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 55)(86, "div", 42)(87, "div", 56)(88, "div", 57)(89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](93, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 58)(95, "div", 57)(96, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "Total (tax incl.)");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](100, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 6)(102, "div", 59)(103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "Spend $168.50 more to get free shipping!");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, " IQITFREEDELIVERYCOUNT - module, you can put own text in configuration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "div", 6)(108, "div", 60)(109, "button", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_109_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          ctx.checkout();
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.isCartOpen = !ctx.isCartOpen);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](110, " Checkout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "div", 62)(112, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_112_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          ctx.navigateTo("/order/cart", null);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.isCartOpen = !ctx.isCartOpen);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, " Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "div", 41)(115, "div", 64)(116, "h6", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, "THE PEACOCK COLLECTIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_118_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.handleDataRemove());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](119, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "div", 67)(121, "div", 68)(122, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_122_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx.handleDataRemove());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](123, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](124, "i", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "p", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](127, HeaderComponent_div_127_Template, 5, 1, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](128, "div", 74)(129, "swiper-container", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](130, HeaderComponent_swiper_slide_130_Template, 5, 2, "swiper-slide", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](131, "tagProduct");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](132, HeaderComponent_ng_template_132_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const elseBlock_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](84);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.scrollPosition == 0 ? "transparent" : "")("ngClass", ctx.scrollValue < 0 ? "sticky-top bg-light" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeater"](ctx.commonService.allData.tags);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.searchToggle ? "dropdown-search" : "dropdown-search-collapsed");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.isMenuOpen ? "modal-open toggle-modal" : "modal-open toggle-close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isMenuOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.isAccountOpen ? "modal-open toggle-modal" : "modal-open toggle-close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAccountOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isAccountOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.isCartOpen ? "modal-open cart-modal" : "modal-open cart-close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.cartData.length)("ngIfElse", elseBlock_r23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"](" ", ctx.cartData.length, " ", ctx.cartData.length > 1 ? "items" : "item", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](93, 22, ctx.totalItemPrice, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](100, 25, ctx.totalItemPrice, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.cartData.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.cartData.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.isCatOpen ? "modal-open cart-modal" : "modal-open cart-close");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.category == null ? null : ctx.category.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.category.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](131, 28, ctx.commonService.allData.products, ctx.activeTagId));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownItem, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe, src_app_pipes_tag_product_pipe__WEBPACK_IMPORTED_MODULE_4__.TagProductPipe, src_app_pipes_tag_category_pipe__WEBPACK_IMPORTED_MODULE_0__.TagCategoryPipe],
    styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  list-style: none;\n}\n\n.show[_ngcontent-%COMP%]:focus-visible {\n  outline: none !important;\n}\n\n.head[_ngcontent-%COMP%]:hover   #topbar[_ngcontent-%COMP%] {\n  background-color: #fff;\n  z-index: 100;\n  position: relative;\n  transition: all 0.5s ease-in-out;\n}\n\n.head[_ngcontent-%COMP%]:hover   .header-web[_ngcontent-%COMP%] {\n  background-color: #fff;\n  position: relative;\n  transition: all 0.5s ease-in-out;\n}\n\n.head[_ngcontent-%COMP%]:hover   .header-tablet[_ngcontent-%COMP%] {\n  background-color: #fff;\n  z-index: 100;\n  position: relative;\n  transition: all 0.5s ease-in-out;\n}\n\n.btn-dark[_ngcontent-%COMP%], .btn-light[_ngcontent-%COMP%] {\n  width: 100% !important;\n  padding: 0.5rem 0 !important;\n  border-radius: 0 !important;\n}\n\n.nav_menu[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #000;\n}\n\n.header-web[_ngcontent-%COMP%] {\n  display: block;\n  background: transparent;\n  z-index: 2;\n  position: relative;\n}\n.header-web[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  line-height: 3.8125rem;\n  max-width: 14.6875rem;\n  padding-left: 2.1875rem;\n  padding-right: 2.1875rem;\n}\n.header-web[_ngcontent-%COMP%]   .textDanger[_ngcontent-%COMP%] {\n  color: #ad0700;\n}\n.header-web[_ngcontent-%COMP%]   .prod-img[_ngcontent-%COMP%] {\n  height: 300px;\n  object-fit: cover;\n}\n\n.header-tablet[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.nav-items[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #000;\n}\n\n.nav_list[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 2rem;\n  align-items: center;\n  margin: 0 1.5rem;\n}\n\n.dropdown-search[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 99%;\n  left: 0;\n  width: 100%;\n  background: rgb(252, 253, 251);\n  box-shadow: 0rem 0.2rem 0.5rem rgba(32, 7, 65, 0.14);\n  transition: all 0.5s ease-in;\n  clip-path: polygon(0 0, 100% 0, 100% 102%, 0 102%);\n}\n\n.dropdown-search-collapsed[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 99%;\n  left: 0;\n  width: 100%;\n  background: rgb(252, 253, 251);\n  box-shadow: 0rem 0.2rem 0.5rem rgba(32, 7, 65, 0.14);\n  transition: all 0.5s ease-in;\n  clip-path: polygon(0 0, 100% 0, 100% 0, 0 1%);\n}\n\n.nav_link[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  font-weight: 500;\n  color: rgba(40, 38, 38, 0.6745098039);\n}\n\n.dropDown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3.8rem;\n  left: 0;\n  width: 100%;\n  height: auto;\n  background: #fff;\n  box-shadow: 0rem 0.2rem 0.5rem rgba(32, 7, 65, 0.14);\n  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\n  transition: all 0.5s ease-in;\n  z-index: 1000;\n}\n\n.drop-items[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.25rem;\n  cursor: pointer;\n}\n\n.dropdown-inner[_ngcontent-%COMP%] {\n  padding: 2rem 3.5rem;\n  border-top: 1px solid #ededed;\n}\n\n.nav_list_menu[_ngcontent-%COMP%]:hover   .dropDown[_ngcontent-%COMP%] {\n  clip-path: polygon(0 0, 100% 0, 100% 102%, 0 102%);\n}\n\nli[_ngcontent-%COMP%] {\n  padding: 0.2rem 0;\n}\n\n.logo-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n.option[_ngcontent-%COMP%] {\n  height: 90%;\n  overflow-y: auto;\n}\n.option[_ngcontent-%COMP%]   .option-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.info-part[_ngcontent-%COMP%] {\n  max-height: 52vh;\n  min-height: 52vh;\n}\n.info-part[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n  padding: 0.5rem;\n  margin-bottom: 1rem;\n}\n\n.transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n.modal-open[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1045;\n  height: 100vh;\n  background: #fff;\n  top: 0;\n  transition: transform 0.5s ease-in-out;\n}\n\n.toggle-modal[_ngcontent-%COMP%] {\n  width: 100%;\n  transform: translateX(0);\n}\n\n.toggle-close[_ngcontent-%COMP%] {\n  width: 100%;\n  transform: translateX(-100%) !important;\n}\n\n.cart-modal[_ngcontent-%COMP%] {\n  width: 30%;\n  right: 0;\n}\n\n.cart-close[_ngcontent-%COMP%] {\n  width: 30%;\n  right: 0;\n  transform: translateX(100%);\n}\n\n.offcanvas-header[_ngcontent-%COMP%], .cart-header[_ngcontent-%COMP%] {\n  height: 10vh;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.offcanvas-body[_ngcontent-%COMP%] {\n  height: 80vh;\n}\n\n.cart-body[_ngcontent-%COMP%] {\n  height: 90vh;\n}\n\n#topbar[_ngcontent-%COMP%] {\n  background: transparent;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 1rem;\n  align-items: center;\n  position: relative;\n  z-index: 10;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .ship-text[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .ship-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .ship-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .icons-box[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .icons-box[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  width: 25%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .icons-box[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #000;\n  cursor: pointer;\n}\n\n.product-part[_ngcontent-%COMP%] {\n  max-height: 35vh;\n  min-height: 35vh;\n  overflow-y: scroll;\n}\n.product-part[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.product-part[_ngcontent-%COMP%]   .small-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.product-part[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  padding: 0.5rem;\n  border: 0;\n}\n.product-part[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background-color: #f8f8f8;\n  border: 0;\n  outline: 0;\n}\n\n.form-control[_ngcontent-%COMP%]:focus, .input-number[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  outline: none;\n  border-bottom: 1px solid #000;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n}\n\n.form-control[_ngcontent-%COMP%]:focus-visible, .input-number[_ngcontent-%COMP%]:focus-visible {\n  border-bottom: 1px solid #000;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  outline: none;\n}\n\n.search[_ngcontent-%COMP%] {\n  background-color: #e3e3e3;\n}\n\n.cart-img[_ngcontent-%COMP%] {\n  min-height: 100px;\n  max-height: 100px;\n  object-fit: cover;\n}\n\n@media (max-width: 992px) {\n  .header-web[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header-tablet[_ngcontent-%COMP%] {\n    display: block;\n    z-index: 1000;\n    position: relative;\n  }\n  .header-tablet[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    margin-bottom: 0.5rem;\n  }\n  .header-tablet[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .ship-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: start;\n  }\n}\n.active-category[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n}\n\n@media (min-width: 768px) and (max-width: 1024px) {\n  .cart-modal[_ngcontent-%COMP%], .cart-close[_ngcontent-%COMP%], .toggle-modal[_ngcontent-%COMP%], .toggle-close[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media (max-width: 768px) {\n  .cart-modal[_ngcontent-%COMP%], .cart-close[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBOztFQUVFLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FBQ0o7QUFFRTtFQUNFLGNBQUE7QUFBSjtBQUdFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBREo7O0FBS0E7RUFDRSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUZGOztBQU1BO0VBQ0Usb0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLG9EQUFBO0VBQ0EsNEJBQUE7RUFDQSxrREFBQTtBQUhGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLG9EQUFBO0VBQ0EsNEJBQUE7RUFDQSw2Q0FBQTtBQUpGOztBQU9BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0RBQUE7RUFDQSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU9BO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtBQUpGOztBQU9BO0VBQ0Usa0RBQUE7QUFKRjs7QUFPQTtFQUNFLGlCQUFBO0FBSkY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBSkY7QUFNRTtFQUNFLGVBQUE7QUFKSjs7QUFRQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFMRjtBQU9FO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFTQTtFQUNFLDZCQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxzQ0FBQTtBQU5GOztBQVNBO0VBQ0UsV0FBQTtFQUNBLHdCQUFBO0FBTkY7O0FBU0E7RUFDRSxXQUFBO0VBQ0EsdUNBQUE7QUFORjs7QUFTQTtFQUNFLFVBQUE7RUFDQSxRQUFBO0FBTkY7O0FBU0E7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBTkY7O0FBU0E7O0VBRUUsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBTkY7O0FBU0E7RUFDRSxZQUFBO0FBTkY7O0FBU0E7RUFDRSxZQUFBO0FBTkY7O0FBVUE7RUFDRSx1QkFBQTtBQVBGO0FBU0U7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtBQVJKO0FBVUk7RUFDRSxjQUFBO0FBUk47QUFVTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQVJSO0FBVVE7RUFDRSxZQUFBO0FBUlY7QUFhSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUFYTjtBQWFNO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFYUjtBQWFRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFYVjs7QUFrQkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFmRjtBQWlCRTtFQUNFLGFBQUE7QUFmSjtBQWtCRTtFQUNFLGtCQUFBO0FBaEJKO0FBbUJFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQWpCSjtBQW1CSTtFQUNFLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFqQk47O0FBc0JBOztFQUVFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBbkJGOztBQXNCQTs7RUFFRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFuQkY7O0FBc0JBO0VBQ0UseUJBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBbkJGOztBQXNCQTtFQUNFO0lBQ0UsYUFBQTtFQW5CRjtFQXNCQTtJQUNFLGNBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUFwQkY7RUF1Qkk7SUFDRSxpQkFBQTtJQUNBLHFCQUFBO0VBckJOO0VBd0JJO0lBQ0UsaUJBQUE7RUF0Qk47RUE4Qk07SUFDRSxpQkFBQTtFQTVCUjtBQUNGO0FBa0NBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FBaENGOztBQW1DQTtFQUVFOzs7O0lBSUUsVUFBQTtFQWpDRjtBQUNGO0FBb0NBO0VBRUU7O0lBRUUsV0FBQTtFQW5DRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uc2hvdzpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZDpob3ZlciAjdG9wYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uaGVhZDpob3ZlciAuaGVhZGVyLXdlYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5oZWFkOmhvdmVyIC5oZWFkZXItdGFibGV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMTAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuXG4uYnRuLWRhcmssXG4uYnRuLWxpZ2h0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMC41cmVtIDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xufVxuXG4ubmF2X21lbnU6aG92ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbn1cblxuLmhlYWRlci13ZWIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHotaW5kZXg6IDI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAubmF2YmFyLWJyYW5kIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDMuODEyNXJlbTtcbiAgICBtYXgtd2lkdGg6IDE0LjY4NzVyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAyLjE4NzVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMi4xODc1cmVtO1xuICB9XG5cbiAgLnRleHREYW5nZXIge1xuICAgIGNvbG9yOiAjYWQwNzAwO1xuICB9XG5cbiAgLnByb2QtaW1nIHtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICB9XG59XG5cbi5oZWFkZXItdGFibGV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm5hdi1pdGVtcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi8vXG4ubmF2X2xpc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgZ2FwOiAycmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgMS41cmVtO1xufVxuXG4uZHJvcGRvd24tc2VhcmNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDk5JTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYigyNTIsIDI1MywgMjUxKTtcbiAgYm94LXNoYWRvdzogMHJlbSAwLjJyZW0gMC41cmVtIHJnYmEoMzIsIDcsIDY1LCAwLjE0KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMiUsIDAgMTAyJSk7XG59XG5cbi8vXG4uZHJvcGRvd24tc2VhcmNoLWNvbGxhcHNlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA5OSU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMjUyLCAyNTMsIDI1MSk7XG4gIGJveC1zaGFkb3c6IDByZW0gMC4ycmVtIDAuNXJlbSByZ2JhKDMyLCA3LCA2NSwgMC4xNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAwLCAwIDElKTtcbn1cblxuLm5hdl9saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMyODI2MjZhYztcbn1cblxuLmRyb3BEb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMuOHJlbTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHJlbSAwLjJyZW0gMC41cmVtIHJnYmEoMzIsIDcsIDY1LCAwLjE0KTtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDAsIDAgMCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5kcm9wLWl0ZW1zIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcGRvd24taW5uZXIge1xuICBwYWRkaW5nOiAycmVtIDMuNXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZGVkZWQ7XG59XG5cbi5uYXZfbGlzdF9tZW51OmhvdmVyIC5kcm9wRG93biB7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDIlLCAwIDEwMiUpO1xufVxuXG5saSB7XG4gIHBhZGRpbmc6IDAuMnJlbSAwO1xufVxuXG4ubG9nby1pbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4ub3B0aW9uIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgLm9wdGlvbi1pdGVtIHAge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuXG4uaW5mby1wYXJ0IHtcbiAgbWF4LWhlaWdodDogNTJ2aDtcbiAgbWluLWhlaWdodDogNTJ2aDtcblxuICAuZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiAjMGM1NDYwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWVjZjE7XG4gICAgYm9yZGVyLWNvbG9yOiAjYmVlNWViO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG59XG5cbi50cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ubW9kYWwtb3BlbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTA0NTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcbn1cblxuLnRvZ2dsZS1tb2RhbCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG59XG5cbi50b2dnbGUtY2xvc2Uge1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKSAhaW1wb3J0YW50O1xufVxuXG4uY2FydC1tb2RhbCB7XG4gIHdpZHRoOiAzMCU7XG4gIHJpZ2h0OiAwO1xufVxuXG4uY2FydC1jbG9zZSB7XG4gIHdpZHRoOiAzMCU7XG4gIHJpZ2h0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG59XG5cbi5vZmZjYW52YXMtaGVhZGVyLFxuLmNhcnQtaGVhZGVyIHtcbiAgaGVpZ2h0OiAxMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5vZmZjYW52YXMtYm9keSB7XG4gIGhlaWdodDogODB2aDtcbn1cblxuLmNhcnQtYm9keSB7XG4gIGhlaWdodDogOTB2aDtcbn1cblxuLy8gVE9QQkFSXG4jdG9wYmFyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgLnVwcGVyLXJvdyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGJhY2tncm91bmQ6ICMwMDcyNzE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuXG4gICAgLnNoaXAtdGV4dCB7XG4gICAgICBtYXJnaW46IGF1dG8gMDtcblxuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaWNvbnMtYm94IHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAuaWNvbnMge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICBpIHtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnByb2R1Y3QtcGFydCB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG1pbi1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5zbWFsbC10ZXh0IHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cblxuICBpbnB1dCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgYm9yZGVyOiAwO1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgb3V0bGluZTogMDtcbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cyxcbi5pbnB1dC1udW1iZXI6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgYm9yZGVyLXRvcDogMDtcbiAgYm9yZGVyLWxlZnQ6IDA7XG4gIGJvcmRlci1yaWdodDogMDtcbn1cblxuLmZvcm0tY29udHJvbDpmb2N1cy12aXNpYmxlLFxuLmlucHV0LW51bWJlcjpmb2N1cy12aXNpYmxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zZWFyY2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xufVxuXG4uY2FydC1pbWcge1xuICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgbWF4LWhlaWdodDogMTAwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmhlYWRlci13ZWIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuaGVhZGVyLXRhYmxldCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAubWVudS1pdGVtcyB7XG4gICAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb250YWluZXItZmx1aWQge1xuICAgIC51cHBlci1yb3cge1xuICAgICAgLnNoaXAtdGV4dCB7XG4gICAgICAgIHAge1xuICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5hY3RpdmUtY2F0ZWdvcnkge1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG5cbiAgLmNhcnQtbW9kYWwsXG4gIC5jYXJ0LWNsb3NlLFxuICAudG9nZ2xlLW1vZGFsLFxuICAudG9nZ2xlLWNsb3NlIHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXG4gIC5jYXJ0LW1vZGFsLFxuICAuY2FydC1jbG9zZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 53274:
/*!***********************************************************************!*\
  !*** ./src/app/features/shared/components/topbar/topbar.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopbarComponent: () => (/* binding */ TopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 90530);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 46584);






function TopbarComponent_ng_template_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32)(1, "div")(2, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_ng_template_15_div_7_Template_img_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const offcanvas_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r6.navigateTo("/product/product-details");
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](offcanvas_r5.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34)(4, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_ng_template_15_div_7_Template_p_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const offcanvas_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r6.navigateTo("/product/product-details");
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](offcanvas_r5.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 37)(11, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function TopbarComponent_ng_template_15_div_7_Template_input_ngModelChange_11_listener($event) {
      const p_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](p_r8.qty, $event) || (p_r8.qty = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r8.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", p_r8.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Size : ", p_r8.size, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Color : ", p_r8.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", p_r8.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("x ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 6, p_r8.price), "");
  }
}
function TopbarComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_ng_template_15_Template_button_click_3_listener() {
      const offcanvas_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](offcanvas_r5.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19)(6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TopbarComponent_ng_template_15_div_7_Template, 17, 8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 22)(9, "div", 23)(10, "div", 24)(11, "div", 25)(12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 25)(18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 26)(24, "div", 25)(25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Total (tax incl.)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5)(31, "div", 27)(32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Spend $168.50 more to get free shipping!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " IQITFREEDELIVERYCOUNT - module, you can put own text in configuration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5)(37, "div", 28)(38, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_ng_template_15_Template_button_click_38_listener() {
      const offcanvas_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r6.navigateTo("/order/checkout");
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](offcanvas_r5.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Checkout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 30)(41, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_ng_template_15_Template_button_click_41_listener() {
      const offcanvas_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      ctx_r6.navigateTo("/order/cart");
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](offcanvas_r5.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.product);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r6.product.length, " ", ctx_r6.product.length > 1 ? "items" : "item", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 6, ctx_r6.totalItemPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 8, ctx_r6.totalShipCharge));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 10, ctx_r6.totalItemPrice + ctx_r6.totalShipCharge));
  }
}
function TopbarComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 42)(2, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class TopbarComponent {
  constructor(router) {
    this.router = router;
    this.offcanvasService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbOffcanvas);
    this.modalService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal);
    this.product = [{
      name: 'Printed Chiffon Dress',
      img: '../../../../../assets/products/chair.jpg',
      size: 'S',
      color: 'Yellow',
      price: 10.5,
      qty: 5,
      shipCharge: 3.2
    }, {
      name: 'Printed Chiffon Dress',
      img: '../../../../../assets/products/printer.jpg',
      size: 'S',
      color: 'Yellow',
      price: 10.5,
      qty: 1,
      shipCharge: 3.2
    }];
    this.totalShipCharge = this.product.reduce((acc, currValue) => acc + currValue.shipCharge, 0);
  }
  openModal(content, position) {
    this.offcanvasService.open(content, {
      position: position
    });
  }
  openSearch(content) {
    this.modalService.open(content, {
      centered: true,
      size: 'xl'
    });
  }
  navigateTo(path) {
    this.router.navigate([path]);
  }
  get totalItemPrice() {
    let totalPriceArray = this.product.map(items => {
      return {
        ...items,
        totalPrice: items.qty * items.price
      };
    });
    return totalPriceArray.reduce((acc, currValue) => acc + currValue.totalPrice, 0);
  }
  deleteItem() {}
  static #_ = this.ɵfac = function TopbarComponent_Factory(t) {
    return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TopbarComponent,
    selectors: [["app-topbar"]],
    decls: 19,
    vars: 0,
    consts: [["cartModal", ""], ["search", ""], ["id", "topbar", 1, "container-fluid"], [1, "row", "upper-row"], [1, "col-11"], [1, "row"], [1, "col-4", "d-flex", 3, "click"], ["width", "40", "src", "../../../../../assets/images/white-logo.png", "alt", "logo", 1, "pointer"], [1, "col-8", "col-lg-4", "ship-text"], ["src", "../../../../../assets/images/companyName.png", "alt", "Company Name", 1, "img-fluid", "pointer", 3, "click"], [1, "d-none", "d-md-none", "d-lg-block", "col-lg-4"], [1, "icons-box"], [1, "icons"], [1, "fa-solid", "fa-magnifying-glass", "pointer", 3, "click"], [1, "fa-solid", "fa-user", "pointer", 3, "click"], [1, "fa-solid", "fa-bag-shopping", "pointer", 3, "click"], [1, "offcanvas-header", "m-0", "px-4", "py-3", "border-bottom", "bg-light"], ["type", "button", 1, "btn", "text-dark", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "offcanvas-body", "m-0", "bg-white", "p-3", "d-flex", "flex-column", "justify-content-between"], [1, "product-part"], ["class", "border-bottom d-flex", 4, "ngFor", "ngForOf"], [1, "info-part"], [1, "container-fluid"], [1, "row", "py-3", "border-bottom"], [1, "col-12", "d-flex", "justify-content-between"], [1, "row", "py-3"], [1, "col-12", "description"], [1, "col-12", "mb-2"], ["type", "button", 1, "btn", "btn-dark", "py-2", 3, "click"], [1, "col-12"], ["type", "button", 1, "btn", "btn-light", "py-2", 3, "click"], [1, "border-bottom", "d-flex"], ["alt", "", 1, "img-fluid", "pointer", 3, "click", "src"], [1, "d-flex", "justify-content-center", "bg-white", "flex-column", "p-3"], [1, "pointer", 3, "click"], [1, "text-color-secondary", "small-text"], [1, "d-flex", "align-items-center"], ["type", "number", 1, "w-50", "border-0", 3, "ngModelChange", "ngModel"], [1, "d-flex", "align-items-center", "bg-white"], [1, "fa-solid", "fa-trash"], [1, "search", "d-flex", "justify-content-between", "align-items-center", "p-4", "w-100"], ["type", "text", "placeholder", "Search our catalog", 1, "form-control", "w-75", "background-primary"], [1, "fa-solid", "fa-magnifying-glass"]],
    template: function TopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_Template_div_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.navigateTo("/"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8)(7, "p")(8, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_Template_img_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.navigateTo("/"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10)(10, "div", 11)(11, "div", 12)(12, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_Template_i_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const search_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.openSearch(search_r2));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_Template_i_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.navigateTo("/auth/login"));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_Template_i_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
          const cartModal_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
          ctx.openModal(cartModal_r3, "end");
          return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.totalItemPrice());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TopbarComponent_ng_template_15_Template, 43, 12, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(17, TopbarComponent_ng_template_17_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
    styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 1rem;\n  align-items: center;\n  background: #007271;\n  position: relative;\n  z-index: 10;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .ship-text[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .ship-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .ship-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .icons-box[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .icons-box[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  width: 25%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .icons-box[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  cursor: pointer;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]:hover {\n  background: #007271;\n}\n\n.product-part[_ngcontent-%COMP%] {\n  max-height: 35vh;\n  min-height: 35vh;\n  overflow-y: scroll;\n}\n.product-part[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.product-part[_ngcontent-%COMP%]   .small-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.product-part[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  padding: 0.5rem;\n}\n.product-part[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: 0;\n  outline: 0;\n}\n\n.info-part[_ngcontent-%COMP%] {\n  max-height: 52vh;\n  min-height: 52vh;\n}\n.info-part[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n  padding: 0.5rem;\n  margin-bottom: 1rem;\n}\n\n.search[_ngcontent-%COMP%] {\n  background-color: #e3e3e3;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: #e3e3e3;\n}\ninput[_ngcontent-%COMP%]:focus {\n  background-color: #e3e3e3;\n}\n\n@media (max-width: 992px) {\n  .container-fluid[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .ship-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: start;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBR0U7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQUo7QUFDSTtFQUNFLGNBQUE7QUFDTjtBQUFNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBRVI7QUFEUTtFQUNFLFlBQUE7QUFHVjtBQUNJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNOO0FBQ007RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUFRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFFWjtBQUVJO0VBQ0UsbUJBQUE7QUFBTjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURGO0FBRUU7RUFDRSxhQUFBO0FBQUo7QUFFQztFQUNDLGtCQUFBO0FBQUY7QUFFQztFQUNDLHlCQUFBO0VBQ0EsZUFBQTtBQUFGO0FBQ0U7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUFGO0FBQ0U7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0FBRUY7QUFERTtFQUNFLHlCQUFBO0FBR0o7O0FBQUE7RUFJUTtJQUNFLGlCQUFBO0VBQVI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIFxufVxuI3RvcGJhciB7XG4gIC51cHBlci1yb3cge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjMDA3MjcxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICAuc2hpcC10ZXh0IHtcbiAgICAgIG1hcmdpbjogYXV0byAwO1xuICAgICAgcCB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmljb25zLWJveCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgLmljb25ze1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGl7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmOmhvdmVye1xuICAgICAgYmFja2dyb3VuZDogIzAwNzI3MTtcbiAgICB9XG4gIH1cbn1cbi5wcm9kdWN0LXBhcnR7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG1pbi1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAuc21hbGwtdGV4dHtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuIH1cbiBpbnB1dHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgcGFkZGluZzogMC41cmVtO1xuICAmOmZvY3Vze1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG4gfVxufVxuLmluZm8tcGFydHtcbiAgbWF4LWhlaWdodDogNTJ2aDtcbiAgbWluLWhlaWdodDogNTJ2aDtcbiAgLmRlc2NyaXB0aW9ue1xuICAgIGNvbG9yOiAjMGM1NDYwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWVjZjE7XG4gICAgYm9yZGVyLWNvbG9yOiAjYmVlNWViO1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG59XG4uc2VhcmNoe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xufVxuaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xuICAmOmZvY3Vze1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOjk5MnB4KXtcbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgLnVwcGVyLXJvdyB7XG4gICAgICAuc2hpcC10ZXh0IHtcbiAgICAgICAgcCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9fVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 85306:
/*!*******************************************************************************!*\
  !*** ./src/app/features/shared/modals/header-modal/header-modal.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderModalComponent: () => (/* binding */ HeaderModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);

function HeaderModalComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "img", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderModalComponent_ng_template_0_Template_img_click_1_listener() {
      const offcanvas_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](offcanvas_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderModalComponent_ng_template_0_Template_button_click_2_listener() {
      const offcanvas_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](offcanvas_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5)(5, "div", 6)(6, "div")(7, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderModalComponent_ng_template_0_Template_a_click_7_listener() {
      const offcanvas_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](offcanvas_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "HOME");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div")(11, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderModalComponent_ng_template_0_Template_a_click_11_listener() {
      const offcanvas_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](offcanvas_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ALL JEWELLERY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div")(15, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderModalComponent_ng_template_0_Template_a_click_15_listener() {
      const offcanvas_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](offcanvas_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "WHAT'S NEW?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class HeaderModalComponent {
  static #_ = this.ɵfac = function HeaderModalComponent_Factory(t) {
    return new (t || HeaderModalComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderModalComponent,
    selectors: [["app-header-modal"]],
    decls: 2,
    vars: 0,
    consts: [["toggle", ""], [1, "offcanvas-header", "m-0", "px-4", "py-2", "bg-dark"], ["src", "../../../../../assets/images/white-logo.png", 1, "img-fluid-m", "me-3", "logo-img", 3, "click"], ["type", "button", 1, "btn", "text-light", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "offcanvas-body", "m-0", "bg-dark"], [1, "option"], [3, "click"]],
    template: function HeaderModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderModalComponent_ng_template_0_Template, 18, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 53020:
/*!**************************************************!*\
  !*** ./src/app/features/shared/shared.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 78032);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 76012);
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/topbar/topbar.component */ 53274);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 90530);
/* harmony import */ var _modals_header_modal_header_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/header-modal/header-modal.component */ 85306);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 46584);
/* harmony import */ var _components_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/custom-pagination/custom-pagination.component */ 46200);
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/element/bundle */ 91421);
/* harmony import */ var src_app_pipes_tag_product_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipes/tag-product.pipe */ 13557);
/* harmony import */ var src_app_pipes_tag_category_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/tag-category.pipe */ 18314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37100);













(0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_5__.register)();
class SharedModule {
  static #_ = this.ɵfac = function SharedModule_Factory(t) {
    return new (t || SharedModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: SharedModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__.TopbarComponent, _modals_header_modal_header_modal_component__WEBPACK_IMPORTED_MODULE_3__.HeaderModalComponent, _components_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_4__.CustomPaginationComponent, src_app_pipes_tag_product_pipe__WEBPACK_IMPORTED_MODULE_6__.TagProductPipe, src_app_pipes_tag_category_pipe__WEBPACK_IMPORTED_MODULE_7__.TagCategoryPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationModule],
    exports: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__.TopbarComponent, _components_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_4__.CustomPaginationComponent]
  });
})();

/***/ }),

/***/ 95780:
/*!********************************************!*\
  !*** ./src/app/pipes/home-product.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeProductPipe: () => (/* binding */ HomeProductPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);

class HomeProductPipe {
  transform(products = [], category = null) {
    try {
      if (products.length && category) {
        return products.filter(x => x.categoryId == category.id);
      } else {
        return [];
      }
    } catch (error) {
      console.log('error', error);
      return [];
    }
  }
  static #_ = this.ɵfac = function HomeProductPipe_Factory(t) {
    return new (t || HomeProductPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "homeProduct",
    type: HomeProductPipe,
    pure: true,
    standalone: true
  });
}

/***/ }),

/***/ 18314:
/*!********************************************!*\
  !*** ./src/app/pipes/tag-category.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TagCategoryPipe: () => (/* binding */ TagCategoryPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);

class TagCategoryPipe {
  transform(categories = [], tagId = null) {
    try {
      // let categoryArr = [];
      if (categories.length && tagId) {
        return categories.filter(x => x.categoryWithtags.some(y => y.tagId == tagId));
      }
    } catch (error) {
      console.log('error', error);
      return [];
    }
  }
  static #_ = this.ɵfac = function TagCategoryPipe_Factory(t) {
    return new (t || TagCategoryPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "tagCategory",
    type: TagCategoryPipe,
    pure: true
  });
}

/***/ }),

/***/ 13557:
/*!*******************************************!*\
  !*** ./src/app/pipes/tag-product.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TagProductPipe: () => (/* binding */ TagProductPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);

class TagProductPipe {
  transform(products = [], tagId = null, activeCategoryId = null) {
    try {
      if (products.length && tagId && activeCategoryId) {
        return products.filter(x => {
          if (x.productWithCategory.id == activeCategoryId && x.productWithTagMap.some(y => y.tagId == tagId)) {
            return x;
          }
        });
      } else {
        return [];
      }
    } catch (error) {
      console.log('error', error);
      return [];
    }
  }
  static #_ = this.ɵfac = function TagProductPipe_Factory(t) {
    return new (t || TagProductPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "tagProduct",
    type: TagProductPipe,
    pure: true
  });
}

/***/ }),

/***/ 45761:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartService: () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 47632);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/services */ 9460);



class CartService {
  constructor(http) {
    this.http = http;
    this.BASE_URL = 'cart';
  }
  getAll() {
    return this.http.get(this.BASE_URL).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  create(payload) {
    return this.http.post(this.BASE_URL, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  update(id, payload) {
    return this.http.put(this.BASE_URL + '/' + id, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  updateAll(payload) {
    return this.http.post(this.BASE_URL + '/updateAll', payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  delete(id) {
    return this.http.delete(this.BASE_URL + '/' + id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  static #_ = this.ɵfac = function CartService_Factory(t) {
    return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CartService,
    factory: CartService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 81390:
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonService: () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 47632);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/services */ 9460);



class CommonService {
  constructor(http) {
    this.http = http;
    this.BASE_URL = 'common';
    this.allData = [];
  }
  getAllMasterData(payload) {
    return this.http.get(this.BASE_URL, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  static #_ = this.ɵfac = function CommonService_Factory(t) {
    return new (t || CommonService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CommonService,
    factory: CommonService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 19836:
/*!*******************************************!*\
  !*** ./src/app/services/state.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALL_DATA: () => (/* binding */ ALL_DATA),
/* harmony export */   StateService: () => (/* binding */ StateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 70356);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 28382);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 47632);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);







const ALL_DATA = (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.makeStateKey)('all_data');
class StateService {
  constructor(tstate, platformId) {
    this.tstate = tstate;
    this.isServer = false;
    this.isServer = (0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(platformId);
  }
  checkAndGetData(key, getDataObservable, defaultValue = []) {
    if (this.tstate.hasKey(key)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.tstate.get(key, defaultValue));
    } else {
      return getDataObservable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(data => {
        if (this.isServer) {
          this.tstate.set(key, data);
        }
      }));
    }
  }
  getDynamicStateKey(key) {
    return (0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.makeStateKey)(key);
  }
  static #_ = this.ɵfac = function StateService_Factory(t) {
    return new (t || StateService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.TransferState), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: StateService,
    factory: StateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 28967:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  apiEndpoint: "http://localhost:1945/api/v1/website/",
  // apiEndpoint: "https://peacockadmin.s2pedutech.com/api/v1/website/",
  production: false
};

/***/ }),

/***/ 71117:
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppServerModule: () => (/* reexport safe */ _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__.AppServerModule)
/* harmony export */ });
/* harmony import */ var _app_app_server_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.server.module */ 4917);


/***/ }),

/***/ 19246:
/*!****************************************!*\
  !*** ./node_modules/express/lib/ sync ***!
  \****************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 19246;
module.exports = webpackEmptyContext;

/***/ }),

/***/ 90290:
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 20181:
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 76982:
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 24434:
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 79896:
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 58611:
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 65692:
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 69278:
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 73024:
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs");

/***/ }),

/***/ 51455:
/*!***********************************!*\
  !*** external "node:fs/promises" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:fs/promises");

/***/ }),

/***/ 76760:
/*!****************************!*\
  !*** external "node:path" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:path");

/***/ }),

/***/ 73136:
/*!***************************!*\
  !*** external "node:url" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:url");

/***/ }),

/***/ 70857:
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 16928:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 83480:
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 2203:
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 13193:
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 53557:
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 52018:
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 87016:
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 39023:
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 43106:
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		__webpack_require__.O(undefined, [121], () => (__webpack_require__(74011)))
/******/ 		__webpack_require__.O(undefined, [121], () => (__webpack_require__(80203)))
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [121], () => (__webpack_require__(69787)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + (chunkId === 121 ? "vendor" : chunkId) + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			792: 1
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.require = (chunkId) => (installedChunks[chunkId]);
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 			__webpack_require__.O();
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("./" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			__webpack_require__.e(121);
/******/ 			return next();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map