"use strict";
exports.id = 520;
exports.ids = [520];
exports.modules = {

/***/ 45626:
/*!******************************************************************************************!*\
  !*** ./src/app/features/product/components/product-compare/product-compare.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductCompareComponent: () => (/* binding */ ProductCompareComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94556);


function ProductCompareComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "There is no products to compare.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function ProductCompareComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Remove all products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
}
function ProductCompareComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add to cart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, p_r1.price));
  }
}
function ProductCompareComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductCompareComponent_div_9_div_2_Template, 11, 5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.products);
  }
}
function ProductCompareComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22)(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No features to compare. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class ProductCompareComponent {
  constructor() {
    this.products = [{
      name: 'Product 1',
      img: '../../../../../assets/products/chair.jpg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 2',
      img: '../../../../../assets/products/bag-1.jpg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 3',
      img: '../../../../../assets/products/bag-2.jpg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 4',
      img: '../../../../../assets/products/bag-3.jpg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 5',
      img: '../../../../../assets/products/bag-4.jpg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 6',
      img: '../../../../../assets/products/bag-5.jpg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 7',
      img: '../../../../../assets/products/printer.jpg',
      catName: 'Blouses',
      price: 11.5
    }, {
      name: 'Product 8',
      img: '../../../../../assets/products/chair.jpg',
      catName: 'Blouses',
      price: 11.5
    }];
  }
  static #_ = this.ɵfac = function ProductCompareComponent_Factory(t) {
    return new (t || ProductCompareComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProductCompareComponent,
    selectors: [["app-product-compare"]],
    decls: 11,
    vars: 4,
    consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-11", "py-4"], [1, "py-2"], [1, "col-11"], [1, "row"], ["class", "col-12 p-3 background-solid", 4, "ngIf"], ["class", "col-12 d-flex justify-content-end p-3 border-bottom", 4, "ngIf"], ["class", "col-12 p-3 border-bottom", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], [1, "col-12", "p-3", "background-solid"], [1, "col-12", "d-flex", "justify-content-end", "p-3", "border-bottom"], [1, "col-6", "text-end"], [1, "fa-regular", "fa-trash-can", "me-2", "pointer"], [1, "pointer"], [1, "col-12", "p-3", "border-bottom"], ["class", "col-12 col-sm-6 col-md-4 col-lg-3 d-flex flex-wrap p-2", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3", "d-flex", "flex-wrap", "p-2"], [1, "d-flex", "flex-column", "align-items-center", "py-3", "w-100"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "btn", "btn-dark", "p-2", "w-50"], [1, "fa-solid", "fa-bag-shopping", "me-2"], [1, "col-12"], ["type", "button", 1, "btn", "comp-btn", "p-3", "w-100"]],
    template: function ProductCompareComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Products compare");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4)(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductCompareComponent_div_7_Template, 3, 0, "div", 6)(8, ProductCompareComponent_div_8_Template, 6, 0, "div", 7)(9, ProductCompareComponent_div_9_Template, 3, 1, "div", 8)(10, ProductCompareComponent_div_10_Template, 3, 0, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length > 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CurrencyPipe],
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.background-solid[_ngcontent-%COMP%] {\n  background-color: #ffebdc;\n}\n.background-solid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #85502b;\n  font-weight: 300;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 55vh;\n  object-fit: cover;\n}\n\n.comp-btn[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n.comp-btn[_ngcontent-%COMP%]:hover {\n  background-color: #ececec;\n}\n\n@media (max-width: 767px) {\n  img[_ngcontent-%COMP%] {\n    height: 35vh;\n    object-fit: cover;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdC9jb21wb25lbnRzL3Byb2R1Y3QtY29tcGFyZS9wcm9kdWN0LWNvbXBhcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7QUFFRjtBQURFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBR0o7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFEQTtFQUNJLGdCQUFBO0FBSUo7QUFISTtFQUNJLHlCQUFBO0FBS1I7O0FBRkE7RUFDSTtJQUNJLFlBQUE7SUFDQSxpQkFBQTtFQUtOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uYmFja2dyb3VuZC1zb2xpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWJkYztcclxuICBwIHtcclxuICAgIGNvbG9yOiAjODU1MDJiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbn1cclxuaW1nIHtcclxuICBoZWlnaHQ6IDU1dmg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLmNvbXAtYnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAzNXZoO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 53970:
/*!******************************************************************************************!*\
  !*** ./src/app/features/product/components/product-details/product-details.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductDetailsComponent: () => (/* binding */ ProductDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/common.service */ 81390);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services */ 9460);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ 45761);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 60301);
/* harmony import */ var src_app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/wishlist.service */ 87956);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 46584);











function ProductDetailsComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 43)(1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductDetailsComponent_div_38_Template_img_click_1_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.handleVariant(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("img-border", (ctx_r2.currentVariant == null ? null : ctx_r2.currentVariant.variantImages[0] == null ? null : ctx_r2.currentVariant.variantImages[0].image) == (item_r2 == null ? null : item_r2.variantImages[0] == null ? null : item_r2.variantImages[0].image));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", item_r2 == null ? null : item_r2.variantImages[0] == null ? null : item_r2.variantImages[0].image, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function ProductDetailsComponent_div_43_ng_container_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 50);
  }
  if (rf & 2) {
    const val_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", val_r4);
  }
}
function ProductDetailsComponent_div_43_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ProductDetailsComponent_div_43_ng_container_2_div_4_Template, 1, 2, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r5 == null ? null : item_r5.value);
  }
}
function ProductDetailsComponent_div_43_ng_container_3_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const val_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", val_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", val_r6, " ");
  }
}
function ProductDetailsComponent_div_43_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 51)(4, "select", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ProductDetailsComponent_div_43_ng_container_3_option_5_Template, 2, 2, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Select ", item_r5 == null ? null : item_r5.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r5 == null ? null : item_r5.value);
  }
}
function ProductDetailsComponent_div_43_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function ProductDetailsComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](1, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductDetailsComponent_div_43_ng_container_2_Template, 5, 1, "ng-container", 47)(3, ProductDetailsComponent_div_43_ng_container_3_Template, 6, 2, "ng-container", 47)(4, ProductDetailsComponent_div_43_ng_container_4_Template, 1, 0, "ng-container", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", item_r5 == null ? null : item_r5.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "color");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", "number");
  }
}
function ProductDetailsComponent_p_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ProductDetailsComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 56)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Reference demo_6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 57)(4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Brand");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function ProductDetailsComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 59)(1, "div", 60)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "No reviews");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 61)(5, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Write review ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
class ProductDetailsComponent {
  constructor(router, commonService, spinnerService, cartService, storageService, toasterService, wishlistService) {
    this.router = router;
    this.commonService = commonService;
    this.spinnerService = spinnerService;
    this.cartService = cartService;
    this.storageService = storageService;
    this.toasterService = toasterService;
    this.wishlistService = wishlistService;
    this.actRoute = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute);
    this.qty = 1;
    this.tabActive = '';
    this.products = null;
    this.attrArr = [];
    this.currentVariant = null;
    this.variants = [];
    this.user = this.storageService.get('Customer');
  }
  setTabActive(key) {
    this.tabActive = key;
  }
  navigateTo(path) {
    this.router.navigate([path]);
  }
  ngOnInit() {
    this.actRoute.queryParams.subscribe(params => {
      if (params?.id) {
        console.log('params-id', params);
        this.products = this.commonService.allData.products.find(x => x.id == Number(params.id));
        console.log("this.products", this.products);
        this.variants = this.products.productWithVariants;
        this.currentVariant = this.products.productWithVariants[0];
        this.attrArr = [];
        for (const item of this.currentVariant.variantWithAttrVariantMap) {
          this.attrArr.push({
            name: item.AttrVariantMapWithAttributes.name,
            type: item.AttrVariantMapWithAttributes.type,
            value: [item.value],
            selectedValue: item.value ? item.value : null
          });
        }
        // for (const [i, item] of this.products.productWithVariants.entries()) {
        //   for (const varMap of item.variantWithAttrVariantMap) {
        //     let index = this.attrArr.findIndex(
        //       (x) => x.name == varMap.AttrVariantMapWithAttributes.name
        //     );
        //     if (index == -1) {
        //       this.attrArr.push({
        //         name: varMap.AttrVariantMapWithAttributes.name,
        //         type: varMap.AttrVariantMapWithAttributes.type,
        //         value: [varMap.value],
        //         selectedValue: i == 0 ? varMap.value : null,
        //       });
        //     } else {
        //       this.attrArr[index].value.push(varMap.value);
        //       this.attrArr[index].value = [
        //         ...new Set(this.attrArr[index].value),
        //       ];
        //     }
        //   }
        // }
        // this.currentVariant = this.products.productWithVariants.filter(
        //   (x) => x.id === this.currentVariant.id
        // )[0];
      }
    });
  }
  handleVariant(data) {
    this.currentVariant = data;
    this.attrArr = [];
    for (const item of data.variantWithAttrVariantMap) {
      this.attrArr.push({
        name: item.AttrVariantMapWithAttributes.name,
        type: item.AttrVariantMapWithAttributes.type,
        value: [item.value],
        selectedValue: item.value ? item.value : null
      });
    }
  }
  createCart() {
    try {
      if (!this.user) {
        this.toasterService.warning('Please login to add cart');
        return;
      }
      if (this.qty > this.currentVariant.qty) {
        this.qty = this.currentVariant.qty;
      }
      let payload = {
        qty: this.qty,
        variantId: this.currentVariant.id,
        customerId: this.user.id
      };
      this.cartService.create(payload).subscribe(success => {
        this.toasterService.success("Product added to cart!!");
      });
    } catch (error) {
      console.log("error", error);
    }
  }
  buyNow() {
    if (!this.user) {
      this.toasterService.warning('Please login to buy product');
      return;
    }
    if (this.qty > this.currentVariant.qty) {
      this.qty = this.currentVariant.qty;
    }
    let payload = {
      price: this.qty * this.currentVariant.price,
      qty: this.qty,
      variantId: this.currentVariant.id
    };
    sessionStorage.setItem("products", JSON.stringify([payload]));
    this.router.navigate(['/order/checkout'], {
      queryParams: {
        type: 'BUY'
      }
    });
  }
  addToWishlist() {
    if (!this.user) {
      this.toasterService.warning('Please login to add product to wishlist');
      return;
    }
    let payload = {
      variantId: this.currentVariant.id,
      customerId: this.user.id
    };
    this.wishlistService.create(payload).subscribe({
      next: success => {
        this.toasterService.success("Product added to wishlist!!");
      },
      error: err => {
        console.log('err', err);
      }
    });
  }
  static #_ = this.ɵfac = function ProductDetailsComponent_Factory(t) {
    return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_1__.SpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_wishlist_service__WEBPACK_IMPORTED_MODULE_3__.WishlistService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProductDetailsComponent,
    selectors: [["app-product-details"]],
    decls: 75,
    vars: 16,
    consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-11"], [1, "row"], [1, "col-12", "d-flex", "align-items-center", "justify-content-between"], [1, "row", "w-100", "justify-content-between"], [1, "col-12", "col-lg-11"], [1, "py-3", "text-color-primary", "pointer"], [3, "click"], [1, "col-4", "d-flex", "align-items-center", "justify-content-start", "justify-content-lg-end", "col-lg-1"], [1, "fa-solid", "fa-chevron-left", "me-2"], [1, "fa-solid", "fa-chevron-right"], [1, "col-11", "py-4"], [1, "row", "py-3"], [1, "col-12", "col-md-6", "col-lg-6"], ["alt", "product-image", 1, "img-fluid", "banner-img", 3, "src"], [1, "col-12", "col-md-6", "col-lg-6", "d-flex", "flex-column", "py-4", "align-items-center"], [1, "col-12", "pb-3"], [1, "text-center"], [1, "col-10", "variant-products", "border-top", "py-3"], ["class", "col-3 m-2 prod-cart", 3, "img-border", 4, "ngFor", "ngForOf"], [1, "col-10", "py-3", "border-top", "border-bottom"], [1, "mb-2"], [1, "row", "py-2", "justify-content-center"], ["class", "col-4 col-lg-3 d-flex flex-column align-items-center", 4, "ngFor", "ngForOf"], [1, "col-lg-2", "m-2", "d-flex", "input-div", "background-primary", "justify-content-center", "align-items-center"], ["type", "number", 1, "border-0", "w-100", "p-3", 3, "ngModelChange", "ngModel"], [1, "col-12", "col-lg-4", "m-2"], ["type", "button", 1, "btn", "btn-dark", "h-100", "py-2", 3, "click"], [1, "fa-solid", "fa-cart-shopping", "text-light", "me-2"], [1, "fa-solid", "fa-bag-shopping", "text-light", "me-2"], [1, "col-lg-2", "m-2", "p-3", "background-primary", "pointer", "d-flex", "justify-content-center", "align-items-center", 3, "click"], [1, "fa-regular", "fa-heart"], [1, "col-lg-2", "p-3", "m-2", "background-primary", "d-flex", "justify-content-center", "align-items-center"], [1, "fa-solid", "fa-code-compare"], [1, "tabs"], [3, "click", "ngClass"], ["class", "py-3", 4, "ngIf"], ["class", "d-flex justify-content-between align-items-center", 4, "ngIf"], ["class", "row justify-content-between", 4, "ngIf"], [1, "product-text"], [1, "col-12", "product"], [1, "row", "product-row"], [1, "col-3", "m-2", "prod-cart"], ["alt", "product", 1, "img-fluid", "variant-img", 3, "click", "src"], [1, "col-4", "col-lg-3", "d-flex", "flex-column", "align-items-center"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "d-flex", "justify-content-center"], ["class", "color m-2", 3, "background-color", 4, "ngFor", "ngForOf"], [1, "color", "m-2"], [1, "p-2", "w-75", "m-2", "d-flex", "input-div", "background-primary", "justify-content-center", "align-items-center"], [1, "w-100"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "py-3"], [1, "d-flex", "justify-content-between", "align-items-center"], [1, "d-flex", "justify-content-center", "align-items-center", "h-50"], ["width", "100", "height", "100", "src", "../../../../../assets/images/brand2.jpg", "alt", ""], [1, "row", "justify-content-between"], [1, "col-3"], [1, "col-2"], ["type", "button", 1, "btn", "btn-dark", "py-2"], [1, "fa-solid", "fa-pen-to-square", "me-1"]],
    template: function ProductDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "p", 7)(8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_span_click_8_listener() {
          return ctx.navigateTo("/");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Women");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Accessories");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Leather bag");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 9)(20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 10)(22, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 12)(24, "div", 13)(25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 16)(29, "div", 1)(30, "div", 17)(31, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "h2", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](35, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 19)(37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, ProductDetailsComponent_div_38_Template, 2, 3, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 21)(40, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, ProductDetailsComponent_div_43_Template, 5, 4, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 23)(45, "div", 25)(46, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function ProductDetailsComponent_Template_input_ngModelChange_46_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.qty, $event) || (ctx.qty = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 27)(48, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_48_listener() {
          return ctx.createCart();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Add to cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 27)(52, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_52_listener() {
          return ctx.buyNow();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Buy Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_div_click_55_listener() {
          return ctx.addToWishlist();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 12)(60, "div", 35)(61, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_span_click_61_listener() {
          return ctx.setTabActive("description");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_span_click_63_listener() {
          return ctx.setTabActive("product");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Product Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_span_click_65_listener() {
          return ctx.setTabActive("review");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, " Reviews(0)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](67, ProductDetailsComponent_p_67_Template, 2, 0, "p", 37)(68, ProductDetailsComponent_div_68_Template, 7, 0, "div", 38)(69, ProductDetailsComponent_div_69_Template, 8, 0, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 12)(71, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "8 other products in the same category:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx.products == null ? null : ctx.products.bannerImage, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.products == null ? null : ctx.products.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](35, 13, ctx.currentVariant == null ? null : ctx.currentVariant.price, "INR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.variants);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.products == null ? null : ctx.products.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.attrArr);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.qty);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.tabActive == "description" ? "active" : "inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.tabActive == "product" ? "active" : "inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.tabActive == "review" ? "active" : "inactive");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tabActive == "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tabActive == "product");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tabActive == "review");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CurrencyPipe],
    styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.input-div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.input-div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  outline: none;\n  border: 0;\n}\n\n.background-primary[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.btn-dark[_ngcontent-%COMP%], .btn-light[_ngcontent-%COMP%] {\n  width: 100% !important;\n  padding: 0.5rem !important;\n  border-radius: 0 !important;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: #e3e3e3;\n  border: 0;\n}\ninput[_ngcontent-%COMP%]:focus {\n  background-color: #e3e3e3;\n}\n\n.inactive[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  padding: 0.5rem;\n  color: #b2b0b0;\n  cursor: pointer;\n  display: inline-block;\n}\n.inactive[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n.inactive[_ngcontent-%COMP%]:hover::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 2.5px;\n  background-color: #000;\n  margin: 12px auto;\n}\n\n.active[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  padding: 0.5rem;\n  color: #000;\n  cursor: pointer;\n  display: inline-block;\n}\n.active[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 2.5px;\n  background-color: #000;\n  margin: 12px auto;\n}\n\n.product-text[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n\n.product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  min-width: 100%;\n  max-width: 100%;\n  overflow-x: scroll;\n  display: flex;\n  transition: ease-out 0.3s;\n  flex-wrap: nowrap;\n}\n.product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .product-column[_ngcontent-%COMP%] {\n  padding: 0 0.8rem;\n}\n.product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n  transition: transform 0.5s;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  height: 90%;\n}\n.product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n  height: 10%;\n}\n\n.product-row[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n@media (max-width: 767px) {\n  .inactive[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .section-heading[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .product[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .product[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .product-column[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n    padding: 0.25rem !important;\n  }\n  .product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .product-column[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .cat-name[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n  .product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .product-column[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .cat-price[_ngcontent-%COMP%] {\n    font-size: 0.4rem;\n  }\n  .product[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%]   .product-column[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .prod-name[_ngcontent-%COMP%] {\n    width: 50%;\n    line-height: 1;\n    font-size: 0.9rem;\n  }\n  .product[_ngcontent-%COMP%]   .arrow-btns[_ngcontent-%COMP%]   .right-btn[_ngcontent-%COMP%] {\n    left: 0;\n  }\n  .banner-img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    min-width: 100%;\n    object-fit: cover;\n    min-height: 50vh;\n    max-height: 50vh;\n  }\n}\nselect[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 0;\n}\n\n.color[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n}\n\n@media (min-width: 768px) {\n  .banner-img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    min-width: 100%;\n    object-fit: cover;\n    min-height: 90vh;\n    max-height: 90vh;\n  }\n}\n.variant-img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 130px;\n}\n\n.img-border[_ngcontent-%COMP%] {\n  border: 2px solid #000;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdC9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUlFO0VBQ0UsNkJBQUE7QUFESjtBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQURKOztBQUlBO0VBQ0UseUJBQUE7QUFERjs7QUFHQTs7RUFFRSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQUU7RUFDRSx5QkFBQTtBQUVKOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQUVGO0FBQUU7RUFDRSxXQUFBO0FBRUo7QUFESTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBR047O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBRUY7QUFBRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUVKO0FBREk7RUFDRSxpQkFBQTtBQUdOO0FBQU07RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaURBQUE7QUFFUjtBQUFNO0VBQ0UsV0FBQTtBQUVSO0FBQU07RUFDRSxXQUFBO0FBRVI7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBRUE7RUFDSTtJQUNJLGlCQUFBO0VBQ047RUFDQTtJQUNFLGlCQUFBO0VBQ0Y7RUFDQTtJQUNFLFVBQUE7RUFDRjtFQUFFO0lBQ0UsZUFBQTtFQUVKO0VBQUU7SUFDRSxhQUFBO0VBRUo7RUFBTTtJQUNFLDJCQUFBO0VBRVI7RUFEUTtJQUNFLGtCQUFBO0VBR1Y7RUFEUTtJQUNFLGlCQUFBO0VBR1Y7RUFEUTtJQUNFLFVBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUFHVjtFQUdJO0lBQ0UsT0FBQTtFQUROO0VBS0E7SUFDRSxlQUFBO0lBQ0EsZUFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQUhGO0FBQ0Y7QUFLQTtFQUNFLDZCQUFBO0VBQ0EsU0FBQTtBQUhGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFGRjs7QUFJQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUFERjtBQUNGO0FBR0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQURGOztBQUdBO0VBQ0Usc0JBQUE7QUFBRiIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaW5wdXQtZGl2IHtcclxuLy8gICB3aWR0aDogMjAlO1xyXG4gIGlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbn1cclxuLmJhY2tncm91bmQtcHJpbWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxufVxyXG4uYnRuLWRhcmssXHJcbi5idG4tbGlnaHQge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59XHJcbmlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xyXG4gIGJvcmRlcjogMDtcclxuICAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XHJcbiAgfVxyXG59XHJcbi5pbmFjdGl2ZSB7XHJcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICBjb2xvcjogI2IyYjBiMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMi41cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgIG1hcmdpbjogMTJweCBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uYWN0aXZlIHtcclxuICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgcGFkZGluZzogMC41cmVtO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyLjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW46IDEycHggYXV0bztcclxuICB9XHJcbn1cclxuLnByb2R1Y3QtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG59XHJcbi5wcm9kdWN0IHtcclxuICAucHJvZHVjdC1yb3cge1xyXG4gICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRyYW5zaXRpb246IGVhc2Utb3V0IDAuM3M7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIC5wcm9kdWN0LWNvbHVtbiB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMC44cmVtO1xyXG4gICAgfVxyXG4gICAgLmNhcmQge1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmltZy1ib3gge1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0LWJveCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLnByb2R1Y3Qtcm93Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5pbmFjdGl2ZXtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICAuc2VjdGlvbi1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIH1cclxuICAucHJvZHVjdCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLnNlY3Rpb24taGVhZGluZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIC5wcm9kdWN0LXJvdyB7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAgIC5wcm9kdWN0LWNvbHVtbiB7XHJcbiAgICAgICAgLnRleHQtYm94IHtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgIC5jYXQtbmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jYXQtcHJpY2Uge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNHJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wcm9kLW5hbWUge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYXJyb3ctYnRucyB7XHJcbiAgICAgIC5yaWdodC1idG4ge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmJhbm5lci1pbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xyXG4gIH1cclxufVxyXG5zZWxlY3R7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG59XHJcbi5jb2xvciB7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgLmJhbm5lci1pbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDkwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MHZoO1xyXG4gIH1cclxufVxyXG4udmFyaWFudC1pbWd7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMTMwcHg7XHJcbn1cclxuLmltZy1ib3JkZXJ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 84576:
/*!************************************************************************************!*\
  !*** ./src/app/features/product/components/product-list/product-list.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductListComponent: () => (/* binding */ ProductListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-slider/ngx-slider */ 80221);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 46584);





function ProductListComponent_div_147_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_147_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.navigateTo("product/product-details"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 70)(2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 73)(5, "div", 74)(6, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 78)(14, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r3 == null ? null : p_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r3 == null ? null : p_r3.catName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 4, p_r3 == null ? null : p_r3.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](p_r3 == null ? null : p_r3.name);
  }
}
function ProductListComponent_p_150_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p")(1, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_p_150_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.pagination("sub"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function ProductListComponent_div_151_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_151_Template_p_click_1_listener() {
      const c_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.page = c_r6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r6);
  }
}
function ProductListComponent_p_152_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p")(1, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_p_152_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.pagination("add"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class ProductListComponent {
  constructor(router) {
    this.router = router;
    this.searchToggle = false;
    this.page = 1;
    this.pageSize = 8;
    this.collection = [];
    this.value = 0;
    this.highValue = 100;
    this.colors = [];
    this.largeProducts = [];
    this.options = {
      floor: 0,
      ceil: 100
    };
    this.products = [{
      name: 'Product 1',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#f5f5dc',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 2',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#f5f5dc',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 3',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#fff',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 4',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#fff',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 5',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#434a54',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 6',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#434a54',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 7',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#f39c11',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 8',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#f39c11',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 9',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#5d9cec',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 10',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#5d9cec',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 11',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#a0d468',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 12',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#a0d468',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 13',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#f1c40f',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 14',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#f1c40f',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 15',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#fccacd',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 16',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#fccacd',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 17',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#f5f5dc',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 18',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#fff',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 19',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#434a54',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 20',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#f39c11',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 21',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#5d9cec',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 22',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#a0d468',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 23',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#f1c40f',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }, {
      name: 'Product 24',
      img: '../../../../../assets/images/bridal-look.webp',
      catName: 'Blouses',
      price: 11.5,
      category: '',
      size: 'S',
      color: '#fccacd',
      compositions: '',
      style: '',
      property: '',
      brand: ''
    }];
  }
  navigateTo(path) {
    this.router.navigate([path]);
  }
  ngOnInit() {
    this.large();
    const paginationNumbers = this.calculatePagination(this.products.length, this.pageSize);
    this.collection.push(...paginationNumbers);
    this.colors = this.products.map(x => x.color);
    console.log('colorsssss', this.colors);
  }
  pagination(action) {
    if (action == 'sub') {
      if (this.page > 1) {
        this.page--;
        this.large();
      }
    } else this.page++;
    this.large();
  }
  large() {
    let offset = (this.page - 1) * this.pageSize;
    this.largeProducts = this.products.slice(offset, this.pageSize + offset);
  }
  calculatePagination(totalProducts, productsPerPage) {
    const pages = Math.ceil(totalProducts / productsPerPage);
    const paginationNumbers = [];
    for (let i = 1; i <= pages; i++) {
      paginationNumbers.push(i);
    }
    return paginationNumbers;
  }
  colorFilter(color) {
    console.log('color', color);
    this.largeProducts = this.products.filter(x => x.color == color);
  }
  static #_ = this.ɵfac = function ProductListComponent_Factory(t) {
    return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProductListComponent,
    selectors: [["app-product-list"]],
    decls: 153,
    vars: 9,
    consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-11"], [1, "row"], [1, "py-3", "text-color-primary"], [1, "pointer", 3, "click"], [1, "pointer"], [1, "col-11", "py-3"], [1, "col-12"], ["src", "../../../../../assets/products/shoes.jpg", "alt", "", 1, "img-fluid", "h-100", "w-100"], [1, "row", "py-5", 3, "ngClass"], [1, "col-12", "d-flex", "justify-content-between"], [1, "filter", 3, "click"], [1, "fa-solid", "fa-filter", "me-2"], [1, "justify-content-end", "d-flex"], [1, "sort", "w-50", "me-1"], [1, "sort-select", "w-100", "h-100"], ["value", ""], [1, "size", "w-25"], [1, "size-select", "w-100"], [1, "col-12", "py-4", 3, "ngClass"], [1, "row", "w-100"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3", "p-3"], [1, "mb-3", "fw-bold"], [1, "d-flex", "align-items-center"], ["type", "checkbox", "value", "", "id", "cat1", 1, "form-check-input", "me-2"], ["for", "cat1", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "cat2", 1, "form-check-input", "me-2"], ["for", "cat2", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "cat3", 1, "form-check-input", "me-2"], ["for", "cat3", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "cat4", 1, "form-check-input", "me-2"], ["for", "cat4", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "cat5", 1, "form-check-input", "me-2"], ["for", "cat5", 1, "form-check-label"], [1, "d-flex", "flex-wrap"], [1, "color", "color-1", 3, "click"], [1, "color", "color-2", 3, "click"], [1, "color", "color-3", 3, "click"], [1, "color", "color-4", 3, "click"], [1, "color", "color-5", 3, "click"], [1, "color", "color-6", 3, "click"], [1, "color", "color-7", 3, "click"], [1, "color", "color-8", 3, "click"], ["type", "checkbox", "value", "", "id", "cat6", 1, "form-check-input", "me-2"], ["for", "cat6", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "cat7", 1, "form-check-input", "me-2"], ["for", "cat7", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "cat8", 1, "form-check-input", "me-2"], ["for", "cat8", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "cat9", 1, "form-check-input", "me-2"], ["for", "cat9", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "cat10", 1, "form-check-input", "me-2"], ["for", "cat10", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "cat11", 1, "form-check-input", "me-2"], ["for", "cat11", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "cat12", 1, "form-check-input", "me-2"], ["for", "cat12", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "cat13", 1, "form-check-input", "me-2"], ["for", "cat13", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "cat14", 1, "form-check-input", "me-2"], ["for", "cat14", 1, "form-check-label"], [1, "custom-slider"], [3, "value", "highValue", "options"], [1, "row", "product-row"], ["class", "col-6 col-md-3 col-lg-3 p-3 pointer", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-3", "col-md-2", "col-lg-1", "align-items-center", "d-flex", "justify-content-between"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "col-6", "col-md-3", "col-lg-3", "p-3", "pointer", 3, "click"], [1, "card", "border-0"], [1, "img-box"], [1, "img-fluid", 3, "src"], [1, "text-box", "p-3"], [1, "d-flex", "justify-content-between"], [1, "cat-name"], [1, "fw-bold", "prod-price"], [1, "prod-name"], [1, "icons"], [1, "item"], [1, "fa-regular", "fa-heart"], [1, "fa-solid", "fa-code-compare"], [1, "fa-regular", "fa-eye"], [1, "fa-solid", "fa-angle-left", "pointer", 3, "click"], [1, "fa-solid", "fa-angle-right", "pointer", 3, "click"]],
    template: function ProductListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 2)(5, "p", 4)(6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_span_click_6_listener() {
          return ctx.navigateTo("/");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Women");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tops");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3)(15, "div", 7)(16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Tops");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3)(19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10)(22, "div", 11)(23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_div_click_23_listener() {
          return ctx.searchToggle = !ctx.searchToggle;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14)(27, "div", 15)(28, "select", 16)(29, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Best Seller");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Relevance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Name,A to Z");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Name,Z to A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Price,Low to high");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Price,High to low");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18)(42, "select", 19)(43, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "36");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "38");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "40");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Show all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 20)(52, "div", 21)(53, "div", 22)(54, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " T-shirts(14) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Tops(13) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 22)(65, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " S(12) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " M(10) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " L(12) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 22)(80, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 35)(83, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_div_click_83_listener() {
          return ctx.colorFilter("#f5f5dc");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_div_click_84_listener() {
          return ctx.colorFilter("#fff");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_div_click_85_listener() {
          return ctx.colorFilter("#434a54");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_div_click_86_listener() {
          return ctx.colorFilter("#f39c11");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_div_click_87_listener() {
          return ctx.colorFilter("#5d9cec");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_div_click_88_listener() {
          return ctx.colorFilter("#a0d468");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_div_click_89_listener() {
          return ctx.colorFilter("#f1c40f");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_Template_div_click_90_listener() {
          return ctx.colorFilter("#fccacd");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 22)(92, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Compositions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Cotton(1) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Viscose(2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 22)(103, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Styles");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "label", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Casual(2) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Dressy(1) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 22)(114, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "input", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Maxi Dress(1) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Short Dress(1) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " Short Sleeve(1) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 22)(129, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Brand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Ankos(13) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "label", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Antara(1) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 22)(140, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "ngx-slider", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 3)(145, "div", 8)(146, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, ProductListComponent_div_147_Template, 20, 6, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 1)(149, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](150, ProductListComponent_p_150_Template, 2, 0, "p", 67)(151, ProductListComponent_div_151_Template, 3, 1, "div", 68)(152, ProductListComponent_p_152_Template, 2, 0, "p", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.searchToggle ? "filter-row" : "filter-collapsed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.searchToggle ? "filters" : "filters-collapsed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("highValue", ctx.highValue)("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.largeProducts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.collection);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page < 3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_3__.SliderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe],
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.filter[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  padding: 0.5rem 1.2rem;\n}\n\n.sort-select[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  padding: 0.5rem 1.2rem;\n  border: none;\n}\n\n.size-select[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  padding: 0.8rem;\n  border: none;\n}\n\nselect[_ngcontent-%COMP%]:focus-visible {\n  outline: 0;\n}\n\n.background-primary[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.btn-dark[_ngcontent-%COMP%], .btn-light[_ngcontent-%COMP%] {\n  width: 100% !important;\n  padding: 0.5rem 0 !important;\n  border-radius: 0 !important;\n}\n\ninput[_ngcontent-%COMP%] {\n  background-color: #e3e3e3;\n  border: 0;\n}\ninput[_ngcontent-%COMP%]:focus {\n  background-color: #e3e3e3;\n}\n\n.product-row[_ngcontent-%COMP%] {\n  transition: ease-out 0.3s;\n}\n.product-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  position: relative;\n}\n.product-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n}\n.product-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .icons[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.product-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%] {\n  height: 90%;\n}\n.product-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n  height: 10%;\n}\n.product-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .cat-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #acaaa6;\n}\n.product-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%] {\n  opacity: 0;\n  position: absolute;\n  top: 5%;\n  right: 5%;\n}\n.product-row[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  border-radius: 50%;\n  margin-bottom: 0.5rem;\n}\n\n.filter[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.filters[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  transition: all 0.5s ease-in;\n  margin-top: 2rem;\n  clip-path: polygon(0 100%, 100% 100%, 100% 0, 0 0);\n}\n\n.filter-row[_ngcontent-%COMP%] {\n  height: auto;\n  transition: all 0.5s ease-in;\n  cursor: pointer;\n}\n\n.filters-collapsed[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n  transition: all 0.5s ease-in;\n  margin-top: 2rem;\n  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);\n}\n\n.filter-collapsed[_ngcontent-%COMP%] {\n  height: 142px;\n  transition: all 0.5s ease-in;\n  cursor: pointer;\n}\n\n.color[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  margin: 5px;\n}\n\n.color-1[_ngcontent-%COMP%] {\n  background-color: #f5f5dc;\n}\n\n.color-2[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.color-3[_ngcontent-%COMP%] {\n  background-color: #434a54;\n}\n\n.color-4[_ngcontent-%COMP%] {\n  background-color: #f39c11;\n}\n\n.color-5[_ngcontent-%COMP%] {\n  background-color: #5d9cec;\n}\n\n.color-6[_ngcontent-%COMP%] {\n  background-color: #a0d468;\n}\n\n.color-7[_ngcontent-%COMP%] {\n  background-color: #f1c40f;\n}\n\n.color-8[_ngcontent-%COMP%] {\n  background-color: #fccacd;\n}\n\n@media (max-width: 767px) {\n  .section-heading[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .product[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .product[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .product[_ngcontent-%COMP%]   .arrow-btns[_ngcontent-%COMP%]   .right-btn[_ngcontent-%COMP%] {\n    left: 0;\n  }\n  .filter-row[_ngcontent-%COMP%], .filter-collapsed[_ngcontent-%COMP%] {\n    font-size: 14px;\n    padding: 0;\n  }\n  .filter[_ngcontent-%COMP%] {\n    padding: 0.3rem 0.8rem;\n    display: flex;\n    align-items: center;\n  }\n  .product-row[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .product-row[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\n    padding: 0.25rem !important;\n  }\n  .product-row[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .cat-name[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    font-weight: 600;\n  }\n  .product-row[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .prod-price[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .product-row[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%]   .prod-name[_ngcontent-%COMP%] {\n    width: 50%;\n    line-height: 1;\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdC9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFHRjs7QUFEQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFJRjs7QUFGQTtFQUNFLFVBQUE7QUFLRjs7QUFIQTtFQUNFLHlCQUFBO0FBTUY7O0FBSkE7O0VBRUUsc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBT0Y7O0FBTEE7RUFDRSx5QkFBQTtFQUNBLFNBQUE7QUFRRjtBQVBFO0VBQ0UseUJBQUE7QUFTSjs7QUFOQTtFQUNFLHlCQUFBO0FBU0Y7QUFSRTtFQUNFLGtCQUFBO0FBVUo7QUFUSTtFQUNFLGlEQUFBO0FBV047QUFUSTtFQUNDLFVBQUE7QUFXTDtBQVRJO0VBQ0UsV0FBQTtBQVdOO0FBVEk7RUFDRSxXQUFBO0FBV047QUFWTTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtBQVlSO0FBVEk7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQVdOO0FBVk07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBWVI7O0FBTkE7RUFDRSxrQkFBQTtBQVNGOztBQU5BO0VBQ0UseUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0RBQUE7QUFTRjs7QUFOQTtFQUNFLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGVBQUE7QUFTRjs7QUFQQTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FBVUY7O0FBUEE7RUFDRSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBVUY7O0FBUEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFVRjs7QUFSQTtFQUNFLHlCQUFBO0FBV0Y7O0FBVEE7RUFDRSxzQkFBQTtBQVlGOztBQVZBO0VBQ0UseUJBQUE7QUFhRjs7QUFYQTtFQUNFLHlCQUFBO0FBY0Y7O0FBWkE7RUFDRSx5QkFBQTtBQWVGOztBQWJBO0VBQ0UseUJBQUE7QUFnQkY7O0FBZEE7RUFDRSx5QkFBQTtBQWlCRjs7QUFmQTtFQUNFLHlCQUFBO0FBa0JGOztBQWhCQTtFQUNFO0lBQ0UsaUJBQUE7RUFtQkY7RUFqQkE7SUFDRSxVQUFBO0VBbUJGO0VBbEJFO0lBQ0UsZUFBQTtFQW9CSjtFQWhCSTtJQUNFLE9BQUE7RUFrQk47RUFkQTtJQUNFLGVBQUE7SUFDQSxVQUFBO0VBZ0JGO0VBZEE7SUFDRSxzQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtFQWdCRjtFQWRBO0lBQ0UsVUFBQTtFQWdCRjtFQWZJO0lBQ0UsMkJBQUE7RUFpQk47RUFoQk07SUFDRSxrQkFBQTtJQUNBLGdCQUFBO0VBa0JSO0VBaEJNO0lBQ0UsaUJBQUE7RUFrQlI7RUFoQk07SUFDRSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VBa0JSO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uZmlsdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XHJcbn1cclxuLnNvcnQtc2VsZWN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbi5zaXplLXNlbGVjdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICBwYWRkaW5nOiAwLjhyZW07XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcbnNlbGVjdDpmb2N1cy12aXNpYmxlIHtcclxuICBvdXRsaW5lOiAwO1xyXG59XHJcbi5iYWNrZ3JvdW5kLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbn1cclxuLmJ0bi1kYXJrLFxyXG4uYnRuLWxpZ2h0IHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59XHJcbmlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlM2UzO1xyXG4gIGJvcmRlcjogMDtcclxuICAmOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2UzZTM7XHJcbiAgfVxyXG59XHJcbi5wcm9kdWN0LXJvdyB7XHJcbiAgdHJhbnNpdGlvbjogZWFzZS1vdXQgMC4zcztcclxuICAuY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDBweCA4cHggMjRweDtcclxuICAgIH1cclxuICAgICY6aG92ZXIgLmljb25ze1xyXG4gICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAuaW1nLWJveCB7XHJcbiAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgfVxyXG4gICAgLnRleHQtYm94IHtcclxuICAgICAgaGVpZ2h0OiAxMCU7XHJcbiAgICAgIC5jYXQtbmFtZXtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgICAgICBjb2xvcjogI2FjYWFhNjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmljb25ze1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNSU7XHJcbiAgICAgIHJpZ2h0OiA1JTtcclxuICAgICAgLml0ZW17XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5maWx0ZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4vL1xyXG4uZmlsdGVycyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xyXG4gIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMTAwJSwgMTAwJSAxMDAlLCAxMDAlIDAsIDAgMCk7XHJcbiAgLy8gY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDAsIDAgMCk7XHJcbn1cclxuLmZpbHRlci1yb3cge1xyXG4gIGhlaWdodDogYXV0bztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZmlsdGVycy1jb2xsYXBzZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbjtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAwLCAwIDApO1xyXG59XHJcblxyXG4uZmlsdGVyLWNvbGxhcHNlZCB7XHJcbiAgaGVpZ2h0OiAxNDJweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjVzIGVhc2UtaW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY29sb3Ige1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG4uY29sb3ItMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVkYztcclxufVxyXG4uY29sb3ItMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uY29sb3ItMyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzNGE1NDtcclxufVxyXG4uY29sb3ItNCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzOWMxMTtcclxufVxyXG4uY29sb3ItNSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkOWNlYztcclxufVxyXG4uY29sb3ItNiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwZDQ2ODtcclxufVxyXG4uY29sb3ItNyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxYzQwZjtcclxufVxyXG4uY29sb3ItOCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjY2FjZDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuc2VjdGlvbi1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIH1cclxuICAucHJvZHVjdCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgLnNlY3Rpb24taGVhZGluZyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuYXJyb3ctYnRucyB7XHJcbiAgICAgIC5yaWdodC1idG4ge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmZpbHRlci1yb3csLmZpbHRlci1jb2xsYXBzZWR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuZmlsdGVye1xyXG4gICAgcGFkZGluZzogMC4zcmVtIDAuOHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAucHJvZHVjdC1yb3cge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgICAgLnRleHQtYm94IHtcclxuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLmNhdC1uYW1lIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9kLXByaWNlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZC1uYW1lIHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 86989:
/*!*******************************************************!*\
  !*** ./src/app/features/product/product.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductComponent: () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 61504);


class ProductComponent {
  static #_ = this.ɵfac = function ProductComponent_Factory(t) {
    return new (t || ProductComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProductComponent,
    selectors: [["app-product"]],
    decls: 1,
    vars: 0,
    template: function ProductComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 33520:
/*!****************************************************!*\
  !*** ./src/app/features/product/product.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductModule: () => (/* binding */ ProductModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.component */ 86989);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/product-list/product-list.component */ 84576);
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/product-details/product-details.component */ 53970);
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-slider/ngx-slider */ 80221);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 46584);
/* harmony import */ var _components_product_compare_product_compare_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product-compare/product-compare.component */ 45626);
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/element/bundle */ 91421);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37100);











(0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_4__.register)();
const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'product-list'
}, {
  path: 'product-list',
  component: _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent
}, {
  path: 'product-details',
  component: _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__.ProductDetailsComponent
}, {
  path: 'product-compare',
  component: _components_product_compare_product_compare_component__WEBPACK_IMPORTED_MODULE_3__.ProductCompareComponent
}];
class ProductModule {
  static #_ = this.ɵfac = function ProductModule_Factory(t) {
    return new (t || ProductModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: ProductModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_7__.NgxSliderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProductModule, {
    declarations: [_product_component__WEBPACK_IMPORTED_MODULE_0__.ProductComponent, _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent, _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_2__.ProductDetailsComponent, _components_product_compare_product_compare_component__WEBPACK_IMPORTED_MODULE_3__.ProductCompareComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_7__.NgxSliderModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ }),

/***/ 87956:
/*!**********************************************!*\
  !*** ./src/app/services/wishlist.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WishlistService: () => (/* binding */ WishlistService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 47632);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/services */ 9460);



class WishlistService {
  constructor(http) {
    this.http = http;
    this.BASE_URL = 'wishlist';
  }
  getAll() {
    return this.http.get(this.BASE_URL);
  }
  create(payload) {
    return this.http.post(this.BASE_URL, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  update(id, payload) {
    return this.http.put(this.BASE_URL + '/' + id, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  delete(id) {
    return this.http.delete(this.BASE_URL + '/' + id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  getById(id) {
    return this.http.get(this.BASE_URL + '/' + id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  static #_ = this.ɵfac = function WishlistService_Factory(t) {
    return new (t || WishlistService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: WishlistService,
    factory: WishlistService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 72859:
/*!******************************************************!*\
  !*** ./node_modules/detect-it/dist/detect-it.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deviceType: () => (/* binding */ deviceType),
/* harmony export */   primaryInput: () => (/* binding */ primaryInput),
/* harmony export */   supportsPassiveEvents: () => (/* binding */ supportsPassiveEvents),
/* harmony export */   supportsPointerEvents: () => (/* binding */ supportsPointerEvents),
/* harmony export */   supportsTouchEvents: () => (/* binding */ supportsTouchEvents)
/* harmony export */ });
// so it doesn't throw if no window or matchMedia
var w = typeof window !== 'undefined' ? window : {
  screen: {},
  navigator: {}
};
var matchMedia = (w.matchMedia || function () {
  return {
    matches: false
  };
}).bind(w);
// passive events test
// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var passiveOptionAccessed = false;
var options = {
  get passive() {
    return passiveOptionAccessed = true;
  }
};
// have to set and remove a no-op listener instead of null
// (which was used previously), because Edge v15 throws an error
// when providing a null callback.
// https://github.com/rafgraph/detect-passive-events/pull/3
// eslint-disable-next-line @typescript-eslint/no-empty-function
var noop = function () {};
w.addEventListener && w.addEventListener('p', noop, options);
w.removeEventListener && w.removeEventListener('p', noop, false);
var supportsPassiveEvents = passiveOptionAccessed;
var supportsPointerEvents = ('PointerEvent' in w);
var onTouchStartInWindow = ('ontouchstart' in w);
var touchEventInWindow = ('TouchEvent' in w);
// onTouchStartInWindow is the old-old-legacy way to determine a touch device
// and many websites interpreted it to mean that the device is a touch only phone,
// so today browsers on a desktop/laptop computer with a touch screen (primary input mouse)
// have onTouchStartInWindow as false (to prevent from being confused with a
// touchOnly phone) even though they support the TouchEvents API, so need to check
// both onTouchStartInWindow and touchEventInWindow for TouchEvent support,
// however, some browsers (chromium) support the TouchEvents API even when running on
// a mouse only device (touchEventInWindow true, but onTouchStartInWindow false)
// so the touchEventInWindow check needs to include an coarse pointer media query
var supportsTouchEvents = onTouchStartInWindow || touchEventInWindow && matchMedia('(any-pointer: coarse)').matches;
var hasTouch = (w.navigator.maxTouchPoints || 0) > 0 || supportsTouchEvents;
// userAgent is used as a backup to correct for known device/browser bugs
// and when the browser doesn't support interaction media queries (pointer and hover)
// see https://caniuse.com/css-media-interaction
var userAgent = w.navigator.userAgent || '';
// iPads now support a mouse that can hover, however the media query interaction
// feature results always say iPads only have a coarse pointer that can't hover
// even when a mouse is connected (anyFine and anyHover are always false),
// this unfortunately indicates a touch only device but iPads should
// be classified as a hybrid device, so determine if it is an iPad
// to indicate it should be treated as a hybrid device with anyHover true
var isIPad = matchMedia('(pointer: coarse)').matches &&
// both iPad and iPhone can "request desktop site", which sets the userAgent to Macintosh
// so need to check both userAgents to determine if it is an iOS device
// and screen size to separate iPad from iPhone
/iPad|Macintosh/.test(userAgent) && Math.min(w.screen.width || 0, w.screen.height || 0) >= 768;
var hasCoarsePrimaryPointer = (matchMedia('(pointer: coarse)').matches ||
// if the pointer is not coarse and not fine then the browser doesn't support
// interaction media queries (see https://caniuse.com/css-media-interaction)
// so if it has onTouchStartInWindow assume it has a coarse primary pointer
!matchMedia('(pointer: fine)').matches && onTouchStartInWindow) &&
// bug in firefox (as of v81) on hybrid windows devices where the interaction media queries
// always indicate a touch only device (only has a coarse pointer that can't hover)
// so assume that the primary pointer is not coarse for firefox windows
!/Windows.*Firefox/.test(userAgent);
var hasAnyHoverOrAnyFinePointer = matchMedia('(any-pointer: fine)').matches || matchMedia('(any-hover: hover)').matches ||
// iPads might have an input device that can hover, so assume it has anyHover
isIPad ||
// if no onTouchStartInWindow then the browser is indicating that it is not a touch only device
// see above note for supportsTouchEvents
!onTouchStartInWindow;
// a hybrid device is one that both hasTouch and
// any input can hover or has a fine pointer, or the primary pointer is not coarse
// if it's not a hybrid, then if it hasTouch it's touchOnly, otherwise it's mouseOnly
var deviceType = hasTouch && (hasAnyHoverOrAnyFinePointer || !hasCoarsePrimaryPointer) ? 'hybrid' : hasTouch ? 'touchOnly' : 'mouseOnly';
var primaryInput = deviceType === 'mouseOnly' ? 'mouse' : deviceType === 'touchOnly' ? 'touch' :
// if the device is a hybrid, then if the primary pointer is coarse
// assume the primaryInput is touch, otherwise assume it's mouse
hasCoarsePrimaryPointer ? 'touch' : 'mouse';


/***/ }),

/***/ 80221:
/*!****************************************************************************************!*\
  !*** ./node_modules/@angular-slider/ngx-slider/fesm2022/angular-slider-ngx-slider.mjs ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllowUnsafeHtmlInSlider: () => (/* binding */ AllowUnsafeHtmlInSlider),
/* harmony export */   ChangeContext: () => (/* binding */ ChangeContext),
/* harmony export */   LabelType: () => (/* binding */ LabelType),
/* harmony export */   NgxSliderModule: () => (/* binding */ NgxSliderModule),
/* harmony export */   Options: () => (/* binding */ Options),
/* harmony export */   PointerType: () => (/* binding */ PointerType),
/* harmony export */   SliderComponent: () => (/* binding */ SliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 46584);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 47632);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 28382);
/* harmony import */ var detect_passive_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! detect-passive-events */ 72859);









/** Label type */
const _c0 = (a0, a1, a2) => ({
  tooltip: a0,
  placement: a1,
  content: a2
});
function TooltipWrapperComponent_ng_container_0_1_ng_template_0_Template(rf, ctx) {}
function TooltipWrapperComponent_ng_container_0_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TooltipWrapperComponent_ng_container_0_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TooltipWrapperComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TooltipWrapperComponent_ng_container_0_1_Template, 1, 0, null, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx_r0.tooltip, ctx_r0.placement, ctx_r0.content));
  }
}
function TooltipWrapperComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx_r0.tooltip)("data-tooltip-placement", ctx_r0.placement);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.content, " ");
  }
}
const _c1 = ["tooltipTemplate"];
const _c2 = ["leftOuterSelectionBar"];
const _c3 = ["rightOuterSelectionBar"];
const _c4 = ["fullBar"];
const _c5 = ["selectionBar"];
const _c6 = ["minHandle"];
const _c7 = ["maxHandle"];
const _c8 = ["floorLabel"];
const _c9 = ["ceilLabel"];
const _c10 = ["minHandleLabel"];
const _c11 = ["maxHandleLabel"];
const _c12 = ["combinedLabel"];
const _c13 = ["ticksElement"];
const _c14 = a0 => ({
  "ngx-slider-selected": a0
});
function SliderComponent_span_28_ngx_slider_tooltip_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-slider-tooltip-wrapper", 32);
  }
  if (rf & 2) {
    const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", ctx_r1.tooltipTemplate)("tooltip", t_r1.valueTooltip)("placement", t_r1.valueTooltipPlacement)("content", t_r1.value);
  }
}
function SliderComponent_span_28_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 33);
  }
  if (rf & 2) {
    const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerText", t_r1.legend);
  }
}
function SliderComponent_span_28_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 34);
  }
  if (rf & 2) {
    const t_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", t_r1.legend, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}
function SliderComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-slider-tooltip-wrapper", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SliderComponent_span_28_ngx_slider_tooltip_wrapper_2_Template, 1, 4, "ngx-slider-tooltip-wrapper", 29)(3, SliderComponent_span_28_span_3_Template, 1, 1, "span", 30)(4, SliderComponent_span_28_span_4_Template, 1, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c14, t_r1.selected))("ngStyle", t_r1.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("template", ctx_r1.tooltipTemplate)("tooltip", t_r1.tooltip)("placement", t_r1.tooltipPlacement);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", t_r1.value !== null && t_r1.value !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", t_r1.legend !== null && t_r1.legend !== undefined && ctx_r1.allowUnsafeHtmlInSlider === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", t_r1.legend !== null && t_r1.legend !== undefined && (ctx_r1.allowUnsafeHtmlInSlider === null || ctx_r1.allowUnsafeHtmlInSlider === undefined || ctx_r1.allowUnsafeHtmlInSlider));
  }
}
var LabelType;
(function (LabelType) {
  /** Label above low pointer */
  LabelType[LabelType["Low"] = 0] = "Low";
  /** Label above high pointer */
  LabelType[LabelType["High"] = 1] = "High";
  /** Label for minimum slider value */
  LabelType[LabelType["Floor"] = 2] = "Floor";
  /** Label for maximum slider value */
  LabelType[LabelType["Ceil"] = 3] = "Ceil";
  /** Label below legend tick */
  LabelType[LabelType["TickValue"] = 4] = "TickValue";
})(LabelType || (LabelType = {}));
/** Slider options */
class Options {
  /** Minimum value for a slider.
    Not applicable when using stepsArray. */
  floor = 0;
  /** Maximum value for a slider.
    Not applicable when using stepsArray. */
  ceil = null;
  /** Step between each value.
    Not applicable when using stepsArray. */
  step = 1;
  /** The minimum range authorized on the slider.
    Applies to range slider only.
    When using stepsArray, expressed as index into stepsArray. */
  minRange = null;
  /** The maximum range authorized on the slider.
    Applies to range slider only.
    When using stepsArray, expressed as index into stepsArray. */
  maxRange = null;
  /** Set to true to have a push behavior. When the min handle goes above the max,
    the max is moved as well (and vice-versa). The range between min and max is
    defined by the step option (defaults to 1) and can also be overriden by
    the minRange option. Applies to range slider only. */
  pushRange = false;
  /** The minimum value authorized on the slider.
    When using stepsArray, expressed as index into stepsArray. */
  minLimit = null;
  /** The maximum value authorized on the slider.
    When using stepsArray, expressed as index into stepsArray. */
  maxLimit = null;
  /** Custom translate function. Use this if you want to translate values displayed
      on the slider. */
  translate = null;
  /** Custom function for combining overlapping labels in range slider.
      It takes the min and max values (already translated with translate fuction)
      and should return how these two values should be combined.
      If not provided, the default function will join the two values with
      ' - ' as separator. */
  combineLabels = null;
  /** Use to display legend under ticks (thus, it needs to be used along with
     showTicks or showTicksValues). The function will be called with each tick
     value and returned content will be displayed under the tick as a legend.
     If the returned value is null, then no legend is displayed under
     the corresponding tick.You can also directly provide the legend values
     in the stepsArray option. */
  getLegend = null;
  /** Use to display a custom legend of a stepItem from stepsArray.
    It will be the same as getLegend but for stepsArray. */
  getStepLegend = null;
  /** If you want to display a slider with non linear/number steps.
     Just pass an array with each slider value and that's it; the floor, ceil and step settings
     of the slider will be computed automatically.
     By default, the value model and valueHigh model values will be the value of the selected item
     in the stepsArray.
     They can also be bound to the index of the selected item by setting the bindIndexForStepsArray
     option to true. */
  stepsArray = null;
  /** Set to true to bind the index of the selected item to value model and valueHigh model. */
  bindIndexForStepsArray = false;
  /** When set to true and using a range slider, the range can be dragged by the selection bar.
    Applies to range slider only. */
  draggableRange = false;
  /** Same as draggableRange but the slider range can't be changed.
    Applies to range slider only. */
  draggableRangeOnly = false;
  /** Set to true to always show the selection bar before the slider handle. */
  showSelectionBar = false;
  /** Set to true to always show the selection bar after the slider handle. */
  showSelectionBarEnd = false;
  /**  Set a number to draw the selection bar between this value and the slider handle.
    When using stepsArray, expressed as index into stepsArray. */
  showSelectionBarFromValue = null;
  /**  Only for range slider. Set to true to visualize in different colour the areas
    on the left/right (top/bottom for vertical range slider) of selection bar between the handles. */
  showOuterSelectionBars = false;
  /** Set to true to hide pointer labels */
  hidePointerLabels = false;
  /** Set to true to hide min / max labels  */
  hideLimitLabels = false;
  /** Set to false to disable the auto-hiding behavior of the limit labels. */
  autoHideLimitLabels = true;
  /** Set to true to make the slider read-only. */
  readOnly = false;
  /** Set to true to disable the slider. */
  disabled = false;
  /** Set to true to display a tick for each step of the slider. */
  showTicks = false;
  /** Set to true to display a tick and the step value for each step of the slider.. */
  showTicksValues = false;
  /* The step between each tick to display. If not set, the step value is used.
    Not used when ticksArray is specified. */
  tickStep = null;
  /* The step between displaying each tick step value.
    If not set, then tickStep or step is used, depending on which one is set. */
  tickValueStep = null;
  /** Use to display ticks at specific positions.
    The array contains the index of the ticks that should be displayed.
    For example, [0, 1, 5] will display a tick for the first, second and sixth values. */
  ticksArray = null;
  /** Used to display a tooltip when a tick is hovered.
    Set to a function that returns the tooltip content for a given value. */
  ticksTooltip = null;
  /** Same as ticksTooltip but for ticks values. */
  ticksValuesTooltip = null;
  /** Set to true to display the slider vertically.
    The slider will take the full height of its parent.
    Changing this value at runtime is not currently supported. */
  vertical = false;
  /** Function that returns the current color of the selection bar.
    If your color won't change, don't use this option but set it through CSS.
    If the returned color depends on a model value (either value or valueHigh),
    you should use the argument passed to the function.
    Indeed, when the function is called, there is no certainty that the model
    has already been updated.*/
  getSelectionBarColor = null;
  /** Function that returns the color of a tick. showTicks must be enabled. */
  getTickColor = null;
  /** Function that returns the current color of a pointer.
    If your color won't change, don't use this option but set it through CSS.
    If the returned color depends on a model value (either value or valueHigh),
    you should use the argument passed to the function.
    Indeed, when the function is called, there is no certainty that the model has already been updated.
    To handle range slider pointers independently, you should evaluate pointerType within the given
    function where "min" stands for value model and "max" for valueHigh model values. */
  getPointerColor = null;
  /** Handles are focusable (on click or with tab) and can be modified using the following keyboard controls:
    Left/bottom arrows: -1
    Right/top arrows: +1
    Page-down: -10%
    Page-up: +10%
    Home: minimum value
    End: maximum value
   */
  keyboardSupport = true;
  /** If you display the slider in an element that uses transform: scale(0.5), set the scale value to 2
    so that the slider is rendered properly and the events are handled correctly. */
  scale = 1;
  /** If you display the slider in an element that uses transform: rotate(90deg), set the rotate value to 90
   so that the slider is rendered properly and the events are handled correctly. Value is in degrees. */
  rotate = 0;
  /** Set to true to force the value(s) to be rounded to the step, even when modified from the outside.
    When set to false, if the model values are modified from outside the slider, they are not rounded
    and can be between two steps. */
  enforceStep = true;
  /** Set to true to force the value(s) to be normalised to allowed range (floor to ceil), even when modified from the outside.
    When set to false, if the model values are modified from outside the slider, and they are outside allowed range,
    the slider may be rendered incorrectly. However, setting this to false may be useful if you want to perform custom normalisation. */
  enforceRange = true;
  /** Set to true to force the value(s) to be rounded to the nearest step value, even when modified from the outside.
    When set to false, if the model values are modified from outside the slider, and they are outside allowed range,
    the slider may be rendered incorrectly. However, setting this to false may be useful if you want to perform custom normalisation. */
  enforceStepsArray = true;
  /** Set to true to prevent to user from switching the min and max handles. Applies to range slider only. */
  noSwitching = false;
  /** Set to true to only bind events on slider handles. */
  onlyBindHandles = false;
  /** Set to true to show graphs right to left.
    If vertical is true it will be from top to bottom and left / right arrow functions reversed. */
  rightToLeft = false;
  /** Set to true to reverse keyboard navigation:
    Right/top arrows: -1
    Left/bottom arrows: +1
    Page-up: -10%
    Page-down: +10%
    End: minimum value
    Home: maximum value
   */
  reversedControls = false;
  /** Set to true to keep the slider labels inside the slider bounds. */
  boundPointerLabels = true;
  /** Set to true to use a logarithmic scale to display the slider.  */
  logScale = false;
  /** Function that returns the position on the slider for a given value.
    The position must be a percentage between 0 and 1.
    The function should be monotonically increasing or decreasing; otherwise the slider may behave incorrectly. */
  customValueToPosition = null;
  /** Function that returns the value for a given position on the slider.
    The position is a percentage between 0 and 1.
    The function should be monotonically increasing or decreasing; otherwise the slider may behave incorrectly. */
  customPositionToValue = null;
  /** Precision limit for calculated values.
    Values used in calculations will be rounded to this number of significant digits
    to prevent accumulating small floating-point errors. */
  precisionLimit = 12;
  /** Use to display the selection bar as a gradient.
    The given object must contain from and to properties which are colors. */
  selectionBarGradient = null;
  /** Use to add a label directly to the slider for accessibility. Adds the aria-label attribute. */
  ariaLabel = 'ngx-slider';
  /** Use instead of ariaLabel to reference the id of an element which will be used to label the slider.
    Adds the aria-labelledby attribute. */
  ariaLabelledBy = null;
  /** Use to add a label directly to the slider range for accessibility. Adds the aria-label attribute. */
  ariaLabelHigh = 'ngx-slider-max';
  /** Use instead of ariaLabelHigh to reference the id of an element which will be used to label the slider range.
    Adds the aria-labelledby attribute. */
  ariaLabelledByHigh = null;
  /** Use to increase rendering performance. If the value is not provided, the slider calculates the with/height of the handle */
  handleDimension = null;
  /** Use to increase rendering performance. If the value is not provided, the slider calculates the with/height of the bar */
  barDimension = null;
  /** Enable/disable CSS animations */
  animate = true;
  /** Enable/disable CSS animations while moving the slider */
  animateOnMove = false;
}
const AllowUnsafeHtmlInSlider = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('AllowUnsafeHtmlInSlider');

/** Pointer type */
var PointerType;
(function (PointerType) {
  /** Low pointer */
  PointerType[PointerType["Min"] = 0] = "Min";
  /** High pointer */
  PointerType[PointerType["Max"] = 1] = "Max";
})(PointerType || (PointerType = {}));
class ChangeContext {
  value;
  highValue;
  pointerType;
}

/**
 *  Collection of functions to handle conversions/lookups of values
 */
class ValueHelper {
  static isNullOrUndefined(value) {
    return value === undefined || value === null;
  }
  static areArraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; ++i) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  static linearValueToPosition(val, minVal, maxVal) {
    const range = maxVal - minVal;
    return (val - minVal) / range;
  }
  static logValueToPosition(val, minVal, maxVal) {
    val = Math.log(val);
    minVal = Math.log(minVal);
    maxVal = Math.log(maxVal);
    const range = maxVal - minVal;
    return (val - minVal) / range;
  }
  static linearPositionToValue(percent, minVal, maxVal) {
    return percent * (maxVal - minVal) + minVal;
  }
  static logPositionToValue(percent, minVal, maxVal) {
    minVal = Math.log(minVal);
    maxVal = Math.log(maxVal);
    const value = percent * (maxVal - minVal) + minVal;
    return Math.exp(value);
  }
  static findStepIndex(modelValue, stepsArray) {
    const differences = stepsArray.map(step => Math.abs(modelValue - step.value));
    let minDifferenceIndex = 0;
    for (let index = 0; index < stepsArray.length; index++) {
      if (differences[index] !== differences[minDifferenceIndex] && differences[index] < differences[minDifferenceIndex]) {
        minDifferenceIndex = index;
      }
    }
    return minDifferenceIndex;
  }
}

/** Helper with compatibility functions to support different browsers */
class CompatibilityHelper {
  /** Workaround for TouchEvent constructor sadly not being available on all browsers (e.g. Firefox, Safari) */
  static isTouchEvent(event) {
    if (window.TouchEvent !== undefined) {
      return event instanceof TouchEvent;
    }
    return event.touches !== undefined;
  }
  /** Detect presence of ResizeObserver API */
  static isResizeObserverAvailable() {
    return window.ResizeObserver !== undefined;
  }
}

/** Helper with mathematical functions */
class MathHelper {
  /* Round numbers to a given number of significant digits */
  static roundToPrecisionLimit(value, precisionLimit) {
    return +value.toPrecision(precisionLimit);
  }
  static isModuloWithinPrecisionLimit(value, modulo, precisionLimit) {
    const limit = Math.pow(10, -precisionLimit);
    return Math.abs(value % modulo) <= limit || Math.abs(Math.abs(value % modulo) - modulo) <= limit;
  }
  static clampToRange(value, floor, ceil) {
    return Math.min(Math.max(value, floor), ceil);
  }
}
class EventListener {
  eventName = null;
  events = null;
  eventsSubscription = null;
  teardownCallback = null;
}

/**
 * Helper class to attach event listeners to DOM elements with debounce support using rxjs
 */
class EventListenerHelper {
  renderer;
  constructor(renderer) {
    this.renderer = renderer;
  }
  attachPassiveEventListener(nativeElement, eventName, callback, throttleInterval) {
    // Only use passive event listeners if the browser supports it
    if (detect_passive_events__WEBPACK_IMPORTED_MODULE_1__.supportsPassiveEvents !== true) {
      return this.attachEventListener(nativeElement, eventName, callback, throttleInterval);
    }
    // Angular doesn't support passive event handlers (yet), so we need to roll our own code using native functions
    const listener = new EventListener();
    listener.eventName = eventName;
    listener.events = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    const observerCallback = event => {
      listener.events.next(event);
    };
    nativeElement.addEventListener(eventName, observerCallback, {
      passive: true,
      capture: false
    });
    listener.teardownCallback = () => {
      nativeElement.removeEventListener(eventName, observerCallback, {
        passive: true,
        capture: false
      });
    };
    listener.eventsSubscription = listener.events.pipe(!ValueHelper.isNullOrUndefined(throttleInterval) ? (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.throttleTime)(throttleInterval, undefined, {
      leading: true,
      trailing: true
    }) : (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {}) // no-op
    ).subscribe(event => {
      callback(event);
    });
    return listener;
  }
  detachEventListener(eventListener) {
    if (!ValueHelper.isNullOrUndefined(eventListener.eventsSubscription)) {
      eventListener.eventsSubscription.unsubscribe();
      eventListener.eventsSubscription = null;
    }
    if (!ValueHelper.isNullOrUndefined(eventListener.events)) {
      eventListener.events.complete();
      eventListener.events = null;
    }
    if (!ValueHelper.isNullOrUndefined(eventListener.teardownCallback)) {
      eventListener.teardownCallback();
      eventListener.teardownCallback = null;
    }
  }
  attachEventListener(nativeElement, eventName, callback, throttleInterval) {
    const listener = new EventListener();
    listener.eventName = eventName;
    listener.events = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    const observerCallback = event => {
      listener.events.next(event);
    };
    listener.teardownCallback = this.renderer.listen(nativeElement, eventName, observerCallback);
    listener.eventsSubscription = listener.events.pipe(!ValueHelper.isNullOrUndefined(throttleInterval) ? (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.throttleTime)(throttleInterval, undefined, {
      leading: true,
      trailing: true
    }) : (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {}) // no-op
    ).subscribe(event => {
      callback(event);
    });
    return listener;
  }
}
class SliderElementDirective {
  elemRef;
  renderer;
  changeDetectionRef;
  _position = 0;
  get position() {
    return this._position;
  }
  _dimension = 0;
  get dimension() {
    return this._dimension;
  }
  _alwaysHide = false;
  get alwaysHide() {
    return this._alwaysHide;
  }
  _vertical = false;
  get vertical() {
    return this._vertical;
  }
  _scale = 1;
  get scale() {
    return this._scale;
  }
  _rotate = 0;
  get rotate() {
    return this._rotate;
  }
  opacity = 1;
  visibility = 'visible';
  left = '';
  bottom = '';
  height = '';
  width = '';
  transform = '';
  eventListenerHelper;
  eventListeners = [];
  constructor(elemRef, renderer, changeDetectionRef) {
    this.elemRef = elemRef;
    this.renderer = renderer;
    this.changeDetectionRef = changeDetectionRef;
    this.eventListenerHelper = new EventListenerHelper(this.renderer);
  }
  setAlwaysHide(hide) {
    this._alwaysHide = hide;
    if (hide) {
      this.visibility = 'hidden';
    } else {
      this.visibility = 'visible';
    }
  }
  hide() {
    this.opacity = 0;
  }
  show() {
    if (this.alwaysHide) {
      return;
    }
    this.opacity = 1;
  }
  isVisible() {
    if (this.alwaysHide) {
      return false;
    }
    return this.opacity !== 0;
  }
  setVertical(vertical) {
    this._vertical = vertical;
    if (this._vertical) {
      this.left = '';
      this.width = '';
    } else {
      this.bottom = '';
      this.height = '';
    }
  }
  setScale(scale) {
    this._scale = scale;
  }
  setRotate(rotate) {
    this._rotate = rotate;
    this.transform = 'rotate(' + rotate + 'deg)';
  }
  getRotate() {
    return this._rotate;
  }
  // Set element left/top position depending on whether slider is horizontal or vertical
  setPosition(pos) {
    if (this._position !== pos && !this.isRefDestroyed()) {
      this.changeDetectionRef.markForCheck();
    }
    this._position = pos;
    if (this._vertical) {
      this.bottom = Math.round(pos) + 'px';
    } else {
      this.left = Math.round(pos) + 'px';
    }
  }
  // Calculate element's width/height depending on whether slider is horizontal or vertical
  calculateDimension() {
    const val = this.getBoundingClientRect();
    if (this.vertical) {
      this._dimension = (val.bottom - val.top) * this.scale;
    } else {
      this._dimension = (val.right - val.left) * this.scale;
    }
  }
  // Set element width/height depending on whether slider is horizontal or vertical
  setDimension(dim) {
    if (this._dimension !== dim && !this.isRefDestroyed()) {
      this.changeDetectionRef.markForCheck();
    }
    this._dimension = dim;
    if (this._vertical) {
      this.height = Math.round(dim) + 'px';
    } else {
      this.width = Math.round(dim) + 'px';
    }
  }
  getBoundingClientRect() {
    return this.elemRef.nativeElement.getBoundingClientRect();
  }
  on(eventName, callback, debounceInterval) {
    const listener = this.eventListenerHelper.attachEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
    this.eventListeners.push(listener);
  }
  onPassive(eventName, callback, debounceInterval) {
    const listener = this.eventListenerHelper.attachPassiveEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
    this.eventListeners.push(listener);
  }
  off(eventName) {
    let listenersToKeep;
    let listenersToRemove;
    if (!ValueHelper.isNullOrUndefined(eventName)) {
      listenersToKeep = this.eventListeners.filter(event => event.eventName !== eventName);
      listenersToRemove = this.eventListeners.filter(event => event.eventName === eventName);
    } else {
      listenersToKeep = [];
      listenersToRemove = this.eventListeners;
    }
    for (const listener of listenersToRemove) {
      this.eventListenerHelper.detachEventListener(listener);
    }
    this.eventListeners = listenersToKeep;
  }
  isRefDestroyed() {
    return ValueHelper.isNullOrUndefined(this.changeDetectionRef) || this.changeDetectionRef['destroyed'];
  }
  static ɵfac = function SliderElementDirective_Factory(t) {
    return new (t || SliderElementDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: SliderElementDirective,
    selectors: [["", "ngxSliderElement", ""]],
    hostVars: 14,
    hostBindings: function SliderElementDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("opacity", ctx.opacity)("visibility", ctx.visibility)("left", ctx.left)("bottom", ctx.bottom)("height", ctx.height)("width", ctx.width)("transform", ctx.transform);
      }
    }
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderElementDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngxSliderElement]'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }], {
    opacity: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.opacity']
    }],
    visibility: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.visibility']
    }],
    left: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.left']
    }],
    bottom: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.bottom']
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.height']
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.width']
    }],
    transform: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.transform']
    }]
  });
})();
class SliderHandleDirective extends SliderElementDirective {
  active = false;
  role = '';
  tabindex = '';
  ariaOrientation = '';
  ariaLabel = '';
  ariaLabelledBy = '';
  ariaValueNow = '';
  ariaValueText = '';
  ariaValueMin = '';
  ariaValueMax = '';
  focus() {
    this.elemRef.nativeElement.focus();
  }
  focusIfNeeded() {
    if (document.activeElement !== this.elemRef.nativeElement) {
      this.elemRef.nativeElement.focus();
    }
  }
  constructor(elemRef, renderer, changeDetectionRef) {
    super(elemRef, renderer, changeDetectionRef);
  }
  static ɵfac = function SliderHandleDirective_Factory(t) {
    return new (t || SliderHandleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: SliderHandleDirective,
    selectors: [["", "ngxSliderHandle", ""]],
    hostVars: 11,
    hostBindings: function SliderHandleDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx.tabindex)("aria-orientation", ctx.ariaOrientation)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-valuenow", ctx.ariaValueNow)("aria-valuetext", ctx.ariaValueText)("aria-valuemin", ctx.ariaValueMin)("aria-valuemax", ctx.ariaValueMax);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-slider-active", ctx.active);
      }
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderHandleDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngxSliderHandle]'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }], {
    active: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ngx-slider-active']
    }],
    role: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.role']
    }],
    tabindex: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.tabindex']
    }],
    ariaOrientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.aria-orientation']
    }],
    ariaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.aria-label']
    }],
    ariaLabelledBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.aria-labelledby']
    }],
    ariaValueNow: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.aria-valuenow']
    }],
    ariaValueText: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.aria-valuetext']
    }],
    ariaValueMin: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.aria-valuemin']
    }],
    ariaValueMax: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.aria-valuemax']
    }]
  });
})();
class SliderLabelDirective extends SliderElementDirective {
  allowUnsafeHtmlInSlider;
  _value = null;
  get value() {
    return this._value;
  }
  constructor(elemRef, renderer, changeDetectionRef, allowUnsafeHtmlInSlider) {
    super(elemRef, renderer, changeDetectionRef);
    this.allowUnsafeHtmlInSlider = allowUnsafeHtmlInSlider;
  }
  setValue(value) {
    let recalculateDimension = false;
    if (!this.alwaysHide && (ValueHelper.isNullOrUndefined(this.value) || this.value.length !== value.length || this.value.length > 0 && this.dimension === 0)) {
      recalculateDimension = true;
    }
    this._value = value;
    if (this.allowUnsafeHtmlInSlider === false) {
      this.elemRef.nativeElement.innerText = value;
    } else {
      this.elemRef.nativeElement.innerHTML = value;
    }
    // Update dimension only when length of the label have changed
    if (recalculateDimension) {
      this.calculateDimension();
    }
  }
  static ɵfac = function SliderLabelDirective_Factory(t) {
    return new (t || SliderLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AllowUnsafeHtmlInSlider, 8));
  };
  static ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: SliderLabelDirective,
    selectors: [["", "ngxSliderLabel", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderLabelDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[ngxSliderLabel]'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [AllowUnsafeHtmlInSlider]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }], null);
})();
class TooltipWrapperComponent {
  template;
  tooltip;
  placement;
  content;
  static ɵfac = function TooltipWrapperComponent_Factory(t) {
    return new (t || TooltipWrapperComponent)();
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TooltipWrapperComponent,
    selectors: [["ngx-slider-tooltip-wrapper"]],
    inputs: {
      template: "template",
      tooltip: "tooltip",
      placement: "placement",
      content: "content"
    },
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ngx-slider-inner-tooltip"]],
    template: function TooltipWrapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TooltipWrapperComponent_ng_container_0_Template, 2, 6, "ng-container", 0)(1, TooltipWrapperComponent_ng_container_1_Template, 3, 3, "ng-container", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.template);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet],
    styles: [".ngx-slider-inner-tooltip[_ngcontent-%COMP%]{height:100%}"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipWrapperComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-slider-tooltip-wrapper',
      template: "<ng-container *ngIf=\"template\">\n  <ng-template *ngTemplateOutlet=\"template; context: {tooltip: tooltip, placement: placement, content: content}\"></ng-template>\n</ng-container>\n\n<ng-container *ngIf=\"!template\">\n  <div class=\"ngx-slider-inner-tooltip\" [attr.title]=\"tooltip\" [attr.data-tooltip-placement]=\"placement\">\n    {{content}}\n  </div>\n</ng-container>",
      styles: [".ngx-slider-inner-tooltip{height:100%}\n"]
    }]
  }], null, {
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    tooltip: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    placement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    content: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
class Tick {
  selected = false;
  style = {};
  tooltip = null;
  tooltipPlacement = null;
  value = null;
  valueTooltip = null;
  valueTooltipPlacement = null;
  legend = null;
}
class Dragging {
  active = false;
  value = 0;
  difference = 0;
  position = 0;
  lowLimit = 0;
  highLimit = 0;
}
class ModelValues {
  value;
  highValue;
  static compare(x, y) {
    if (ValueHelper.isNullOrUndefined(x) && ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    if (ValueHelper.isNullOrUndefined(x) !== ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    return x.value === y.value && x.highValue === y.highValue;
  }
}
class ModelChange extends ModelValues {
  // Flag used to by-pass distinctUntilChanged() filter on input values
  // (sometimes there is a need to pass values through even though the model values have not changed)
  forceChange;
  static compare(x, y) {
    if (ValueHelper.isNullOrUndefined(x) && ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    if (ValueHelper.isNullOrUndefined(x) !== ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    return x.value === y.value && x.highValue === y.highValue && x.forceChange === y.forceChange;
  }
}
class InputModelChange extends ModelChange {
  internalChange;
}
class OutputModelChange extends ModelChange {
  userEventInitiated;
}
const NGX_SLIDER_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NG_VALUE_ACCESSOR,
  /* tslint:disable-next-line: no-use-before-declare */
  useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => SliderComponent),
  multi: true
};
class SliderComponent {
  renderer;
  elementRef;
  changeDetectionRef;
  zone;
  allowUnsafeHtmlInSlider;
  // Add ngx-slider class to the host element - this is static, should never change
  sliderElementNgxSliderClass = true;
  // Model for low value of slider. For simple slider, this is the only input. For range slider, this is the low value.
  value = null;
  // Output for low value slider to support two-way bindings
  valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  // Model for high value of slider. Not used in simple slider. For range slider, this is the high value.
  highValue = null;
  // Output for high value slider to support two-way bindings
  highValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  // An object with all the other options of the slider.
  // Each option can be updated at runtime and the slider will automatically be re-rendered.
  options = new Options();
  // Event emitted when user starts interaction with the slider
  userChangeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  // Event emitted on each change coming from user interaction
  userChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  // Event emitted when user finishes interaction with the slider
  userChangeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  manualRefreshSubscription;
  // Input event that triggers slider refresh (re-positioning of slider elements)
  set manualRefresh(manualRefresh) {
    this.unsubscribeManualRefresh();
    this.manualRefreshSubscription = manualRefresh.subscribe(() => {
      setTimeout(() => this.calculateViewDimensionsAndDetectChanges());
    });
  }
  triggerFocusSubscription;
  // Input event that triggers setting focus on given slider handle
  set triggerFocus(triggerFocus) {
    this.unsubscribeTriggerFocus();
    this.triggerFocusSubscription = triggerFocus.subscribe(pointerType => {
      this.focusPointer(pointerType);
    });
  }
  // Slider type, true means range slider
  get range() {
    return !ValueHelper.isNullOrUndefined(this.value) && !ValueHelper.isNullOrUndefined(this.highValue);
  }
  // Set to true if init method already executed
  initHasRun = false;
  // Changes in model inputs are passed through this subject
  // These are all changes coming in from outside the component through input bindings or reactive form inputs
  inputModelChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  inputModelChangeSubscription = null;
  // Changes to model outputs are passed through this subject
  // These are all changes that need to be communicated to output emitters and registered callbacks
  outputModelChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  outputModelChangeSubscription = null;
  // Low value synced to model low value
  viewLowValue = null;
  // High value synced to model high value
  viewHighValue = null;
  // Options synced to model options, based on defaults
  viewOptions = new Options();
  // Half of the width or height of the slider handles
  handleHalfDimension = 0;
  // Maximum position the slider handle can have
  maxHandlePosition = 0;
  // Which handle is currently tracked for move events
  currentTrackingPointer = null;
  // Internal variable to keep track of the focus element
  currentFocusPointer = null;
  // Used to call onStart on the first keydown event
  firstKeyDown = false;
  // Current touch id of touch event being handled
  touchId = null;
  // Values recorded when first dragging the bar
  dragging = new Dragging();
  /* Slider DOM elements */
  // Left selection bar outside two handles
  leftOuterSelectionBarElement;
  // Right selection bar outside two handles
  rightOuterSelectionBarElement;
  // The whole slider bar
  fullBarElement;
  // Highlight between two handles
  selectionBarElement;
  // Left slider handle
  minHandleElement;
  // Right slider handle
  maxHandleElement;
  // Floor label
  floorLabelElement;
  // Ceiling label
  ceilLabelElement;
  // Label above the low value
  minHandleLabelElement;
  // Label above the high value
  maxHandleLabelElement;
  // Combined label
  combinedLabelElement;
  // The ticks
  ticksElement;
  // Optional custom template for displaying tooltips
  tooltipTemplate;
  // Host element class bindings
  sliderElementVerticalClass = false;
  sliderElementAnimateClass = false;
  sliderElementWithLegendClass = false;
  sliderElementDisabledAttr = null;
  sliderElementAriaLabel = 'ngx-slider';
  // CSS styles and class flags
  barStyle = {};
  minPointerStyle = {};
  maxPointerStyle = {};
  fullBarTransparentClass = false;
  selectionBarDraggableClass = false;
  ticksUnderValuesClass = false;
  // Whether to show/hide ticks
  get showTicks() {
    return this.viewOptions.showTicks;
  }
  /* If tickStep is set or ticksArray is specified.
     In this case, ticks values should be displayed below the slider. */
  intermediateTicks = false;
  // Ticks array as displayed in view
  ticks = [];
  // Event listeners
  eventListenerHelper = null;
  onMoveEventListener = null;
  onEndEventListener = null;
  // Whether currently moving the slider (between onStart() and onEnd())
  moving = false;
  // Observer for slider element resize events
  resizeObserver = null;
  // Callbacks for reactive forms support
  onTouchedCallback = null;
  onChangeCallback = null;
  constructor(renderer, elementRef, changeDetectionRef, zone, allowUnsafeHtmlInSlider) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.changeDetectionRef = changeDetectionRef;
    this.zone = zone;
    this.allowUnsafeHtmlInSlider = allowUnsafeHtmlInSlider;
    this.eventListenerHelper = new EventListenerHelper(this.renderer);
  }
  // OnInit interface
  ngOnInit() {
    this.viewOptions = new Options();
    Object.assign(this.viewOptions, this.options);
    // We need to run these two things first, before the rest of the init in ngAfterViewInit(),
    // because these two settings are set through @HostBinding and Angular change detection
    // mechanism doesn't like them changing in ngAfterViewInit()
    this.updateDisabledState();
    this.updateVerticalState();
    this.updateAriaLabel();
  }
  // AfterViewInit interface
  ngAfterViewInit() {
    this.applyOptions();
    this.subscribeInputModelChangeSubject();
    this.subscribeOutputModelChangeSubject();
    // Once we apply options, we need to normalise model values for the first time
    this.renormaliseModelValues();
    this.viewLowValue = this.modelValueToViewValue(this.value);
    if (this.range) {
      this.viewHighValue = this.modelValueToViewValue(this.highValue);
    } else {
      this.viewHighValue = null;
    }
    this.updateVerticalState(); // need to run this again to cover changes to slider elements
    this.manageElementsStyle();
    this.updateDisabledState();
    this.calculateViewDimensions();
    this.addAccessibility();
    this.updateCeilLabel();
    this.updateFloorLabel();
    this.initHandles();
    this.manageEventsBindings();
    this.updateAriaLabel();
    this.subscribeResizeObserver();
    this.initHasRun = true;
    // Run change detection manually to resolve some issues when init procedure changes values used in the view
    if (!this.isRefDestroyed()) {
      this.changeDetectionRef.detectChanges();
    }
  }
  // OnChanges interface
  ngOnChanges(changes) {
    // Always apply options first
    if (!ValueHelper.isNullOrUndefined(changes.options) && JSON.stringify(changes.options.previousValue) !== JSON.stringify(changes.options.currentValue)) {
      this.onChangeOptions();
    }
    // Then value changes
    if (!ValueHelper.isNullOrUndefined(changes.value) || !ValueHelper.isNullOrUndefined(changes.highValue)) {
      this.inputModelChangeSubject.next({
        value: this.value,
        highValue: this.highValue,
        forceChange: false,
        internalChange: false
      });
    }
  }
  // OnDestroy interface
  ngOnDestroy() {
    this.unbindEvents();
    this.unsubscribeResizeObserver();
    this.unsubscribeInputModelChangeSubject();
    this.unsubscribeOutputModelChangeSubject();
    this.unsubscribeManualRefresh();
    this.unsubscribeTriggerFocus();
  }
  // ControlValueAccessor interface
  writeValue(obj) {
    if (obj instanceof Array) {
      this.value = obj[0];
      this.highValue = obj[1];
    } else {
      this.value = obj;
    }
    // ngOnChanges() is not called in this instance, so we need to communicate the change manually
    this.inputModelChangeSubject.next({
      value: this.value,
      highValue: this.highValue,
      forceChange: false,
      internalChange: false
    });
  }
  // ControlValueAccessor interface
  registerOnChange(onChangeCallback) {
    this.onChangeCallback = onChangeCallback;
  }
  // ControlValueAccessor interface
  registerOnTouched(onTouchedCallback) {
    this.onTouchedCallback = onTouchedCallback;
  }
  // ControlValueAccessor interface
  setDisabledState(isDisabled) {
    this.viewOptions.disabled = isDisabled;
    this.updateDisabledState();
  }
  setAriaLabel(ariaLabel) {
    this.viewOptions.ariaLabel = ariaLabel;
    this.updateAriaLabel();
  }
  onResize(event) {
    this.calculateViewDimensionsAndDetectChanges();
  }
  subscribeInputModelChangeSubject() {
    this.inputModelChangeSubscription = this.inputModelChangeSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(ModelChange.compare),
    // Hack to reset the status of the distinctUntilChanged() - if a "fake" event comes through with forceChange=true,
    // we forcefully by-pass distinctUntilChanged(), but otherwise drop the event
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(modelChange => !modelChange.forceChange && !modelChange.internalChange)).subscribe(modelChange => this.applyInputModelChange(modelChange));
  }
  subscribeOutputModelChangeSubject() {
    this.outputModelChangeSubscription = this.outputModelChangeSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(ModelChange.compare)).subscribe(modelChange => this.publishOutputModelChange(modelChange));
  }
  subscribeResizeObserver() {
    if (CompatibilityHelper.isResizeObserverAvailable()) {
      this.resizeObserver = new ResizeObserver(() => this.calculateViewDimensionsAndDetectChanges());
      this.resizeObserver.observe(this.elementRef.nativeElement);
    }
  }
  unsubscribeResizeObserver() {
    if (CompatibilityHelper.isResizeObserverAvailable() && this.resizeObserver !== null) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }
  unsubscribeOnMove() {
    if (!ValueHelper.isNullOrUndefined(this.onMoveEventListener)) {
      this.eventListenerHelper.detachEventListener(this.onMoveEventListener);
      this.onMoveEventListener = null;
    }
  }
  unsubscribeOnEnd() {
    if (!ValueHelper.isNullOrUndefined(this.onEndEventListener)) {
      this.eventListenerHelper.detachEventListener(this.onEndEventListener);
      this.onEndEventListener = null;
    }
  }
  unsubscribeInputModelChangeSubject() {
    if (!ValueHelper.isNullOrUndefined(this.inputModelChangeSubscription)) {
      this.inputModelChangeSubscription.unsubscribe();
      this.inputModelChangeSubscription = null;
    }
  }
  unsubscribeOutputModelChangeSubject() {
    if (!ValueHelper.isNullOrUndefined(this.outputModelChangeSubscription)) {
      this.outputModelChangeSubscription.unsubscribe();
      this.outputModelChangeSubscription = null;
    }
  }
  unsubscribeManualRefresh() {
    if (!ValueHelper.isNullOrUndefined(this.manualRefreshSubscription)) {
      this.manualRefreshSubscription.unsubscribe();
      this.manualRefreshSubscription = null;
    }
  }
  unsubscribeTriggerFocus() {
    if (!ValueHelper.isNullOrUndefined(this.triggerFocusSubscription)) {
      this.triggerFocusSubscription.unsubscribe();
      this.triggerFocusSubscription = null;
    }
  }
  getPointerElement(pointerType) {
    if (pointerType === PointerType.Min) {
      return this.minHandleElement;
    } else if (pointerType === PointerType.Max) {
      return this.maxHandleElement;
    }
    return null;
  }
  getCurrentTrackingValue() {
    if (this.currentTrackingPointer === PointerType.Min) {
      return this.viewLowValue;
    } else if (this.currentTrackingPointer === PointerType.Max) {
      return this.viewHighValue;
    }
    return null;
  }
  modelValueToViewValue(modelValue) {
    if (ValueHelper.isNullOrUndefined(modelValue)) {
      return NaN;
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
      return ValueHelper.findStepIndex(+modelValue, this.viewOptions.stepsArray);
    }
    return +modelValue;
  }
  viewValueToModelValue(viewValue) {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
      return this.getStepValue(viewValue);
    }
    return viewValue;
  }
  getStepValue(sliderValue) {
    const step = this.viewOptions.stepsArray[sliderValue];
    return !ValueHelper.isNullOrUndefined(step) ? step.value : NaN;
  }
  applyViewChange() {
    this.value = this.viewValueToModelValue(this.viewLowValue);
    if (this.range) {
      this.highValue = this.viewValueToModelValue(this.viewHighValue);
    }
    this.outputModelChangeSubject.next({
      value: this.value,
      highValue: this.highValue,
      userEventInitiated: true,
      forceChange: false
    });
    // At this point all changes are applied and outputs are emitted, so we should be done.
    // However, input changes are communicated in different stream and we need to be ready to
    // act on the next input change even if it is exactly the same as last input change.
    // Therefore, we send a special event to reset the stream.
    this.inputModelChangeSubject.next({
      value: this.value,
      highValue: this.highValue,
      forceChange: false,
      internalChange: true
    });
  }
  // Apply model change to the slider view
  applyInputModelChange(modelChange) {
    const normalisedModelChange = this.normaliseModelValues(modelChange);
    // If normalised model change is different, apply the change to the model values
    const normalisationChange = !ModelValues.compare(modelChange, normalisedModelChange);
    if (normalisationChange) {
      this.value = normalisedModelChange.value;
      this.highValue = normalisedModelChange.highValue;
    }
    this.viewLowValue = this.modelValueToViewValue(normalisedModelChange.value);
    if (this.range) {
      this.viewHighValue = this.modelValueToViewValue(normalisedModelChange.highValue);
    } else {
      this.viewHighValue = null;
    }
    this.updateLowHandle(this.valueToPosition(this.viewLowValue));
    if (this.range) {
      this.updateHighHandle(this.valueToPosition(this.viewHighValue));
    }
    this.updateSelectionBar();
    this.updateTicksScale();
    this.updateAriaAttributes();
    if (this.range) {
      this.updateCombinedLabel();
    }
    // At the end, we need to communicate the model change to the outputs as well
    // Normalisation changes are also always forced out to ensure that subscribers always end up in correct state
    this.outputModelChangeSubject.next({
      value: normalisedModelChange.value,
      highValue: normalisedModelChange.highValue,
      forceChange: normalisationChange,
      userEventInitiated: false
    });
  }
  // Publish model change to output event emitters and registered callbacks
  publishOutputModelChange(modelChange) {
    const emitOutputs = () => {
      this.valueChange.emit(modelChange.value);
      if (this.range) {
        this.highValueChange.emit(modelChange.highValue);
      }
      if (!ValueHelper.isNullOrUndefined(this.onChangeCallback)) {
        if (this.range) {
          this.onChangeCallback([modelChange.value, modelChange.highValue]);
        } else {
          this.onChangeCallback(modelChange.value);
        }
      }
      if (!ValueHelper.isNullOrUndefined(this.onTouchedCallback)) {
        if (this.range) {
          this.onTouchedCallback([modelChange.value, modelChange.highValue]);
        } else {
          this.onTouchedCallback(modelChange.value);
        }
      }
    };
    if (modelChange.userEventInitiated) {
      // If this change was initiated by a user event, we can emit outputs in the same tick
      emitOutputs();
      this.userChange.emit(this.getChangeContext());
    } else {
      // But, if the change was initated by something else like a change in input bindings,
      // we need to wait until next tick to emit the outputs to keep Angular change detection happy
      setTimeout(() => {
        emitOutputs();
      });
    }
  }
  normaliseModelValues(input) {
    const normalisedInput = new ModelValues();
    normalisedInput.value = input.value;
    normalisedInput.highValue = input.highValue;
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
      // When using steps array, only round to nearest step in the array
      // No other enforcement can be done, as the step array may be out of order, and that is perfectly fine
      if (this.viewOptions.enforceStepsArray) {
        const valueIndex = ValueHelper.findStepIndex(normalisedInput.value, this.viewOptions.stepsArray);
        normalisedInput.value = this.viewOptions.stepsArray[valueIndex].value;
        if (this.range) {
          const highValueIndex = ValueHelper.findStepIndex(normalisedInput.highValue, this.viewOptions.stepsArray);
          normalisedInput.highValue = this.viewOptions.stepsArray[highValueIndex].value;
        }
      }
      return normalisedInput;
    }
    if (this.viewOptions.enforceStep) {
      normalisedInput.value = this.roundStep(normalisedInput.value);
      if (this.range) {
        normalisedInput.highValue = this.roundStep(normalisedInput.highValue);
      }
    }
    if (this.viewOptions.enforceRange) {
      normalisedInput.value = MathHelper.clampToRange(normalisedInput.value, this.viewOptions.floor, this.viewOptions.ceil);
      if (this.range) {
        normalisedInput.highValue = MathHelper.clampToRange(normalisedInput.highValue, this.viewOptions.floor, this.viewOptions.ceil);
      }
      // Make sure that range slider invariant (value <= highValue) is always satisfied
      if (this.range && input.value > input.highValue) {
        // We know that both values are now clamped correctly, they may just be in the wrong order
        // So the easy solution is to swap them... except swapping is sometimes disabled in options, so we make the two values the same
        if (this.viewOptions.noSwitching) {
          normalisedInput.value = normalisedInput.highValue;
        } else {
          const tempValue = input.value;
          normalisedInput.value = input.highValue;
          normalisedInput.highValue = tempValue;
        }
      }
    }
    return normalisedInput;
  }
  renormaliseModelValues() {
    const previousModelValues = {
      value: this.value,
      highValue: this.highValue
    };
    const normalisedModelValues = this.normaliseModelValues(previousModelValues);
    if (!ModelValues.compare(normalisedModelValues, previousModelValues)) {
      this.value = normalisedModelValues.value;
      this.highValue = normalisedModelValues.highValue;
      this.outputModelChangeSubject.next({
        value: this.value,
        highValue: this.highValue,
        forceChange: true,
        userEventInitiated: false
      });
    }
  }
  onChangeOptions() {
    if (!this.initHasRun) {
      return;
    }
    const previousOptionsInfluencingEventBindings = this.getOptionsInfluencingEventBindings(this.viewOptions);
    this.applyOptions();
    const newOptionsInfluencingEventBindings = this.getOptionsInfluencingEventBindings(this.viewOptions);
    // Avoid re-binding events in case nothing changes that can influence it
    // It makes it possible to change options while dragging the slider
    const rebindEvents = !ValueHelper.areArraysEqual(previousOptionsInfluencingEventBindings, newOptionsInfluencingEventBindings);
    // With new options, we need to re-normalise model values if necessary
    this.renormaliseModelValues();
    this.viewLowValue = this.modelValueToViewValue(this.value);
    if (this.range) {
      this.viewHighValue = this.modelValueToViewValue(this.highValue);
    } else {
      this.viewHighValue = null;
    }
    this.resetSlider(rebindEvents);
  }
  // Read the user options and apply them to the slider model
  applyOptions() {
    this.viewOptions = new Options();
    Object.assign(this.viewOptions, this.options);
    this.viewOptions.draggableRange = this.range && this.viewOptions.draggableRange;
    this.viewOptions.draggableRangeOnly = this.range && this.viewOptions.draggableRangeOnly;
    if (this.viewOptions.draggableRangeOnly) {
      this.viewOptions.draggableRange = true;
    }
    this.viewOptions.showTicks = this.viewOptions.showTicks || this.viewOptions.showTicksValues || !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray);
    if (this.viewOptions.showTicks && (!ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) || !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray))) {
      this.intermediateTicks = true;
    }
    this.viewOptions.showSelectionBar = this.viewOptions.showSelectionBar || this.viewOptions.showSelectionBarEnd || !ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue);
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
      this.applyStepsArrayOptions();
    } else {
      this.applyFloorCeilOptions();
    }
    if (ValueHelper.isNullOrUndefined(this.viewOptions.combineLabels)) {
      this.viewOptions.combineLabels = (minValue, maxValue) => {
        return minValue + ' - ' + maxValue;
      };
    }
    if (this.viewOptions.logScale && this.viewOptions.floor === 0) {
      throw Error("Can't use floor=0 with logarithmic scale");
    }
  }
  applyStepsArrayOptions() {
    this.viewOptions.floor = 0;
    this.viewOptions.ceil = this.viewOptions.stepsArray.length - 1;
    this.viewOptions.step = 1;
    if (ValueHelper.isNullOrUndefined(this.viewOptions.translate)) {
      this.viewOptions.translate = modelValue => {
        if (this.viewOptions.bindIndexForStepsArray) {
          return String(this.getStepValue(modelValue));
        }
        return String(modelValue);
      };
    }
  }
  applyFloorCeilOptions() {
    if (ValueHelper.isNullOrUndefined(this.viewOptions.step)) {
      this.viewOptions.step = 1;
    } else {
      this.viewOptions.step = +this.viewOptions.step;
      if (this.viewOptions.step <= 0) {
        this.viewOptions.step = 1;
      }
    }
    if (ValueHelper.isNullOrUndefined(this.viewOptions.ceil) || ValueHelper.isNullOrUndefined(this.viewOptions.floor)) {
      throw Error('floor and ceil options must be supplied');
    }
    this.viewOptions.ceil = +this.viewOptions.ceil;
    this.viewOptions.floor = +this.viewOptions.floor;
    if (ValueHelper.isNullOrUndefined(this.viewOptions.translate)) {
      this.viewOptions.translate = value => String(value);
    }
  }
  // Resets slider
  resetSlider(rebindEvents = true) {
    this.manageElementsStyle();
    this.addAccessibility();
    this.updateCeilLabel();
    this.updateFloorLabel();
    if (rebindEvents) {
      this.unbindEvents();
      this.manageEventsBindings();
    }
    this.updateDisabledState();
    this.updateAriaLabel();
    this.calculateViewDimensions();
    this.refocusPointerIfNeeded();
  }
  // Sets focus on the specified pointer
  focusPointer(pointerType) {
    // If not supplied, use min pointer as default
    if (pointerType !== PointerType.Min && pointerType !== PointerType.Max) {
      pointerType = PointerType.Min;
    }
    if (pointerType === PointerType.Min) {
      this.minHandleElement.focus();
    } else if (this.range && pointerType === PointerType.Max) {
      this.maxHandleElement.focus();
    }
  }
  refocusPointerIfNeeded() {
    if (!ValueHelper.isNullOrUndefined(this.currentFocusPointer)) {
      const element = this.getPointerElement(this.currentFocusPointer);
      element.focusIfNeeded();
    }
  }
  // Update each elements style based on options
  manageElementsStyle() {
    this.updateScale();
    this.floorLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
    this.ceilLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
    const hideLabelsForTicks = this.viewOptions.showTicksValues && !this.intermediateTicks;
    this.minHandleLabelElement.setAlwaysHide(hideLabelsForTicks || this.viewOptions.hidePointerLabels);
    this.maxHandleLabelElement.setAlwaysHide(hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
    this.combinedLabelElement.setAlwaysHide(hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
    this.selectionBarElement.setAlwaysHide(!this.range && !this.viewOptions.showSelectionBar);
    this.leftOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars);
    this.rightOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars);
    this.fullBarTransparentClass = this.range && this.viewOptions.showOuterSelectionBars;
    this.selectionBarDraggableClass = this.viewOptions.draggableRange && !this.viewOptions.onlyBindHandles;
    this.ticksUnderValuesClass = this.intermediateTicks && this.options.showTicksValues;
    if (this.sliderElementVerticalClass !== this.viewOptions.vertical) {
      this.updateVerticalState();
      // The above change in host component class will not be applied until the end of this cycle
      // However, functions calculating the slider position expect the slider to be already styled as vertical
      // So as a workaround, we need to reset the slider once again to compute the correct values
      setTimeout(() => {
        this.resetSlider();
      });
    }
    // Changing animate class may interfere with slider reset/initialisation, so we should set it separately,
    // after all is properly set up
    if (this.sliderElementAnimateClass !== this.viewOptions.animate) {
      setTimeout(() => {
        this.sliderElementAnimateClass = this.viewOptions.animate;
      });
    }
    this.updateRotate();
  }
  // Manage the events bindings based on readOnly and disabled options
  manageEventsBindings() {
    if (this.viewOptions.disabled || this.viewOptions.readOnly) {
      this.unbindEvents();
    } else {
      this.bindEvents();
    }
  }
  // Set the disabled state based on disabled option
  updateDisabledState() {
    this.sliderElementDisabledAttr = this.viewOptions.disabled ? 'disabled' : null;
  }
  // Set the aria-label state based on ariaLabel option
  updateAriaLabel() {
    this.sliderElementAriaLabel = this.viewOptions.ariaLabel || 'nxg-slider';
  }
  // Set vertical state based on vertical option
  updateVerticalState() {
    this.sliderElementVerticalClass = this.viewOptions.vertical;
    for (const element of this.getAllSliderElements()) {
      // This is also called before ngAfterInit, so need to check that view child bindings work
      if (!ValueHelper.isNullOrUndefined(element)) {
        element.setVertical(this.viewOptions.vertical);
      }
    }
  }
  updateScale() {
    for (const element of this.getAllSliderElements()) {
      element.setScale(this.viewOptions.scale);
    }
  }
  updateRotate() {
    for (const element of this.getAllSliderElements()) {
      element.setRotate(this.viewOptions.rotate);
    }
  }
  getAllSliderElements() {
    return [this.leftOuterSelectionBarElement, this.rightOuterSelectionBarElement, this.fullBarElement, this.selectionBarElement, this.minHandleElement, this.maxHandleElement, this.floorLabelElement, this.ceilLabelElement, this.minHandleLabelElement, this.maxHandleLabelElement, this.combinedLabelElement, this.ticksElement];
  }
  // Initialize slider handles positions and labels
  // Run only once during initialization and every time view port changes size
  initHandles() {
    this.updateLowHandle(this.valueToPosition(this.viewLowValue));
    /*
    the order here is important since the selection bar should be
    updated after the high handle but before the combined label
    */
    if (this.range) {
      this.updateHighHandle(this.valueToPosition(this.viewHighValue));
    }
    this.updateSelectionBar();
    if (this.range) {
      this.updateCombinedLabel();
    }
    this.updateTicksScale();
  }
  // Adds accessibility attributes, run only once during initialization
  addAccessibility() {
    this.updateAriaAttributes();
    this.minHandleElement.role = 'slider';
    if (this.viewOptions.keyboardSupport && !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
      this.minHandleElement.tabindex = '0';
    } else {
      this.minHandleElement.tabindex = '';
    }
    this.minHandleElement.ariaOrientation = this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? 'vertical' : 'horizontal';
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabel)) {
      this.minHandleElement.ariaLabel = this.viewOptions.ariaLabel;
    } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelledBy)) {
      this.minHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledBy;
    }
    if (this.range) {
      this.maxHandleElement.role = 'slider';
      if (this.viewOptions.keyboardSupport && !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
        this.maxHandleElement.tabindex = '0';
      } else {
        this.maxHandleElement.tabindex = '';
      }
      this.maxHandleElement.ariaOrientation = this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? 'vertical' : 'horizontal';
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelHigh)) {
        this.maxHandleElement.ariaLabel = this.viewOptions.ariaLabelHigh;
      } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelledByHigh)) {
        this.maxHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledByHigh;
      }
    }
  }
  // Updates aria attributes according to current values
  updateAriaAttributes() {
    this.minHandleElement.ariaValueNow = (+this.value).toString();
    this.minHandleElement.ariaValueText = this.viewOptions.translate(+this.value, LabelType.Low);
    this.minHandleElement.ariaValueMin = this.viewOptions.floor.toString();
    this.minHandleElement.ariaValueMax = this.viewOptions.ceil.toString();
    if (this.range) {
      this.maxHandleElement.ariaValueNow = (+this.highValue).toString();
      this.maxHandleElement.ariaValueText = this.viewOptions.translate(+this.highValue, LabelType.High);
      this.maxHandleElement.ariaValueMin = this.viewOptions.floor.toString();
      this.maxHandleElement.ariaValueMax = this.viewOptions.ceil.toString();
    }
  }
  // Calculate dimensions that are dependent on view port size
  // Run once during initialization and every time view port changes size.
  calculateViewDimensions() {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.handleDimension)) {
      this.minHandleElement.setDimension(this.viewOptions.handleDimension);
    } else {
      this.minHandleElement.calculateDimension();
    }
    const handleWidth = this.minHandleElement.dimension;
    this.handleHalfDimension = handleWidth / 2;
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.barDimension)) {
      this.fullBarElement.setDimension(this.viewOptions.barDimension);
    } else {
      this.fullBarElement.calculateDimension();
    }
    this.maxHandlePosition = this.fullBarElement.dimension - handleWidth;
    if (this.initHasRun) {
      this.updateFloorLabel();
      this.updateCeilLabel();
      this.initHandles();
    }
  }
  calculateViewDimensionsAndDetectChanges() {
    this.calculateViewDimensions();
    if (!this.isRefDestroyed()) {
      this.changeDetectionRef.detectChanges();
    }
  }
  /**
   * If the slider reference is already destroyed
   * @returns boolean - true if ref is destroyed
   */
  isRefDestroyed() {
    return this.changeDetectionRef['destroyed'];
  }
  // Update the ticks position
  updateTicksScale() {
    if (!this.viewOptions.showTicks && this.sliderElementWithLegendClass) {
      setTimeout(() => {
        this.sliderElementWithLegendClass = false;
      });
      return;
    }
    const ticksArray = !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray) ? this.viewOptions.ticksArray : this.getTicksArray();
    const translate = this.viewOptions.vertical ? 'translateY' : 'translateX';
    if (this.viewOptions.rightToLeft) {
      ticksArray.reverse();
    }
    const tickValueStep = !ValueHelper.isNullOrUndefined(this.viewOptions.tickValueStep) ? this.viewOptions.tickValueStep : !ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) ? this.viewOptions.tickStep : this.viewOptions.step;
    let hasAtLeastOneLegend = false;
    const newTicks = ticksArray.map(value => {
      let position = this.valueToPosition(value);
      if (this.viewOptions.vertical) {
        position = this.maxHandlePosition - position;
      }
      const translation = translate + '(' + Math.round(position) + 'px)';
      const tick = new Tick();
      tick.selected = this.isTickSelected(value);
      tick.style = {
        '-webkit-transform': translation,
        '-moz-transform': translation,
        '-o-transform': translation,
        '-ms-transform': translation,
        transform: translation
      };
      if (tick.selected && !ValueHelper.isNullOrUndefined(this.viewOptions.getSelectionBarColor)) {
        tick.style['background-color'] = this.getSelectionBarColor();
      }
      if (!tick.selected && !ValueHelper.isNullOrUndefined(this.viewOptions.getTickColor)) {
        tick.style['background-color'] = this.getTickColor(value);
      }
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.ticksTooltip)) {
        tick.tooltip = this.viewOptions.ticksTooltip(value);
        tick.tooltipPlacement = this.viewOptions.vertical ? 'right' : 'top';
      }
      if (this.viewOptions.showTicksValues && !ValueHelper.isNullOrUndefined(tickValueStep) && MathHelper.isModuloWithinPrecisionLimit(value, tickValueStep, this.viewOptions.precisionLimit)) {
        tick.value = this.getDisplayValue(value, LabelType.TickValue);
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.ticksValuesTooltip)) {
          tick.valueTooltip = this.viewOptions.ticksValuesTooltip(value);
          tick.valueTooltipPlacement = this.viewOptions.vertical ? 'right' : 'top';
        }
      }
      let legend = null;
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
        const step = this.viewOptions.stepsArray[value];
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.getStepLegend)) {
          legend = this.viewOptions.getStepLegend(step);
        } else if (!ValueHelper.isNullOrUndefined(step)) {
          legend = step.legend;
        }
      } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.getLegend)) {
        legend = this.viewOptions.getLegend(value);
      }
      if (!ValueHelper.isNullOrUndefined(legend)) {
        tick.legend = legend;
        hasAtLeastOneLegend = true;
      }
      return tick;
    });
    if (this.sliderElementWithLegendClass !== hasAtLeastOneLegend) {
      setTimeout(() => {
        this.sliderElementWithLegendClass = hasAtLeastOneLegend;
      });
    }
    // We should avoid re-creating the ticks array if possible
    // This both improves performance and makes CSS animations work correctly
    if (!ValueHelper.isNullOrUndefined(this.ticks) && this.ticks.length === newTicks.length) {
      for (let i = 0; i < newTicks.length; ++i) {
        Object.assign(this.ticks[i], newTicks[i]);
      }
    } else {
      this.ticks = newTicks;
      if (!this.isRefDestroyed()) {
        this.changeDetectionRef.detectChanges();
      }
    }
  }
  getTicksArray() {
    const step = !ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) ? this.viewOptions.tickStep : this.viewOptions.step;
    const ticksArray = [];
    const numberOfValues = 1 + Math.floor(MathHelper.roundToPrecisionLimit(Math.abs(this.viewOptions.ceil - this.viewOptions.floor) / step, this.viewOptions.precisionLimit));
    for (let index = 0; index < numberOfValues; ++index) {
      ticksArray.push(MathHelper.roundToPrecisionLimit(this.viewOptions.floor + step * index, this.viewOptions.precisionLimit));
    }
    return ticksArray;
  }
  isTickSelected(value) {
    if (!this.range) {
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) {
        const center = this.viewOptions.showSelectionBarFromValue;
        if (this.viewLowValue > center && value >= center && value <= this.viewLowValue) {
          return true;
        } else if (this.viewLowValue < center && value <= center && value >= this.viewLowValue) {
          return true;
        }
      } else if (this.viewOptions.showSelectionBarEnd) {
        if (value >= this.viewLowValue) {
          return true;
        }
      } else if (this.viewOptions.showSelectionBar && value <= this.viewLowValue) {
        return true;
      }
    }
    if (this.range && value >= this.viewLowValue && value <= this.viewHighValue) {
      return true;
    }
    return false;
  }
  // Update position of the floor label
  updateFloorLabel() {
    if (!this.floorLabelElement.alwaysHide) {
      this.floorLabelElement.setValue(this.getDisplayValue(this.viewOptions.floor, LabelType.Floor));
      this.floorLabelElement.calculateDimension();
      const position = this.viewOptions.rightToLeft ? this.fullBarElement.dimension - this.floorLabelElement.dimension : 0;
      this.floorLabelElement.setPosition(position);
    }
  }
  // Update position of the ceiling label
  updateCeilLabel() {
    if (!this.ceilLabelElement.alwaysHide) {
      this.ceilLabelElement.setValue(this.getDisplayValue(this.viewOptions.ceil, LabelType.Ceil));
      this.ceilLabelElement.calculateDimension();
      const position = this.viewOptions.rightToLeft ? 0 : this.fullBarElement.dimension - this.ceilLabelElement.dimension;
      this.ceilLabelElement.setPosition(position);
    }
  }
  // Update slider handles and label positions
  updateHandles(which, newPos) {
    if (which === PointerType.Min) {
      this.updateLowHandle(newPos);
    } else if (which === PointerType.Max) {
      this.updateHighHandle(newPos);
    }
    this.updateSelectionBar();
    this.updateTicksScale();
    if (this.range) {
      this.updateCombinedLabel();
    }
  }
  // Helper function to work out the position for handle labels depending on RTL or not
  getHandleLabelPos(labelType, newPos) {
    const labelDimension = labelType === PointerType.Min ? this.minHandleLabelElement.dimension : this.maxHandleLabelElement.dimension;
    const nearHandlePos = newPos - labelDimension / 2 + this.handleHalfDimension;
    const endOfBarPos = this.fullBarElement.dimension - labelDimension;
    if (!this.viewOptions.boundPointerLabels) {
      return nearHandlePos;
    }
    if (this.viewOptions.rightToLeft && labelType === PointerType.Min || !this.viewOptions.rightToLeft && labelType === PointerType.Max) {
      return Math.min(nearHandlePos, endOfBarPos);
    } else {
      return Math.min(Math.max(nearHandlePos, 0), endOfBarPos);
    }
  }
  // Update low slider handle position and label
  updateLowHandle(newPos) {
    this.minHandleElement.setPosition(newPos);
    this.minHandleLabelElement.setValue(this.getDisplayValue(this.viewLowValue, LabelType.Low));
    this.minHandleLabelElement.setPosition(this.getHandleLabelPos(PointerType.Min, newPos));
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.getPointerColor)) {
      this.minPointerStyle = {
        backgroundColor: this.getPointerColor(PointerType.Min)
      };
    }
    if (this.viewOptions.autoHideLimitLabels) {
      this.updateFloorAndCeilLabelsVisibility();
    }
  }
  // Update high slider handle position and label
  updateHighHandle(newPos) {
    this.maxHandleElement.setPosition(newPos);
    this.maxHandleLabelElement.setValue(this.getDisplayValue(this.viewHighValue, LabelType.High));
    this.maxHandleLabelElement.setPosition(this.getHandleLabelPos(PointerType.Max, newPos));
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.getPointerColor)) {
      this.maxPointerStyle = {
        backgroundColor: this.getPointerColor(PointerType.Max)
      };
    }
    if (this.viewOptions.autoHideLimitLabels) {
      this.updateFloorAndCeilLabelsVisibility();
    }
  }
  // Show/hide floor/ceiling label
  updateFloorAndCeilLabelsVisibility() {
    // Show based only on hideLimitLabels if pointer labels are hidden
    if (this.viewOptions.hidePointerLabels) {
      return;
    }
    let floorLabelHidden = false;
    let ceilLabelHidden = false;
    const isMinLabelAtFloor = this.isLabelBelowFloorLabel(this.minHandleLabelElement);
    const isMinLabelAtCeil = this.isLabelAboveCeilLabel(this.minHandleLabelElement);
    const isMaxLabelAtCeil = this.isLabelAboveCeilLabel(this.maxHandleLabelElement);
    const isCombinedLabelAtFloor = this.isLabelBelowFloorLabel(this.combinedLabelElement);
    const isCombinedLabelAtCeil = this.isLabelAboveCeilLabel(this.combinedLabelElement);
    if (isMinLabelAtFloor) {
      floorLabelHidden = true;
      this.floorLabelElement.hide();
    } else {
      floorLabelHidden = false;
      this.floorLabelElement.show();
    }
    if (isMinLabelAtCeil) {
      ceilLabelHidden = true;
      this.ceilLabelElement.hide();
    } else {
      ceilLabelHidden = false;
      this.ceilLabelElement.show();
    }
    if (this.range) {
      const hideCeil = this.combinedLabelElement.isVisible() ? isCombinedLabelAtCeil : isMaxLabelAtCeil;
      const hideFloor = this.combinedLabelElement.isVisible() ? isCombinedLabelAtFloor : isMinLabelAtFloor;
      if (hideCeil) {
        this.ceilLabelElement.hide();
      } else if (!ceilLabelHidden) {
        this.ceilLabelElement.show();
      }
      // Hide or show floor label
      if (hideFloor) {
        this.floorLabelElement.hide();
      } else if (!floorLabelHidden) {
        this.floorLabelElement.show();
      }
    }
  }
  isLabelBelowFloorLabel(label) {
    const pos = label.position;
    const dim = label.dimension;
    const floorPos = this.floorLabelElement.position;
    const floorDim = this.floorLabelElement.dimension;
    return this.viewOptions.rightToLeft ? pos + dim >= floorPos - 2 : pos <= floorPos + floorDim + 2;
  }
  isLabelAboveCeilLabel(label) {
    const pos = label.position;
    const dim = label.dimension;
    const ceilPos = this.ceilLabelElement.position;
    const ceilDim = this.ceilLabelElement.dimension;
    return this.viewOptions.rightToLeft ? pos <= ceilPos + ceilDim + 2 : pos + dim >= ceilPos - 2;
  }
  // Update slider selection bar, combined label and range label
  updateSelectionBar() {
    let position = 0;
    let dimension = 0;
    const isSelectionBarFromRight = this.viewOptions.rightToLeft ? !this.viewOptions.showSelectionBarEnd : this.viewOptions.showSelectionBarEnd;
    const positionForRange = this.viewOptions.rightToLeft ? this.maxHandleElement.position + this.handleHalfDimension : this.minHandleElement.position + this.handleHalfDimension;
    if (this.range) {
      dimension = Math.abs(this.maxHandleElement.position - this.minHandleElement.position);
      position = positionForRange;
    } else {
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) {
        const center = this.viewOptions.showSelectionBarFromValue;
        const centerPosition = this.valueToPosition(center);
        const isModelGreaterThanCenter = this.viewOptions.rightToLeft ? this.viewLowValue <= center : this.viewLowValue > center;
        if (isModelGreaterThanCenter) {
          dimension = this.minHandleElement.position - centerPosition;
          position = centerPosition + this.handleHalfDimension;
        } else {
          dimension = centerPosition - this.minHandleElement.position;
          position = this.minHandleElement.position + this.handleHalfDimension;
        }
      } else if (isSelectionBarFromRight) {
        dimension = Math.ceil(Math.abs(this.maxHandlePosition - this.minHandleElement.position) + this.handleHalfDimension);
        position = Math.floor(this.minHandleElement.position + this.handleHalfDimension);
      } else {
        dimension = this.minHandleElement.position + this.handleHalfDimension;
        position = 0;
      }
    }
    this.selectionBarElement.setDimension(dimension);
    this.selectionBarElement.setPosition(position);
    if (this.range && this.viewOptions.showOuterSelectionBars) {
      if (this.viewOptions.rightToLeft) {
        this.rightOuterSelectionBarElement.setDimension(position);
        this.rightOuterSelectionBarElement.setPosition(0);
        this.fullBarElement.calculateDimension();
        this.leftOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (position + dimension));
        this.leftOuterSelectionBarElement.setPosition(position + dimension);
      } else {
        this.leftOuterSelectionBarElement.setDimension(position);
        this.leftOuterSelectionBarElement.setPosition(0);
        this.fullBarElement.calculateDimension();
        this.rightOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (position + dimension));
        this.rightOuterSelectionBarElement.setPosition(position + dimension);
      }
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.getSelectionBarColor)) {
      const color = this.getSelectionBarColor();
      this.barStyle = {
        backgroundColor: color
      };
    } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.selectionBarGradient)) {
      const offset = !ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue) ? this.valueToPosition(this.viewOptions.showSelectionBarFromValue) : 0;
      const reversed = offset - position > 0 && !isSelectionBarFromRight || offset - position <= 0 && isSelectionBarFromRight;
      const direction = this.viewOptions.vertical ? reversed ? 'bottom' : 'top' : reversed ? 'left' : 'right';
      this.barStyle = {
        backgroundImage: 'linear-gradient(to ' + direction + ', ' + this.viewOptions.selectionBarGradient.from + ' 0%,' + this.viewOptions.selectionBarGradient.to + ' 100%)'
      };
      if (this.viewOptions.vertical) {
        this.barStyle.backgroundPosition = 'center ' + (offset + dimension + position + (reversed ? -this.handleHalfDimension : 0)) + 'px';
        this.barStyle.backgroundSize = '100% ' + (this.fullBarElement.dimension - this.handleHalfDimension) + 'px';
      } else {
        this.barStyle.backgroundPosition = offset - position + (reversed ? this.handleHalfDimension : 0) + 'px center';
        this.barStyle.backgroundSize = this.fullBarElement.dimension - this.handleHalfDimension + 'px 100%';
      }
    }
  }
  // Wrapper around the getSelectionBarColor of the user to pass to correct parameters
  getSelectionBarColor() {
    if (this.range) {
      return this.viewOptions.getSelectionBarColor(this.value, this.highValue);
    }
    return this.viewOptions.getSelectionBarColor(this.value);
  }
  // Wrapper around the getPointerColor of the user to pass to  correct parameters
  getPointerColor(pointerType) {
    if (pointerType === PointerType.Max) {
      return this.viewOptions.getPointerColor(this.highValue, pointerType);
    }
    return this.viewOptions.getPointerColor(this.value, pointerType);
  }
  // Wrapper around the getTickColor of the user to pass to correct parameters
  getTickColor(value) {
    return this.viewOptions.getTickColor(value);
  }
  // Update combined label position and value
  updateCombinedLabel() {
    let isLabelOverlap = null;
    if (this.viewOptions.rightToLeft) {
      isLabelOverlap = this.minHandleLabelElement.position - this.minHandleLabelElement.dimension - 10 <= this.maxHandleLabelElement.position;
    } else {
      isLabelOverlap = this.minHandleLabelElement.position + this.minHandleLabelElement.dimension + 10 >= this.maxHandleLabelElement.position;
    }
    if (isLabelOverlap) {
      const lowDisplayValue = this.getDisplayValue(this.viewLowValue, LabelType.Low);
      const highDisplayValue = this.getDisplayValue(this.viewHighValue, LabelType.High);
      const combinedLabelValue = this.viewOptions.rightToLeft ? this.viewOptions.combineLabels(highDisplayValue, lowDisplayValue) : this.viewOptions.combineLabels(lowDisplayValue, highDisplayValue);
      this.combinedLabelElement.setValue(combinedLabelValue);
      const pos = this.viewOptions.boundPointerLabels ? Math.min(Math.max(this.selectionBarElement.position + this.selectionBarElement.dimension / 2 - this.combinedLabelElement.dimension / 2, 0), this.fullBarElement.dimension - this.combinedLabelElement.dimension) : this.selectionBarElement.position + this.selectionBarElement.dimension / 2 - this.combinedLabelElement.dimension / 2;
      this.combinedLabelElement.setPosition(pos);
      this.minHandleLabelElement.hide();
      this.maxHandleLabelElement.hide();
      this.combinedLabelElement.show();
    } else {
      this.updateHighHandle(this.valueToPosition(this.viewHighValue));
      this.updateLowHandle(this.valueToPosition(this.viewLowValue));
      this.maxHandleLabelElement.show();
      this.minHandleLabelElement.show();
      this.combinedLabelElement.hide();
    }
    if (this.viewOptions.autoHideLimitLabels) {
      this.updateFloorAndCeilLabelsVisibility();
    }
  }
  // Return the translated value if a translate function is provided else the original value
  getDisplayValue(value, which) {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
      value = this.getStepValue(value);
    }
    return this.viewOptions.translate(value, which);
  }
  // Round value to step and precision based on minValue
  roundStep(value, customStep) {
    const step = !ValueHelper.isNullOrUndefined(customStep) ? customStep : this.viewOptions.step;
    let steppedDifference = MathHelper.roundToPrecisionLimit((value - this.viewOptions.floor) / step, this.viewOptions.precisionLimit);
    steppedDifference = Math.round(steppedDifference) * step;
    return MathHelper.roundToPrecisionLimit(this.viewOptions.floor + steppedDifference, this.viewOptions.precisionLimit);
  }
  // Translate value to pixel position
  valueToPosition(val) {
    let fn = ValueHelper.linearValueToPosition;
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.customValueToPosition)) {
      fn = this.viewOptions.customValueToPosition;
    } else if (this.viewOptions.logScale) {
      fn = ValueHelper.logValueToPosition;
    }
    val = MathHelper.clampToRange(val, this.viewOptions.floor, this.viewOptions.ceil);
    let percent = fn(val, this.viewOptions.floor, this.viewOptions.ceil);
    if (ValueHelper.isNullOrUndefined(percent)) {
      percent = 0;
    }
    if (this.viewOptions.rightToLeft) {
      percent = 1 - percent;
    }
    return percent * this.maxHandlePosition;
  }
  // Translate position to model value
  positionToValue(position) {
    let percent = position / this.maxHandlePosition;
    if (this.viewOptions.rightToLeft) {
      percent = 1 - percent;
    }
    let fn = ValueHelper.linearPositionToValue;
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.customPositionToValue)) {
      fn = this.viewOptions.customPositionToValue;
    } else if (this.viewOptions.logScale) {
      fn = ValueHelper.logPositionToValue;
    }
    const value = fn(percent, this.viewOptions.floor, this.viewOptions.ceil);
    return !ValueHelper.isNullOrUndefined(value) ? value : 0;
  }
  // Get the X-coordinate or Y-coordinate of an event
  getEventXY(event, targetTouchId) {
    if (event instanceof MouseEvent) {
      return this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? event.clientY : event.clientX;
    }
    let touchIndex = 0;
    const touches = event.touches;
    if (!ValueHelper.isNullOrUndefined(targetTouchId)) {
      for (let i = 0; i < touches.length; i++) {
        if (touches[i].identifier === targetTouchId) {
          touchIndex = i;
          break;
        }
      }
    }
    // Return the target touch or if the target touch was not found in the event
    // returns the coordinates of the first touch
    return this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? touches[touchIndex].clientY : touches[touchIndex].clientX;
  }
  // Compute the event position depending on whether the slider is horizontal or vertical
  getEventPosition(event, targetTouchId) {
    const sliderElementBoundingRect = this.elementRef.nativeElement.getBoundingClientRect();
    const sliderPos = this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? sliderElementBoundingRect.bottom : sliderElementBoundingRect.left;
    let eventPos = 0;
    if (this.viewOptions.vertical || this.viewOptions.rotate !== 0) {
      eventPos = -this.getEventXY(event, targetTouchId) + sliderPos;
    } else {
      eventPos = this.getEventXY(event, targetTouchId) - sliderPos;
    }
    return eventPos * this.viewOptions.scale - this.handleHalfDimension;
  }
  // Get the handle closest to an event
  getNearestHandle(event) {
    if (!this.range) {
      return PointerType.Min;
    }
    const position = this.getEventPosition(event);
    const distanceMin = Math.abs(position - this.minHandleElement.position);
    const distanceMax = Math.abs(position - this.maxHandleElement.position);
    if (distanceMin < distanceMax) {
      return PointerType.Min;
    } else if (distanceMin > distanceMax) {
      return PointerType.Max;
    } else if (!this.viewOptions.rightToLeft) {
      // if event is at the same distance from min/max then if it's at left of minH, we return minH else maxH
      return position < this.minHandleElement.position ? PointerType.Min : PointerType.Max;
    }
    // reverse in rtl
    return position > this.minHandleElement.position ? PointerType.Min : PointerType.Max;
  }
  // Bind mouse and touch events to slider handles
  bindEvents() {
    const draggableRange = this.viewOptions.draggableRange;
    if (!this.viewOptions.onlyBindHandles) {
      this.selectionBarElement.on('mousedown', event => this.onBarStart(null, draggableRange, event, true, true, true));
    }
    if (this.viewOptions.draggableRangeOnly) {
      this.minHandleElement.on('mousedown', event => this.onBarStart(PointerType.Min, draggableRange, event, true, true));
      this.maxHandleElement.on('mousedown', event => this.onBarStart(PointerType.Max, draggableRange, event, true, true));
    } else {
      this.minHandleElement.on('mousedown', event => this.onStart(PointerType.Min, event, true, true));
      if (this.range) {
        this.maxHandleElement.on('mousedown', event => this.onStart(PointerType.Max, event, true, true));
      }
      if (!this.viewOptions.onlyBindHandles) {
        this.fullBarElement.on('mousedown', event => this.onStart(null, event, true, true, true));
        this.ticksElement.on('mousedown', event => this.onStart(null, event, true, true, true, true));
      }
    }
    if (!this.viewOptions.onlyBindHandles) {
      this.selectionBarElement.onPassive('touchstart', event => this.onBarStart(null, draggableRange, event, true, true, true));
    }
    if (this.viewOptions.draggableRangeOnly) {
      this.minHandleElement.onPassive('touchstart', event => this.onBarStart(PointerType.Min, draggableRange, event, true, true));
      this.maxHandleElement.onPassive('touchstart', event => this.onBarStart(PointerType.Max, draggableRange, event, true, true));
    } else {
      this.minHandleElement.onPassive('touchstart', event => this.onStart(PointerType.Min, event, true, true));
      if (this.range) {
        this.maxHandleElement.onPassive('touchstart', event => this.onStart(PointerType.Max, event, true, true));
      }
      if (!this.viewOptions.onlyBindHandles) {
        this.fullBarElement.onPassive('touchstart', event => this.onStart(null, event, true, true, true));
        this.ticksElement.onPassive('touchstart', event => this.onStart(null, event, false, false, true, true));
      }
    }
    if (this.viewOptions.keyboardSupport) {
      this.minHandleElement.on('focus', () => this.onPointerFocus(PointerType.Min));
      if (this.range) {
        this.maxHandleElement.on('focus', () => this.onPointerFocus(PointerType.Max));
      }
    }
  }
  getOptionsInfluencingEventBindings(options) {
    return [options.disabled, options.readOnly, options.draggableRange, options.draggableRangeOnly, options.onlyBindHandles, options.keyboardSupport];
  }
  // Unbind mouse and touch events to slider handles
  unbindEvents() {
    this.unsubscribeOnMove();
    this.unsubscribeOnEnd();
    for (const element of this.getAllSliderElements()) {
      if (!ValueHelper.isNullOrUndefined(element)) {
        element.off();
      }
    }
  }
  onBarStart(pointerType, draggableRange, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
    if (draggableRange) {
      this.onDragStart(pointerType, event, bindMove, bindEnd);
    } else {
      this.onStart(pointerType, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd);
    }
  }
  // onStart event handler
  onStart(pointerType, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
    event.stopPropagation();
    // Only call preventDefault() when handling non-passive events (passive events don't need it)
    if (!CompatibilityHelper.isTouchEvent(event) && !detect_passive_events__WEBPACK_IMPORTED_MODULE_1__.supportsPassiveEvents) {
      event.preventDefault();
    }
    this.moving = false;
    // We have to do this in case the HTML where the sliders are on
    // have been animated into view.
    this.calculateViewDimensions();
    if (ValueHelper.isNullOrUndefined(pointerType)) {
      pointerType = this.getNearestHandle(event);
    }
    this.currentTrackingPointer = pointerType;
    const pointerElement = this.getPointerElement(pointerType);
    pointerElement.active = true;
    if (this.viewOptions.keyboardSupport) {
      pointerElement.focus();
    }
    if (bindMove) {
      this.unsubscribeOnMove();
      const onMoveCallback = e => this.dragging.active ? this.onDragMove(e) : this.onMove(e);
      if (CompatibilityHelper.isTouchEvent(event)) {
        this.onMoveEventListener = this.eventListenerHelper.attachPassiveEventListener(document, 'touchmove', onMoveCallback);
      } else {
        this.onMoveEventListener = this.eventListenerHelper.attachEventListener(document, 'mousemove', onMoveCallback);
      }
    }
    if (bindEnd) {
      this.unsubscribeOnEnd();
      const onEndCallback = e => this.onEnd(e);
      if (CompatibilityHelper.isTouchEvent(event)) {
        this.onEndEventListener = this.eventListenerHelper.attachPassiveEventListener(document, 'touchend', onEndCallback);
      } else {
        this.onEndEventListener = this.eventListenerHelper.attachEventListener(document, 'mouseup', onEndCallback);
      }
    }
    this.userChangeStart.emit(this.getChangeContext());
    if (CompatibilityHelper.isTouchEvent(event) && !ValueHelper.isNullOrUndefined(event.changedTouches)) {
      // Store the touch identifier
      if (ValueHelper.isNullOrUndefined(this.touchId)) {
        this.touchId = event.changedTouches[0].identifier;
      }
    }
    // Click events, either with mouse or touch gesture are weird. Sometimes they result in full
    // start, move, end sequence, and sometimes, they don't - they only invoke mousedown
    // As a workaround, we simulate the first move event and the end event if it's necessary
    if (simulateImmediateMove) {
      this.onMove(event, true);
    }
    if (simulateImmediateEnd) {
      this.onEnd(event);
    }
  }
  // onMove event handler
  onMove(event, fromTick) {
    let touchForThisSlider = null;
    if (CompatibilityHelper.isTouchEvent(event)) {
      const changedTouches = event.changedTouches;
      for (let i = 0; i < changedTouches.length; i++) {
        if (changedTouches[i].identifier === this.touchId) {
          touchForThisSlider = changedTouches[i];
          break;
        }
      }
      if (ValueHelper.isNullOrUndefined(touchForThisSlider)) {
        return;
      }
    }
    if (this.viewOptions.animate && !this.viewOptions.animateOnMove) {
      if (this.moving) {
        this.sliderElementAnimateClass = false;
      }
    }
    this.moving = true;
    const newPos = !ValueHelper.isNullOrUndefined(touchForThisSlider) ? this.getEventPosition(event, touchForThisSlider.identifier) : this.getEventPosition(event);
    let newValue;
    const ceilValue = this.viewOptions.rightToLeft ? this.viewOptions.floor : this.viewOptions.ceil;
    const floorValue = this.viewOptions.rightToLeft ? this.viewOptions.ceil : this.viewOptions.floor;
    if (newPos <= 0) {
      newValue = floorValue;
    } else if (newPos >= this.maxHandlePosition) {
      newValue = ceilValue;
    } else {
      newValue = this.positionToValue(newPos);
      if (fromTick && !ValueHelper.isNullOrUndefined(this.viewOptions.tickStep)) {
        newValue = this.roundStep(newValue, this.viewOptions.tickStep);
      } else {
        newValue = this.roundStep(newValue);
      }
    }
    this.positionTrackingHandle(newValue);
  }
  onEnd(event) {
    if (CompatibilityHelper.isTouchEvent(event)) {
      const changedTouches = event.changedTouches;
      if (changedTouches[0].identifier !== this.touchId) {
        return;
      }
    }
    this.moving = false;
    if (this.viewOptions.animate) {
      this.sliderElementAnimateClass = true;
    }
    this.touchId = null;
    if (!this.viewOptions.keyboardSupport) {
      this.minHandleElement.active = false;
      this.maxHandleElement.active = false;
      this.currentTrackingPointer = null;
    }
    this.dragging.active = false;
    this.unsubscribeOnMove();
    this.unsubscribeOnEnd();
    this.userChangeEnd.emit(this.getChangeContext());
  }
  onPointerFocus(pointerType) {
    const pointerElement = this.getPointerElement(pointerType);
    pointerElement.on('blur', () => this.onPointerBlur(pointerElement));
    pointerElement.on('keydown', event => this.onKeyboardEvent(event));
    pointerElement.on('keyup', () => this.onKeyUp());
    pointerElement.active = true;
    this.currentTrackingPointer = pointerType;
    this.currentFocusPointer = pointerType;
    this.firstKeyDown = true;
  }
  onKeyUp() {
    this.firstKeyDown = true;
    this.userChangeEnd.emit(this.getChangeContext());
  }
  onPointerBlur(pointer) {
    pointer.off('blur');
    pointer.off('keydown');
    pointer.off('keyup');
    pointer.active = false;
    if (ValueHelper.isNullOrUndefined(this.touchId)) {
      this.currentTrackingPointer = null;
      this.currentFocusPointer = null;
    }
  }
  getKeyActions(currentValue) {
    const valueRange = this.viewOptions.ceil - this.viewOptions.floor;
    let increaseStep = currentValue + this.viewOptions.step;
    let decreaseStep = currentValue - this.viewOptions.step;
    let increasePage = currentValue + valueRange / 10;
    let decreasePage = currentValue - valueRange / 10;
    if (this.viewOptions.reversedControls) {
      increaseStep = currentValue - this.viewOptions.step;
      decreaseStep = currentValue + this.viewOptions.step;
      increasePage = currentValue - valueRange / 10;
      decreasePage = currentValue + valueRange / 10;
    }
    // Left to right default actions
    const actions = {
      UP: increaseStep,
      DOWN: decreaseStep,
      LEFT: decreaseStep,
      RIGHT: increaseStep,
      PAGEUP: increasePage,
      PAGEDOWN: decreasePage,
      HOME: this.viewOptions.reversedControls ? this.viewOptions.ceil : this.viewOptions.floor,
      END: this.viewOptions.reversedControls ? this.viewOptions.floor : this.viewOptions.ceil
    };
    // right to left means swapping right and left arrows
    if (this.viewOptions.rightToLeft) {
      actions.LEFT = increaseStep;
      actions.RIGHT = decreaseStep;
      // right to left and vertical means we also swap up and down
      if (this.viewOptions.vertical || this.viewOptions.rotate !== 0) {
        actions.UP = decreaseStep;
        actions.DOWN = increaseStep;
      }
    }
    return actions;
  }
  onKeyboardEvent(event) {
    const currentValue = this.getCurrentTrackingValue();
    const keyCode = !ValueHelper.isNullOrUndefined(event.keyCode) ? event.keyCode : event.which;
    const keys = {
      38: 'UP',
      40: 'DOWN',
      37: 'LEFT',
      39: 'RIGHT',
      33: 'PAGEUP',
      34: 'PAGEDOWN',
      36: 'HOME',
      35: 'END'
    };
    const actions = this.getKeyActions(currentValue);
    const key = keys[keyCode];
    const action = actions[key];
    if (ValueHelper.isNullOrUndefined(action) || ValueHelper.isNullOrUndefined(this.currentTrackingPointer)) {
      return;
    }
    event.preventDefault();
    if (this.firstKeyDown) {
      this.firstKeyDown = false;
      this.userChangeStart.emit(this.getChangeContext());
    }
    const actionValue = MathHelper.clampToRange(action, this.viewOptions.floor, this.viewOptions.ceil);
    const newValue = this.roundStep(actionValue);
    if (!this.viewOptions.draggableRangeOnly) {
      this.positionTrackingHandle(newValue);
    } else {
      const difference = this.viewHighValue - this.viewLowValue;
      let newMinValue;
      let newMaxValue;
      if (this.currentTrackingPointer === PointerType.Min) {
        newMinValue = newValue;
        newMaxValue = newValue + difference;
        if (newMaxValue > this.viewOptions.ceil) {
          newMaxValue = this.viewOptions.ceil;
          newMinValue = newMaxValue - difference;
        }
      } else if (this.currentTrackingPointer === PointerType.Max) {
        newMaxValue = newValue;
        newMinValue = newValue - difference;
        if (newMinValue < this.viewOptions.floor) {
          newMinValue = this.viewOptions.floor;
          newMaxValue = newMinValue + difference;
        }
      }
      this.positionTrackingBar(newMinValue, newMaxValue);
    }
  }
  // onDragStart event handler, handles dragging of the middle bar
  onDragStart(pointerType, event, bindMove, bindEnd) {
    const position = this.getEventPosition(event);
    this.dragging = new Dragging();
    this.dragging.active = true;
    this.dragging.value = this.positionToValue(position);
    this.dragging.difference = this.viewHighValue - this.viewLowValue;
    this.dragging.lowLimit = this.viewOptions.rightToLeft ? this.minHandleElement.position - position : position - this.minHandleElement.position;
    this.dragging.highLimit = this.viewOptions.rightToLeft ? position - this.maxHandleElement.position : this.maxHandleElement.position - position;
    this.onStart(pointerType, event, bindMove, bindEnd);
  }
  /** Get min value depending on whether the newPos is outOfBounds above or below the bar and rightToLeft */
  getMinValue(newPos, outOfBounds, isAbove) {
    const isRTL = this.viewOptions.rightToLeft;
    let value = null;
    if (outOfBounds) {
      if (isAbove) {
        value = isRTL ? this.viewOptions.floor : this.viewOptions.ceil - this.dragging.difference;
      } else {
        value = isRTL ? this.viewOptions.ceil - this.dragging.difference : this.viewOptions.floor;
      }
    } else {
      value = isRTL ? this.positionToValue(newPos + this.dragging.lowLimit) : this.positionToValue(newPos - this.dragging.lowLimit);
    }
    return this.roundStep(value);
  }
  /** Get max value depending on whether the newPos is outOfBounds above or below the bar and rightToLeft */
  getMaxValue(newPos, outOfBounds, isAbove) {
    const isRTL = this.viewOptions.rightToLeft;
    let value = null;
    if (outOfBounds) {
      if (isAbove) {
        value = isRTL ? this.viewOptions.floor + this.dragging.difference : this.viewOptions.ceil;
      } else {
        value = isRTL ? this.viewOptions.ceil : this.viewOptions.floor + this.dragging.difference;
      }
    } else {
      if (isRTL) {
        value = this.positionToValue(newPos + this.dragging.lowLimit) + this.dragging.difference;
      } else {
        value = this.positionToValue(newPos - this.dragging.lowLimit) + this.dragging.difference;
      }
    }
    return this.roundStep(value);
  }
  onDragMove(event) {
    const newPos = this.getEventPosition(event);
    if (this.viewOptions.animate && !this.viewOptions.animateOnMove) {
      if (this.moving) {
        this.sliderElementAnimateClass = false;
      }
    }
    this.moving = true;
    let ceilLimit, floorLimit, floorHandleElement, ceilHandleElement;
    if (this.viewOptions.rightToLeft) {
      ceilLimit = this.dragging.lowLimit;
      floorLimit = this.dragging.highLimit;
      floorHandleElement = this.maxHandleElement;
      ceilHandleElement = this.minHandleElement;
    } else {
      ceilLimit = this.dragging.highLimit;
      floorLimit = this.dragging.lowLimit;
      floorHandleElement = this.minHandleElement;
      ceilHandleElement = this.maxHandleElement;
    }
    const isUnderFloorLimit = newPos <= floorLimit;
    const isOverCeilLimit = newPos >= this.maxHandlePosition - ceilLimit;
    let newMinValue;
    let newMaxValue;
    if (isUnderFloorLimit) {
      if (floorHandleElement.position === 0) {
        return;
      }
      newMinValue = this.getMinValue(newPos, true, false);
      newMaxValue = this.getMaxValue(newPos, true, false);
    } else if (isOverCeilLimit) {
      if (ceilHandleElement.position === this.maxHandlePosition) {
        return;
      }
      newMaxValue = this.getMaxValue(newPos, true, true);
      newMinValue = this.getMinValue(newPos, true, true);
    } else {
      newMinValue = this.getMinValue(newPos, false, false);
      newMaxValue = this.getMaxValue(newPos, false, false);
    }
    this.positionTrackingBar(newMinValue, newMaxValue);
  }
  // Set the new value and position for the entire bar
  positionTrackingBar(newMinValue, newMaxValue) {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.minLimit) && newMinValue < this.viewOptions.minLimit) {
      newMinValue = this.viewOptions.minLimit;
      newMaxValue = MathHelper.roundToPrecisionLimit(newMinValue + this.dragging.difference, this.viewOptions.precisionLimit);
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxLimit) && newMaxValue > this.viewOptions.maxLimit) {
      newMaxValue = this.viewOptions.maxLimit;
      newMinValue = MathHelper.roundToPrecisionLimit(newMaxValue - this.dragging.difference, this.viewOptions.precisionLimit);
    }
    this.viewLowValue = newMinValue;
    this.viewHighValue = newMaxValue;
    this.applyViewChange();
    this.updateHandles(PointerType.Min, this.valueToPosition(newMinValue));
    this.updateHandles(PointerType.Max, this.valueToPosition(newMaxValue));
  }
  // Set the new value and position to the current tracking handle
  positionTrackingHandle(newValue) {
    newValue = this.applyMinMaxLimit(newValue);
    if (this.range) {
      if (this.viewOptions.pushRange) {
        newValue = this.applyPushRange(newValue);
      } else {
        if (this.viewOptions.noSwitching) {
          if (this.currentTrackingPointer === PointerType.Min && newValue > this.viewHighValue) {
            newValue = this.applyMinMaxRange(this.viewHighValue);
          } else if (this.currentTrackingPointer === PointerType.Max && newValue < this.viewLowValue) {
            newValue = this.applyMinMaxRange(this.viewLowValue);
          }
        }
        newValue = this.applyMinMaxRange(newValue);
        /* This is to check if we need to switch the min and max handles */
        if (this.currentTrackingPointer === PointerType.Min && newValue > this.viewHighValue) {
          this.viewLowValue = this.viewHighValue;
          this.applyViewChange();
          this.updateHandles(PointerType.Min, this.maxHandleElement.position);
          this.updateAriaAttributes();
          this.currentTrackingPointer = PointerType.Max;
          this.minHandleElement.active = false;
          this.maxHandleElement.active = true;
          if (this.viewOptions.keyboardSupport) {
            this.maxHandleElement.focus();
          }
        } else if (this.currentTrackingPointer === PointerType.Max && newValue < this.viewLowValue) {
          this.viewHighValue = this.viewLowValue;
          this.applyViewChange();
          this.updateHandles(PointerType.Max, this.minHandleElement.position);
          this.updateAriaAttributes();
          this.currentTrackingPointer = PointerType.Min;
          this.maxHandleElement.active = false;
          this.minHandleElement.active = true;
          if (this.viewOptions.keyboardSupport) {
            this.minHandleElement.focus();
          }
        }
      }
    }
    if (this.getCurrentTrackingValue() !== newValue) {
      if (this.currentTrackingPointer === PointerType.Min) {
        this.viewLowValue = newValue;
        this.applyViewChange();
      } else if (this.currentTrackingPointer === PointerType.Max) {
        this.viewHighValue = newValue;
        this.applyViewChange();
      }
      this.updateHandles(this.currentTrackingPointer, this.valueToPosition(newValue));
      this.updateAriaAttributes();
    }
  }
  applyMinMaxLimit(newValue) {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.minLimit) && newValue < this.viewOptions.minLimit) {
      return this.viewOptions.minLimit;
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxLimit) && newValue > this.viewOptions.maxLimit) {
      return this.viewOptions.maxLimit;
    }
    return newValue;
  }
  applyMinMaxRange(newValue) {
    const oppositeValue = this.currentTrackingPointer === PointerType.Min ? this.viewHighValue : this.viewLowValue;
    const difference = Math.abs(newValue - oppositeValue);
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.minRange)) {
      if (difference < this.viewOptions.minRange) {
        if (this.currentTrackingPointer === PointerType.Min) {
          return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.minRange, this.viewOptions.precisionLimit);
        } else if (this.currentTrackingPointer === PointerType.Max) {
          return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.minRange, this.viewOptions.precisionLimit);
        }
      }
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxRange)) {
      if (difference > this.viewOptions.maxRange) {
        if (this.currentTrackingPointer === PointerType.Min) {
          return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.maxRange, this.viewOptions.precisionLimit);
        } else if (this.currentTrackingPointer === PointerType.Max) {
          return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.maxRange, this.viewOptions.precisionLimit);
        }
      }
    }
    return newValue;
  }
  applyPushRange(newValue) {
    const difference = this.currentTrackingPointer === PointerType.Min ? this.viewHighValue - newValue : newValue - this.viewLowValue;
    const minRange = !ValueHelper.isNullOrUndefined(this.viewOptions.minRange) ? this.viewOptions.minRange : this.viewOptions.step;
    const maxRange = this.viewOptions.maxRange;
    // if smaller than minRange
    if (difference < minRange) {
      if (this.currentTrackingPointer === PointerType.Min) {
        this.viewHighValue = MathHelper.roundToPrecisionLimit(Math.min(newValue + minRange, this.viewOptions.ceil), this.viewOptions.precisionLimit);
        newValue = MathHelper.roundToPrecisionLimit(this.viewHighValue - minRange, this.viewOptions.precisionLimit);
        this.applyViewChange();
        this.updateHandles(PointerType.Max, this.valueToPosition(this.viewHighValue));
      } else if (this.currentTrackingPointer === PointerType.Max) {
        this.viewLowValue = MathHelper.roundToPrecisionLimit(Math.max(newValue - minRange, this.viewOptions.floor), this.viewOptions.precisionLimit);
        newValue = MathHelper.roundToPrecisionLimit(this.viewLowValue + minRange, this.viewOptions.precisionLimit);
        this.applyViewChange();
        this.updateHandles(PointerType.Min, this.valueToPosition(this.viewLowValue));
      }
      this.updateAriaAttributes();
    } else if (!ValueHelper.isNullOrUndefined(maxRange) && difference > maxRange) {
      // if greater than maxRange
      if (this.currentTrackingPointer === PointerType.Min) {
        this.viewHighValue = MathHelper.roundToPrecisionLimit(newValue + maxRange, this.viewOptions.precisionLimit);
        this.applyViewChange();
        this.updateHandles(PointerType.Max, this.valueToPosition(this.viewHighValue));
      } else if (this.currentTrackingPointer === PointerType.Max) {
        this.viewLowValue = MathHelper.roundToPrecisionLimit(newValue - maxRange, this.viewOptions.precisionLimit);
        this.applyViewChange();
        this.updateHandles(PointerType.Min, this.valueToPosition(this.viewLowValue));
      }
      this.updateAriaAttributes();
    }
    return newValue;
  }
  getChangeContext() {
    const changeContext = new ChangeContext();
    changeContext.pointerType = this.currentTrackingPointer;
    changeContext.value = +this.value;
    if (this.range) {
      changeContext.highValue = +this.highValue;
    }
    return changeContext;
  }
  static ɵfac = function SliderComponent_Factory(t) {
    return new (t || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](AllowUnsafeHtmlInSlider, 8));
  };
  static ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SliderComponent,
    selectors: [["ngx-slider"]],
    contentQueries: function SliderComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tooltipTemplate = _t.first);
      }
    },
    viewQuery: function SliderComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, 5, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 5, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, 5, SliderHandleDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, 5, SliderHandleDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c8, 5, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c9, 5, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c10, 5, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c11, 5, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c12, 5, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c13, 5, SliderElementDirective);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.leftOuterSelectionBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rightOuterSelectionBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fullBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.selectionBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.minHandleElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.maxHandleElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.floorLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ceilLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.minHandleLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.maxHandleLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.combinedLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ticksElement = _t.first);
      }
    },
    hostVars: 10,
    hostBindings: function SliderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SliderComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.sliderElementDisabledAttr)("aria-label", ctx.sliderElementAriaLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-slider", ctx.sliderElementNgxSliderClass)("vertical", ctx.sliderElementVerticalClass)("animate", ctx.sliderElementAnimateClass)("with-legend", ctx.sliderElementWithLegendClass);
      }
    },
    inputs: {
      value: "value",
      highValue: "highValue",
      options: "options",
      manualRefresh: "manualRefresh",
      triggerFocus: "triggerFocus"
    },
    outputs: {
      valueChange: "valueChange",
      highValueChange: "highValueChange",
      userChangeStart: "userChangeStart",
      userChange: "userChange",
      userChangeEnd: "userChangeEnd"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([NGX_SLIDER_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 29,
    vars: 13,
    consts: [["leftOuterSelectionBar", ""], ["rightOuterSelectionBar", ""], ["fullBar", ""], ["selectionBar", ""], ["minHandle", ""], ["maxHandle", ""], ["floorLabel", ""], ["ceilLabel", ""], ["minHandleLabel", ""], ["maxHandleLabel", ""], ["combinedLabel", ""], ["ticksElement", ""], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-left-out-selection"], [1, "ngx-slider-span", "ngx-slider-bar"], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-right-out-selection"], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-full-bar"], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-selection-bar"], [1, "ngx-slider-span", "ngx-slider-bar", "ngx-slider-selection", 3, "ngStyle"], ["ngxSliderHandle", "", 1, "ngx-slider-span", "ngx-slider-pointer", "ngx-slider-pointer-min", 3, "ngStyle"], ["ngxSliderHandle", "", 1, "ngx-slider-span", "ngx-slider-pointer", "ngx-slider-pointer-max", 3, "ngStyle"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-limit", "ngx-slider-floor"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-limit", "ngx-slider-ceil"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-model-value"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-model-high"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-combined"], ["ngxSliderElement", "", 1, "ngx-slider-ticks", 3, "hidden"], ["class", "ngx-slider-tick", 3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], [1, "ngx-slider-tick", 3, "ngClass", "ngStyle"], [3, "template", "tooltip", "placement"], ["class", "ngx-slider-span ngx-slider-tick-value", 3, "template", "tooltip", "placement", "content", 4, "ngIf"], ["class", "ngx-slider-span ngx-slider-tick-legend", 3, "innerText", 4, "ngIf"], ["class", "ngx-slider-span ngx-slider-tick-legend", 3, "innerHTML", 4, "ngIf"], [1, "ngx-slider-span", "ngx-slider-tick-value", 3, "template", "tooltip", "placement", "content"], [1, "ngx-slider-span", "ngx-slider-tick-legend", 3, "innerText"], [1, "ngx-slider-span", "ngx-slider-tick-legend", 3, "innerHTML"]],
    template: function SliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 12, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 15, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 16, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 18, 4)(14, "span", 19, 5)(16, "span", 20, 6)(18, "span", 21, 7)(20, "span", 22, 8)(22, "span", 23, 9)(24, "span", 24, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 25, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, SliderComponent_span_28_Template, 5, 10, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-slider-transparent", ctx.fullBarTransparentClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-slider-draggable", ctx.selectionBarDraggableClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.barStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.minPointerStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.range ? "inherit" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.maxPointerStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ngx-slider-ticks-values-under", ctx.ticksUnderValuesClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ticks);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, SliderElementDirective, SliderHandleDirective, SliderLabelDirective, TooltipWrapperComponent],
    styles: [".ngx-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;user-select:none;touch-action:pan-y}  .ngx-slider.with-legend{margin-bottom:40px}  .ngx-slider[disabled]{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}  .ngx-slider[disabled] .ngx-slider-draggable{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-selection{background:#8b91a2}  .ngx-slider[disabled] .ngx-slider-tick{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-tick.ngx-slider-selected{background:#8b91a2}  .ngx-slider .ngx-slider-span{white-space:nowrap;position:absolute;display:inline-block}  .ngx-slider .ngx-slider-base{width:100%;height:100%;padding:0}  .ngx-slider .ngx-slider-bar-wrapper{left:0;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}  .ngx-slider .ngx-slider-draggable{cursor:move}  .ngx-slider .ngx-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-transparent .ngx-slider-bar{background:transparent}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-left-out-selection .ngx-slider-bar{background:#df002d}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-right-out-selection .ngx-slider-bar{background:#03a688}  .ngx-slider .ngx-slider-selection{z-index:2;background:#0db9f0;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}  .ngx-slider .ngx-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px}  .ngx-slider .ngx-slider-pointer:after{content:\"\";width:8px;height:8px;position:absolute;top:12px;left:12px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:#fff}  .ngx-slider .ngx-slider-pointer:hover:after{background-color:#fff}  .ngx-slider .ngx-slider-pointer.ngx-slider-active{z-index:4}  .ngx-slider .ngx-slider-pointer.ngx-slider-active:after{background-color:#451aff}  .ngx-slider .ngx-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}  .ngx-slider .ngx-slider-bubble.ngx-slider-limit{color:#55637d}  .ngx-slider .ngx-slider-ticks{box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}  .ngx-slider .ngx-slider-ticks-values-under .ngx-slider-tick-value{top:auto;bottom:-36px}  .ngx-slider .ngx-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}  .ngx-slider .ngx-slider-tick.ngx-slider-selected{background:#0db9f0}  .ngx-slider .ngx-slider-tick-value{position:absolute;top:-34px;transform:translate(-50%)}  .ngx-slider .ngx-slider-tick-legend{position:absolute;top:24px;transform:translate(-50%);max-width:50px;white-space:normal}  .ngx-slider.vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;touch-action:pan-x}  .ngx-slider.vertical .ngx-slider-base{width:100%;height:100%;padding:0}  .ngx-slider.vertical .ngx-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}  .ngx-slider.vertical .ngx-slider-bar{bottom:0;left:auto;width:4px;height:100%}  .ngx-slider.vertical .ngx-slider-pointer{left:-14px!important;top:auto;bottom:0}  .ngx-slider.vertical .ngx-slider-bubble{left:16px!important;bottom:0}  .ngx-slider.vertical .ngx-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}  .ngx-slider.vertical .ngx-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}  .ngx-slider.vertical .ngx-slider-tick-value{left:24px;top:auto;transform:translateY(-28%)}  .ngx-slider.vertical .ngx-slider-tick-legend{top:auto;right:24px;transform:translateY(-28%);max-width:none;white-space:nowrap}  .ngx-slider.vertical .ngx-slider-ticks-values-under .ngx-slider-tick-value{bottom:auto;left:auto;right:24px}  .ngx-slider *{transition:none}  .ngx-slider.animate .ngx-slider-bar-wrapper{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-selection{transition:background-color linear .3s}  .ngx-slider.animate .ngx-slider-pointer{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-pointer:after{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-bubble{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-bubble.ngx-slider-limit{transition:opacity linear .3s}  .ngx-slider.animate .ngx-slider-bubble.ngx-slider-combined{transition:opacity linear .3s}  .ngx-slider.animate .ngx-slider-tick{transition:background-color linear .3s}"]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'ngx-slider',
      providers: [NGX_SLIDER_CONTROL_VALUE_ACCESSOR],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.Default,
      template: "<!-- // 0 Left selection bar outside two handles -->\n<span ngxSliderElement #leftOuterSelectionBar class=\"ngx-slider-span ngx-slider-bar-wrapper ngx-slider-left-out-selection\">\n  <span class=\"ngx-slider-span ngx-slider-bar\"></span>\n</span>\n<!-- // 1 Right selection bar outside two handles -->\n<span ngxSliderElement #rightOuterSelectionBar class=\"ngx-slider-span ngx-slider-bar-wrapper ngx-slider-right-out-selection\">\n  <span class=\"ngx-slider-span ngx-slider-bar\"></span>\n</span>\n<!-- // 2 The whole slider bar -->\n<span ngxSliderElement #fullBar [class.ngx-slider-transparent]=\"fullBarTransparentClass\" class=\"ngx-slider-span ngx-slider-bar-wrapper ngx-slider-full-bar\">\n  <span class=\"ngx-slider-span ngx-slider-bar\"></span>\n</span>\n<!-- // 3 Selection bar between two handles -->\n<span ngxSliderElement #selectionBar [class.ngx-slider-draggable]=\"selectionBarDraggableClass\" class=\"ngx-slider-span ngx-slider-bar-wrapper ngx-slider-selection-bar\">\n  <span class=\"ngx-slider-span ngx-slider-bar ngx-slider-selection\" [ngStyle]=\"barStyle\"></span>\n</span>\n<!-- // 4 Low slider handle -->\n<span ngxSliderHandle #minHandle class=\"ngx-slider-span ngx-slider-pointer ngx-slider-pointer-min\" [ngStyle]=minPointerStyle></span>\n<!-- // 5 High slider handle -->\n<span ngxSliderHandle #maxHandle [style.display]=\"range ? 'inherit' : 'none'\" class=\"ngx-slider-span ngx-slider-pointer ngx-slider-pointer-max\" [ngStyle]=maxPointerStyle></span>\n<!-- // 6 Floor label -->\n<span ngxSliderLabel #floorLabel class=\"ngx-slider-span ngx-slider-bubble ngx-slider-limit ngx-slider-floor\"></span>\n<!-- // 7 Ceiling label -->\n<span ngxSliderLabel #ceilLabel class=\"ngx-slider-span ngx-slider-bubble ngx-slider-limit ngx-slider-ceil\"></span>\n<!-- // 8 Label above the low slider handle -->\n<span ngxSliderLabel #minHandleLabel class=\"ngx-slider-span ngx-slider-bubble ngx-slider-model-value\"></span>\n<!-- // 9 Label above the high slider handle -->\n<span ngxSliderLabel #maxHandleLabel class=\"ngx-slider-span ngx-slider-bubble ngx-slider-model-high\"></span>\n<!-- // 10 Combined range label when the slider handles are close ex. 15 - 17 -->\n<span ngxSliderLabel #combinedLabel class=\"ngx-slider-span ngx-slider-bubble ngx-slider-combined\"></span>\n<!-- // 11 The ticks -->\n<span ngxSliderElement #ticksElement [hidden]=\"!showTicks\" [class.ngx-slider-ticks-values-under]=\"ticksUnderValuesClass\" class=\"ngx-slider-ticks\">\n  <span *ngFor=\"let t of ticks\" class=\"ngx-slider-tick\" [ngClass]=\"{'ngx-slider-selected': t.selected}\" [ngStyle]=\"t.style\">\n    <ngx-slider-tooltip-wrapper [template]=\"tooltipTemplate\" [tooltip]=\"t.tooltip\" [placement]=\"t.tooltipPlacement\"></ngx-slider-tooltip-wrapper>\n    <ngx-slider-tooltip-wrapper *ngIf=\"t.value !== null && t.value !== undefined\" class=\"ngx-slider-span ngx-slider-tick-value\"\n        [template]=\"tooltipTemplate\" [tooltip]=\"t.valueTooltip\" [placement]=\"t.valueTooltipPlacement\" [content]=\"t.value\"></ngx-slider-tooltip-wrapper>\n    <span *ngIf=\"t.legend !== null && t.legend !== undefined && allowUnsafeHtmlInSlider === false\" class=\"ngx-slider-span ngx-slider-tick-legend\" [innerText]=\"t.legend\"></span>\n    <span *ngIf=\"t.legend !== null && t.legend !== undefined && (allowUnsafeHtmlInSlider === null || allowUnsafeHtmlInSlider === undefined || allowUnsafeHtmlInSlider)\" class=\"ngx-slider-span ngx-slider-tick-legend\" [innerHTML]=\"t.legend\"></span>\n  </span>\n</span>",
      styles: ["::ng-deep .ngx-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;user-select:none;touch-action:pan-y}::ng-deep .ngx-slider.with-legend{margin-bottom:40px}::ng-deep .ngx-slider[disabled]{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}::ng-deep .ngx-slider[disabled] .ngx-slider-draggable{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-selection{background:#8b91a2}::ng-deep .ngx-slider[disabled] .ngx-slider-tick{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-tick.ngx-slider-selected{background:#8b91a2}::ng-deep .ngx-slider .ngx-slider-span{white-space:nowrap;position:absolute;display:inline-block}::ng-deep .ngx-slider .ngx-slider-base{width:100%;height:100%;padding:0}::ng-deep .ngx-slider .ngx-slider-bar-wrapper{left:0;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}::ng-deep .ngx-slider .ngx-slider-draggable{cursor:move}::ng-deep .ngx-slider .ngx-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-transparent .ngx-slider-bar{background:transparent}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-left-out-selection .ngx-slider-bar{background:#df002d}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-right-out-selection .ngx-slider-bar{background:#03a688}::ng-deep .ngx-slider .ngx-slider-selection{z-index:2;background:#0db9f0;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}::ng-deep .ngx-slider .ngx-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px}::ng-deep .ngx-slider .ngx-slider-pointer:after{content:\"\";width:8px;height:8px;position:absolute;top:12px;left:12px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:#fff}::ng-deep .ngx-slider .ngx-slider-pointer:hover:after{background-color:#fff}::ng-deep .ngx-slider .ngx-slider-pointer.ngx-slider-active{z-index:4}::ng-deep .ngx-slider .ngx-slider-pointer.ngx-slider-active:after{background-color:#451aff}::ng-deep .ngx-slider .ngx-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}::ng-deep .ngx-slider .ngx-slider-bubble.ngx-slider-limit{color:#55637d}::ng-deep .ngx-slider .ngx-slider-ticks{box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}::ng-deep .ngx-slider .ngx-slider-ticks-values-under .ngx-slider-tick-value{top:auto;bottom:-36px}::ng-deep .ngx-slider .ngx-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}::ng-deep .ngx-slider .ngx-slider-tick.ngx-slider-selected{background:#0db9f0}::ng-deep .ngx-slider .ngx-slider-tick-value{position:absolute;top:-34px;transform:translate(-50%)}::ng-deep .ngx-slider .ngx-slider-tick-legend{position:absolute;top:24px;transform:translate(-50%);max-width:50px;white-space:normal}::ng-deep .ngx-slider.vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;touch-action:pan-x}::ng-deep .ngx-slider.vertical .ngx-slider-base{width:100%;height:100%;padding:0}::ng-deep .ngx-slider.vertical .ngx-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}::ng-deep .ngx-slider.vertical .ngx-slider-bar{bottom:0;left:auto;width:4px;height:100%}::ng-deep .ngx-slider.vertical .ngx-slider-pointer{left:-14px!important;top:auto;bottom:0}::ng-deep .ngx-slider.vertical .ngx-slider-bubble{left:16px!important;bottom:0}::ng-deep .ngx-slider.vertical .ngx-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}::ng-deep .ngx-slider.vertical .ngx-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}::ng-deep .ngx-slider.vertical .ngx-slider-tick-value{left:24px;top:auto;transform:translateY(-28%)}::ng-deep .ngx-slider.vertical .ngx-slider-tick-legend{top:auto;right:24px;transform:translateY(-28%);max-width:none;white-space:nowrap}::ng-deep .ngx-slider.vertical .ngx-slider-ticks-values-under .ngx-slider-tick-value{bottom:auto;left:auto;right:24px}::ng-deep .ngx-slider *{transition:none}::ng-deep .ngx-slider.animate .ngx-slider-bar-wrapper{transition:all linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-selection{transition:background-color linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-pointer{transition:all linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-pointer:after{transition:all linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-bubble{transition:all linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-bubble.ngx-slider-limit{transition:opacity linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-bubble.ngx-slider-combined{transition:opacity linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-tick{transition:background-color linear .3s}\n"]
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
      args: [AllowUnsafeHtmlInSlider]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
    }]
  }], {
    sliderElementNgxSliderClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.ngx-slider']
    }],
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    valueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    highValue: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    highValueChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    userChangeStart: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    userChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    userChangeEnd: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    manualRefresh: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    triggerFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    leftOuterSelectionBarElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['leftOuterSelectionBar', {
        read: SliderElementDirective,
        static: false
      }]
    }],
    rightOuterSelectionBarElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['rightOuterSelectionBar', {
        read: SliderElementDirective,
        static: false
      }]
    }],
    fullBarElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['fullBar', {
        read: SliderElementDirective,
        static: false
      }]
    }],
    selectionBarElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['selectionBar', {
        read: SliderElementDirective,
        static: false
      }]
    }],
    minHandleElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['minHandle', {
        read: SliderHandleDirective,
        static: false
      }]
    }],
    maxHandleElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['maxHandle', {
        read: SliderHandleDirective,
        static: false
      }]
    }],
    floorLabelElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['floorLabel', {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    ceilLabelElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['ceilLabel', {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    minHandleLabelElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['minHandleLabel', {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    maxHandleLabelElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['maxHandleLabel', {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    combinedLabelElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['combinedLabel', {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    ticksElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['ticksElement', {
        read: SliderElementDirective,
        static: false
      }]
    }],
    tooltipTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: ['tooltipTemplate', {
        static: false
      }]
    }],
    sliderElementVerticalClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.vertical']
    }],
    sliderElementAnimateClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.animate']
    }],
    sliderElementWithLegendClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class.with-legend']
    }],
    sliderElementDisabledAttr: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.disabled']
    }],
    sliderElementAriaLabel: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['attr.aria-label']
    }],
    onResize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['window:resize', ['$event']]
    }]
  });
})();

/**
 * NgxSlider module
 *
 * The module exports the slider component
 */
class NgxSliderModule {
  static ɵfac = function NgxSliderModule_Factory(t) {
    return new (t || NgxSliderModule)();
  };
  static ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: NgxSliderModule
  });
  static ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxSliderModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule],
      declarations: [SliderComponent, SliderElementDirective, SliderHandleDirective, SliderLabelDirective, TooltipWrapperComponent],
      exports: [SliderComponent]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

};
;
//# sourceMappingURL=520.js.map