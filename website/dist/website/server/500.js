"use strict";
exports.id = 500;
exports.ids = [500];
exports.modules = {

/***/ 58353:
/*!***************************************************!*\
  !*** ./src/app/features/brand/brand.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandComponent: () => (/* binding */ BrandComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 61504);


class BrandComponent {
  static #_ = this.ɵfac = function BrandComponent_Factory(t) {
    return new (t || BrandComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BrandComponent,
    selectors: [["app-brand"]],
    decls: 1,
    vars: 0,
    template: function BrandComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 28500:
/*!************************************************!*\
  !*** ./src/app/features/brand/brand.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandModule: () => (/* binding */ BrandModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _brand_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brand.component */ 58353);
/* harmony import */ var _components_brand_catalogue_brand_catalogue_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/brand-catalogue/brand-catalogue.component */ 5832);
/* harmony import */ var _components_brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/brand-list/brand-list.component */ 6462);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 53020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37100);








const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'brand-list'
}, {
  path: 'brand-list',
  component: _components_brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_2__.BrandListComponent
}, {
  path: 'brand-catalogue',
  component: _components_brand_catalogue_brand_catalogue_component__WEBPACK_IMPORTED_MODULE_1__.BrandCatalogueComponent
}];
class BrandModule {
  static #_ = this.ɵfac = function BrandModule_Factory(t) {
    return new (t || BrandModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: BrandModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BrandModule, {
    declarations: [_brand_component__WEBPACK_IMPORTED_MODULE_0__.BrandComponent, _components_brand_catalogue_brand_catalogue_component__WEBPACK_IMPORTED_MODULE_1__.BrandCatalogueComponent, _components_brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_2__.BrandListComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 5832:
/*!****************************************************************************************!*\
  !*** ./src/app/features/brand/components/brand-catalogue/brand-catalogue.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandCatalogueComponent: () => (/* binding */ BrandCatalogueComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _shared_components_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/custom-pagination/custom-pagination.component */ 46200);




function BrandCatalogueComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "There are no products.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function BrandCatalogueComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "select", 20)(4, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Best Seller");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Relevance");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Name,A to Z");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Name,Z to A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Price,Low to high");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Price,High to low");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 22)(17, "select", 23)(18, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "36");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "38");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "40");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Show all");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
}
function BrandCatalogueComponent_div_23_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 31)(5, "div", 32)(6, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", p_r1 == null ? null : p_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1 == null ? null : p_r1.catName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 4, p_r1 == null ? null : p_r1.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](p_r1 == null ? null : p_r1.name);
  }
}
function BrandCatalogueComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5)(1, "div", 24)(2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BrandCatalogueComponent_div_23_div_3_Template, 13, 6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.products);
  }
}
function BrandCatalogueComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 36)(1, "app-custom-pagination", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("pageChange", function BrandCatalogueComponent_div_24_Template_app_custom_pagination_pageChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.page, $event) || (ctx_r1.page = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    })("pageSizeChange", function BrandCatalogueComponent_div_24_Template_app_custom_pagination_pageSizeChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.pageSize, $event) || (ctx_r1.pageSize = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    })("collectionChange", function BrandCatalogueComponent_div_24_Template_app_custom_pagination_collectionChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r1.collection, $event) || (ctx_r1.collection = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("myOutput", function BrandCatalogueComponent_div_24_Template_app_custom_pagination_myOutput_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.onChangePage(ctx_r1.page));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("page", ctx_r1.page)("pageSize", ctx_r1.pageSize)("collection", ctx_r1.collection);
  }
}
class BrandCatalogueComponent {
  constructor(router, activatedRoute) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.page = 1;
    this.pageSize = 10;
    this.collection = 0;
    this.column = 'createdAt';
    this.direction = -1;
    this.brandName = '';
    this.products = [{
      name: 'Product 1',
      img: '../../../../../assets/products/bag-1.jpg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 2',
      img: '../../../../../assets/products/bag-2.jpg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 3',
      img: '../../../../../assets/products/bag-3.jpg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 4',
      img: '../../../../../assets/products/bag-4.jpg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 5',
      img: '../../../../../assets/products/bag-1.jpg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 6',
      img: '../../../../../assets/products/bag-2.jpg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 7',
      img: '../../../../../assets/products/bag-3.jpg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 8',
      img: '../../../../../assets/products/bag-4.jpg',
      catName: 'Blouses',
      price: 11.5
    }];
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(param => {
      this.brandName = param.brand;
    });
  }
  onChangePage(pageNo) {
    if (pageNo > 0) {
      this.page = pageNo;
    }
  }
  getAll() {}
  navigateTo(path) {
    this.router.navigate([path]);
  }
  static #_ = this.ɵfac = function BrandCatalogueComponent_Factory(t) {
    return new (t || BrandCatalogueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: BrandCatalogueComponent,
    selectors: [["app-brand-catalogue"]],
    decls: 25,
    vars: 6,
    consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-11"], [1, "py-3", "text-color-primary", "pointer"], [3, "click"], [1, "col-11", "py-4"], [1, "pb-4"], [1, "col-11", "pb-4"], [1, "row", "justify-content-between"], [1, "col-12", "col-md-8", "col-lg-8"], [1, "col-12", "col-md-2", "col-lg-2", "d-flex", "justify-content-end"], [1, "sort-select"], ["class", "col-11 p-3 background-solid", 4, "ngIf"], ["class", "col-11 d-flex justify-content-end pb-4", 4, "ngIf"], ["class", "col-11 py-4", 4, "ngIf"], ["class", "col-11 d-flex justify-content-center py-3", 4, "ngIf"], [1, "col-11", "p-3", "background-solid"], [1, "col-11", "d-flex", "justify-content-end", "pb-4"], [1, "justify-content-end", "d-flex"], [1, "sort", "w-50", "me-1"], [1, "sort-select", "w-100", "h-100"], ["value", ""], [1, "size", "w-25"], [1, "size-select", "w-100"], [1, "col-12", "product"], [1, "row", "product-row"], ["class", "col-6 col-md-4 col-lg-3 p-2 product-column", 4, "ngFor", "ngForOf"], [1, "col-6", "col-md-4", "col-lg-3", "p-2", "product-column"], [1, "card", "border-0"], [1, "img-box"], [1, "img-fluid", 3, "src"], [1, "text-box", "p-3"], [1, "d-flex", "justify-content-between"], [1, "cat-name"], [1, "fw-bold", "prod-price"], [1, "prod-name"], [1, "col-11", "d-flex", "justify-content-center", "py-3"], [3, "pageChange", "pageSizeChange", "collectionChange", "myOutput", "page", "pageSize", "collection"]],
    template: function BrandCatalogueComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BrandCatalogueComponent_Template_span_click_4_listener() {
          return ctx.navigateTo("/");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BrandCatalogueComponent_Template_span_click_7_listener() {
          return ctx.navigateTo("/brand");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5)(11, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7)(14, "div", 8)(15, "div", 9)(16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Lorem ipsum dolor sit amet consectetur adipiscing elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10)(19, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "More");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, BrandCatalogueComponent_div_21_Template, 3, 0, "div", 12)(22, BrandCatalogueComponent_div_22_Template, 26, 0, "div", 13)(23, BrandCatalogueComponent_div_23_Template, 4, 1, "div", 14)(24, BrandCatalogueComponent_div_24_Template, 2, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" / ", ctx.brandName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("List of products by brand ", ctx.brandName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.products.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.products.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.products.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.products.length > 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_components_custom_pagination_custom_pagination_component__WEBPACK_IMPORTED_MODULE_0__.CustomPaginationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe],
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.sort-select[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  padding: 0.5rem 1.2rem;\n  border: none;\n}\n\n.size-select[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  padding: 0.8rem;\n  border: none;\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  transition: transform 0.5s;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.card[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  height: 90%;\n}\n.card[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n  height: 10%;\n}\n\n.background-solid[_ngcontent-%COMP%] {\n  background-color: #ffebdc;\n}\n.background-solid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #85502b;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYnJhbmQvY29tcG9uZW50cy9icmFuZC1jYXRhbG9ndWUvYnJhbmQtY2F0YWxvZ3VlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQUU7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBR0o7O0FBQUk7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaURBQUE7QUFHTjtBQURJO0VBQ0UsV0FBQTtBQUdOO0FBREk7RUFDRSxXQUFBO0FBR047O0FBQUU7RUFDRSx5QkFBQTtBQUdKO0FBRkk7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFJTiIsInNvdXJjZXNDb250ZW50IjpbIip7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG4uc29ydC1zZWxlY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgLnNpemUtc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgIHBhZGRpbmc6IDAuOHJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgLmNhcmQge1xuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcbiAgICB9XG4gICAgLmltZy1ib3gge1xuICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgfVxuICAgIC50ZXh0LWJveCB7XG4gICAgICBoZWlnaHQ6IDEwJTtcbiAgICB9XG4gIH1cbiAgLmJhY2tncm91bmQtc29saWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmViZGM7XG4gICAgcCB7XG4gICAgICBjb2xvcjogIzg1NTAyYjtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgfVxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6462:
/*!******************************************************************************!*\
  !*** ./src/app/features/brand/components/brand-list/brand-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandListComponent: () => (/* binding */ BrandListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94556);



const _forTrack0 = ($index, $item) => $item.serial;
function BrandListComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandListComponent_For_12_Template_p_click_0_listener() {
      const s_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.scrollTo(s_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r2 + " " + "/", " ");
  }
}
function BrandListComponent_For_14_p_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandListComponent_For_14_p_5_Template_p_click_0_listener() {
      const c1_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.navigateTo("/brand/brand-catalogue", c1_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c1_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c1_r5, " ");
  }
}
function BrandListComponent_For_14_p_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandListComponent_For_14_p_7_Template_p_click_0_listener() {
      const c2_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.navigateTo("/brand/brand-catalogue", c2_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c2_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c2_r7, " ");
  }
}
function BrandListComponent_For_14_p_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandListComponent_For_14_p_9_Template_p_click_0_listener() {
      const c3_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.navigateTo("/brand/brand-catalogue", c3_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c3_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c3_r9, " ");
  }
}
function BrandListComponent_For_14_p_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandListComponent_For_14_p_11_Template_p_click_0_listener() {
      const c4_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.navigateTo("/brand/brand-catalogue", c4_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c4_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", c4_r11, " ");
  }
}
function BrandListComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9)(1, "div", 11)(2, "div", 12)(3, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BrandListComponent_For_14_p_5_Template, 2, 1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BrandListComponent_For_14_p_7_Template, 2, 1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BrandListComponent_For_14_p_9_Template, 2, 1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BrandListComponent_For_14_p_11_Template, 2, 1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const b_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", b_r12.serial);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](b_r12.serial);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", b_r12.brandNameCol1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", b_r12.brandNameCol2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", b_r12 == null ? null : b_r12.brandNameCol3 == null ? null : b_r12.brandNameCol3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", b_r12 == null ? null : b_r12.brandNameCol4 == null ? null : b_r12.brandNameCol4.name);
  }
}
class BrandListComponent {
  constructor(router) {
    this.router = router;
    this.brands = [{
      serial: '0-9',
      brandNameCol1: {
        name: ['321']
      },
      brandNameCol2: {
        name: ['43242']
      },
      brandNameCol3: {
        name: []
      },
      brandNameCol4: {
        name: []
      }
    }, {
      serial: 'A',
      brandNameCol1: {
        name: ['Ankos', 'Ankos']
      },
      brandNameCol2: {
        name: ['Antara', 'Apple']
      },
      brandNameCol3: {
        name: ['Apple', 'Apple']
      },
      brandNameCol4: {
        name: ['Appolo', 'Apson']
      }
    }, {
      serial: 'B',
      brandNameCol1: {
        name: ['Bower']
      },
      brandNameCol2: {
        name: ['Bowy']
      },
      brandNameCol3: {
        name: ['Breed']
      },
      brandNameCol4: {
        name: []
      }
    }, {
      serial: 'C',
      brandNameCol1: {
        name: ['Cuter']
      },
      brandNameCol2: {
        name: []
      },
      brandNameCol3: {
        name: []
      },
      brandNameCol4: {
        name: []
      }
    }, {
      serial: 'D',
      brandNameCol1: {
        name: ['Dester']
      },
      brandNameCol2: {
        name: ['Drawback']
      },
      brandNameCol3: {
        name: []
      },
      brandNameCol4: {
        name: []
      }
    }, {
      serial: 'F',
      brandNameCol1: {
        name: ['Flek']
      },
      brandNameCol2: {
        name: ['Flyer']
      },
      brandNameCol3: {
        name: []
      },
      brandNameCol4: {
        name: []
      }
    }, {
      serial: 'G',
      brandNameCol1: {
        name: ['Garden']
      },
      brandNameCol2: {
        name: ['Gitter']
      },
      brandNameCol3: {
        name: ['Glek']
      },
      brandNameCol4: {
        name: []
      }
    }, {
      serial: 'H',
      brandNameCol1: {
        name: ['Hamak']
      },
      brandNameCol2: {
        name: ['Hoho']
      },
      brandNameCol3: {
        name: []
      },
      brandNameCol4: {
        name: []
      }
    }, {
      serial: 'M',
      brandNameCol1: {
        name: ['Master']
      },
      brandNameCol2: {
        name: []
      },
      brandNameCol3: {
        name: []
      },
      brandNameCol4: {
        name: []
      }
    }, {
      serial: 'P',
      brandNameCol1: {
        name: ['Pre']
      },
      brandNameCol2: {
        name: []
      },
      brandNameCol3: {
        name: []
      },
      brandNameCol4: {
        name: []
      }
    }, {
      serial: 'S',
      brandNameCol1: {
        name: ['Sample']
      },
      brandNameCol2: {
        name: ['Sonda']
      },
      brandNameCol3: {
        name: []
      },
      brandNameCol4: {
        name: []
      }
    }, {
      serial: 'T',
      brandNameCol1: {
        name: ['Tools']
      },
      brandNameCol2: {
        name: []
      },
      brandNameCol3: {
        name: []
      },
      brandNameCol4: {
        name: []
      }
    }, {
      serial: 'Y',
      brandNameCol1: {
        name: ['Yetu']
      },
      brandNameCol2: {
        name: ['Ymlal']
      },
      brandNameCol3: {
        name: []
      },
      brandNameCol4: {
        name: []
      }
    }, {
      serial: 'Z',
      brandNameCol1: {
        name: ['Zeto']
      },
      brandNameCol2: {
        name: []
      },
      brandNameCol3: {
        name: []
      },
      brandNameCol4: {
        name: []
      }
    }];
    this.serials = this.brands.map(x => x.serial);
  }
  navigateTo(path, brand) {
    this.router.navigate([path], {
      queryParams: {
        brand: brand
      }
    });
  }
  scrollTo(item) {
    let ele = document.getElementById(item);
    ele?.scrollIntoView({
      behavior: 'smooth',
      inline: 'nearest',
      block: 'start'
    });
  }
  static #_ = this.ɵfac = function BrandListComponent_Factory(t) {
    return new (t || BrandListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: BrandListComponent,
    selectors: [["app-brand-list"]],
    decls: 15,
    vars: 0,
    consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-11"], [1, "py-3", "text-color-primary", "pointer"], [3, "click"], [1, "col-11", "pt-5"], [1, "pb-4"], [1, "col-11", "py-3", "d-flex", "border-bottom"], [1, "px-2", "pointer"], [1, "col-11", "py-3", "border-top"], [1, "px-2", "pointer", 3, "click"], [1, "row"], [1, "col-3"], [3, "id"], ["class", "pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-3", "d-flex", "flex-column", "justify-content-end"], [1, "pointer", 3, "click"]],
    template: function BrandListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BrandListComponent_Template_span_click_4_listener() {
          return ctx.navigateTo("/", null);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " / Brand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5)(8, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Brands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](11, BrandListComponent_For_12_Template, 2, 1, "p", 8, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](13, BrandListComponent_For_14_Template, 12, 6, "div", 9, _forTrack0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.serials);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.brands);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYnJhbmQvY29tcG9uZW50cy9icmFuZC1saXN0L2JyYW5kLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiKntcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ })

};
;
//# sourceMappingURL=500.js.map