"use strict";
exports.id = 824;
exports.ids = [824];
exports.modules = {

/***/ 58357:
/*!***************************************************************!*\
  !*** ./src/app/features/auth-layout/auth-layout.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthLayoutComponent: () => (/* binding */ AuthLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 61504);


class AuthLayoutComponent {
  static #_ = this.ɵfac = function AuthLayoutComponent_Factory(t) {
    return new (t || AuthLayoutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AuthLayoutComponent,
    selectors: [["app-auth-layout"]],
    decls: 1,
    vars: 0,
    template: function AuthLayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 66824:
/*!************************************************************!*\
  !*** ./src/app/features/auth-layout/auth-layout.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthLayoutModule: () => (/* binding */ AuthLayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _auth_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-layout.component */ 58357);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 10354);
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/register/register.component */ 12726);
/* harmony import */ var _components_forget_pass_forget_pass_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/forget-pass/forget-pass.component */ 3014);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 46584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37100);









const routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'login'
}, {
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: 'register',
  component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent
}, {
  path: 'forgot-pass',
  component: _components_forget_pass_forget_pass_component__WEBPACK_IMPORTED_MODULE_3__.ForgetPassComponent
}];
class AuthLayoutModule {
  static #_ = this.ɵfac = function AuthLayoutModule_Factory(t) {
    return new (t || AuthLayoutModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AuthLayoutModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AuthLayoutModule, {
    declarations: [_auth_layout_component__WEBPACK_IMPORTED_MODULE_0__.AuthLayoutComponent, _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent, _components_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent, _components_forget_pass_forget_pass_component__WEBPACK_IMPORTED_MODULE_3__.ForgetPassComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 3014:
/*!**************************************************************************************!*\
  !*** ./src/app/features/auth-layout/components/forget-pass/forget-pass.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgetPassComponent: () => (/* binding */ ForgetPassComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 46584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 61504);




class ForgetPassComponent {
  constructor(router) {
    this.router = router;
    this.forgetPassForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required])
    });
  }
  navigateTo(path) {
    this.router.navigate([path]);
  }
  submit(e) {
    e.preventDefault();
    if (!!this.forgetPassForm.value) {
      console.log('Form value', this.forgetPassForm.value);
    }
  }
  static #_ = this.ɵfac = function ForgetPassComponent_Factory(t) {
    return new (t || ForgetPassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ForgetPassComponent,
    selectors: [["app-forget-pass"]],
    decls: 28,
    vars: 1,
    consts: [[1, "container-fluid", "pb-5"], [1, "row", "justify-content-center"], [1, "col-11"], [1, "py-3", "text-color-primary", "pointer"], [3, "click"], [1, "col-11", "py-4"], [1, "col-11", "px-3", "py-4", "border"], [1, "pb-2"], [1, "pb-3", "border-bottom", 3, "formGroup"], [1, "row"], [1, "col-12", "col-lg-2", "d-flex", "align-items-center", "my-1"], ["for", "inputPassword6", 1, "col-form-label"], [1, "col-12", "col-lg-2", "me-3", "my-1"], ["type", "email", "formControlName", "email", 1, "background-primary", "form-control"], [1, "col-5", "col-md-2", "col-lg-2", "my-1"], [1, "btn", "btn-dark", "p-2", 3, "click"], [1, "row", "pt-3"], [1, "col-12", "d-flex"], [1, "pointer", 3, "click"], [1, "fa-solid", "fa-chevron-left"]],
    template: function ForgetPassComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgetPassComponent_Template_span_click_4_listener() {
          return ctx.navigateTo("/");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " / Reset your password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6)(11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Please enter the email address you used to register. You will receive a temporary link to reset your password. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 8)(14, "div", 9)(15, "div", 10)(16, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14)(21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgetPassComponent_Template_button_click_21_listener($event) {
          return ctx.submit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Send reset link ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 16)(24, "div", 17)(25, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgetPassComponent_Template_p_click_25_listener() {
          return ctx.navigateTo("/auth/login");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " Back to login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.forgetPassForm);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName],
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.form-control[_ngcontent-%COMP%], .input-number[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 0;\n  padding: 0.5rem 1rem !important;\n}\n\n.background-primary[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.form-control[_ngcontent-%COMP%]:focus, .input-number[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  outline: none;\n  border-bottom: 1px solid #000;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n}\n\n.form-control[_ngcontent-%COMP%]:focus-visible, .input-number[_ngcontent-%COMP%]:focus-visible {\n  border-bottom: 1px solid #000;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  outline: none;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n@media (min-width: 430px) and (max-width: 575px) {\n  .btn[_ngcontent-%COMP%] {\n    width: 70% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC1sYXlvdXQvY29tcG9uZW50cy9mb3JnZXQtcGFzcy9mb3JnZXQtcGFzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQUVGOztBQUFBO0VBQ0UseUJBQUE7QUFHRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSUY7O0FBRkE7RUFDRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7QUFNRjs7QUFKQTtFQUNFO0lBQ0UscUJBQUE7RUFPRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5mb3JtLWNvbnRyb2wsLmlucHV0LW51bWJlciB7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMC41cmVtIDFyZW0gIWltcG9ydGFudDtcbn1cbi5iYWNrZ3JvdW5kLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xufVxuLmZvcm0tY29udHJvbDpmb2N1cywuaW5wdXQtbnVtYmVyOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG4uZm9ybS1jb250cm9sOmZvY3VzLXZpc2libGUsLmlucHV0LW51bWJlcjpmb2N1cy12aXNpYmxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucG9pbnRlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDQzMHB4KSBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmJ0biB7XG4gICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 10354:
/*!**************************************************************************!*\
  !*** ./src/app/features/auth-layout/components/login/login.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 46584);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services */ 9460);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/customer.service */ 88247);
/* harmony import */ var src_app_services_address_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/address.service */ 73213);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 60301);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94556);











function LoginComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Log in to your account");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LoginComponent_div_8_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_8_Conditional_15_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.showEye = !ctx_r2.showEye);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_8_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_8_Conditional_16_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.showEye = !ctx_r2.showEye);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9)(1, "form", 10)(2, "div", 11)(3, "div", 12)(4, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 16)(10, "div", 12)(11, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, LoginComponent_div_8_Conditional_15_Template, 2, 0, "div", 19)(16, LoginComponent_div_8_Conditional_16_Template, 2, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 20)(19, "div", 21)(20, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_8_Template_span_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.navigateTo("/auth/forgot-pass"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Forgot your password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 1)(23, "div", 22)(24, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_8_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.submit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Sign in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 24)(27, "div", 21)(28, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_8_Template_p_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.navigateTo("/auth/register"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " No account? Create one here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", ctx_r2.showEye ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵconditional"](15, ctx_r2.showEye ? 15 : 16);
  }
}
function LoginComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "You are Already Logged in");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LoginComponent_div_10_div_1_button_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_10_div_1_button_60_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.createAddress());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_10_div_1_button_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_10_div_1_button_61_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.update());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_10_div_1_button_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_10_div_1_button_63_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.showAddressForm = !ctx_r2.showAddressForm);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 32)(2, "h3", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 34)(5, "div", 35)(6, "div", 36)(7, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 35)(12, "div", 36)(13, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "textarea", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 35)(18, "div", 36)(19, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 35)(24, "div", 36)(25, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 35)(30, "div", 36)(31, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 35)(36, "div", 36)(37, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Pin code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 35)(42, "div", 36)(43, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 46)(46, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Work");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 54)(59, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, LoginComponent_div_10_div_1_button_60_Template, 2, 0, "button", 56)(61, LoginComponent_div_10_div_1_button_61_Template, 2, 0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, LoginComponent_div_10_div_1_button_63_Template, 2, 0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.addressId ? "Update" : "Create", " Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.addressForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.addressId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.addressId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.addressId);
  }
}
function LoginComponent_div_10_div_2_div_10_span_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_10_div_2_div_10_span_13_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.showMenuIndex = i_r11);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_10_div_2_div_10_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 80)(1, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_10_div_2_div_10_div_14_Template_span_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const add_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.edit(add_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_10_div_2_div_10_div_14_Template_span_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);
      const add_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.deleteAdd(add_r13 == null ? null : add_r13.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function LoginComponent_div_10_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 68)(1, "div", 69)(2, "div", 70)(3, "div", 71)(4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, LoginComponent_div_10_div_2_div_10_span_13_Template, 2, 0, "span", 75)(14, LoginComponent_div_10_div_2_div_10_div_14_Template, 5, 0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 77)(16, "span", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_10_div_2_div_10_Template_span_click_16_listener() {
      const add_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.setDefault(add_r13.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Set Default");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const add_r13 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](add_r13 == null ? null : add_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](add_r13.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", add_r13 == null ? null : add_r13.location, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](add_r13 == null ? null : add_r13.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.show);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.showMenuIndex == i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("bg-success", add_r13.isDefault);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("text-light", add_r13.isDefault)("text-dark", !add_r13.isDefault);
  }
}
function LoginComponent_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 59)(1, "div", 60)(2, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_10_div_2_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.showAddressForm = !ctx_r2.showAddressForm);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Add a new address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 63)(6, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 65)(9, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, LoginComponent_div_10_div_2_div_10_Template, 18, 12, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r2.allAddresses.length, " SAVED ", ctx_r2.allAddresses.length == 1 ? "ADDRESS" : "ADDRESSES", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.allAddresses);
  }
}
function LoginComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginComponent_div_10_div_1_Template, 64, 5, "div", 30)(2, LoginComponent_div_10_div_2_Template, 11, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.showAddressForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.showAddressForm);
  }
}
class LoginComponent {
  constructor(router, customerService, spinnerService, addressService, toasterService) {
    this.router = router;
    this.customerService = customerService;
    this.spinnerService = spinnerService;
    this.addressService = addressService;
    this.toasterService = toasterService;
    this.storageService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(src_app_core_services__WEBPACK_IMPORTED_MODULE_0__.StorageService);
    this.showEye = true;
    this.show = true;
    this.showAddressForm = false;
    this.allAddresses = [];
    this.showMenuIndex = null;
    this.addressForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
      location: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
      country: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
      state: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
      city: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
      pinCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
      type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null),
      isDefault: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null)
    });
    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])
    });
    this.user = this.storageService.get('Customer');
  }
  ngOnInit() {
    this.getAddresses();
  }
  navigateTo(path) {
    this.router.navigate([path]);
  }
  submit() {
    if (this.loginForm.value) {
      this.customerService.login(this.loginForm.value).subscribe(success => {
        this.user = success.result;
        this.storageService.set('Customer', success.result);
        this.toasterService.success('Login done Successfully!!!');
        this.getAddresses();
      });
    } else {
      this.toasterService.error('Something went wrong!!');
    }
  }
  getAddresses() {
    if (this.user) {
      this.addressService.getAll().subscribe(success => {
        this.allAddresses = success.result.rows;
      });
    }
  }
  createAddress() {
    if (this.user) {
      this.spinnerService.show();
      this.showAddressForm = !this.showAddressForm;
      if (this.addressForm.value) {
        let formData = this.addressForm.value;
        formData.customerId = this.user.id;
        this.addressService.create(formData).subscribe(success => {
          this.spinnerService.hide();
          this.getAddresses();
          this.toasterService.success('Address added successfully!!');
        });
      } else {
        this.spinnerService.hide();
        this.toasterService.error('Please fill required fields!');
      }
    } else {
      this.spinnerService.hide();
      this.toasterService.error('Please login first!!');
    }
  }
  setDefault(id) {
    if (this.allAddresses.length > 0) {
      this.spinnerService.show();
      let payload = {
        customerId: this.user.id,
        addressId: id
      };
      this.addressService.makeDefault(payload).subscribe(success => {
        this.toasterService.success('Address default set successfully!!');
        this.spinnerService.hide();
        this.getAddresses();
      });
    }
  }
  edit(data) {
    this.addressId = data.id;
    this.showAddressForm = !this.showAddressForm;
    this.addressForm.patchValue(data);
  }
  update() {
    if (this.user) {
      let formData = this.addressForm.value;
      formData.customerId = this.user.id;
      this.addressService.update(this.addressId, formData).subscribe(success => {
        this.showMenuIndex = null;
        this.showAddressForm = !this.showAddressForm;
        this.toasterService.success('Address update successfully!!');
        this.getAddresses();
      });
    }
  }
  deleteAdd(id) {
    if (this.user) {
      let formData = this.addressForm.value;
      formData.customerId = this.user.id;
      this.addressService.delete(id).subscribe(success => {
        this.showMenuIndex = null;
        this.toasterService.success('Address deleted successfully!!');
        this.getAddresses();
      });
    }
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_1__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_0__.SpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_address_service__WEBPACK_IMPORTED_MODULE_2__.AddressService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 11,
    vars: 4,
    consts: [[1, "container-fluid", "pb-5"], [1, "row", "justify-content-center"], [1, "col-11"], [1, "py-3", "text-color-primary"], [1, "pointer", 3, "click"], ["class", "col-11 py-4", 4, "ngIf"], ["class", "col-11 px-3 py-4 border", 4, "ngIf"], ["class", "col-11 p-3 address-column border-top", 4, "ngIf"], [1, "col-11", "py-4"], [1, "col-11", "px-3", "py-4", "border"], [1, "pb-3", "border-bottom", 3, "formGroup"], [1, "row", "g-3", "align-items-center", "justify-content-between"], [1, "col-2"], ["for", "inputPassword6", 1, "col-form-label"], [1, "col-12", "col-md-12", "col-lg-8"], ["type", "email", "formControlName", "email", 1, "form-control", "background-primary"], [1, "row", "g-3", "py-3", "align-items-center", "justify-content-between"], [1, "col-12", "col-md-12", "col-lg-8", "password-input"], ["formControlName", "password", 1, "form-control", "background-primary", 3, "type"], [1, "icon-box"], [1, "row", "py-3"], [1, "col-12", "d-flex", "justify-content-center"], [1, "col-4", "col-md-2", "col-lg-1", "d-flex", "justify-content-center"], [1, "btn", "btn-dark", "py-2", "px-3", 3, "click"], [1, "row", "pt-3"], [1, "fa-solid", "fa-chevron-right"], [1, "icon-box", 3, "click"], [1, "fa-solid", "fa-eye-slash", "pointer"], [1, "fa-solid", "fa-eye", "pointer"], [1, "col-11", "p-3", "address-column", "border-top"], ["class", "row justify-content-center", 4, "ngIf"], ["class", "row pb-2 justify-content-between", 4, "ngIf"], [1, "col-6", "mb-4"], [1, "text-center"], [1, "pb-3", 3, "formGroup"], [1, "row", "my-3"], [1, "col-12", "col-lg-2", "d-flex", "align-items-center", "my-1"], [1, "col-12", "col-lg-9", "d-flex", "me-3", "my-1"], ["type", "text", "formControlName", "name", 1, "form-control", "background-primary"], [1, "col-12", "col-lg-9", "me-3", "my-1"], ["formControlName", "location", "cols", "10", 1, "form-control", "background-primary"], ["type", "text", "formControlName", "city", 1, "form-control", "background-primary"], ["type", "text", "formControlName", "state", 1, "form-control", "background-primary"], ["type", "text", "formControlName", "country", 1, "form-control", "background-primary"], [1, "col-12", "col-lg-9", "my-1", "me-3"], ["type", "number", "formControlName", "pinCode", 1, "form-control", "background-primary"], [1, "col-12", "col-lg-2", "d-flex", "me-3", "my-1"], [1, "d-flex", "px-2", "align-items-center"], ["type", "radio", "name", "type", "id", "typeHome", "value", "home", "formControlName", "type", 1, "form-check-input", "me-2", "background-primary"], ["for", "typeHome", 1, "form-check-label"], ["type", "radio", "name", "type", "id", "typeWork", "value", "work", "formControlName", "type", 1, "form-check-input", "me-2", "background-primary"], ["for", "typeWork", 1, "form-check-label"], ["type", "radio", "name", "type", "id", "typeOther", "value", "other", "formControlName", "type", 1, "form-check-input", "me-2", "background-primary"], ["for", "typeOther", 1, "form-check-label"], [1, "row", "my-3", "justify-content-center"], [1, "col-3", "col-md-2", "col-lg-2", "me-2"], ["class", "btn bg-dark p-2 w-100 text-light rounded-0", 3, "click", 4, "ngIf"], [1, "col-3", "col-md-2", "col-lg-2"], [1, "btn", "bg-dark", "p-2", "w-100", "text-light", "rounded-0", 3, "click"], [1, "row", "pb-2", "justify-content-between"], [1, "col-6", "col-md-4", "col-lg-3", "mb-5"], [1, "btn", "px-3", "py-2", "btn-dark", "rounded-0", 3, "click"], [1, "fa-solid", "fa-plus"], [1, "col-12", "mb-3"], [1, "small-text", "text-muted"], [1, "col-12"], [1, "row", "justify-content-around"], ["class", "col-12 col-sm-12 col-md-5 col-lg-5 card position-relative p-4", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-12", "col-md-5", "col-lg-5", "card", "position-relative", "p-4"], [1, "row"], [1, "col-9"], [1, "d-flex", "mb-3", "align-items-center"], [1, "bg-light", "small-text", "text-muted", "p-1", "ms-2"], [1, "mb-3"], [1, "col-3", "d-flex", "justify-content-end"], [3, "click", 4, "ngIf"], ["class", "row address-action bg-light", 4, "ngIf"], [1, "badge", "pointer"], [3, "click"], [1, "pointer", "fa-solid", "fa-ellipsis-vertical"], [1, "row", "address-action", "bg-light"], [1, "col-12", "h-50", "d-flex", "align-items-center", "p-3", "pointer", 3, "click"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_Template_span_click_4_listener() {
          return ctx.navigateTo("/");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " / Log in to your account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 3, 0, "div", 5)(8, LoginComponent_div_8_Template, 31, 3, "div", 6)(9, LoginComponent_div_9_Template, 3, 0, "div", 5)(10, LoginComponent_div_10_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.password-input[_ngcontent-%COMP%] {\n  display: flex;\n}\n.password-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 95%;\n}\n.password-input[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  width: 5%;\n  background-color: #f8f8f8;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.form-control[_ngcontent-%COMP%], .input-number[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 0;\n  padding: 0.5rem 1rem !important;\n}\n\n.background-primary[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.form-control[_ngcontent-%COMP%]:focus, .input-number[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  outline: none;\n  border-bottom: 1px solid #000;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n}\n\n.form-control[_ngcontent-%COMP%]:focus-visible, .input-number[_ngcontent-%COMP%]:focus-visible {\n  border-bottom: 1px solid #000;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  outline: none;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.address-action[_ngcontent-%COMP%] {\n  height: 75%;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.badge[_ngcontent-%COMP%] {\n  background-color: #ededed;\n  border-radius: 1rem;\n  position: absolute;\n  right: -2%;\n  top: -10%;\n  padding: 0.5rem;\n}\n\n@media (max-width: 992px) {\n  .address-column[_ngcontent-%COMP%] {\n    padding-top: 2rem;\n  }\n  .card[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n  }\n}\n@media (min-width: 992px) {\n  .card[_ngcontent-%COMP%] {\n    margin: 2rem;\n  }\n}\n@media (max-width: 992px) and (min-width: 475px) {\n  .password-input[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .password-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .password-input[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n}\n@media (max-width: 475px) {\n  .password-input[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .password-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 85%;\n  }\n  .password-input[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n    width: 15%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC1sYXlvdXQvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7QUFBRTtFQUNFLFVBQUE7QUFFSjtBQUFFO0VBQ0UsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFDQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBRUY7O0FBQUE7RUFDRSx5QkFBQTtBQUdGOztBQURBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQUtGOztBQUhBO0VBQ0UsZUFBQTtBQU1GOztBQUpBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUFPRjs7QUFMQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQVFGOztBQUxBO0VBQ0U7SUFDRSxpQkFBQTtFQVFGO0VBTkE7SUFDRSxtQkFBQTtFQVFGO0FBQ0Y7QUFKQTtFQUNFO0lBQ0UsWUFBQTtFQU1GO0FBQ0Y7QUFIQTtFQUNFO0lBQ0UsYUFBQTtFQUtGO0VBSkU7SUFDRSxVQUFBO0VBTUo7RUFKRTtJQUNFLFVBQUE7RUFNSjtBQUNGO0FBSEE7RUFDRTtJQUNFLGFBQUE7RUFLRjtFQUpFO0lBQ0UsVUFBQTtFQU1KO0VBSkU7SUFDRSxVQUFBO0VBTUo7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5wYXNzd29yZC1pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGlucHV0IHtcbiAgICB3aWR0aDogOTUlO1xuICB9XG4gIC5pY29uLWJveCB7XG4gICAgd2lkdGg6IDUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG4uZm9ybS1jb250cm9sLC5pbnB1dC1udW1iZXIge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtICFpbXBvcnRhbnQ7XG59XG4uYmFja2dyb3VuZC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbn1cbi5mb3JtLWNvbnRyb2w6Zm9jdXMsLmlucHV0LW51bWJlcjpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItdG9wOiAwO1xuICBib3JkZXItbGVmdDogMDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuLmZvcm0tY29udHJvbDpmb2N1cy12aXNpYmxlLC5pbnB1dC1udW1iZXI6Zm9jdXMtdmlzaWJsZSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xuICBib3JkZXItdG9wOiAwO1xuICBib3JkZXItbGVmdDogMDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnBvaW50ZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hZGRyZXNzLWFjdGlvbntcbiAgaGVpZ2h0OiA3NSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5iYWRnZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTIlO1xuICB0b3A6IC0xMCU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6OTkycHgpe1xuICAuYWRkcmVzcy1jb2x1bW57XG4gICAgcGFkZGluZy10b3A6IDJyZW07XG4gIH1cbiAgLmNhcmR7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgIC8vIHdpZHRoOiA0NSU7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6OTkycHgpe1xuICAuY2FyZHtcbiAgICBtYXJnaW46IDJyZW07XG4gICAgICAvLyB3aWR0aDogNDUlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIGFuZCAobWluLXdpZHRoOiA0NzVweCkge1xuICAucGFzc3dvcmQtaW5wdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaW5wdXQge1xuICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG4gICAgLmljb24tYm94IHtcbiAgICAgIHdpZHRoOiAxMCU7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDc1cHgpIHtcbiAgLnBhc3N3b3JkLWlucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiA4NSU7XG4gICAgfVxuICAgIC5pY29uLWJveCB7XG4gICAgICB3aWR0aDogMTUlO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 12726:
/*!********************************************************************************!*\
  !*** ./src/app/features/auth-layout/components/register/register.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 46584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/customer.service */ 88247);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 60301);
/* harmony import */ var src_app_core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services */ 9460);







class RegisterComponent {
  constructor(router, customerService, toasterService, storageService) {
    this.router = router;
    this.customerService = customerService;
    this.toasterService = toasterService;
    this.storageService = storageService;
    this.showEye = true;
    this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
      socialTitle: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
      firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
      lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
      phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(10)]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null),
      DOB: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null)
    });
  }
  ngAfterContentInit() {
    // this.cd.markForCheck()
  }
  navigateTo(path) {
    this.router.navigate([path]);
  }
  submit() {
    if (this.registerForm.value) {
      let formData = this.registerForm.value;
      this.customerService.register(formData).subscribe(success => {
        this.toasterService.success(success?.result?.message);
        this.router.navigate(['/auth/login']);
      });
    } else {
      this.toasterService.error('Please fill required fields!!');
    }
  }
  static #_ = this.ɵfac = function RegisterComponent_Factory(t) {
    return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_0__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services__WEBPACK_IMPORTED_MODULE_1__.StorageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: RegisterComponent,
    selectors: [["app-register"]],
    decls: 23,
    vars: 1,
    consts: [[1, "container-fluid", "pb-5"], [1, "row", "justify-content-center"], [1, "col-11"], [1, "py-3", "text-color-secondary", "pointer"], [3, "click"], [1, "col-11", "py-4"], [1, "col-11", "px-3", "py-4", "border"], [1, "row"], [1, "col-12", "px-3"], [1, "pb-2"], [1, "fa-regular", "fa-circle-question"], [1, "pointer", "text-decoration-underline", 3, "click"], [1, "pb-3", 3, "formGroup"], [1, "row", "my-3", "justify-content-center"], [1, "col-3", "col-md-2", "col-lg-2"], [1, "btn", "bg-dark", "p-2", "w-100", "text-light", "rounded-0", 3, "click"]],
    template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegisterComponent_Template_span_click_4_listener() {
          return ctx.navigateTo("/");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " / Create an account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Create an account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegisterComponent_Template_span_click_16_listener() {
          return ctx.navigateTo("/auth/login");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Log in instead!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "form", 12)(19, "div", 13)(20, "div", 14)(21, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_21_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.registerForm);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective],
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  line-height: 1;\n}\n\n.password-input[_ngcontent-%COMP%] {\n  display: flex;\n}\n.password-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 95%;\n}\n.password-input[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n  width: 5%;\n  background-color: #f8f8f8;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.opt-box[_ngcontent-%COMP%] {\n  width: 50%;\n  background-color: #f8f8f8;\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  padding-right: 0.5rem;\n}\n\n.form-control[_ngcontent-%COMP%], .input-number[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 0;\n  padding: 0.5rem 1rem !important;\n}\n\n.background-primary[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n.form-control[_ngcontent-%COMP%]:focus, .input-number[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  outline: none;\n  border-bottom: 1px solid #000;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n}\n\n.form-control[_ngcontent-%COMP%]:focus-visible, .input-number[_ngcontent-%COMP%]:focus-visible {\n  border-bottom: 1px solid #000;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  outline: none;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n@media (max-width: 992px) and (min-width: 475px) {\n  .password-input[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .password-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .password-input[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n}\n@media (max-width: 475px) {\n  .password-input[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .password-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 85%;\n  }\n  .password-input[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%] {\n    width: 15%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC1sYXlvdXQvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtBQUNKO0FBQUk7RUFDRSxVQUFBO0FBRU47QUFBSTtFQUNFLFNBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRU47O0FBQ0U7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBRUo7O0FBQUU7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQUdKOztBQURFO0VBQ0UseUJBQUE7QUFJSjs7QUFGQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBSEE7RUFDRSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7QUFPRjs7QUFKQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUFPRjs7QUFMQTtFQUNFLDBCQUFBO0FBUUY7O0FBTkU7RUFDRTtJQUNFLGFBQUE7RUFTSjtFQVJJO0lBQ0UsVUFBQTtFQVVOO0VBUkk7SUFDRSxVQUFBO0VBVU47QUFDRjtBQVBFO0VBQ0U7SUFDRSxhQUFBO0VBU0o7RUFSSTtJQUNFLFVBQUE7RUFVTjtFQVJJO0lBQ0UsVUFBQTtFQVVOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxuICBcbiAgLnBhc3N3b3JkLWlucHV0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiA5NSU7XG4gICAgfVxuICAgIC5pY29uLWJveCB7XG4gICAgICB3aWR0aDogNSU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cbiAgLm9wdC1ib3gge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICB9XG4gIC5mb3JtLWNvbnRyb2wsLmlucHV0LW51bWJlciB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZzogMC41cmVtIDFyZW0gIWltcG9ydGFudDtcbiAgfVxuICAuYmFja2dyb3VuZC1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xufVxuLmZvcm0tY29udHJvbDpmb2N1cywuaW5wdXQtbnVtYmVyOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG59XG4uZm9ybS1jb250cm9sOmZvY3VzLXZpc2libGUsLmlucHV0LW51bWJlcjpmb2N1cy12aXNpYmxlIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ucG9pbnRlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSBhbmQgKG1pbi13aWR0aDogNDc1cHgpIHtcbiAgICAucGFzc3dvcmQtaW5wdXQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgIH1cbiAgICAgIC5pY29uLWJveCB7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0NzVweCkge1xuICAgIC5wYXNzd29yZC1pbnB1dCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogODUlO1xuICAgICAgfVxuICAgICAgLmljb24tYm94IHtcbiAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 73213:
/*!*********************************************!*\
  !*** ./src/app/services/address.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressService: () => (/* binding */ AddressService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 47632);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/services */ 9460);



class AddressService {
  constructor(http) {
    this.http = http;
    this.BASE_URL = 'address';
  }
  getAll() {
    return this.http.get(this.BASE_URL).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  create(payload) {
    return this.http.post(this.BASE_URL, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  makeDefault(payload) {
    return this.http.put(this.BASE_URL + '/makeDefault', payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  update(id, payload) {
    return this.http.put(this.BASE_URL + '/' + id, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  delete(id) {
    return this.http.delete(this.BASE_URL + '/' + id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  getByCustomerId() {
    return this.http.get(this.BASE_URL).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  static #_ = this.ɵfac = function AddressService_Factory(t) {
    return new (t || AddressService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AddressService,
    factory: AddressService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 88247:
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerService: () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 47632);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _core_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/services */ 9460);



class CustomerService {
  constructor(http) {
    this.http = http;
    this.BASE_URL = 'customer';
  }
  register(payload) {
    return this.http.post(this.BASE_URL, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  login(payload) {
    return this.http.post(this.BASE_URL + '/login', payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  update(id, payload) {
    return this.http.put(this.BASE_URL + '/' + id, payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  getById(payload) {
    return this.http.get(this.BASE_URL + '/profile', payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  delete(id) {
    return this.http.delete(this.BASE_URL + '/' + id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(res => res));
  }
  static #_ = this.ɵfac = function CustomerService_Factory(t) {
    return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core_services__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: CustomerService,
    factory: CustomerService.ɵfac,
    providedIn: "root"
  });
}

/***/ })

};
;
//# sourceMappingURL=824.js.map