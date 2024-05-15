"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
}, {
  path: 'home',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./features/landing-layout/landing-layout.module */ 8543)).then(m => m.LandingLayoutModule)
}, {
  path: 'auth',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_auth-layout_auth-layout_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/auth-layout/auth-layout.module */ 9653)).then(m => m.AuthLayoutModule)
}, {
  path: 'contact',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_contact_contact_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/contact/contact.module */ 4725)).then(m => m.ContactModule)
}, {
  path: 'account',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/account/account.module */ 7877)).then(m => m.AccountModule)
}, {
  path: 'product',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_product_product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/product/product.module */ 8101)).then(m => m.ProductModule)
}, {
  path: 'order',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_order_order_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/order/order.module */ 8589)).then(m => m.OrderModule)
}, {
  path: 'brand',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_brand_brand_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/brand/brand.module */ 4433)).then(m => m.BrandModule)
}, {
  path: 'info',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_information_information_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/information/information.module */ 2429)).then(m => m.InformationModule)
}, {
  path: 'pages',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_template_template_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/template/template.module */ 5735)).then(m => m.TemplateModule)
}, {
  path: 'bespoke',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_bespoke_bespoke_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/bespoke/bespoke.module */ 4525)).then(m => m.BespokeModule)
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

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _services_state_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/state.service */ 2083);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/common.service */ 3871);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/services */ 2589);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _features_shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/shared/components/header/header.component */ 6807);
/* harmony import */ var _features_shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/shared/components/footer/footer.component */ 5847);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 1249);












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
      this.stateService.checkAndGetData(_services_state_service__WEBPACK_IMPORTED_MODULE_0__.ALL_DATA, success.result, {});
      // this.loader = false;
    }, error => {
      console.log("error", error);
      this.loader = false;
    });
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_2__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services__WEBPACK_IMPORTED_MODULE_2__.SpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_state_service__WEBPACK_IMPORTED_MODULE_0__.StateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID));
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
    styles: [".main[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.nav-top[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  top: 0;\n}\n.nav-top[_ngcontent-%COMP%]:hover {\n  background: teal;\n  transition: all 0.5s;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm5hdi10b3Age1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IHRlYWw7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _features_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/shared/shared.module */ 9194);
/* harmony import */ var _features_landing_layout_landing_layout_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/landing-layout/landing-layout.module */ 8543);
/* harmony import */ var _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/safe.pipe */ 8637);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ 4285);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services */ 2589);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 1249);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS,
      useClass: _core_services__WEBPACK_IMPORTED_MODULE_5__.AuthInterceptor,
      multi: true
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _features_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _features_landing_layout_landing_layout_module__WEBPACK_IMPORTED_MODULE_3__.LandingLayoutModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      closeButton: true,
      progressBar: true
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_4__.SafePipe],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule, _features_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _features_landing_layout_landing_layout_module__WEBPACK_IMPORTED_MODULE_3__.LandingLayoutModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_13__.ToastrModule],
    exports: [_pipes_safe_pipe__WEBPACK_IMPORTED_MODULE_4__.SafePipe]
  });
})();

/***/ }),

/***/ 5196:
/*!*********************************************!*\
  !*** ./src/app/core/services/auth.guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authGuard: () => (/* binding */ authGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage.service */ 9879);



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

/***/ 8346:
/*!***************************************************!*\
  !*** ./src/app/core/services/auth.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/toast.service */ 5423);









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

/***/ 7720:
/*!**************************************************!*\
  !*** ./src/app/core/services/httpApi.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




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

/***/ 2589:
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* reexport safe */ _httpApi_service__WEBPACK_IMPORTED_MODULE_1__.ApiService),
/* harmony export */   AuthInterceptor: () => (/* reexport safe */ _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__.AuthInterceptor),
/* harmony export */   SpinnerService: () => (/* reexport safe */ _spinner_service__WEBPACK_IMPORTED_MODULE_4__.SpinnerService),
/* harmony export */   StorageService: () => (/* reexport safe */ _local_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService),
/* harmony export */   ToastService: () => (/* reexport safe */ _toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService),
/* harmony export */   authGuard: () => (/* reexport safe */ _auth_guard__WEBPACK_IMPORTED_MODULE_5__.authGuard)
/* harmony export */ });
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.interceptor */ 8346);
/* harmony import */ var _httpApi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpApi.service */ 7720);
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage.service */ 9879);
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast.service */ 5423);
/* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner.service */ 5873);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ 5196);







/***/ }),

/***/ 9879:
/*!********************************************************!*\
  !*** ./src/app/core/services/local-storage.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 316);



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

/***/ 5873:
/*!**************************************************!*\
  !*** ./src/app/core/services/spinner.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpinnerService: () => (/* binding */ SpinnerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ 1249);


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

/***/ 5423:
/*!************************************************!*\
  !*** ./src/app/core/services/toast.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToastService: () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ 4285);


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

/***/ 2360:
/*!*********************************************************************************!*\
  !*** ./src/app/features/landing-layout/components/connect/connect.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnectComponent: () => (/* binding */ ConnectComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



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
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.connect-page[_ngcontent-%COMP%] {\n  padding: 55px 0;\n  background-color: #000;\n}\n\n.connect-text[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80%;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #fff;\n  color: #fff;\n  min-height: 72px;\n  font-size: 2.2rem;\n  font-weight: bold;\n  text-align: left;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #fff;\n}\n.input-wrapper[_ngcontent-%COMP%]   .subs-box[_ngcontent-%COMP%] {\n  width: 20%;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.input-wrapper[_ngcontent-%COMP%]   .subs-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n@media (max-width: 767px) {\n  .connect-page[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  .connect-text[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .input-wrapper[_ngcontent-%COMP%] {\n    padding: 0 2rem;\n  }\n  .input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 5vw;\n  }\n}\n@media (max-width: 575px) {\n  .input-wrapper[_ngcontent-%COMP%]   .subs-box[_ngcontent-%COMP%] {\n    width: 35%;\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy1sYXlvdXQvY29tcG9uZW50cy9jb25uZWN0L2Nvbm5lY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLHNCQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFJRjtBQUhFO0VBQ0UsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBS0o7QUFKSTtFQUNFLGFBQUE7QUFNTjtBQUpJO0VBQ0UsV0FBQTtBQU1OO0FBSEU7RUFDRSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUtKO0FBSkk7RUFDRSxXQUFBO0FBTU47O0FBRkE7RUFDRTtJQUNFLGVBQUE7RUFLRjtFQUhBO0lBQ0UsZUFBQTtFQUtGO0VBSEE7SUFDRSxlQUFBO0VBS0Y7RUFKRTtJQUNFLGNBQUE7RUFNSjtBQUNGO0FBSEE7RUFFSTtJQUNFLFVBQUE7SUFDQSxlQUFBO0VBSUo7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5jb25uZWN0LXBhZ2Uge1xyXG4gIHBhZGRpbmc6IDU1cHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcbi5jb25uZWN0LXRleHQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5pbnB1dC13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtaW4taGVpZ2h0OiA3MnB4O1xyXG4gICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAmOmZvY3VzLXZpc2libGUge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbiAgLnN1YnMtYm94IHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNvbm5lY3QtcGFnZSB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgfVxyXG4gIC5jb25uZWN0LXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAuaW5wdXQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNXZ3O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAuaW5wdXQtd3JhcHBlciB7XHJcbiAgICAuc3Vicy1ib3gge1xyXG4gICAgICB3aWR0aDogMzUlO1xyXG4gICAgICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6044:
/*!*************************************************************************************!*\
  !*** ./src/app/features/landing-layout/components/follow-us/follow-us.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FollowUsComponent: () => (/* binding */ FollowUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

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
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.text-part[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy1sYXlvdXQvY29tcG9uZW50cy9mb2xsb3ctdXMvZm9sbG93LXVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi50ZXh0LXBhcnQge1xyXG4gIC5zZWN0aW9uLWhlYWRpbmcge1xyXG4gICAgZm9udC1zaXplOiAxLjQ1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7152:
/*!***************************************************************************!*\
  !*** ./src/app/features/landing-layout/components/main/main.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainComponent: () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

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
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.main-row[_ngcontent-%COMP%] {\n  height: 83vh;\n}\n\n.main-page[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 110vh;\n  position: relative;\n}\n.main-page[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.main-page[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.landing-col[_ngcontent-%COMP%] {\n  position: relative;\n  transform: translateY(-27%);\n}\n\n.landing-text[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 90%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.landing-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .landing-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 2rem;\n}\n\n@media (max-width: 771px) {\n  .main-row[_ngcontent-%COMP%] {\n    height: 35vh;\n  }\n  .main-page[_ngcontent-%COMP%] {\n    height: 70vh;\n  }\n  .landing-col[_ngcontent-%COMP%] {\n    position: relative;\n    transform: translateY(-40%);\n  }\n  .landing-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .landing-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy1sYXlvdXQvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUdGO0FBRkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUlKO0FBSEk7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBS047O0FBREE7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFLRjtBQUpFOztFQUVFLFdBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSEE7RUFDRTtJQUNFLFlBQUE7RUFNRjtFQUpBO0lBQ0UsWUFBQTtFQU1GO0VBSkE7SUFDRSxrQkFBQTtJQUNBLDJCQUFBO0VBTUY7RUFIRTs7SUFFRSxrQkFBQTtFQUtKO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ubWFpbi1yb3cge1xyXG4gIGhlaWdodDogODN2aDtcclxufVxyXG4ubWFpbi1wYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDExMHZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAudmlkZW8tYm94IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdmlkZW8ge1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmxhbmRpbmctY29sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNyUpO1xyXG59XHJcbi5sYW5kaW5nLXRleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDkwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgcCxcclxuICBpIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzcxcHgpIHtcclxuICAubWFpbi1yb3cge1xyXG4gICAgaGVpZ2h0OiAzNXZoO1xyXG4gIH1cclxuICAubWFpbi1wYWdlIHtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICB9XHJcbiAgLmxhbmRpbmctY29sIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNDAlKTtcclxuICB9XHJcbiAgLmxhbmRpbmctdGV4dCB7XHJcbiAgICBwLFxyXG4gICAgaSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 700:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/landing-layout/components/new-arrivals/new-arrivals.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewArrivalsComponent: () => (/* binding */ NewArrivalsComponent)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ 9971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/common.service */ 3871);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _pipes_home_product_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../pipes/home-product.pipe */ 1333);






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
    styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.section-heading[_ngcontent-%COMP%] {\n  font-size: 3.2rem;\n}\n\n.large-list[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.medium-list[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.small-list[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .product-column[_ngcontent-%COMP%] {\n  padding: 0 0.8rem;\n}\n.product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .prod-cart[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  transition: transform 0.5s;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  height: 90%;\n}\n.product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 55vh;\n  object-fit: cover;\n}\n.product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n  height: 10%;\n}\n\n@media (max-width: 767px) {\n  .section-heading[_ngcontent-%COMP%] {\n    font-size: 2.25rem;\n    padding: 1rem 0;\n  }\n  .product[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .product[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .product-column[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n    padding: 0.25rem !important;\n  }\n  .product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .product-column[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .cat-name[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .product-column[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .cat-price[_ngcontent-%COMP%] {\n    font-size: 0.4rem;\n  }\n  .product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .product-column[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .prod-name[_ngcontent-%COMP%] {\n    width: 50%;\n    line-height: 1;\n    font-size: 0.9rem;\n  }\n  .product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .product-column[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .prod-price[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .product-column[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 55vw;\n    object-fit: cover;\n  }\n  .large-list[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .medium-list[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .small-list[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (min-width: 768px) and (max-width: 992px) {\n  .large-list[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .medium-list[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .small-list[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.slide[_ngcontent-%COMP%] {\n  height: 50px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy1sYXlvdXQvY29tcG9uZW50cy9uZXctYXJyaXZhbHMvbmV3LWFycml2YWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxjQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0FBSUY7O0FBRkE7RUFDRSxhQUFBO0FBS0Y7O0FBRkU7RUFDRSxhQUFBO0FBS0o7QUFKSTtFQUNFLGlCQUFBO0FBTU47QUFGUTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpREFBQTtBQUlWO0FBRE07RUFDRSxXQUFBO0FBR1I7QUFGUTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQUlWO0FBRE07RUFDRSxXQUFBO0FBR1I7O0FBRUE7RUFDRTtJQUNFLGtCQUFBO0lBQ0EsZUFBQTtFQUNGO0VBQ0E7SUFDRSxVQUFBO0VBQ0Y7RUFBRTtJQUNFLGVBQUE7RUFFSjtFQUFFO0lBQ0UsZUFBQTtFQUVKO0VBQU07SUFDRSwyQkFBQTtFQUVSO0VBRFE7SUFDRSxrQkFBQTtFQUdWO0VBRFE7SUFDRSxpQkFBQTtFQUdWO0VBRFE7SUFDRSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VBR1Y7RUFEUTtJQUNFLGtCQUFBO0VBR1Y7RUFFVTtJQUNFLFlBQUE7SUFDQSxpQkFBQTtFQUFaO0VBT0E7SUFDRSxhQUFBO0VBTEY7RUFPQTtJQUNFLGFBQUE7RUFMRjtFQU9BO0lBQ0UsY0FBQTtFQUxGO0FBQ0Y7QUFPQTtFQUNFO0lBQ0UsYUFBQTtFQUxGO0VBT0E7SUFDRSxjQUFBO0VBTEY7RUFPQTtJQUNFLGFBQUE7RUFMRjtBQUNGO0FBT0E7RUFDRSx1QkFBQTtBQUxGIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLnNlY3Rpb24taGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAzLjJyZW07XHJcbn1cclxuLmxhcmdlLWxpc3R7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLm1lZGl1bS1saXN0e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnNtYWxsLWxpc3R7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ucHJvZHVjdCB7XHJcbiAgLnByb2R1Y3Qtcm93IHtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAucHJvZHVjdC1jb2x1bW4ge1xyXG4gICAgICBwYWRkaW5nOiAwIDAuOHJlbTtcclxuICAgIH1cclxuICAgIC5jYXJkIHtcclxuICAgICAgLnByb2QtY2FydHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcclxuICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5pbWctYm94IHtcclxuICAgICAgICBoZWlnaHQ6IDkwJTtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgaGVpZ2h0OiA1NXZoO1xyXG4gICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0LWJveCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnNlY3Rpb24taGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDIuMjVyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgfVxyXG4gIC5wcm9kdWN0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICAuc2VjdGlvbi1oZWFkaW5nIHtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgLnByb2R1Y3Qtcm93IHtcclxuICAgICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgICAucHJvZHVjdC1jb2x1bW4ge1xyXG4gICAgICAgIC50ZXh0LWJveCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAuY2F0LW5hbWUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuY2F0LXByaWNlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjRyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucHJvZC1uYW1lIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnByb2QtcHJpY2V7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgLmltZy1ib3gge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNTV2dztcclxuICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubGFyZ2UtbGlzdHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5tZWRpdW0tbGlzdHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5zbWFsbC1saXN0e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDo5OTJweCl7XHJcbiAgLmxhcmdlLWxpc3R7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAubWVkaXVtLWxpc3R7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnNtYWxsLWxpc3R7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4uc2xpZGV7XHJcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 80:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/landing-layout/components/new-collection/new-collection.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewCollectionComponent: () => (/* binding */ NewCollectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

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
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.collection-page[_ngcontent-%COMP%] {\n  background-color: #dbc5b2;\n  background-image: linear-gradient(180deg, #dbc5b2 0%, #a58369 100%);\n  padding: 100px 0px 100px 0px;\n}\n.collection-page[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  z-index: 1;\n}\n.collection-page[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  object-fit: cover;\n  width: 40vw;\n  height: 45vw;\n}\n.collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%] {\n  display: block;\n  z-index: 5;\n  height: 100%;\n}\n.collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-size: 1.75rem;\n}\n.collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: block;\n  padding: 1rem 0;\n}\n.collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 6rem;\n}\n.collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%] {\n  padding: 30px 0;\n}\n.collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  padding: 7px 17.5px;\n}\n\n@media (max-width: 767px) {\n  .collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 1.6rem;\n  }\n  .collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 3.2rem;\n    text-align: center;\n    font-weight: 600;\n    line-height: 1;\n  }\n  .collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .btn-box[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n  }\n  .collection-page[_ngcontent-%COMP%]   .video-box[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    width: 100%;\n    align-items: flex-start;\n  }\n  .collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    line-height: 1;\n    font-size: 6rem;\n  }\n  .collection-page[_ngcontent-%COMP%]   .content-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy1sYXlvdXQvY29tcG9uZW50cy9uZXctY29sbGVjdGlvbi9uZXctY29sbGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLG1FQUFBO0VBQ0EsNEJBQUE7QUFFRjtBQURFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUdKO0FBRkk7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSU47QUFERTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUdKO0FBRkk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBSU47QUFITTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFLUjtBQUhNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFLUjtBQUhNO0VBQ0UsZUFBQTtBQUtSO0FBSE07RUFDRSxlQUFBO0FBS1I7QUFKUTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQU1WOztBQUFBO0VBR007SUFDRSxXQUFBO0VBQ047RUFBTTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7RUFFUjtFQUFNO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0lBQ0EsY0FBQTtFQUVSO0VBQU07SUFDRSxhQUFBO0VBRVI7RUFBTTtJQUNJLGFBQUE7SUFDQSx1QkFBQTtFQUVWO0VBR0k7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQUROO0FBQ0Y7QUFNQTtFQUdNO0lBQ0UsV0FBQTtJQUNBLHVCQUFBO0VBTk47RUFPTTtJQUNFLGFBQUE7RUFMUjtFQU9NO0lBQ0UsY0FBQTtJQUNBLGVBQUE7RUFMUjtFQU9NO0lBQ0Usa0JBQUE7RUFMUjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmNvbGxlY3Rpb24tcGFnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiYzViMjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZGJjNWIyIDAlLCAjYTU4MzY5IDEwMCUpO1xyXG4gIHBhZGRpbmc6IDEwMHB4IDBweCAxMDBweCAwcHg7XHJcbiAgLnZpZGVvLWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB2aWRlbyB7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB3aWR0aDogNDB2dztcclxuICAgICAgaGVpZ2h0OiA0NXZ3O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29udGVudC1ib3gge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgICAgfVxyXG4gICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgICAgfVxyXG4gICAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA2cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5idG4tYm94IHtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiA3cHggMTcuNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY29sbGVjdGlvbi1wYWdlIHtcclxuICAgIC5jb250ZW50LWJveCB7XHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMy4ycmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bi1ib3h7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnZpZGVvLWJveCB7XHJcbiAgICAgIHZpZGVvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLmNvbGxlY3Rpb24tcGFnZSB7XHJcbiAgICAuY29udGVudC1ib3gge1xyXG4gICAgICAuY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA2cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9000:
/*!*********************************************************************************!*\
  !*** ./src/app/features/landing-layout/components/packbag/packbag.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PackbagComponent: () => (/* binding */ PackbagComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

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
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.packbag-page[_ngcontent-%COMP%] {\n  padding: 100px 40px;\n  position: relative !important;\n}\n.packbag-page[_ngcontent-%COMP%]   .pack-img[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  max-width: 100%;\n  background-image: url('packbag.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  padding: 1rem;\n  height: 80vh;\n  transform: scale(1);\n}\n.packbag-page[_ngcontent-%COMP%]   .pack-img[_ngcontent-%COMP%]:hover {\n  background-size: 120%;\n  transform: scale(1);\n  transition-duration: 0.2s;\n  transition-property: transform;\n}\n.packbag-page[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.packbag-page[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 4rem;\n  font-weight: bold;\n  line-height: 1.8em;\n}\n.packbag-page[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 1.5;\n  text-align: center;\n  color: #ffffff;\n  margin-bottom: 1rem;\n}\n.packbag-page[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  border-radius: 0;\n  background: #ffffff;\n  transition: all 0.5s;\n}\n.packbag-page[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background: #000;\n  color: #ffffff;\n}\n\n@media (max-width: 767px) {\n  .packbag-page[_ngcontent-%COMP%] {\n    padding: 100px 15px;\n  }\n  .packbag-page[_ngcontent-%COMP%]   .pack-img[_ngcontent-%COMP%]:hover {\n    background-size: cover;\n  }\n  .packbag-page[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    text-align: center;\n    line-height: 1;\n  }\n  .packbag-page[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .packbag-page[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 7px 17.5px;\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy1sYXlvdXQvY29tcG9uZW50cy9wYWNrYmFnL3BhY2tiYWcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQUVGO0FBREU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUdKO0FBRkk7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtBQUlOO0FBREU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUdKO0FBRkk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFJTjtBQUZJO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBSU47QUFGSTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBSU47QUFITTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUtSOztBQUFBO0VBQ0U7SUFDRSxtQkFBQTtFQUdGO0VBREk7SUFDRSxzQkFBQTtFQUdOO0VBQ0k7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0VBQ047RUFDSTtJQUNFLGlCQUFBO0VBQ047RUFDSTtJQUNFLG1CQUFBO0lBQ0EsZUFBQTtFQUNOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ucGFja2JhZy1wYWdlIHtcclxuICBwYWRkaW5nOiAxMDBweCA0MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gIC5wYWNrLWltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhY2tiYWcuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGhlaWdodDogODB2aDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMjAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50ZXh0LWJveCB7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS44ZW07XHJcbiAgICB9XHJcbiAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgICAuYnRuIHtcclxuICAgICAgcGFkZGluZzogMC41cmVtIDEuMjVyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5wYWNrYmFnLXBhZ2Uge1xyXG4gICAgcGFkZGluZzogMTAwcHggMTVweDtcclxuICAgIC5wYWNrLWltZ3tcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudGV4dC1ib3gge1xyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICAgIH1cclxuICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgfVxyXG4gICAgICAuYnRuIHtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMTcuNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2166:
/*!***************************************************************************************!*\
  !*** ./src/app/features/landing-layout/components/who-we-are/who-we-are.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WhoWeAreComponent: () => (/* binding */ WhoWeAreComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

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
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  line-height: 1.5;\n}\n\n.content-box[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 3rem;\n  justify-content: space-between;\n}\n.content-box[_ngcontent-%COMP%]   .flex-box[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n.content-box[_ngcontent-%COMP%]   .flex-box[_ngcontent-%COMP%]   .sign-text[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  text-align: end;\n  margin-right: 3rem;\n  margin-top: 2rem;\n  font-style: italic;\n  letter-spacing: 4.2px;\n  line-height: 1;\n}\n\n.section-heading[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  margin-bottom: 2rem;\n}\n\n@media (max-width: 768px) {\n  .top-container[_ngcontent-%COMP%] {\n    padding-top: 1rem !important;\n  }\n  .section-heading[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    margin-bottom: 1rem;\n    text-align: center;\n  }\n  .right-part[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n  .content-box[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n  .content-box[_ngcontent-%COMP%]   .flex-box[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    padding: 0;\n  }\n  .content-box[_ngcontent-%COMP%]   .flex-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: justify;\n  }\n  .content-box[_ngcontent-%COMP%]   .flex-box[_ngcontent-%COMP%]   .left-part[_ngcontent-%COMP%], .content-box[_ngcontent-%COMP%]   .flex-box[_ngcontent-%COMP%]   .right-part[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvbGFuZGluZy1sYXlvdXQvY29tcG9uZW50cy93aG8td2UtYXJlL3doby13ZS1hcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDhCQUFBO0FBRUY7QUFERTtFQUNFLGVBQUE7QUFHSjtBQUZJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBSU47O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFO0lBQ0UsNEJBQUE7RUFHRjtFQURBO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0lBQ0Esa0JBQUE7RUFHRjtFQURBO0lBQ0UscUJBQUE7RUFHRjtFQURBO0lBQ0UsZUFBQTtFQUdGO0VBRkU7SUFDRSxXQUFBO0lBQ0EsdUJBQUE7SUFDQSxVQUFBO0VBSUo7RUFISTtJQUNFLG1CQUFBO0VBS047RUFISTs7SUFFRSxXQUFBO0lBQ0EscUJBQUE7RUFLTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG4uY29udGVudC1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAzcmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAuZmxleC1ib3gge1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG4gICAgLnNpZ24tdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogNC4ycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlY3Rpb24taGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLnRvcC1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuc2VjdGlvbi1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5yaWdodC1wYXJ0IHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNvbnRlbnQtYm94IHtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIC5mbGV4LWJveCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgfVxyXG4gICAgICAubGVmdC1wYXJ0LFxyXG4gICAgICAucmlnaHQtcGFydCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 7270:
/*!**************************************************************************!*\
  !*** ./src/app/features/landing-layout/landing-layout-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingLayoutRoutingModule: () => (/* binding */ LandingLayoutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _landing_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-layout.component */ 6384);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);




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

/***/ 6384:
/*!*********************************************************************!*\
  !*** ./src/app/features/landing-layout/landing-layout.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingLayoutComponent: () => (/* binding */ LandingLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/main/main.component */ 7152);
/* harmony import */ var _components_follow_us_follow_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/follow-us/follow-us.component */ 6044);
/* harmony import */ var _components_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/who-we-are/who-we-are.component */ 2166);
/* harmony import */ var _components_packbag_packbag_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/packbag/packbag.component */ 9000);
/* harmony import */ var _components_new_collection_new_collection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/new-collection/new-collection.component */ 80);
/* harmony import */ var _components_new_arrivals_new_arrivals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/new-arrivals/new-arrivals.component */ 700);
/* harmony import */ var _components_connect_connect_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/connect/connect.component */ 2360);








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

/***/ 8543:
/*!******************************************************************!*\
  !*** ./src/app/features/landing-layout/landing-layout.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingLayoutModule: () => (/* binding */ LandingLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _landing_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-layout-routing.module */ 7270);
/* harmony import */ var _landing_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-layout.component */ 6384);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main.component */ 7152);
/* harmony import */ var _components_follow_us_follow_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/follow-us/follow-us.component */ 6044);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _components_who_we_are_who_we_are_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/who-we-are/who-we-are.component */ 2166);
/* harmony import */ var _components_packbag_packbag_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/packbag/packbag.component */ 9000);
/* harmony import */ var _components_new_collection_new_collection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/new-collection/new-collection.component */ 80);
/* harmony import */ var _components_new_arrivals_new_arrivals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/new-arrivals/new-arrivals.component */ 700);
/* harmony import */ var _components_connect_connect_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/connect/connect.component */ 2360);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/element/bundle */ 493);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ 9194);
/* harmony import */ var _pipes_home_product_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pipes/home-product.pipe */ 1333);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7580);
















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

/***/ 2215:
/*!*********************************************************************************************!*\
  !*** ./src/app/features/shared/components/custom-pagination/custom-pagination.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomPaginationComponent: () => (/* binding */ CustomPaginationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);



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

/***/ 5847:
/*!***********************************************************************!*\
  !*** ./src/app/features/shared/components/footer/footer.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



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
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.contact-text[_ngcontent-%COMP%], .follow-text[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  margin-bottom: 1.7rem;\n}\n\n.fa-brands[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  border: solid 1px #e3e3e3;\n  background-color: #fff;\n  display: flex;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 90%;\n  border: none;\n  padding-left: 1rem;\n}\n.input-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n  border-bottom: 1px solid #000;\n  background-color: rgba(227, 227, 227, 0.4980392157);\n}\n\n.small-text[_ngcontent-%COMP%] {\n  color: #acaaa6 !important;\n  font-size: 0.75rem;\n}\n\n.brands-icons[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n@media (max-width: 768px) {\n  .brands-icons[_ngcontent-%COMP%] {\n    justify-content: flex-start !important;\n  }\n  .brands-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-right: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7QUFFRjs7QUFBQTs7RUFFRSxpQkFBQTtFQUNBLHFCQUFBO0FBR0Y7O0FBREE7RUFDRSxpQkFBQTtBQUlGOztBQUZBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFLRjtBQUpFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQU1KO0FBTEk7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtREFBQTtBQU9OOztBQUhBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtBQU1GOztBQUpBO0VBQ0UsZUFBQTtBQU9GOztBQUxBO0VBQ0U7SUFDRSxzQ0FBQTtFQVFGO0VBUEU7SUFDRSxlQUFBO0lBQ0Esa0JBQUE7RUFTSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbmF7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLmNvbnRhY3QtdGV4dCxcclxuLmZvbGxvdy10ZXh0IHtcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjdyZW07XHJcbn1cclxuLmZhLWJyYW5kcyB7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbn1cclxuLmlucHV0LXdyYXBwZXIge1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNlM2UzZTM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGlucHV0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICAmOmZvY3VzLXZpc2libGUge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlMzdmO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uc21hbGwtdGV4dCB7XHJcbiAgY29sb3I6ICNhY2FhYTYgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbn1cclxuLmJyYW5kcy1pY29ucyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5icmFuZHMtaWNvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbiAgICBpIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6807:
/*!***********************************************************************!*\
  !*** ./src/app/features/shared/components/header/header.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var src_app_pipes_tag_category_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/pipes/tag-category.pipe */ 123);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services */ 2589);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 3871);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/cart.service */ 6868);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_app_pipes_tag_product_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pipes/tag-product.pipe */ 3098);















const _forTrack0 = ($index, $item) => $item.id;
function HeaderComponent_For_32_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 82)(1, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_For_32_div_11_Template_span_click_1_listener() {
      const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.navigateToDynamic(item_r7 == null ? null : item_r7.name));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("textDanger", (item_r7 == null ? null : item_r7.name) == "Sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r7 == null ? null : item_r7.name);
  }
}
function HeaderComponent_For_32_swiper_slide_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "swiper-slide", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_For_32_swiper_slide_15_Template_swiper_slide_click_0_listener() {
      const p_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.navigateTo("/product/product-details", p_r9 == null ? null : p_r9.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 90)(3, "p", 91);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("mouseover", function HeaderComponent_For_32_Template_div_mouseover_0_listener() {
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.activeTagId = item_r4.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 27)(2, "a", 78)(3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 79)(6, "div", 80)(7, "div", 81)(8, "div", 82)(9, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, HeaderComponent_For_32_div_11_Template, 3, 3, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "tagCategory");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 85)(14, "swiper-container", 86);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 4, ctx_r4.commonService.allData.products, ctx_r4.activeTagId));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](16, 7, ctx_r4.commonService.allData.products, ctx_r4.activeTagId));
  }
}
function HeaderComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 94);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 99);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 95)(1, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HeaderComponent_div_70_div_2_Template, 5, 1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_70_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r4.navigateTo("/contact", null);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.isMenuOpen = !ctx_r4.isMenuOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 97);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 94);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 95)(1, "div", 96)(2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_73_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r4.navigateTo("/auth/login", null);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.isAccountOpen = !ctx_r4.isAccountOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "My Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_73_Template_div_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r4.navigateTo("/order/wishlist", null);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.isAccountOpen = !ctx_r4.isAccountOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Wishlist");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_73_Template_div_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r4.navigateTo("/order/my-orders", null);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.isAccountOpen = !ctx_r4.isAccountOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "p", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "My Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
}
function HeaderComponent_ng_container_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
function HeaderComponent_ng_template_83_div_0_p_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 112);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 103)(1, "div", 104)(2, "img", 105);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 106)(4, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_ng_template_83_div_0_Template_p_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.isCartOpen = !ctx_r4.isCartOpen);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, HeaderComponent_ng_template_83_div_0_p_6_Template, 2, 2, "p", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 32)(8, "input", 109);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 110)(13, "i", 111);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, HeaderComponent_ng_template_83_div_0_Template, 14, 10, "div", 102);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_div_127_Template_p_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      ctx_r4.isMenuOpen = !ctx_r4.isMenuOpen;
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.handleDataRemove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "i", 99);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "swiper-slide", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HeaderComponent_swiper_slide_130_Template_swiper_slide_click_0_listener() {
      const p_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21).$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.navigateTo("/product/product-details", p_r22 == null ? null : p_r22.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 90)(3, "p", 91);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 114)(2, "i", 115);
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
  navigateToDynamic(id) {
    const path = `pages/${id}`;
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
    consts: [["elseBlock", ""], ["search", ""], [1, "head", 3, "ngClass"], ["id", "topbar", 1, "container-fluid"], [1, "row", "upper-row"], [1, "col-11"], [1, "row"], [1, "col-4", "d-flex", "pointer", 3, "click"], ["width", "55", "src", "../../../../../assets/images/gold-logo.png", "alt", "logo"], [1, "col-8", "col-lg-4", "ship-text"], ["src", "../../../../../assets/images/companyName.png", "alt", "Company Name", 1, "img-fluid", "pointer", 3, "click"], [1, "d-none", "d-md-none", "d-lg-block", "col-lg-4"], [1, "icons-box"], [1, "icons"], [1, "fa-solid", "fa-magnifying-glass", "pointer", 3, "click"], ["ngbDropdown", ""], ["type", "button", "id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn"], [1, "fa-solid", "fa-user", "pointer"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", 1, "p-3", 3, "click"], [1, "fa-solid", "fa-cart-plus", "nav-items", "pointer", 3, "click"], [1, "container-fluid", "header-web"], [1, "row", "justify-content-center"], [1, "row", "justify-content-around"], [1, "col-10"], [1, "d-flex", "h-100"], [1, "nav_menu", "d-flex"], [1, "nav_list", "nav_list_menu"], [1, "nav_link", "text-uppercase", 3, "click"], [1, "nav-items", "pointer"], [1, "col-2", "d-flex", "justify-content-end"], [1, "navbar-brand", "text-uppercase", "textDanger", "nav-items", "pointer", 3, "click"], [1, "d-flex", "align-items-center"], [1, "container-fluid", "header-tablet"], [1, "col-3", "d-flex", "flex-column", "align-items-center", "p-3", "menu-items", 3, "click"], [1, "fa-solid", "fa-bars"], [1, "col-3", "d-flex", "flex-column", "align-items-center", "p-3", "menu-items"], [1, "fa-solid", "fa-magnifying-glass", 3, "click"], [1, "d-flex"], [1, "nav_list"], [1, "d-flex", "justify-content-center", 3, "click"], [3, "ngClass"], [1, "container-fluid"], [1, "search", "d-flex", "justify-content-between", "align-items-center", "p-4", "w-100"], ["type", "text", "placeholder", "Search", 1, "form-control", "w-75"], [1, "fa-solid", "fa-user"], [1, "fa-solid", "fa-bag-shopping"], ["class", "offcanvas-header m-0 px-4 py-2", 4, "ngIf"], ["class", "offcanvas-body m-0", 4, "ngIf"], [1, "cart-header", "m-0", "px-4", "py-3", "border-bottom", "bg-light"], ["type", "button", 1, "btn", "text-dark", 3, "click"], [1, "fa-solid", "fa-xmark"], [1, "cart-body", "m-0", "bg-white", "p-3", "d-flex", "flex-column", "justify-content-between"], [1, "product-part"], [4, "ngIf", "ngIfElse"], [1, "info-part"], [1, "row", "py-3", "border-bottom"], [1, "col-12", "d-flex", "justify-content-between"], [1, "row", "py-3"], [1, "col-12", "description"], [1, "col-12", "mb-2"], ["type", "button", 1, "btn", "btn-dark", "py-2", 3, "click", "disabled"], [1, "col-12"], ["type", "button", 1, "btn", "btn-light", "py-2", 3, "click", "disabled"], [1, "offcanvas-header", "m-0", "px-4", "py-3", "border-bottom"], [1, "fw-bold"], [1, "text-dark", "fa-solid", "fa-xmark"], [1, "offcanvas-body", "m-0", "px-4", "d-flex", "flex-column", "justify-content-between"], [1, "option"], [1, "option-item", "border-bottom", "d-flex", "justify-content-between", "py-3", 3, "click"], [1, "d-flex", "align-items-center", "w-25"], [1, "fa-solid", "fa-chevron-left"], [1, "w-75", "text-uppercase", "fw-bold"], ["class", "option-item border-bottom d-flex justify-content-between py-3", 3, "click", 4, "ngFor", "ngForOf"], [1, "dropdownItem", "p-3"], ["slides-per-view", "1", 1, "img-box"], ["class", "px-2 prod-cart", 3, "click", 4, "ngFor", "ngForOf"], [1, "nav_menu", "d-flex", 3, "mouseover"], [1, "nav_link", "text-uppercase"], [1, "dropDown"], [1, "dropdown-inner", "row"], [1, "col-2", "dropdownItem", "border-end"], [1, "py-2"], [1, "drop-items", "pointer", "fw-bold", "text-capitalize"], ["class", "py-2", 4, "ngFor", "ngForOf"], [1, "col-10", "dropdownItem", "px-3"], ["slides-per-view", "4", 1, "img-box"], [1, "drop-items", "pointer", 3, "click"], [1, "px-2", "prod-cart", 3, "click"], [1, "prod-img", "w-100", 3, "src"], [1, "text-box", "p-3"], [1, "prod-name"], [1, "offcanvas-header", "m-0", "px-4", "py-2"], ["src", "../../../../../assets/images/gold-logo.png", 1, "img-fluid-m", "me-3", "logo-img"], ["type", "button", 1, "btn", 3, "click"], [1, "offcanvas-body", "m-0"], [1, "option", "p-4"], [1, "w-75", "text-uppercase"], [1, "d-flex", "justify-content-end", "align-items-center", "w-25"], [1, "fa-solid", "fa-chevron-right"], [1, "w-100", "d-flex", "align-items-center"], ["src", "../../../../../assets/images/no-product.png", "alt", "", 1, "img-fluid"], ["class", "row border-bottom d-flex", 4, "ngFor", "ngForOf"], [1, "row", "border-bottom", "d-flex"], [1, "col-3"], ["width", "150", "alt", "", 1, "img-fluid", "cart-img", "pointer", 3, "click", "src"], [1, "col-8", "d-flex", "justify-content-center", "bg-white", "flex-column", "p-3"], [1, "pointer", 3, "click"], ["class", "text-color-secondary small-text", 4, "ngFor", "ngForOf"], ["type", "number", 1, "w-50", "border-0", 3, "ngModelChange", "min", "ngModel", "value"], [1, "col-1", "d-flex", "align-items-center", "bg-white"], [1, "fa-solid", "fa-trash", 3, "click"], [1, "text-color-secondary", "small-text"], [1, "w-75", "text-uppercase", 3, "click"], ["type", "text", "placeholder", "Search our catalog", 1, "form-control", "w-75", "background-primary"], [1, "fa-solid", "fa-magnifying-glass"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrepeaterCreate"](31, HeaderComponent_For_32_Template, 17, 10, "div", 26, _forTrack0);
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
    styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  list-style: none;\n}\n\n.show[_ngcontent-%COMP%]:focus-visible {\n  outline: none !important;\n}\n\n.head[_ngcontent-%COMP%]:hover   #topbar[_ngcontent-%COMP%] {\n  background-color: #fff;\n  z-index: 100;\n  position: relative;\n  transition: all 0.5s ease-in-out;\n}\n\n.head[_ngcontent-%COMP%]:hover   .header-web[_ngcontent-%COMP%] {\n  background-color: #fff;\n  position: relative;\n  transition: all 0.5s ease-in-out;\n}\n\n.head[_ngcontent-%COMP%]:hover   .header-tablet[_ngcontent-%COMP%] {\n  background-color: #fff;\n  z-index: 100;\n  position: relative;\n  transition: all 0.5s ease-in-out;\n}\n\n.btn-dark[_ngcontent-%COMP%], .btn-light[_ngcontent-%COMP%] {\n  width: 100% !important;\n  padding: 0.5rem 0 !important;\n  border-radius: 0 !important;\n}\n\n.nav_menu[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid #000;\n}\n\n.header-web[_ngcontent-%COMP%] {\n  display: block;\n  background: transparent;\n  z-index: 2;\n  position: relative;\n}\n.header-web[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 18px;\n  line-height: 3.8125rem;\n  max-width: 14.6875rem;\n  padding-left: 2.1875rem;\n  padding-right: 2.1875rem;\n}\n.header-web[_ngcontent-%COMP%]   .textDanger[_ngcontent-%COMP%] {\n  color: #ad0700;\n}\n.header-web[_ngcontent-%COMP%]   .prod-img[_ngcontent-%COMP%] {\n  height: 300px;\n  object-fit: cover;\n}\n\n.header-tablet[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.nav-items[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #000;\n}\n\n.nav_list[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 2rem;\n  align-items: center;\n  margin: 0 1.5rem;\n}\n\n.dropdown-search[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 99%;\n  left: 0;\n  width: 100%;\n  background: rgb(252, 253, 251);\n  box-shadow: 0rem 0.2rem 0.5rem rgba(32, 7, 65, 0.14);\n  transition: all 0.5s ease-in;\n  clip-path: polygon(0 0, 100% 0, 100% 102%, 0 102%);\n}\n\n.dropdown-search-collapsed[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 99%;\n  left: 0;\n  width: 100%;\n  background: rgb(252, 253, 251);\n  box-shadow: 0rem 0.2rem 0.5rem rgba(32, 7, 65, 0.14);\n  transition: all 0.5s ease-in;\n  clip-path: polygon(0 0, 100% 0, 100% 0, 0 1%);\n}\n\n.nav_link[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  font-weight: 500;\n  color: rgba(40, 38, 38, 0.6745098039);\n}\n\n.dropDown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3.8rem;\n  left: 0;\n  width: 100%;\n  height: auto;\n  background: #fff;\n  box-shadow: 0rem 0.2rem 0.5rem rgba(32, 7, 65, 0.14);\n  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\n  transition: all 0.5s ease-in;\n  z-index: 1000;\n}\n\n.drop-items[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.25rem;\n  cursor: pointer;\n}\n\n.dropdown-inner[_ngcontent-%COMP%] {\n  padding: 2rem 3.5rem;\n  border-top: 1px solid #ededed;\n}\n\n.nav_list_menu[_ngcontent-%COMP%]:hover   .dropDown[_ngcontent-%COMP%] {\n  clip-path: polygon(0 0, 100% 0, 100% 102%, 0 102%);\n}\n\nli[_ngcontent-%COMP%] {\n  padding: 0.2rem 0;\n}\n\n.logo-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n.option[_ngcontent-%COMP%] {\n  height: 90%;\n  overflow-y: auto;\n}\n.option[_ngcontent-%COMP%]   .option-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.info-part[_ngcontent-%COMP%] {\n  max-height: 52vh;\n  min-height: 52vh;\n}\n.info-part[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n  padding: 0.5rem;\n  margin-bottom: 1rem;\n}\n\n.transparent[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n.modal-open[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1045;\n  height: 100vh;\n  background: #fff;\n  top: 0;\n  transition: transform 0.5s ease-in-out;\n}\n\n.toggle-modal[_ngcontent-%COMP%] {\n  width: 100%;\n  transform: translateX(0);\n}\n\n.toggle-close[_ngcontent-%COMP%] {\n  width: 100%;\n  transform: translateX(-100%) !important;\n}\n\n.cart-modal[_ngcontent-%COMP%] {\n  width: 30%;\n  right: 0;\n}\n\n.cart-close[_ngcontent-%COMP%] {\n  width: 30%;\n  right: 0;\n  transform: translateX(100%);\n}\n\n.offcanvas-header[_ngcontent-%COMP%], .cart-header[_ngcontent-%COMP%] {\n  height: 10vh;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.offcanvas-body[_ngcontent-%COMP%] {\n  height: 80vh;\n}\n\n.cart-body[_ngcontent-%COMP%] {\n  height: 90vh;\n}\n\n#topbar[_ngcontent-%COMP%] {\n  background: transparent;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 1rem;\n  align-items: center;\n  position: relative;\n  z-index: 10;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .ship-text[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .ship-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .ship-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .icons-box[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .icons-box[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  width: 25%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .icons-box[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #000;\n  cursor: pointer;\n}\n\n.product-part[_ngcontent-%COMP%] {\n  max-height: 35vh;\n  min-height: 35vh;\n  overflow-y: scroll;\n}\n.product-part[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.product-part[_ngcontent-%COMP%]   .small-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.product-part[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  padding: 0.5rem;\n  border: 0;\n}\n.product-part[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background-color: #f8f8f8;\n  border: 0;\n  outline: 0;\n}\n\n.form-control[_ngcontent-%COMP%]:focus, .input-number[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  outline: none;\n  border-bottom: 1px solid #000;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n}\n\n.form-control[_ngcontent-%COMP%]:focus-visible, .input-number[_ngcontent-%COMP%]:focus-visible {\n  border-bottom: 1px solid #000;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  outline: none;\n}\n\n.search[_ngcontent-%COMP%] {\n  background-color: #e3e3e3;\n}\n\n.cart-img[_ngcontent-%COMP%] {\n  min-height: 100px;\n  max-height: 100px;\n  object-fit: cover;\n}\n\n@media (max-width: 992px) {\n  .header-web[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header-tablet[_ngcontent-%COMP%] {\n    display: block;\n    z-index: 1000;\n    position: relative;\n  }\n  .header-tablet[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    margin-bottom: 0.5rem;\n  }\n  .header-tablet[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n  .container-fluid[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .ship-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: start;\n  }\n}\n@media (min-width: 768px) and (max-width: 1024px) {\n  .cart-modal[_ngcontent-%COMP%], .cart-close[_ngcontent-%COMP%], .toggle-modal[_ngcontent-%COMP%], .toggle-close[_ngcontent-%COMP%] {\n    width: 50%;\n  }\n}\n@media (max-width: 768px) {\n  .cart-modal[_ngcontent-%COMP%], .cart-close[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0Usd0JBQUE7QUFFRjs7QUFBQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFHRjs7QUFEQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUlGOztBQUZBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQUtGOztBQUhBOztFQUVFLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQU1GOztBQUpBO0VBQ0UsNkJBQUE7QUFPRjs7QUFMQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQVFGO0FBUEU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0FBU0o7QUFQRTtFQUNFLGNBQUE7QUFTSjtBQVBFO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBU0o7O0FBTkE7RUFDRSxhQUFBO0FBU0Y7O0FBUEE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQVVGOztBQVBBO0VBQ0Usb0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVVGOztBQVJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLG9EQUFBO0VBQ0EsNEJBQUE7RUFDQSxrREFBQTtBQVdGOztBQVJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLG9EQUFBO0VBQ0EsNEJBQUE7RUFDQSw2Q0FBQTtBQVdGOztBQVJBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7QUFXRjs7QUFUQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0RBQUE7RUFDQSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQVlGOztBQVZBO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQWFGOztBQVhBO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtBQWNGOztBQVpBO0VBQ0Usa0RBQUE7QUFlRjs7QUFiQTtFQUNFLGlCQUFBO0FBZ0JGOztBQWRBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFpQkY7O0FBZkE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFrQkY7QUFqQkU7RUFDRSxlQUFBO0FBbUJKOztBQWhCQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFtQkY7QUFsQkU7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQW9CSjs7QUFqQkE7RUFDRSw2QkFBQTtBQW9CRjs7QUFsQkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxzQ0FBQTtBQXFCRjs7QUFuQkE7RUFDRSxXQUFBO0VBQ0Esd0JBQUE7QUFzQkY7O0FBcEJBO0VBQ0UsV0FBQTtFQUNBLHVDQUFBO0FBdUJGOztBQXJCQTtFQUNFLFVBQUE7RUFDQSxRQUFBO0FBd0JGOztBQXRCQTtFQUNFLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUF5QkY7O0FBdkJBOztFQUVFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQTBCRjs7QUF4QkE7RUFDRSxZQUFBO0FBMkJGOztBQXpCQTtFQUNFLFlBQUE7QUE0QkY7O0FBekJBO0VBQ0UsdUJBQUE7QUE0QkY7QUEzQkU7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EsV0FBQTtBQTRCSjtBQTNCSTtFQUNFLGNBQUE7QUE2Qk47QUE1Qk07RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUE4QlI7QUE3QlE7RUFDRSxZQUFBO0FBK0JWO0FBM0JJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQTZCTjtBQTNCTTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBNkJSO0FBNUJRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUE4QlY7O0FBeEJBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBMkJGO0FBMUJFO0VBQ0UsYUFBQTtBQTRCSjtBQTFCRTtFQUNFLGtCQUFBO0FBNEJKO0FBMUJFO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQTRCSjtBQTNCSTtFQUNFLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUE2Qk47O0FBekJBOztFQUVFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBNEJGOztBQTFCQTs7RUFFRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUE2QkY7O0FBM0JBO0VBQ0UseUJBQUE7QUE4QkY7O0FBNUJBO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBK0JGOztBQTdCQTtFQUNFO0lBQ0UsYUFBQTtFQWdDRjtFQTlCQTtJQUNFLGNBQUE7SUFDQSxhQUFBO0lBQ0Esa0JBQUE7RUFnQ0Y7RUE5Qkk7SUFDRSxpQkFBQTtJQUNBLHFCQUFBO0VBZ0NOO0VBOUJJO0lBQ0UsaUJBQUE7RUFnQ047RUF6Qk07SUFDRSxpQkFBQTtFQTJCUjtBQUNGO0FBdEJBO0VBQ0U7Ozs7SUFJRSxVQUFBO0VBd0JGO0FBQ0Y7QUF0QkE7RUFDRTs7SUFFRSxXQUFBO0VBd0JGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4uc2hvdzpmb2N1cy12aXNpYmxlIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhlYWQ6aG92ZXIgI3RvcGJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5oZWFkOmhvdmVyIC5oZWFkZXItd2ViIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxufVxyXG4uaGVhZDpob3ZlciAuaGVhZGVyLXRhYmxldCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5idG4tZGFyayxcclxuLmJ0bi1saWdodCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwLjVyZW0gMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxufVxyXG4ubmF2X21lbnU6aG92ZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xyXG59XHJcbi5oZWFkZXItd2ViIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAubmF2YmFyLWJyYW5kIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMuODEyNXJlbTtcclxuICAgIG1heC13aWR0aDogMTQuNjg3NXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMi4xODc1cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMi4xODc1cmVtO1xyXG4gIH1cclxuICAudGV4dERhbmdlciB7XHJcbiAgICBjb2xvcjogI2FkMDcwMDtcclxuICB9XHJcbiAgLnByb2QtaW1nIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB9XHJcbn1cclxuLmhlYWRlci10YWJsZXQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLm5hdi1pdGVtcyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG59XHJcbi8vXHJcbi5uYXZfbGlzdCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgZ2FwOiAycmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIDEuNXJlbTtcclxufVxyXG4uZHJvcGRvd24tc2VhcmNoIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA5OSU7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjUyLCAyNTMsIDI1MSk7XHJcbiAgYm94LXNoYWRvdzogMHJlbSAwLjJyZW0gMC41cmVtIHJnYmEoMzIsIDcsIDY1LCAwLjE0KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDIlLCAwIDEwMiUpO1xyXG59XHJcbi8vXHJcbi5kcm9wZG93bi1zZWFyY2gtY29sbGFwc2VkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA5OSU7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjUyLCAyNTMsIDI1MSk7XHJcbiAgYm94LXNoYWRvdzogMHJlbSAwLjJyZW0gMC41cmVtIHJnYmEoMzIsIDcsIDY1LCAwLjE0KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAwLCAwIDElKTtcclxufVxyXG5cclxuLm5hdl9saW5rIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMjgyNjI2YWM7XHJcbn1cclxuLmRyb3BEb3duIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzLjhyZW07XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwcmVtIDAuMnJlbSAwLjVyZW0gcmdiYSgzMiwgNywgNjUsIDAuMTQpO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAwLCAwIDApO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW47XHJcbiAgei1pbmRleDogMTAwMDtcclxufVxyXG4uZHJvcC1pdGVtcyB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZHJvcGRvd24taW5uZXIge1xyXG4gIHBhZGRpbmc6IDJyZW0gMy41cmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWRlZGVkO1xyXG59XHJcbi5uYXZfbGlzdF9tZW51OmhvdmVyIC5kcm9wRG93biB7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMiUsIDAgMTAyJSk7XHJcbn1cclxubGkge1xyXG4gIHBhZGRpbmc6IDAuMnJlbSAwO1xyXG59XHJcbi5sb2dvLWltZyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5vcHRpb24ge1xyXG4gIGhlaWdodDogOTAlO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgLm9wdGlvbi1pdGVtIHAge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxufVxyXG4uaW5mby1wYXJ0IHtcclxuICBtYXgtaGVpZ2h0OiA1MnZoO1xyXG4gIG1pbi1oZWlnaHQ6IDUydmg7XHJcbiAgLmRlc2NyaXB0aW9uIHtcclxuICAgIGNvbG9yOiAjMGM1NDYwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZWNmMTtcclxuICAgIGJvcmRlci1jb2xvcjogI2JlZTVlYjtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG59XHJcbi50cmFuc3BhcmVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuLm1vZGFsLW9wZW4ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDQ1O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB0b3A6IDA7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLnRvZ2dsZS1tb2RhbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG59XHJcbi50b2dnbGUtY2xvc2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSkgIWltcG9ydGFudDtcclxufVxyXG4uY2FydC1tb2RhbCB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICByaWdodDogMDtcclxufVxyXG4uY2FydC1jbG9zZSB7XHJcbiAgd2lkdGg6IDMwJTtcclxuICByaWdodDogMDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbn1cclxuLm9mZmNhbnZhcy1oZWFkZXIsXHJcbi5jYXJ0LWhlYWRlciB7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm9mZmNhbnZhcy1ib2R5IHtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbn1cclxuLmNhcnQtYm9keSB7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG59XHJcbi8vIFRPUEJBUlxyXG4jdG9wYmFyIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAudXBwZXItcm93IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjMDA3MjcxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICAuc2hpcC10ZXh0IHtcclxuICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmljb25zLWJveCB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgIC5pY29ucyB7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ucHJvZHVjdC1wYXJ0IHtcclxuICBtYXgtaGVpZ2h0OiAzNXZoO1xyXG4gIG1pbi1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5zbWFsbC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICB9XHJcbiAgaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJvcmRlcjogMDtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIG91dGxpbmU6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMsXHJcbi5pbnB1dC1udW1iZXI6Zm9jdXMge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICBib3JkZXItdG9wOiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAwO1xyXG4gIGJvcmRlci1yaWdodDogMDtcclxufVxyXG4uZm9ybS1jb250cm9sOmZvY3VzLXZpc2libGUsXHJcbi5pbnB1dC1udW1iZXI6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLXRvcDogMDtcclxuICBib3JkZXItbGVmdDogMDtcclxuICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uc2VhcmNoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xyXG59XHJcbi5jYXJ0LWltZyB7XHJcbiAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmhlYWRlci13ZWIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmhlYWRlci10YWJsZXQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLm1lbnUtaXRlbXMge1xyXG4gICAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAudXBwZXItcm93IHtcclxuICAgICAgLnNoaXAtdGV4dCB7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmNhcnQtbW9kYWwsXHJcbiAgLmNhcnQtY2xvc2UsXHJcbiAgLnRvZ2dsZS1tb2RhbCxcclxuICAudG9nZ2xlLWNsb3NlIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jYXJ0LW1vZGFsLFxyXG4gIC5jYXJ0LWNsb3NlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1037:
/*!***********************************************************************!*\
  !*** ./src/app/features/shared/components/topbar/topbar.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopbarComponent: () => (/* binding */ TopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);






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
    styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 1rem;\n  align-items: center;\n  background: #007271;\n  position: relative;\n  z-index: 10;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .ship-text[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .ship-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .ship-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40px;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .icons-box[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .icons-box[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  width: 25%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .icons-box[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fff;\n  cursor: pointer;\n}\n#topbar[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]:hover {\n  background: #007271;\n}\n\n.product-part[_ngcontent-%COMP%] {\n  max-height: 35vh;\n  min-height: 35vh;\n  overflow-y: scroll;\n}\n.product-part[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.product-part[_ngcontent-%COMP%]   .small-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.product-part[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  padding: 0.5rem;\n}\n.product-part[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: 0;\n  outline: 0;\n}\n\n.info-part[_ngcontent-%COMP%] {\n  max-height: 52vh;\n  min-height: 52vh;\n}\n.info-part[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #0c5460;\n  background-color: #d1ecf1;\n  border-color: #bee5eb;\n  padding: 0.5rem;\n  margin-bottom: 1rem;\n}\n\n.search[_ngcontent-%COMP%] {\n  background-color: #e3e3e3;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: #e3e3e3;\n}\ninput[_ngcontent-%COMP%]:focus {\n  background-color: #e3e3e3;\n}\n\n@media (max-width: 992px) {\n  .container-fluid[_ngcontent-%COMP%]   .upper-row[_ngcontent-%COMP%]   .ship-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    text-align: start;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvc2hhcmVkL2NvbXBvbmVudHMvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBR0U7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQUo7QUFDSTtFQUNFLGNBQUE7QUFDTjtBQUFNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0FBRVI7QUFEUTtFQUNFLFlBQUE7QUFHVjtBQUNJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUNOO0FBQ007RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUFRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFFWjtBQUVJO0VBQ0UsbUJBQUE7QUFBTjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURGO0FBRUU7RUFDRSxhQUFBO0FBQUo7QUFFQztFQUNDLGtCQUFBO0FBQUY7QUFFQztFQUNDLHlCQUFBO0VBQ0EsZUFBQTtBQUFGO0FBQ0U7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUFGO0FBQ0U7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0FBRUY7QUFERTtFQUNFLHlCQUFBO0FBR0o7O0FBQUE7RUFJUTtJQUNFLGlCQUFBO0VBQVI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIFxyXG59XHJcbiN0b3BiYXIge1xyXG4gIC51cHBlci1yb3cge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICMwMDcyNzE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIC5zaGlwLXRleHQge1xyXG4gICAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pY29ucy1ib3gge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgICAuaWNvbnN7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDA3MjcxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ucHJvZHVjdC1wYXJ0e1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgbWluLWhlaWdodDogMzV2aDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAuc21hbGwtdGV4dHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiB9XHJcbiBpbnB1dHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICAmOmZvY3Vze1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgb3V0bGluZTogMDtcclxuICB9XHJcbiB9XHJcbn1cclxuLmluZm8tcGFydHtcclxuICBtYXgtaGVpZ2h0OiA1MnZoO1xyXG4gIG1pbi1oZWlnaHQ6IDUydmg7XHJcbiAgLmRlc2NyaXB0aW9ue1xyXG4gICAgY29sb3I6ICMwYzU0NjA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFlY2YxO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYmVlNWViO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICB9XHJcbn1cclxuLnNlYXJjaHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xyXG59XHJcbmlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xyXG4gICY6Zm9jdXN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo5OTJweCl7XHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICAudXBwZXItcm93IHtcclxuICAgICAgLnNoaXAtdGV4dCB7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH19XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 505:
/*!*******************************************************************************!*\
  !*** ./src/app/features/shared/modals/header-modal/header-modal.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderModalComponent: () => (/* binding */ HeaderModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

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

/***/ 9194:
/*!**************************************************!*\
  !*** ./src/app/features/shared/shared.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 6807);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 5847);
/* harmony import */ var _components_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/topbar/topbar.component */ 1037);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var _modals_header_modal_header_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/header-modal/header-modal.component */ 505);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _components_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/custom-pagination/custom-pagination.component */ 2215);
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/element/bundle */ 493);
/* harmony import */ var src_app_pipes_tag_product_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipes/tag-product.pipe */ 3098);
/* harmony import */ var src_app_pipes_tag_category_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/tag-category.pipe */ 123);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);













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

/***/ 1333:
/*!********************************************!*\
  !*** ./src/app/pipes/home-product.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeProductPipe: () => (/* binding */ HomeProductPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

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

/***/ 8637:
/*!************************************!*\
  !*** ./src/app/pipes/safe.pipe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafePipe: () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);


class SafePipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  static #_ = this.ɵfac = function SafePipe_Factory(t) {
    return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "safe",
    type: SafePipe,
    pure: true
  });
}

/***/ }),

/***/ 123:
/*!********************************************!*\
  !*** ./src/app/pipes/tag-category.pipe.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TagCategoryPipe: () => (/* binding */ TagCategoryPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class TagCategoryPipe {
  transform(products = [], tagId = null) {
    try {
      let categoryArr = [];
      if (products.length && tagId) {
        for (const item of products) {
          if (item.productWithTagMap.some(y => y.tagId == tagId)) {
            if (!categoryArr.some(y => y.id == item.categoryId)) {
              categoryArr.push(item.productWithCategory);
            }
          }
        }
      }
      return categoryArr;
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

/***/ 3098:
/*!*******************************************!*\
  !*** ./src/app/pipes/tag-product.pipe.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TagProductPipe: () => (/* binding */ TagProductPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class TagProductPipe {
  transform(products = [], tagId = null) {
    try {
      if (products.length && tagId) {
        return products.filter(x => {
          if (x.productWithTagMap.some(y => y.tagId == tagId)) {
            return x;
          }
        });
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

/***/ 6868:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CartService: () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/services */ 2589);



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

/***/ 3871:
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonService: () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/services */ 2589);



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

/***/ 2083:
/*!*******************************************!*\
  !*** ./src/app/services/state.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ALL_DATA: () => (/* binding */ ALL_DATA),
/* harmony export */   StateService: () => (/* binding */ StateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9452);







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

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/// <reference types="@angular/localize" />


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1643), __webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map