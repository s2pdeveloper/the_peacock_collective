"use strict";
exports.id = 8;
exports.ids = [8];
exports.modules = {

/***/ 74573:
/*!*******************************************************!*\
  !*** ./src/app/features/contact/contact.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 46584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37100);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 90530);





function ContactComponent_ng_template_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ContactComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class ContactComponent {
  constructor(router) {
    this.router = router;
    this.showNavigationIndicators = false;
    this.showNavigationArrows = false;
    this.data = {
      phone: '+48 541 44 27',
      email: 'info@info.com',
      address: '66-764 City, Street 23',
      fbLink: '',
      twitterLink: '',
      googleLink: '',
      mapLink: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317893.9737282887!2d-0.11951900000000001!3d51.503186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1708409035190!5m2!1sen!2sus'
    };
    this.messageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]),
      query: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required])
    });
  }
  navigateTo(path) {
    this.router.navigate([path]);
  }
  submit(e) {
    e.preventDefault();
    if (!!this.messageForm.value) {
      console.log('this.messageForm.value', this.messageForm.value);
    }
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ContactComponent_Factory(t) {
    return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ContactComponent,
    selectors: [["app-contact"]],
    decls: 57,
    vars: 11,
    consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-11"], [1, "py-3", "text-color-primary"], [1, "pointer", 3, "click"], [1, "py-4"], [1, "col-11", "background-primary"], [1, "row"], [1, "col-12", "col-md-6", "col-lg-6", "flex-column", "d-flex", "justify-content-center", "align-items-center", "top-left"], [1, "text-get"], [1, "fa-solid", "fa-phone", "me-2"], ["target", "_blank", 3, "href"], [1, "fa-regular", "fa-envelope", "me-2"], [1, "fa-solid", "fa-location-dot", "me-2"], [1, "row", "media-box", "justify-content-center", "my-2", "w-100"], [1, "col-10", "col-md-7", "col-lg-6", "d-flex", "justify-content-evenly", "my-2"], [1, "media"], ["target", "_blank", 1, "text-white", 3, "href"], [1, "fa-brands", "fa-facebook"], [1, "fa-brands", "fa-twitter"], [1, "fa-brands", "fa-google-plus-g"], [1, "col-12", "col-md-6", "col-lg-6"], [3, "showNavigationArrows", "showNavigationIndicators"], ["ngbSlide", ""], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317893.9737282887!2d-0.11951900000000001!3d51.503186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1708409035190!5m2!1sen!2sus`, "height", "450", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 1, "w-100", 2, "border", "0"], [1, "col-12", "col-md-6", "col-lg-6", "flex-column", "d-flex", "justify-content-center", "align-items-center", "p-4"], [1, "text-get", "mb-3"], [1, "row", "w-100", "justify-content-center"], [1, "col-12"], [3, "formGroup"], [1, "mb-3"], ["type", "email", "placeholder", "your@email.com", "formControlName", "email", 1, "form-control"], ["rows", "3", "formControlName", "query", "placeholder", "How can we help?", 1, "form-control"], ["type", "button", 1, "btn", "btn-dark", "py-2", 3, "click"], [1, "d-flex", "justify-content-center", "w-100", "picsum-img-wrapper"], ["src", "../../../assets/images/store1.jpg", 1, "img-fluid", "w-100"], ["src", "../../../assets/images/store2.jpg", 1, "img-fluid", "w-100"]],
    template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_span_click_4_listener() {
          return ctx.navigateTo("/");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " / Contact us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2)(8, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Contact us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Get in touch with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14)(27, "div", 15)(28, "div", 16)(29, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16)(32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16)(35, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21)(38, "ngb-carousel", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ContactComponent_ng_template_39_Template, 2, 0, "ng-template", 23)(40, ContactComponent_ng_template_40_Template, 2, 0, "ng-template", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6)(42, "div", 7)(43, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "iframe", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25)(46, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Send us a message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27)(49, "div", 28)(50, "form", 29)(51, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "textarea", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_55_listener($event) {
          return ctx.submit($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "tel:" + (ctx.data == null ? null : ctx.data.phone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "mailto:" + (ctx.data == null ? null : ctx.data.email), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.data == null ? null : ctx.data.address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "http://" + ctx.data.fbLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "http://" + ctx.data.twitterLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "http://" + ctx.data.googleLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showNavigationArrows", ctx.showNavigationArrows)("showNavigationIndicators", ctx.showNavigationIndicators);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.messageForm);
      }
    },
    dependencies: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbSlide, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName],
    styles: ["*[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.media-box[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n  width: 45px;\n  height: 45px;\n  padding: 1rem;\n  border-radius: 50%;\n  background-color: #000;\n  color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.media-box[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.text-get[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  line-height: 1;\n  font-weight: 500;\n  display: inline-block;\n  padding-bottom: 1rem;\n}\n.text-get[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  width: 35px;\n  height: 2.5px;\n  background-color: #000;\n  margin: 12px auto;\n}\n\n.form-control[_ngcontent-%COMP%], .input-number[_ngcontent-%COMP%] {\n  border: 0;\n  border-radius: 0;\n  padding: 0.5rem 1rem !important;\n}\n\n.form-control[_ngcontent-%COMP%]:focus, .input-number[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  outline: none;\n  border-bottom: 1px solid #000;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n}\n\n.form-control[_ngcontent-%COMP%]:focus-visible, .input-number[_ngcontent-%COMP%]:focus-visible {\n  border-bottom: 1px solid #000;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  outline: none;\n}\n\n.btn-dark[_ngcontent-%COMP%], .btn-light[_ngcontent-%COMP%] {\n  width: 100% !important;\n  padding: 0.5rem 0 !important;\n  border-radius: 0 !important;\n}\n\n.btn[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n\n.btn[_ngcontent-%COMP%]:active {\n  border: 0;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n\n.background-primary[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n\n@media (max-width: 771px) {\n  .top-left[_ngcontent-%COMP%] {\n    padding: 40px;\n  }\n  .text-get[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVKO0FBREk7RUFDSSxlQUFBO0FBR1I7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFFRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDQTtFQUNFLFNBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FBRUY7O0FBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUdGOztBQURBO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBSUY7O0FBRkE7O0VBRUUsc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBS0Y7O0FBSEE7RUFDRSxnQkFBQTtBQU1GOztBQUpBO0VBQ0UsU0FBQTtBQU9GOztBQUxBO0VBQ0UsZ0JBQUE7QUFRRjs7QUFOQTtFQUNFLHlCQUFBO0FBU0Y7O0FBUEE7RUFDSTtJQUNJLGFBQUE7RUFVTjtFQVJFO0lBQ0ksaUJBQUE7RUFVTjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbmF7XHJcbiAgY29sb3I6ICMwMDA7XHJcbn1cclxuLm1lZGlhLWJveCB7XHJcbiAgLm1lZGlhIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnRleHQtZ2V0IHtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDIuNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbjogMTJweCBhdXRvO1xyXG4gIH1cclxufVxyXG4uZm9ybS1jb250cm9sLC5pbnB1dC1udW1iZXIge1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZvcm0tY29udHJvbDpmb2N1cywuaW5wdXQtbnVtYmVyOmZvY3VzIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLXRvcDogMDtcclxuICBib3JkZXItbGVmdDogMDtcclxuICBib3JkZXItcmlnaHQ6IDA7XHJcbn1cclxuLmZvcm0tY29udHJvbDpmb2N1cy12aXNpYmxlLC5pbnB1dC1udW1iZXI6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XHJcbiAgYm9yZGVyLXRvcDogMDtcclxuICBib3JkZXItbGVmdDogMDtcclxuICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uYnRuLWRhcmssXHJcbi5idG4tbGlnaHQge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMC41cmVtIDAgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bjpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYnRuOmFjdGl2ZXtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuaW5wdXQ6Zm9jdXN7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uYmFja2dyb3VuZC1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjc3MXB4KXtcclxuICAgIC50b3AtbGVmdHtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQtZ2V0IHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 61008:
/*!****************************************************!*\
  !*** ./src/app/features/contact/contact.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactModule: () => (/* binding */ ContactModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94556);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 90530);
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component */ 74573);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 61504);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 46584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37100);







const routes = [{
  path: '',
  component: _contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent
}];
class ContactModule {
  static #_ = this.ɵfac = function ContactModule_Factory(t) {
    return new (t || ContactModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ContactModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactModule, {
    declarations: [_contact_component__WEBPACK_IMPORTED_MODULE_0__.ContactComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ })

};
;
//# sourceMappingURL=8.js.map