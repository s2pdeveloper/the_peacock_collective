"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([["src_app_features_template_template_module_ts"],{

/***/ 6705:
/*!************************************************************************!*\
  !*** ./src/app/features/template/component-a/component-a.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentAComponent: () => (/* binding */ ComponentAComponent)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ 9971);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);




function ComponentAComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ComponentAComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ComponentAComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class ComponentAComponent {
  constructor(router) {
    this.router = router;
    this.showNavigationArrows = false;
    this.showNavigationIndicators = false;
    this.products = [{
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
    this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.sample-slider', {
      loop: true,
      autoplay: {
        delay: 2000
      },
      pagination: {
        el: '.swiper-pagination'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }
  navigateTo(path) {
    this.router.navigate([path]);
  }
  static #_ = this.ɵfac = function ComponentAComponent_Factory(t) {
    return new (t || ComponentAComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ComponentAComponent,
    selectors: [["app-component-a"]],
    decls: 22,
    vars: 1,
    consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-11"], [1, "py-3", "text-color-primary"], [1, "pointer", 3, "click"], [1, "pointer"], [1, "col-10", "py-4"], [1, "text-center"], [1, "col-11", "my-4"], [3, "showNavigationIndicators"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["src", "../../../../assets/images/store1.jpg", "alt", "Random first slide", 1, "img-fluid"], ["src", "../../../../assets/images/store2.jpg", "alt", "Random second slide", 1, "img-fluid"], ["src", "../../../../assets/images/store1.jpg", "alt", "Random third slide", 1, "img-fluid"]],
    template: function ComponentAComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ComponentAComponent_Template_span_click_4_listener() {
          return ctx.navigateTo("/");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Component A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6)(13, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, eligendi. Placeat, vel? Consequuntur ut deleniti reprehenderit aspernatur illum a ab ad similique voluptates laborum asperiores error aperiam, qui, quam alias quaerat unde nulla! Illo repellendus delectus exercitationem, itaque odio dolor unde soluta ea pariatur molestias tempore quaerat nihil. Dignissimos, accusamus?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 8)(18, "ngb-carousel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ComponentAComponent_ng_template_19_Template, 2, 0, "ng-template", 10)(20, ComponentAComponent_ng_template_20_Template, 2, 0, "ng-template", 10)(21, ComponentAComponent_ng_template_21_Template, 2, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationIndicators", ctx.showNavigationIndicators);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbSlide],
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvdGVtcGxhdGUvY29tcG9uZW50LWEvY29tcG9uZW50LWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFFSiIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbmltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MHZoO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1449:
/*!************************************************************************!*\
  !*** ./src/app/features/template/component-b/component-b.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentBComponent: () => (/* binding */ ComponentBComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);



function ComponentBComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eum porro doloribus perferendis, corrupti architecto quibusdam eveniet officia autem quam rerum atque quae dicta cum. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function ComponentBComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eum porro doloribus perferendis, corrupti architecto quibusdam eveniet officia autem quam rerum atque quae dicta cum. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
function ComponentBComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eum porro doloribus perferendis, corrupti architecto quibusdam eveniet officia autem quam rerum atque quae dicta cum. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
}
class ComponentBComponent {
  constructor(router) {
    this.router = router;
    this.showNavigationIndicators = false;
  }
  navigateTo(path) {
    this.router.navigate([path]);
  }
  static #_ = this.ɵfac = function ComponentBComponent_Factory(t) {
    return new (t || ComponentBComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ComponentBComponent,
    selectors: [["app-component-b"]],
    decls: 22,
    vars: 1,
    consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-11"], [1, "py-3", "text-color-primary"], [1, "pointer", 3, "click"], [1, "pointer"], [1, "col-10", "py-4"], [1, "text-center"], [1, "col-12", "my-5", "py-5", "carousal-box"], [3, "showNavigationIndicators"], ["ngbSlide", ""], [1, "picsum-img-wrapper", "col-11", "col-md-10", "col-lg-5", "d-flex", "justify-content-center"], ["src", "../../../../assets/images/store1.jpg", "alt", "Random first slide", 1, "img-fluid", "w-75"], [1, "text-box", "col-10", "col-md-10", "col-lg-5", "d-flex", "flex-column", "justify-content-center"], [1, "picsum-img-wrapper", "col-10", "col-md-10", "col-lg-5", "d-flex", "justify-content-center"], ["src", "../../../../assets/images/store2.jpg", "alt", "Random second slide", 1, "img-fluid", "w-75"], ["src", "../../../../assets/images/store1.jpg", "alt", "Random third slide", 1, "img-fluid", "w-75"]],
    template: function ComponentBComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentBComponent_Template_span_click_4_listener() {
          return ctx.navigateTo("/");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Component B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6)(13, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, eligendi. Placeat, vel? Consequuntur ut deleniti reprehenderit aspernatur illum a ab ad similique voluptates laborum asperiores error aperiam, qui, quam alias quaerat unde nulla! Illo repellendus delectus exercitationem, itaque odio dolor unde soluta ea pariatur molestias tempore quaerat nihil. Dignissimos, accusamus?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8)(18, "ngb-carousel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ComponentBComponent_ng_template_19_Template, 8, 0, "ng-template", 10)(20, ComponentBComponent_ng_template_20_Template, 8, 0, "ng-template", 10)(21, ComponentBComponent_ng_template_21_Template, 8, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationIndicators", ctx.showNavigationIndicators);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbSlide],
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.carousal-box[_ngcontent-%COMP%] {\n  background-color: rgba(0, 114, 113, 0.1);\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 50vh;\n  object-fit: cover;\n}\n\n@media (max-width: 992px) {\n  .text-box[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n  img[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvdGVtcGxhdGUvY29tcG9uZW50LWIvY29tcG9uZW50LWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNBO0VBQ0Usd0NBQUE7QUFFRjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUdKOztBQURBO0VBQ0k7SUFDSSxnQkFBQTtFQUlOO0VBRkU7SUFDSSxzQkFBQTtFQUlOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uY2Fyb3VzYWwtYm94IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudGl6ZSgjMDA3MjcxLCAwLjkpO1xyXG59XHJcbmltZ3tcclxuICAgIGhlaWdodDogNTB2aDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk5MnB4KXtcclxuICAgIC50ZXh0LWJveHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6213:
/*!************************************************************************!*\
  !*** ./src/app/features/template/component-c/component-c.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentCComponent: () => (/* binding */ ComponentCComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);



function ComponentCComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 11)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eum porro doloribus perferendis, corrupti architecto quibusdam eveniet officia autem quam rerum atque quae dicta cum. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function ComponentCComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 11)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eum porro doloribus perferendis, corrupti architecto quibusdam eveniet officia autem quam rerum atque quae dicta cum. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function ComponentCComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 11)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, eum porro doloribus perferendis, corrupti architecto quibusdam eveniet officia autem quam rerum atque quae dicta cum. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
class ComponentCComponent {
  constructor(router) {
    this.router = router;
    this.showNavigationIndicators = false;
  }
  navigateTo(path) {
    this.router.navigate([path]);
  }
  static #_ = this.ɵfac = function ComponentCComponent_Factory(t) {
    return new (t || ComponentCComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ComponentCComponent,
    selectors: [["app-component-c"]],
    decls: 22,
    vars: 1,
    consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-11"], [1, "py-3", "text-color-primary"], [1, "pointer", 3, "click"], [1, "pointer"], [1, "col-10", "py-4"], [1, "text-center"], [1, "col-12", "my-5", "py-5", "carousal-box"], [3, "showNavigationIndicators"], ["ngbSlide", ""], [1, "text-box", "col-10", "col-md-10", "col-lg-5", "d-flex", "flex-column", "justify-content-center"], [1, "picsum-img-wrapper", "col-11", "col-md-10", "col-lg-5", "d-flex", "justify-content-center"], ["src", "../../../../assets/images/store1.jpg", "alt", "Random first slide", 1, "img-fluid", "w-75"], [1, "picsum-img-wrapper", "col-10", "col-md-10", "col-lg-5", "d-flex", "justify-content-center"], ["src", "../../../../assets/images/store2.jpg", "alt", "Random second slide", 1, "img-fluid", "w-75"], ["src", "../../../../assets/images/store1.jpg", "alt", "Random third slide", 1, "img-fluid", "w-75"]],
    template: function ComponentCComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ComponentCComponent_Template_span_click_4_listener() {
          return ctx.navigateTo("/");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Component C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6)(13, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, eligendi. Placeat, vel? Consequuntur ut deleniti reprehenderit aspernatur illum a ab ad similique voluptates laborum asperiores error aperiam, qui, quam alias quaerat unde nulla! Illo repellendus delectus exercitationem, itaque odio dolor unde soluta ea pariatur molestias tempore quaerat nihil. Dignissimos, accusamus?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8)(18, "ngb-carousel", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ComponentCComponent_ng_template_19_Template, 8, 0, "ng-template", 10)(20, ComponentCComponent_ng_template_20_Template, 8, 0, "ng-template", 10)(21, ComponentCComponent_ng_template_21_Template, 8, 0, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationIndicators", ctx.showNavigationIndicators);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbSlide],
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.carousal-box[_ngcontent-%COMP%] {\n  background-color: rgba(0, 114, 113, 0.1);\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 50vh;\n  object-fit: cover;\n}\n\n@media (max-width: 992px) {\n  .text-box[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n  img[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvdGVtcGxhdGUvY29tcG9uZW50LWMvY29tcG9uZW50LWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUNFO0VBQ0Usd0NBQUE7QUFFSjs7QUFBRTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQUdOOztBQURFO0VBQ0k7SUFDSSxtQkFBQTtFQUlSO0VBRkk7SUFDSSxzQkFBQTtFQUlSO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5jYXJvdXNhbC1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnRpemUoIzAwNzI3MSwgMC45KTtcclxuICB9XHJcbiAgaW1ne1xyXG4gICAgICBoZWlnaHQ6IDUwdmg7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDo5OTJweCl7XHJcbiAgICAgIC50ZXh0LWJveHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgIH1cclxuICAgICAgaW1ne1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgfVxyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 9681:
/*!************************************************************************!*\
  !*** ./src/app/features/template/remote-page/remote-page.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemotePageComponent: () => (/* binding */ RemotePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function RemotePageComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24)(1, "div", 39)(2, "p", 40)(3, "q");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.initialData == null ? null : ctx_r0.initialData.description);
  }
}
function RemotePageComponent_swiper_slide_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "swiper-slide", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r2 == null ? null : p_r2.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function RemotePageComponent_swiper_slide_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "swiper-slide", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r3 == null ? null : p_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function RemotePageComponent_swiper_slide_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "swiper-slide", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r4 == null ? null : p_r4.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function RemotePageComponent_swiper_slide_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "swiper-slide", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r5 == null ? null : p_r5.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function RemotePageComponent_swiper_slide_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "swiper-slide", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r6 == null ? null : p_r6.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function RemotePageComponent_swiper_slide_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "swiper-slide", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r7 == null ? null : p_r7.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function RemotePageComponent_swiper_slide_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "swiper-slide", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r8 == null ? null : p_r8.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
function RemotePageComponent_swiper_slide_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "swiper-slide", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", p_r9 == null ? null : p_r9.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
class RemotePageComponent {
  constructor(activatedRoute) {
    this.activatedRoute = activatedRoute;
    this.initialData = {};
    this.data = [{
      catName: 'What’s New',
      pageName: 'Latest Collection',
      description: 'I am enamored by details that most people often miss. The twinkle in one’s eyes and the way they smile. The perfection in imperfect pleats, and the graceful movement of the pallu. The fragrance of an old book and the memories it drives. These tiny details that really make your heart smile. I try to bring those through my collection that will always be proudly Made in India.'
    }, {
      catName: 'What’s New',
      pageName: 'Sale',
      description: null
    }, {
      catName: 'What’s New',
      pageName: "What's in Vogue",
      description: 'I love Indian design stories. The India we grew up to love is artisanal, authentic and audacious. I always wanted to create a brand that reflects the true spirit of India - the polkis of Jaipur, pearls from Lucknow, silks from Banaras, and the craftsmanship of Bengal, pashminas of Kashmir and true to my own belonging - the paithanis of Maharashtra.  By creating a converging point of all of these aesthetics and giving it our own twist, this brand emerged into being an extension of us'
    }, {
      catName: 'LOOK BOOKS',
      pageName: 'Everyday Chic',
      description: "\"Everyday Chic\" embodies the essence of effortless sophistication and contemporary flair. It's a celebration of versatility and comfort intertwined with elegance. This lookbook embraces the fusion of traditional Indian craftsmanship with modern silhouettes. It's about seamlessly transitioning from day to night with confidence and grace, whether it's through the subtle drapes of a saree or the structured elegance of a kurta. Accessories play a vital role, with statement jewelry and sleek handbags adding the perfect finishing touch to elevate any ensemble. With a focus on quality fabrics, impeccable tailoring, and attention to detail, everyday chic captures the essence of contemporary Indian style, empowering individuals to exude effortless sophistication in every aspect of their daily lives."
    }, {
      catName: 'LOOK BOOKS',
      pageName: 'Globally Indian',
      description: '"Globally Indian," is our take on a dynamic fusion of traditional Indian fashion sensibilities with global trends, redefining the boundaries of contemporary style. This innovative concept seamlessly marries the rich heritage of Indian textiles, motifs, and craftsmanship with the versatility of modern fashion. Imagine pairing a vibrant Banarasi silk saree with a tailored blazer or draping a hand-embroidered organza dupatta over a little black dress – these juxtapositions effortlessly blend cultures, creating a unique and captivating aesthetic. From intricately embellished ethnic wear styled with Western accessories to statement-making Indian-inspired prints adorning chic outerwear and bags, "Globally Indian" encapsulates the spirit of cultural diversity and sartorial innovation. Embracing this trend means embracing individuality and creativity, allowing one to express their unique identity through fashion that transcends borders.'
    }, {
      catName: 'LOOK BOOKS',
      pageName: 'Be my Guest',
      description: '"Be My Guest," is the ultimate guide to ensure that you make a captivating entrance at every celebration. This lookbook celebrates the art of dressing for the occasion, offering a curated selection of outfits that perfectly balance tradition with contemporary flair. From vibrant hues to pastel palettes, "Be My Guest" showcases a spectrum of colors that reflect the joyous spirit of Indian weddings and parties, ensuring you stand out amidst the festivities. Whether you opt for a timeless saree with a modern twist or a chic fusion ensemble that merges traditional silhouettes with global trends, our collection promises to elevate your style quotient and leave a lasting impression. Complete your look with statement jewelry, and you\'re ready to charm your way through every celebration. Embrace the joy of wedding season in style, as you celebrate love, culture, and the timeless allure of Indian fashion.'
    }, {
      catName: 'LOOK BOOKS',
      pageName: 'All about the Glam!',
      description: 'Introducing "All About the Glam!", where glamor takes center stage and sophistication meets extravagance in every ensemble. This opulent lookbook is a celebration of modern luxury and timeless elegance, inspired by celebrity and designer trends that set the fashion world ablaze. Of sequin sarees paired with timeless jewelry pieces, or a regal Banarasi sarees, meticulously handcrafted with exquisite borders that exude heritage charm, this curation will make your sparkle like a star. Our bespoke collection elevates glamor, offering couture pieces that are as unique, ensuring you steal the spotlight at any event. Embrace the extravagance of luxury fashion and unleash your inner diva as you indulge in the finer things in life. Whether you\'re attending a red carpet event or a high-profile soirée, our curated collection promises to make you feel like the star of the show, leaving a lasting impression wherever you go.'
    }, {
      catName: 'LOOK BOOKS',
      pageName: 'Let’s get to work',
      description: '"Let\'s Get to Work," is inspired by the modern Indian woman. I grew up watchin….where style meets professionalism in the most exquisite manner. This unique lookbook is dedicated to elevating your work wardrobe with the finest selection of Indian fashion pieces, meticulously curated to blend comfort with impeccable style. Picture yourself stepping into the office draped in the timeless elegance of an Ajrakh saree, its intricate patterns and earthy tones reflecting both heritage and sophistication. Or perhaps you prefer the versatility of a well-designed kurta set, offering the perfect balance of comfort and refinement as you navigate through your busy workday with ease. Our collection celebrates the art of dressing for success, offering tailored pieces that exude confidence and professionalism without compromising on style. From chic silhouettes to luxurious fabrics, each ensemble is thoughtfully crafted to empower you to make a statement in the boardroom and beyond. Embrace the power of Indian fashion to command attention and inspire confidence as you embark on your professional journey. With "Let\'s Get to Work," redefine workwear as a fusion of functionality and flair, where every outfit is a testament to your impeccable taste and unwavering determination to succeed.'
    }];
    this.products = [{
      img: '../../../../assets/products/sari/sari1.jpeg'
    }, {
      img: '../../../../assets/products/sari/sari2.jpeg'
    }, {
      img: '../../../../assets/products/sari/sari3.jpeg'
    }, {
      img: '../../../../assets/products/sari/sari4.jpeg'
    }, {
      img: '../../../../assets/products/sari/sari5.jpeg'
    }, {
      img: '../../../../assets/products/sari/sari6.jpeg'
    }, {
      img: '../../../../assets/products/sari/sari7.jpeg'
    }, {
      img: '../../../../assets/products/sari/sari8.jpeg'
    }, {
      img: '../../../../assets/products/sari/sari8.jpeg'
    }, {
      img: '../../../../assets/products/sari/sari9.jpeg'
    }, {
      img: '../../../../assets/products/sari/sari10.jpeg'
    }, {
      img: '../../../../assets/products/sari/sari11.jpeg'
    }, {
      img: '../../../../assets/products/sari/sari12.jpeg'
    }, {
      img: '../../../../assets/products/sari/sari13.jpeg'
    }, {
      img: '../../../../assets/products/sari/sari14.jpeg'
    }, {
      img: '../../../../assets/products/sari/sari15.jpeg'
    }, {
      img: '../../../../assets/products/sari/sari16.jpeg'
    }, {
      img: '../../../../assets/products/sari/sari17.jpeg'
    }, {
      img: '../../../../assets/products/sari/sari18.jpeg'
    }];
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.initialData = this.data.find(x => x.pageName == params?.id);
    });
  }
  static #_ = this.ɵfac = function RemotePageComponent_Factory(t) {
    return new (t || RemotePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: RemotePageComponent,
    selectors: [["app-remote-page"]],
    decls: 90,
    vars: 43,
    consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "img-wrapper"], ["src", "../../../../assets/products/sari/front.jpeg", "alt", "", 1, "img-fluid", "w-100"], [1, "text-part"], [1, "cat-name"], [1, "page-name"], [1, "col-12", "py-5"], ["class", "row justify-content-center", 4, "ngIf"], [1, "col-12", "pb-5"], [1, "row", "row-cols-1", "row-cols-sm-3", "row-cols-md-3", "row-cols-lg-3", "g-4"], [1, "col", "p-3"], [1, "card"], ["src", "../../../../assets/products/sari/sari1.jpeg", "alt", "image", 1, "card-img-head"], ["src", "../../../../assets/products/sari/sari2.jpeg", "alt", "image", 1, "card-img-head"], ["src", "../../../../assets/products/sari/sari3.jpeg", "alt", "image", 1, "img-fluid", "card-img"], [1, "row", "mb-4", "justify-content-center"], [1, "col-12", "col-md-10", "col-lg-10"], ["src", "../../../../assets/images/glasses.jpeg", "alt", "", 1, "img-fluid", "w-100"], [1, "row", "product-textbox", "justify-content-center"], [1, "col-10", "col-md-10", "col-lg-6", "d-flex", "flex-column", "align-items-center"], [1, "text-center", "mb-3", "fw-bold"], [1, "text-center", "mb-3"], [1, "btn", "btn-dark"], [1, "row", "justify-content-center"], [1, "col-12", "col-sm-6", "col-md-5", "col-lg-5", "p-4"], ["src", "../../../../assets/products/sari/women-1.jpeg", "alt", "image", 1, "img-fluid", "w-100"], ["src", "../../../../assets/products/sari/women-2.jpeg", "alt", "image", 1, "img-fluid", "w-100"], [1, "col-12", "pb-5", "d-block", "d-sm-none", "d-md-none", "d-lg-none"], ["pagination", "true", "space-between", "30", "slides-per-view", "1", 1, "img-box"], ["class", "px-4 prod-cart", 4, "ngFor", "ngForOf"], [1, "col-12", "pb-5", "d-none", "d-sm-block", "d-md-none", "d-lg-none"], ["pagination", "true", "space-between", "0", "slides-per-view", "3", 1, "img-box"], ["class", "px-3 prod-cart", 4, "ngFor", "ngForOf"], [1, "col-12", "pb-5", "d-none", "d-sm-none", "d-md-block", "d-lg-none"], ["space-between", "30", "slides-per-view", "4", 1, "img-box"], ["class", "px-2 prod-cart", 4, "ngFor", "ngForOf"], [1, "col-12", "pb-5", "d-none", "d-sm-none", "d-md-none", "d-lg-block"], ["src", "../../../../assets/products/bags/bag-6.jpeg", "alt", "", 1, "img-fluid", "w-100"], [1, "col-12", "col-md-9", "col-lg-6"], [1, "description", "text-center"], [1, "px-4", "prod-cart"], [1, "prod-img", "w-100", 3, "src"], [1, "px-3", "prod-cart"], [1, "px-2", "prod-cart"]],
    template: function RemotePageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RemotePageComponent_div_10_Template, 5, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11)(17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11)(20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9)(23, "div", 16)(24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 19)(27, "div", 20)(28, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "FINE EYEWEAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "SABYASACHI X MORGENTHAL FREDERICS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 9)(35, "div", 24)(36, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 28)(41, "swiper-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RemotePageComponent_swiper_slide_42_Template, 2, 1, "swiper-slide", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31)(45, "swiper-container", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, RemotePageComponent_swiper_slide_46_Template, 2, 1, "swiper-slide", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 34)(49, "swiper-container", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, RemotePageComponent_swiper_slide_50_Template, 2, 1, "swiper-slide", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 37)(53, "swiper-container", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, RemotePageComponent_swiper_slide_54_Template, 2, 1, "swiper-slide", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9)(57, "div", 16)(58, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 19)(61, "div", 20)(62, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "ACCESSORIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "THE ROYAL BENGAL MINAUDI\u00C8RE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 28)(69, "swiper-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, RemotePageComponent_swiper_slide_70_Template, 2, 1, "swiper-slide", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 31)(73, "swiper-container", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, RemotePageComponent_swiper_slide_74_Template, 2, 1, "swiper-slide", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 34)(77, "swiper-container", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, RemotePageComponent_swiper_slide_78_Template, 2, 1, "swiper-slide", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 37)(81, "swiper-container", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, RemotePageComponent_swiper_slide_82_Template, 2, 1, "swiper-slide", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](83, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 9)(85, "div", 24)(86, "div", 39)(87, "p", 40)(88, "q");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "For me, the sari is a truly unique and versatile garment that owns its identity even as it transcends boundaries and geographies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.initialData == null ? null : ctx.initialData.catName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.initialData == null ? null : ctx.initialData.pageName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.initialData == null ? null : ctx.initialData.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](43, 11, ctx.products, 0, 9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](47, 15, ctx.products, 0, 9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](51, 19, ctx.products, 0, 9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](55, 23, ctx.products, 0, 9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](71, 27, ctx.products, 9, ctx.products.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](75, 31, ctx.products, 9, ctx.products.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](79, 35, ctx.products, 9, ctx.products.length));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](83, 39, ctx.products, 9, ctx.products.length));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.SlicePipe],
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.img-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.text-part[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  left: 50%;\n  bottom: 5%;\n  transform: translate(-50%, -5%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.text-part[_ngcontent-%COMP%]   .cat-name[_ngcontent-%COMP%] {\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 1rem;\n  font-weight: 500;\n  margin-bottom: 1rem;\n  letter-spacing: 0.15rem;\n}\n.text-part[_ngcontent-%COMP%]   .page-name[_ngcontent-%COMP%] {\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 1.5rem;\n  font-weight: 600;\n  letter-spacing: 0.2rem;\n}\n\n.description[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n}\n\n.btn[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  width: auto;\n  padding: 1rem 1.5rem;\n}\n\n.prod-cart[_ngcontent-%COMP%]   .prod-img[_ngcontent-%COMP%] {\n  min-height: 35vw;\n  max-height: 35vw;\n  object-fit: cover;\n}\n\n@media (max-width: 575px) {\n  .prod-cart[_ngcontent-%COMP%]   .prod-img[_ngcontent-%COMP%] {\n    min-height: 60vh;\n    max-height: 60vh;\n    object-fit: cover;\n  }\n  .text-part[_ngcontent-%COMP%]   .cat-name[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n    margin-bottom: 0.5rem;\n  }\n  .text-part[_ngcontent-%COMP%]   .page-name[_ngcontent-%COMP%] {\n    font-size: 0.7rem;\n  }\n}\n@media (min-width: 575px) and (max-width: 768px) {\n  .prod-cart[_ngcontent-%COMP%]   .prod-img[_ngcontent-%COMP%] {\n    min-height: 50vw;\n    max-height: 50vw;\n    object-fit: cover;\n  }\n}\n@media (max-width: 475px) {\n  .card[_ngcontent-%COMP%]   .card-img-head[_ngcontent-%COMP%] {\n    min-height: 90vh !important;\n    max-height: 90vh !important;\n    object-fit: cover;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvdGVtcGxhdGUvcmVtb3RlLXBhZ2UvcmVtb3RlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7QUFFRjs7QUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUdGO0FBRkU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSUo7QUFGRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUlKOztBQURBO0VBQ0Usa0JBQUE7QUFJRjs7QUFGQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0FBS0Y7O0FBRkU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFLSjs7QUFGQTtFQUVJO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VBSUo7RUFBRTtJQUNFLGlCQUFBO0lBQ0EscUJBQUE7RUFFSjtFQUFFO0lBQ0UsaUJBQUE7RUFFSjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtFQUNGO0FBQ0Y7QUFDQTtFQUVJO0lBQ0UsMkJBQUE7SUFDQSwyQkFBQTtJQUNBLGlCQUFBO0VBQUo7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5pbWctd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi50ZXh0LXBhcnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgYm90dG9tOiA1JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNSUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5jYXQtbmFtZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cmVtO1xyXG4gIH1cclxuICAucGFnZS1uYW1lIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XHJcbiAgfVxyXG59XHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgcGFkZGluZzogMCAxLjI1cmVtO1xyXG59XHJcbi5idG4ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbn1cclxuLnByb2QtY2FydCB7XHJcbiAgLnByb2QtaW1nIHtcclxuICAgIG1pbi1oZWlnaHQ6IDM1dnc7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNXZ3O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC5wcm9kLWNhcnQge1xyXG4gICAgLnByb2QtaW1nIHtcclxuICAgICAgbWluLWhlaWdodDogNjB2aDtcclxuICAgICAgbWF4LWhlaWdodDogNjB2aDtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50ZXh0LXBhcnQge1xyXG4gICAgLmNhdC1uYW1lIHtcclxuICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgIH1cclxuICAgIC5wYWdlLW5hbWUge1xyXG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAucHJvZC1jYXJ0IC5wcm9kLWltZyB7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHZ3O1xyXG4gICAgbWF4LWhlaWdodDogNTB2dztcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNDc1cHgpIHtcclxuICAuY2FyZCB7XHJcbiAgICAuY2FyZC1pbWctaGVhZCB7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDkwdmggIWltcG9ydGFudDtcclxuICAgICAgbWF4LWhlaWdodDogOTB2aCAhaW1wb3J0YW50O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3032:
/*!*********************************************************!*\
  !*** ./src/app/features/template/template.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateComponent: () => (/* binding */ TemplateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class TemplateComponent {
  static #_ = this.ɵfac = function TemplateComponent_Factory(t) {
    return new (t || TemplateComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TemplateComponent,
    selectors: [["app-template"]],
    decls: 1,
    vars: 0,
    template: function TemplateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5735:
/*!******************************************************!*\
  !*** ./src/app/features/template/template.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateModule: () => (/* binding */ TemplateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _template_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.component */ 3032);
/* harmony import */ var _component_a_component_a_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component-a/component-a.component */ 6705);
/* harmony import */ var _component_b_component_b_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-b/component-b.component */ 1449);
/* harmony import */ var _component_c_component_c_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component-c/component-c.component */ 6213);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _remote_page_remote_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remote-page/remote-page.component */ 9681);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 8418);
/* harmony import */ var swiper_element_bundle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/element/bundle */ 493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);











(0,swiper_element_bundle__WEBPACK_IMPORTED_MODULE_5__.register)();
const routes = [{
  path: 'component-a',
  component: _component_a_component_a_component__WEBPACK_IMPORTED_MODULE_1__.ComponentAComponent
}, {
  path: 'component-b',
  component: _component_b_component_b_component__WEBPACK_IMPORTED_MODULE_2__.ComponentBComponent
}, {
  path: 'component-c',
  component: _component_c_component_c_component__WEBPACK_IMPORTED_MODULE_3__.ComponentCComponent
}, {
  path: ':id',
  component: _remote_page_remote_page_component__WEBPACK_IMPORTED_MODULE_4__.RemotePageComponent
}];
class TemplateModule {
  static #_ = this.ɵfac = function TemplateModule_Factory(t) {
    return new (t || TemplateModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: TemplateModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TemplateModule, {
    declarations: [_template_component__WEBPACK_IMPORTED_MODULE_0__.TemplateComponent, _component_a_component_a_component__WEBPACK_IMPORTED_MODULE_1__.ComponentAComponent, _component_b_component_b_component__WEBPACK_IMPORTED_MODULE_2__.ComponentBComponent, _component_c_component_c_component__WEBPACK_IMPORTED_MODULE_3__.ComponentCComponent, _remote_page_remote_page_component__WEBPACK_IMPORTED_MODULE_4__.RemotePageComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_template_template_module_ts.js.map