function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/acercade/acercade.component.ts":
  /*!************************************************!*\
    !*** ./src/app/acercade/acercade.component.ts ***!
    \************************************************/

  /*! exports provided: AcercadeComponent */

  /***/
  function srcAppAcercadeAcercadeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcercadeComponent", function () {
      return AcercadeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var AcercadeComponent = function AcercadeComponent(activeModal) {
      _classCallCheck(this, AcercadeComponent);

      this.activeModal = activeModal;
      this.titulo = null;
      this.texto = null;
      this.texto2 = null;
      this.repo = null;
      this.cerrar = null;
    };

    AcercadeComponent.ɵfac = function AcercadeComponent_Factory(t) {
      return new (t || AcercadeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
    };

    AcercadeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AcercadeComponent,
      selectors: [["app-acercade"]],
      decls: 22,
      vars: 5,
      consts: [[1, "modal-content"], [1, "modal-header"], [1, "modal-title"], [1, "modal-body"], ["href", "https://angular.io/", "target", "_blank", "title", "Angular"], ["src", "assets\\img\\angular-logo.svg", "alt", "Angular", 1, "herramientas", 2, "width", "80px", "margin-left", "10px"], ["href", "https://ng-bootstrap.github.io/#/home", "target", "_blank", "title", "Bootstrap"], ["src", "assets\\img\\bootstrap-logo.svg", "alt", "Bootstrap", 1, "herramientas", 2, "width", "70px", "margin-left", "5px"], ["href", "https://code.visualstudio.com/", "target", "_blank", "title", "Visual Studio Code"], ["src", "assets\\img\\vscode-logo.svg", "alt", "Visual Studio Code", 1, "herramientas", 2, "width", "60px", "margin-left", "15px"], ["href", "https://github.com/", "target", "_blank", "title", "GitHub"], ["src", "assets\\img\\github-logo.svg", "alt", "GitHub", 1, "herramientas", 2, "width", "60px", "margin-left", "20px"], [1, "modal-footer"], ["href", "https://github.com/javierorp/tcp-simulador/", "target", "_blank", "title", "Repositorio", 1, "btn", "btn-modal"], ["type", "button", "title", "Cerrar", 1, "btn", "btn-modal", 3, "click"]],
      template: function AcercadeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcercadeComponent_Template_button_click_20_listener() {
            return ctx.activeModal.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titulo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.texto);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.texto2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.repo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cerrar);
        }
      },
      styles: [".modal-content[_ngcontent-%COMP%] {\r\n    width: 150%;\r\n    margin-left: -20%;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n    text-align: justify;\r\n}\r\n\r\n.btn-modal[_ngcontent-%COMP%] {\r\n    color       : #004e99;\r\n    border-color: #004e99;\r\n    margin-left : 10px;\r\n    margin-top  : 10px;\r\n}\r\n\r\n.btn-modal[_ngcontent-%COMP%]:hover {\r\n    color           : #fff;\r\n    background-color: #004e99;\r\n    border-color    : #004e99\r\n}\r\n\r\nimg.herramientas[_ngcontent-%COMP%] {\r\n    opacity: 0.6;\r\n}\r\n\r\nimg.herramientas[_ngcontent-%COMP%]:hover {\r\n    opacity: 1.0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNlcmNhZGUvYWNlcmNhZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FjZXJjYWRlL2FjZXJjYWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtY29udGVudCB7XHJcbiAgICB3aWR0aDogMTUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjAlO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5cclxuLmJ0bi1tb2RhbCB7XHJcbiAgICBjb2xvciAgICAgICA6ICMwMDRlOTk7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDRlOTk7XHJcbiAgICBtYXJnaW4tbGVmdCA6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wICA6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tbW9kYWw6aG92ZXIge1xyXG4gICAgY29sb3IgICAgICAgICAgIDogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRlOTk7XHJcbiAgICBib3JkZXItY29sb3IgICAgOiAjMDA0ZTk5XHJcbn1cclxuXHJcbmltZy5oZXJyYW1pZW50YXMge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG59XHJcblxyXG5pbWcuaGVycmFtaWVudGFzOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDEuMDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AcercadeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-acercade',
          templateUrl: './acercade.component.html',
          styleUrls: ['./acercade.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _supbar_supbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./supbar/supbar.component */
    "./src/app/supbar/supbar.component.ts");
    /* harmony import */


    var _contenido_contenido_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./contenido/contenido.component */
    "./src/app/contenido/contenido.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-supbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-contenido");
        }
      },
      directives: [_supbar_supbar_component__WEBPACK_IMPORTED_MODULE_1__["SupbarComponent"], _contenido_contenido_component__WEBPACK_IMPORTED_MODULE_2__["ContenidoComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: createTranslateLoader, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function () {
      return createTranslateLoader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/divider.js");
    /* harmony import */


    var _supbar_supbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./supbar/supbar.component */
    "./src/app/supbar/supbar.component.ts");
    /* harmony import */


    var _contenido_contenido_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./contenido/contenido.component */
    "./src/app/contenido/contenido.component.ts");
    /* harmony import */


    var _simulacion_simulacion_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./simulacion/simulacion.component */
    "./src/app/simulacion/simulacion.component.ts");
    /* harmony import */


    var _acercade_acercade_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./acercade/acercade.component */
    "./src/app/acercade/acercade.component.ts");
    /* harmony import */


    var _infoparametros_infoparametros_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./infoparametros/infoparametros.component */
    "./src/app/infoparametros/infoparametros.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // Angular
    // Bootstrap
    // Angular Material
    // Mis componentes
    // Otros
    // Iconos
    // Traduccion


    function createTranslateLoader(http) {
      http.head("https://github.com/javierorp/tcp-simulador/tree/master/src/");
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_20__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateLoader"],
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClient"]]
        }
      })], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _supbar_supbar_component__WEBPACK_IMPORTED_MODULE_13__["SupbarComponent"], _contenido_contenido_component__WEBPACK_IMPORTED_MODULE_14__["ContenidoComponent"], _simulacion_simulacion_component__WEBPACK_IMPORTED_MODULE_15__["SimulacionComponent"], _acercade_acercade_component__WEBPACK_IMPORTED_MODULE_16__["AcercadeComponent"], _infoparametros_infoparametros_component__WEBPACK_IMPORTED_MODULE_17__["InfoparametrosComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateModule"]],
        exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _supbar_supbar_component__WEBPACK_IMPORTED_MODULE_13__["SupbarComponent"], _contenido_contenido_component__WEBPACK_IMPORTED_MODULE_14__["ContenidoComponent"], _simulacion_simulacion_component__WEBPACK_IMPORTED_MODULE_15__["SimulacionComponent"], _acercade_acercade_component__WEBPACK_IMPORTED_MODULE_16__["AcercadeComponent"], _infoparametros_infoparametros_component__WEBPACK_IMPORTED_MODULE_17__["InfoparametrosComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDividerModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslateLoader"],
              useFactory: createTranslateLoader,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClient"]]
            }
          })],
          exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contenido/contenido.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/contenido/contenido.component.ts ***!
    \**************************************************/

  /*! exports provided: ContenidoComponent */

  /***/
  function srcAppContenidoContenidoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContenidoComponent", function () {
      return ContenidoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _infoparametros_infoparametros_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../infoparametros/infoparametros.component */
    "./src/app/infoparametros/infoparametros.component.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _simulacion_simulacion_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../simulacion/simulacion.component */
    "./src/app/simulacion/simulacion.component.ts");

    function ContenidoComponent_ngb_alert_116_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-alert", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ContenidoComponent_ngb_alert_116_Template_ngb_alert_close_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.infoMsg = null;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.infoMsg);
      }
    }

    function ContenidoComponent_div_117_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-alert", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function ContenidoComponent_div_117_Template_ngb_alert_close_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var alerta_r12 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.cerrarAlerta(alerta_r12);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var alerta_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](alerta_r12.campo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", alerta_r12.msg, "");
      }
    }

    function ContenidoComponent_div_125_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-simulacion", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("simular", ctx_r9.simulacionEnv);
      }
    }

    var ContenidoComponent = /*#__PURE__*/function () {
      function ContenidoComponent(modalService, translate, cdr) {
        _classCallCheck(this, ContenidoComponent);

        this.modalService = modalService;
        this.translate = translate;
        this.cdr = cdr; // Iconos de los botones

        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBars"]; // menu

        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlay"]; // simular

        this.faRandom = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faRandom"]; // rellenar formulario con datos aleatorios

        this.faEraser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEraser"]; // limpiar formulario

        this.faQuestionCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faQuestionCircle"]; // informacion sobre los parametros
        // Variable para ocultar o no la simulacion

        this.ejecutar = false; // Objeto simulacion que obtiene los datos del formulario

        this.simulacion = {
          //Cliente
          ipclien: "127.0.0.1",
          mssclien: null,
          datosclien: null,
          snclien: null,
          segperdclien: null,
          wclien: null,
          //Servidor
          ipserv: "192.168.0.1",
          mssserv: null,
          datosserv: null,
          snserv: null,
          segperdserv: null,
          wserv: null,
          //General
          timeout: null,
          umbral: null,
          algort: "",
          cierre: ""
        }; // Objeto que se le enviara a SimulacionComponent para simular

        this.simulacionEnv = {
          //Cliente
          ipclien: "",
          mssclien: null,
          datosclien: null,
          snclien: null,
          segperdclien: "",
          wclien: null,
          //Servidor
          ipserv: "",
          mssserv: null,
          datosserv: null,
          snserv: null,
          segperdserv: "",
          wserv: null,
          //General
          timeout: 0,
          umbral: 0,
          algort: "",
          cierre: ""
        }; // Alertas

        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.staticAlertClosed = false;
      }

      _createClass(ContenidoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // Muestra la alerta de los navegadores compatibles durante 5 segundos
          var duracion = 10000; //en milisegundos

          setTimeout(function () {
            return _this.staticAlertClosed = true;
          }, 20000);

          this._success.subscribe(function (message) {
            return _this.infoMsg = message;
          });

          this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(duracion)).subscribe(function () {
            return _this.infoMsg = null;
          });

          this.translate.get('contenido.aviso').subscribe(function (value) {
            _this._success.next(value);
          });
        }
      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          // Forzamos la detecion de cambios despues de que el contenido se haya comprobado para evitar el error ExpressionChangedAfterItHasBeenCheckedError
          this.cdr.detectChanges();
        }
        /**
         * @description Abre una ventana con la informacion sonbre los parametros
         * @author javierorp
         */

      }, {
        key: "open",
        value: function open() {
          var modalRef = this.modalService.open(_infoparametros_infoparametros_component__WEBPACK_IMPORTED_MODULE_3__["InfoparametrosComponent"]);
          this.translate.get('infoparametros.titulo').subscribe(function (value) {
            modalRef.componentInstance.titulo = value;
          });
          this.translate.get('infoparametros.tcp-link').subscribe(function (value) {
            modalRef.componentInstance.tcp_link = value;
          });
          this.translate.get('infoparametros.masinfo').subscribe(function (value) {
            modalRef.componentInstance.masinfo = value;
          });
          this.translate.get('infoparametros.supuestos').subscribe(function (value) {
            modalRef.componentInstance.supuestos = value;
          });
          this.translate.get('infoparametros.supuesto1').subscribe(function (value) {
            modalRef.componentInstance.supuesto1 = value;
          });
          this.translate.get('infoparametros.supuesto2').subscribe(function (value) {
            modalRef.componentInstance.supuesto2 = value;
          });
          this.translate.get('infoparametros.ip').subscribe(function (value) {
            modalRef.componentInstance.ip = value;
          });
          this.translate.get('infoparametros.ip-link').subscribe(function (value) {
            modalRef.componentInstance.ip_link = value;
          });
          this.translate.get('infoparametros.ip-text').subscribe(function (value) {
            modalRef.componentInstance.ip_text = value;
          });
          this.translate.get('infoparametros.mss').subscribe(function (value) {
            modalRef.componentInstance.mss = value;
          });
          this.translate.get('infoparametros.mss-link').subscribe(function (value) {
            modalRef.componentInstance.mss_link = value;
          });
          this.translate.get('infoparametros.mss-text').subscribe(function (value) {
            modalRef.componentInstance.mss_text = value;
          });
          this.translate.get('infoparametros.datos').subscribe(function (value) {
            modalRef.componentInstance.datos = value;
          });
          this.translate.get('infoparametros.datos-link').subscribe(function (value) {
            modalRef.componentInstance.datos_link = value;
          });
          this.translate.get('infoparametros.datos-text').subscribe(function (value) {
            modalRef.componentInstance.datos_text = value;
          });
          this.translate.get('infoparametros.sn').subscribe(function (value) {
            modalRef.componentInstance.sn = value;
          });
          this.translate.get('infoparametros.sn-link').subscribe(function (value) {
            modalRef.componentInstance.sn_link = value;
          });
          this.translate.get('infoparametros.sn-text').subscribe(function (value) {
            modalRef.componentInstance.sn_text = value;
          });
          this.translate.get('infoparametros.segperd').subscribe(function (value) {
            modalRef.componentInstance.segperd = value;
          });
          this.translate.get('infoparametros.segperd-link').subscribe(function (value) {
            modalRef.componentInstance.segperd_link = value;
          });
          this.translate.get('infoparametros.segperd-text').subscribe(function (value) {
            modalRef.componentInstance.segperd_text = value;
          });
          this.translate.get('infoparametros.w').subscribe(function (value) {
            modalRef.componentInstance.w = value;
          });
          this.translate.get('infoparametros.w-link').subscribe(function (value) {
            modalRef.componentInstance.w_link = value;
          });
          this.translate.get('infoparametros.w-text').subscribe(function (value) {
            modalRef.componentInstance.w_text = value;
          });
          this.translate.get('infoparametros.vc').subscribe(function (value) {
            modalRef.componentInstance.vc = value;
          });
          this.translate.get('infoparametros.vc-link').subscribe(function (value) {
            modalRef.componentInstance.vc_link = value;
          });
          this.translate.get('infoparametros.vc-text').subscribe(function (value) {
            modalRef.componentInstance.vc_text = value;
          });
          this.translate.get('infoparametros.timeout').subscribe(function (value) {
            modalRef.componentInstance.timeout = value;
          });
          this.translate.get('infoparametros.timeout-link').subscribe(function (value) {
            modalRef.componentInstance.timeout_link = value;
          });
          this.translate.get('infoparametros.timeout-text').subscribe(function (value) {
            modalRef.componentInstance.timeout_text = value;
          });
          this.translate.get('infoparametros.alg').subscribe(function (value) {
            modalRef.componentInstance.alg = value;
          });
          this.translate.get('infoparametros.alg-link').subscribe(function (value) {
            modalRef.componentInstance.alg_link = value;
          });
          this.translate.get('infoparametros.alg-text').subscribe(function (value) {
            modalRef.componentInstance.alg_text = value;
          });
          this.translate.get('infoparametros.cerrar').subscribe(function (value) {
            modalRef.componentInstance.cerrar = value;
          });
        }
        /**
         * TODO: Revisar los parametros antes de asignalos a simulacionEnv
         * @description Asigna los parametros del formulario a la variable simulacionEnv por valor
         *              que es el atributo del componente hijo SimulacionComponents
         * @author javierorp
         */

      }, {
        key: "simular",
        value: function simular() {
          var simular = false; // Se compruban que los parametros introducidos sean correctos

          simular = this.comprobarParametros();

          if (simular) {
            // Asi se consiguen que los datos se pasen por valor en lugar de por referencia
            var ipclien = this.simulacion.ipclien;
            var mssclien = this.simulacion.mssclien;
            var datosclien = this.simulacion.datosclien;
            var snclien = this.simulacion.snclien;
            var segperdclien = this.simulacion.segperdclien;
            var wclien = this.simulacion.wclien;
            var ipserv = this.simulacion.ipserv;
            var mssserv = this.simulacion.mssserv;
            var datosserv = this.simulacion.datosserv;
            var snserv = this.simulacion.snserv;
            var segperdserv = this.simulacion.segperdserv;
            var wserv = this.simulacion.wserv;
            var timeout = this.simulacion.timeout;
            var umbral = this.simulacion.umbral;
            var algort = this.simulacion.algort;
            var cierre = this.simulacion.cierre;
            this.simulacionEnv = {
              ipclien: ipclien,
              mssclien: mssclien,
              datosclien: datosclien,
              snclien: snclien,
              segperdclien: segperdclien,
              wclien: wclien,
              ipserv: ipserv,
              mssserv: mssserv,
              datosserv: datosserv,
              snserv: snserv,
              segperdserv: segperdserv,
              wserv: wserv,
              timeout: timeout,
              umbral: umbral,
              algort: algort,
              cierre: cierre
            }; // Permitimos que se visualice la simulacion

            this.ejecutar = true;
          } else {
            this.ejecutar = false;
          }
        }
        /**
         * TODO:
         * @description Comprueba los parametros del formulario
         * @author javierorp
         * @returns devuevle 'false' si alguno de los parametros no es correcto y 'true' si todos son correctos
         *          ademas genera alertas para los parametros erroneos
         */

      }, {
        key: "comprobarParametros",
        value: function comprobarParametros() {
          var simular = false; // -----IPs-----
          // Expresion regular para comprobar que la IP sea valida con numeros comprendidos entre 0 y 255

          var ipRegex = new RegExp('^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$'); // Se eliminan los espacios en blanco de las IPs

          this.simulacion.ipserv = this.simulacion.ipserv.replace(/\s/g, '');
          this.simulacion.ipclien = this.simulacion.ipclien.replace(/\s/g, ''); //-----SEGMENTOS PERDIDOS-----
          // Expresion regular para comprbar si segperd son numeros separados por comas

          var segperdRegex = new RegExp('[0-9]+(,[0-9]+)+/g');
          var segperdclien = this.simulacion.segperdclien;
          var segperdserv = this.simulacion.segperdserv;

          if (segperdclien != null) {
            //Cliente
            segperdclien = segperdclien.replace(/[a-zA-Z]+/gi, ''); // se eliminan los caracteres que sean letras

            segperdclien = segperdclien.replace(/\s/g, ''); // se eliminan los espacios

            segperdclien = segperdclien.replace(/\W+/g, ','); // se cambian todos los caracteres no numericos por comas (,)

            var segperdNum = segperdclien.split(',').map(Number); // se transforma la cadena de caracteres a un array numerico

            segperdNum = segperdNum.sort(function (n1, n2) {
              return n1 - n2;
            }); // se ordenan los numeros de menor a mayor

            segperdclien = segperdNum.toString(); // se transforma el array numerico en una cadena de caracteres
            // Eliminamos los valores duplicados

            var segperdArr = segperdclien.split(',');

            for (var i = 0; i < segperdArr.length; i++) {
              for (var j = i + 1; j < segperdArr.length; j++) {
                if (segperdArr[i] == segperdArr[j]) delete segperdArr[j];
              }
            }

            segperdclien = segperdArr.toString();
            segperdclien = segperdclien.replace(/\W+/g, ','); // se vuelve a ejecutar esta regex para eliminar las comas duplicadas

            segperdclien = segperdclien[0] == ',' ? segperdclien.substring(1) : segperdclien; // si el primer caracter es una coma se elimina

            segperdclien = segperdclien[segperdclien.length - 1] == ',' ? segperdclien.substring(0, segperdclien.length - 1) : segperdclien; // si el ultimo caracter es una coma se elimina

            if (segperdclien == "0") segperdclien = "";
            this.simulacion.segperdclien = segperdclien;
          }

          if (segperdserv != null) {
            //Servidor
            segperdserv = segperdserv.replace(/[a-zA-Z]+/gi, ''); // se eliminan los caracteres que sean letras

            segperdserv = segperdserv.replace(/\s/g, ''); // se eliminan los espacios

            segperdserv = segperdserv.replace(/\W+/g, ','); // se cambian todos los caracteres no numericos por comas (,)

            var segperdNum = segperdserv.split(',').map(Number); // se transforma la cadena de caracteres a un array numerico

            segperdNum = segperdNum.sort(function (n1, n2) {
              return n1 - n2;
            }); // se ordenan los numeros de menor a mayor

            segperdserv = segperdNum.toString(); // se transforma el array numerico en una cadena de caracteres
            // Eliminamos los valores duplicados

            var segperdArr = segperdserv.split(',');

            for (var i = 0; i < segperdArr.length; i++) {
              for (var j = i + 1; j < segperdArr.length; j++) {
                if (segperdArr[i] == segperdArr[j]) delete segperdArr[j];
              }
            }

            segperdserv = segperdArr.toString();
            segperdserv = segperdserv.replace(/\W+/g, ','); // se vuelve a ejecutar esta regex para eliminar las comas duplicadas

            segperdserv = segperdserv[0] == ',' ? segperdserv.substring(1) : segperdserv; // si el primer caracter es una coma se elimina

            segperdserv = segperdserv[segperdserv.length - 1] == ',' ? segperdserv.substring(0, segperdserv.length - 1) : segperdserv; // si el ultimo caracter es una coma se elimina

            if (segperdserv == "0") segperdserv = "";
            this.simulacion.segperdserv = segperdserv;
          } // ----DATOS NUMERICOS----
          // Se comprueba que los valores introducidos no son mayores a 99999999


          if (this.simulacion.mssclien > 99999999) this.simulacion.mssclien = 99999999;
          if (this.simulacion.datosclien > 99999999) this.simulacion.datosclien = 99999999;
          if (this.simulacion.snclien > 9999999) this.simulacion.snclien = 9999999;
          if (this.simulacion.wclien > 99999999) this.simulacion.wclien = 99999999;
          if (this.simulacion.mssserv > 99999999) this.simulacion.mssserv = 99999999;
          if (this.simulacion.datosserv > 99999999) this.simulacion.datosserv = 99999999;
          if (this.simulacion.snserv > 9999999) this.simulacion.snserv = 9999999;
          if (this.simulacion.wserv > 99999999) this.simulacion.wserv = 99999999;
          if (this.simulacion.timeout == null) this.simulacion.timeout = 0;
          if (this.simulacion.timeout > 99999999) this.simulacion.timeout = 99999999;
          if (this.simulacion.umbral > 99999999) this.simulacion.umbral = 99999999; // -----ALERTAS-----
          // Se eliminan todas las alertas

          this.alertas = []; //Se comprueban todos los parametros y se incluyen las alertas en caso de ser necesarias
          //Cliente

          if (!ipRegex.test(this.simulacion.ipclien)) this.alertas.push({
            campo: this.translate.instant('contenido.clien') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.ipclien') + ": ",
            msg: "Debe ser del tipo [0-255].[0-255].[0-255].[0-255]"
          });
          if (this.simulacion.mssclien < 1) this.alertas.push({
            campo: this.translate.instant('contenido.clien') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.mssclien') + ": ",
            msg: this.translate.instant('contenido.error-mss')
          });
          if (this.simulacion.datosclien < 1) this.alertas.push({
            campo: this.translate.instant('contenido.clien') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.datosclien') + ": ",
            msg: this.translate.instant('contenido.error-datosclien')
          });
          if (this.simulacion.snclien < 1) this.alertas.push({
            campo: this.translate.instant('contenido.clien') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.snclien') + ": ",
            msg: this.translate.instant('contenido.error-snclien')
          });
          if (this.simulacion.segperdclien != null && this.simulacion.segperdclien.indexOf(',') != -1 && segperdRegex.test(this.simulacion.segperdclien)) this.alertas.push({
            campo: this.translate.instant('contenido.clien') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.segperdclien') + ": ",
            msg: this.translate.instant('contenido.error-segperdclien')
          });
          if (this.simulacion.wclien < 1) this.alertas.push({
            campo: this.translate.instant('contenido.clien') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.wclien') + ": ",
            msg: this.translate.instant('contenido.error-wclien')
          }); //Servidor

          if (!ipRegex.test(this.simulacion.ipserv)) this.alertas.push({
            campo: this.translate.instant('contenido.serv') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.ipserv') + ": ",
            msg: this.translate.instant('contenido.error-ipserv')
          });
          if (this.simulacion.mssserv < 1) this.alertas.push({
            campo: this.translate.instant('contenido.serv') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.mssserv') + ": ",
            msg: this.translate.instant('contenido.error-mssserv')
          });
          if (this.simulacion.datosserv < 1) this.alertas.push({
            campo: this.translate.instant('contenido.serv') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.datosserv') + ": ",
            msg: this.translate.instant('contenido.error-datosserv')
          });
          if (this.simulacion.snserv < 1) this.alertas.push({
            campo: this.translate.instant('contenido.serv') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.snserv') + ": ",
            msg: this.translate.instant('contenido.error-snserv')
          });
          if (this.simulacion.segperdserv != null && this.simulacion.segperdserv.indexOf(',') != -1 && segperdRegex.test(this.simulacion.segperdserv)) this.alertas.push({
            campo: this.translate.instant('contenido.serv') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.segperdserv') + ": ",
            msg: this.translate.instant('contenido.error-segperdserv')
          });
          if (this.simulacion.wserv < 1) this.alertas.push({
            campo: this.translate.instant('contenido.serv') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.wserv') + ": ",
            msg: this.translate.instant('contenido.error-wserv')
          }); //General

          if (this.simulacion.timeout < 0 || this.simulacion.timeout == null) this.alertas.push({
            campo: this.translate.instant('contenido.general') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.timeout') + ": ",
            msg: this.translate.instant('contenido.error-timeout')
          });
          if (this.simulacion.umbral <= 0 || this.simulacion.umbral == null) this.alertas.push({
            campo: this.translate.instant('contenido.general') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.umbral') + ": ",
            msg: this.translate.instant('contenido.error-umbral')
          });
          if (this.simulacion.algort == "") this.alertas.push({
            campo: this.translate.instant('contenido.general') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.algort') + ": ",
            msg: this.translate.instant('contenido.error-algort')
          });
          if (this.simulacion.cierre == "") this.alertas.push({
            campo: this.translate.instant('contenido.general') + " - " + this.translate.instant('contenido.error') + " " + this.translate.instant('contenido.cierre') + ": ",
            msg: this.translate.instant('contenido.error-cierre')
          }); //Se comprueba si se debe simular o no, retorna 'false' si alguno de los parametros es incorrecto y 'true' si todos lo son

          simular = !ipRegex.test(this.simulacion.ipclien) || this.simulacion.mssclien < 1 || this.simulacion.datosclien < 1 || this.simulacion.snclien < 1 || this.simulacion.segperdclien != null && this.simulacion.segperdclien.indexOf(',') != -1 && segperdRegex.test(this.simulacion.segperdclien) || this.simulacion.wclien < 1 || !ipRegex.test(this.simulacion.ipserv) || this.simulacion.mssserv < 1 || this.simulacion.datosserv < 1 || this.simulacion.snserv < 1 || this.simulacion.segperdserv != null && this.simulacion.segperdserv.indexOf(',') != -1 && segperdRegex.test(this.simulacion.segperdserv) || this.simulacion.wserv < 1 || this.simulacion.timeout < 0 || this.simulacion.umbral <= 0 || this.simulacion.umbral == null || this.simulacion.algort == "" || this.simulacion.cierre == "" ? false : true;
          return simular;
        }
        /**
         * TODO:
         * @description Rellenar los datos del formulario con valores aleatorios excepto la IP del servidor y del cliente,
         *              los segmentos que se pierden y el algoritmo de congestion a usar, que debe seleccionarlo el usuario
         * @author javierorp
         */

      }, {
        key: "rellenarDatos",
        value: function rellenarDatos() {
          //Cliente
          this.simulacion.ipclien = "127.0." + this.numAleatorio(0, 11, 1).toString() + "." + this.numAleatorio(0, 255, 1).toString();
          this.simulacion.mssclien = this.numAleatorio(100, 2000, 10);
          this.simulacion.datosclien = this.numAleatorio(100, 5000, 10);
          this.simulacion.snclien = this.numAleatorio(1, 500, 5);
          this.simulacion.wclien = this.numAleatorio(0, 8000, 1000); //Servidor

          this.simulacion.ipserv = "192.168." + +this.numAleatorio(0, 11, 1).toString() + "." + this.numAleatorio(0, 255, 1).toString();
          this.simulacion.mssserv = this.numAleatorio(100, 2000, 10);
          this.simulacion.datosserv = this.numAleatorio(100, 5000, 10);
          this.simulacion.snserv = this.numAleatorio(1, 500, 5);
          this.simulacion.wserv = this.numAleatorio(0, 8000, 1000); //General

          this.simulacion.timeout = this.numAleatorio(0, 100, 10);
          this.simulacion.umbral = this.numAleatorio(1, 50, 1);
          this.simulacion.algort = this.numAleatorio(1, 3, 1).toString();
          this.simulacion.cierre = this.numAleatorio(1, 3, 1).toString();
        }
        /**
         * TODO:
         * @description Genera un numero aleatorio comprendido entre un numero y un maximo multiplo del un valor
         * @author javierorp
         * @param min minomo numero a obtener
         * @param max maximo numbero a obtener
         * @param multiplo numero del que seran multiplos los valores obtenidos
         * @returns aleatorio
         */

      }, {
        key: "numAleatorio",
        value: function numAleatorio(min, max, multiplo) {
          var numero = Math.floor(Math.random() * (max - min) + min);
          var modulo = numero % multiplo;
          var redondeo = modulo != 0 ? multiplo - modulo : 0;
          return numero + redondeo;
        }
        /**
         * TODO:
         * @description Limpia el formulario y oculta la simulacion
         * @author javierorp
         */

      }, {
        key: "limpiar",
        value: function limpiar() {
          this.alertas = []; //Cliente

          var ipclien = "127.0.0.1";
          var mssclien = null;
          var datosclien = null;
          var snclien = null;
          var segperdclien = "";
          var wclien = null; //Servidor

          var ipserv = "192.168.0.1";
          var mssserv = null;
          var datosserv = null;
          var snserv = null;
          var segperdserv = "";
          var wserv = null; //General

          var timeout = null;
          var umbral = null;
          var algort = "";
          var cierre = "";
          this.simulacion = {
            ipclien: ipclien,
            mssclien: mssclien,
            datosclien: datosclien,
            snclien: snclien,
            segperdclien: segperdclien,
            wclien: wclien,
            ipserv: ipserv,
            mssserv: mssserv,
            datosserv: datosserv,
            snserv: snserv,
            segperdserv: segperdserv,
            wserv: wserv,
            timeout: timeout,
            umbral: umbral,
            algort: algort,
            cierre: cierre
          }; // Ocultamos la simulacion

          this.ejecutar = false;
        }
        /**
         * TODO:
         * @description Cierra la alerta sobre la que se ha pulsado
         * @author javierorp
         * @param alerta alerta a cerrar
         */

      }, {
        key: "cerrarAlerta",
        value: function cerrarAlerta(alerta) {
          this.alertas.splice(this.alertas.indexOf(alerta), 1);
        }
      }]);

      return ContenidoComponent;
    }();

    ContenidoComponent.ɵfac = function ContenidoComponent_Factory(t) {
      return new (t || ContenidoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    ContenidoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContenidoComponent,
      selectors: [["app-contenido"]],
      decls: 126,
      vars: 160,
      consts: [["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/prism/1.16.0/themes/prism.css"], [1, "formizq"], ["mode", "side", 3, "opened"], ["sidenav", ""], [2, "text-align", "center"], [2, "font-weight", "bold", "text-decoration", "underline", "margin-bottom", "10px"], ["mat-button", "", 1, "btn", "infoparametros", 3, "title", "click"], [3, "icon"], [1, "params-container"], [2, "text-align", "left", "font-weight", "bold", "margin-bottom", "5px"], [3, "title"], ["matInput", "", 3, "ngModel", "placeholder", "ngModelChange"], ["matInput", "", "type", "number", "min", "1", "max", "99999999", 3, "ngModel", "placeholder", "ngModelChange"], ["matInput", "", "type", "number", "min", "0", "max", "9999999", 3, "ngModel", "placeholder", "ngModelChange"], ["matInput", "", "type", "number", "min", "0", "max", "99999999", 3, "ngModel", "placeholder", "ngModelChange"], [3, "value", "valueChange"], ["value", "1"], ["value", "2"], [2, "margin-bottom", "15px"], ["type", "button", 1, "btn", "btn-formulario", 3, "title", "click"], ["mat-button", "", 3, "title", "click"], [1, "btn", "btn-menu"], [1, "alerta"], ["type", "info", 3, "close", 4, "ngIf"], [4, "ngFor", "ngForOf"], [2, "text-align", "left"], [2, "color", "red", "margin-left", "10px"], ["class", "contsimulacion", 4, "ngIf"], ["type", "info", 3, "close"], ["type", "danger", 3, "close"], [1, "contsimulacion"], [3, "simular"]],
      template: function ContenidoComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-sidenav", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContenidoComponent_Template_button_click_9_listener() {
            return ctx.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContenidoComponent_Template_input_ngModelChange_18_listener($event) {
            return ctx.simulacion.ipclien = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContenidoComponent_Template_input_ngModelChange_22_listener($event) {
            return ctx.simulacion.mssclien = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContenidoComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.simulacion.datosclien = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContenidoComponent_Template_input_ngModelChange_30_listener($event) {
            return ctx.simulacion.snclien = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContenidoComponent_Template_input_ngModelChange_34_listener($event) {
            return ctx.simulacion.segperdclien = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContenidoComponent_Template_input_ngModelChange_38_listener($event) {
            return ctx.simulacion.wclien = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContenidoComponent_Template_input_ngModelChange_45_listener($event) {
            return ctx.simulacion.ipserv = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContenidoComponent_Template_input_ngModelChange_49_listener($event) {
            return ctx.simulacion.mssserv = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContenidoComponent_Template_input_ngModelChange_53_listener($event) {
            return ctx.simulacion.datosserv = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContenidoComponent_Template_input_ngModelChange_57_listener($event) {
            return ctx.simulacion.snserv = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](60, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContenidoComponent_Template_input_ngModelChange_61_listener($event) {
            return ctx.simulacion.segperdserv = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContenidoComponent_Template_input_ngModelChange_65_listener($event) {
            return ctx.simulacion.wserv = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](71, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContenidoComponent_Template_input_ngModelChange_72_listener($event) {
            return ctx.simulacion.timeout = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContenidoComponent_Template_input_ngModelChange_76_listener($event) {
            return ctx.simulacion.umbral = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](79, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](82, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ContenidoComponent_Template_mat_select_valueChange_83_listener($event) {
            return ctx.simulacion.algort = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "TCP Reno");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "TCP Tahoe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "mat-form-field", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](89, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](92, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ContenidoComponent_Template_mat_select_valueChange_93_listener($event) {
            return ctx.simulacion.cierre = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](96, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](99, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContenidoComponent_Template_button_click_101_listener() {
            return ctx.simular();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](102, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "fa-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContenidoComponent_Template_button_click_104_listener() {
            return ctx.rellenarDatos();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](105, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "fa-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContenidoComponent_Template_button_click_107_listener() {
            return ctx.limpiar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](108, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "fa-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContenidoComponent_Template_button_click_111_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return _r6.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](112, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "fa-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, ContenidoComponent_ngb_alert_116_Template, 2, 1, "ngb-alert", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, ContenidoComponent_div_117_Template, 5, 2, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "b", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](122, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](124, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, ContenidoComponent_div_125_Template, 2, 1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 70, "contenido.parametros"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 72, "contenido.parametros-tooltip"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faQuestionCircle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 74, "contenido.clien"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 76, "contenido.ipclien-tooltip"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 78, "contenido.ipclien"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.simulacion.ipclien);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 80, "contenido.mssclien-tooltip"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 82, "contenido.mssclien"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.simulacion.mssclien);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 84, "contenido.datosclien-tooltip"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 86, "contenido.datosclien"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.simulacion.datosclien);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 88, "contenido.snclien-tooltip"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 90, "contenido.snclien"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.simulacion.snclien);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 92, "contenido.segperdclien-tooltip"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 94, "contenido.segperdclien"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.simulacion.segperdclien);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 96, "contenido.wclien-tooltip"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 98, "contenido.wclien"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.simulacion.wclien);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 100, "contenido.serv"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 102, "contenido.ipserv-tooltip"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 104, "contenido.ipserv"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.simulacion.ipserv);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 106, "contenido.mssserv-tooltip"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 108, "contenido.mssserv"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.simulacion.mssserv);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 110, "contenido.datosserv-tooltip"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 112, "contenido.datosserv"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.simulacion.datosserv);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 114, "contenido.snserv-tooltip"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 116, "contenido.snserv"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.simulacion.snserv);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](60, 118, "contenido.segperdserv-tooltip"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 120, "contenido.segperdserv"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.simulacion.segperdserv);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 122, "contenido.wserv-tooltip"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 124, "contenido.wserv"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.simulacion.wserv);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 126, "contenido.general"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](71, 128, "contenido.timeout-tooltip"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 130, "contenido.timeout"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.simulacion.timeout);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 132, "contenido.umbral-tooltip"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](77, 134, "contenido.umbral"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.simulacion.umbral);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](79, 136, "contenido.algort-tooltip"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](82, 138, "contenido.algort-tooltip"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.simulacion.algort);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](89, 140, "contenido.cierre-tooltip"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](92, 142, "contenido.cierre"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.simulacion.cierre);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](96, 144, "contenido.clien"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](99, 146, "contenido.serv"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](102, 148, "contenido.simular"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPlay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](105, 150, "contenido.rellenar"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faRandom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](108, 152, "contenido.limpiar"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEraser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](112, 154, "contenido.menu"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faBars);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.infoMsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alertas);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](122, 156, "contenido.nota"), ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](124, 158, "contenido.nota-texto"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ejecutar);
        }
      },
      directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NumberValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbAlert"], _simulacion_simulacion_component__WEBPACK_IMPORTED_MODULE_16__["SimulacionComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: [".mat-drawer-container[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\r\n.mat-drawer[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n}\r\n\r\n.formizq[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top     : 60px;\r\n  bottom  : 0;\r\n  left    : 5px;\r\n  right   : 0;\r\n}\r\n\r\n.mat-button[_ngcontent-%COMP%] {\r\n  padding  : 0;\r\n  min-width: 0;\r\n}\r\n.btn-menu[_ngcontent-%COMP%] {\r\n  color      : #004e99;\r\n  border     : none;\r\n  margin-left: 2px;\r\n  position   : fixed;\r\n  margin-top : -15px;\r\n  z-index    : 1;\r\n}\r\n.btn-menu[_ngcontent-%COMP%]:hover {\r\n  color           : #fff;\r\n  background-color: #004e99;\r\n  border-color    : #004e99;\r\n}\r\n\r\n.btn-formulario[_ngcontent-%COMP%] {\r\n  color       : #004e99;\r\n  border-color: #004e99;\r\n  margin-left : 10px;\r\n  margin-top  : 10px;\r\n}\r\n.btn-formulario[_ngcontent-%COMP%]:hover {\r\n  color           : #fff;\r\n  background-color: #004e99;\r\n  border-color    : #004e99\r\n}\r\n\r\n.params-container[_ngcontent-%COMP%] {\r\n  display       : flex;\r\n  flex-direction: column;\r\n}\r\n.params-container[_ngcontent-%COMP%] {\r\n  width : 90%;\r\n  margin: auto;\r\n}\r\n\r\n.mat-option[_ngcontent-%COMP%]:hover {\r\n  color           : #fff;\r\n  background-color: #004e99;\r\n  border-color    : #004e99\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  margin: 0 0 -10px 0;\r\n}\r\n\r\n.contsimulacion[_ngcontent-%COMP%] {\r\n  margin    : 0 0 0 15px;\r\n  text-align: -webkit-center;\r\n}\r\n\r\n.alerta[_ngcontent-%COMP%] {\r\n  margin: 10px;\r\n}\r\n.alert-info[_ngcontent-%COMP%] {\r\n  color           : #004e99;\r\n  background-color: #7db4e926;\r\n  border-color    : #004e99;\r\n}\r\n\r\n.infoparametros[_ngcontent-%COMP%] {\r\n  opacity    : 0.6;\r\n  margin-left: 6px;\r\n}\r\n.infoparametros[_ngcontent-%COMP%]:hover {\r\n  opacity: 1.0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGVuaWRvL2NvbnRlbmlkby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFxQjtBQUNyQjtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBRUEseUJBQXlCO0FBQ3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7QUFDYjtBQUVBLHNEQUFzRDtBQUN0RDtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7QUFFQSxzREFBc0Q7QUFDdEQ7RUFDRSxxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekI7QUFDRjtBQUVBLGlDQUFpQztBQUNqQztFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQSwwQ0FBMEM7QUFDMUM7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCO0FBQ0Y7QUFFQSwwQkFBMEI7QUFDMUI7RUFDRSxtQkFBbUI7QUFDckI7QUFFQSxlQUFlO0FBQ2Y7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQTBCO0FBQzVCO0FBRUEsWUFBWTtBQUNaO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLHlCQUF5QjtBQUMzQjtBQUVBLDJDQUEyQztBQUMzQztFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbnRlbmlkby9jb250ZW5pZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbG9yZXMgZGUgZm9uZG8gKi9cclxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1hdC1kcmF3ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKiBGb3JtdWxhcmlvIGl6cXVpZXJkbyAqL1xyXG4uZm9ybWl6cSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcCAgICAgOiA2MHB4O1xyXG4gIGJvdHRvbSAgOiAwO1xyXG4gIGxlZnQgICAgOiA1cHg7XHJcbiAgcmlnaHQgICA6IDA7XHJcbn1cclxuXHJcbi8qIEJvdG9uIHBhcmEgYWJyaXIgeSBjZXJyYXIgZWwgZm9ybXVsYXJpbyBpenF1aWVyZG8gKi9cclxuLm1hdC1idXR0b24ge1xyXG4gIHBhZGRpbmcgIDogMDtcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5idG4tbWVudSB7XHJcbiAgY29sb3IgICAgICA6ICMwMDRlOTk7XHJcbiAgYm9yZGVyICAgICA6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBwb3NpdGlvbiAgIDogZml4ZWQ7XHJcbiAgbWFyZ2luLXRvcCA6IC0xNXB4O1xyXG4gIHotaW5kZXggICAgOiAxO1xyXG59XHJcblxyXG4uYnRuLW1lbnU6aG92ZXIge1xyXG4gIGNvbG9yICAgICAgICAgICA6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGU5OTtcclxuICBib3JkZXItY29sb3IgICAgOiAjMDA0ZTk5O1xyXG59XHJcblxyXG4vKiBCb3RvbmVzIGRlIHNpbXVsYXIsIHJlbGxlbmFyIHkgbGltcGlhciBmb3JtdWxhcmlvICovXHJcbi5idG4tZm9ybXVsYXJpbyB7XHJcbiAgY29sb3IgICAgICAgOiAjMDA0ZTk5O1xyXG4gIGJvcmRlci1jb2xvcjogIzAwNGU5OTtcclxuICBtYXJnaW4tbGVmdCA6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcCAgOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuLWZvcm11bGFyaW86aG92ZXIge1xyXG4gIGNvbG9yICAgICAgICAgICA6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGU5OTtcclxuICBib3JkZXItY29sb3IgICAgOiAjMDA0ZTk5XHJcbn1cclxuXHJcbi8qIENvbnRlbmVkb3IgZGUgbG9zIHBhcmFtZXRyb3MgKi9cclxuLnBhcmFtcy1jb250YWluZXIge1xyXG4gIGRpc3BsYXkgICAgICAgOiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5wYXJhbXMtY29udGFpbmVyIHtcclxuICB3aWR0aCA6IDkwJTtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi8qIFNlbGVjY2lvbiBkZWwgYWxnb3JpdG1vIGRlIGNvbmdlc3Rpb24gKi9cclxuLm1hdC1vcHRpb246aG92ZXIge1xyXG4gIGNvbG9yICAgICAgICAgICA6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGU5OTtcclxuICBib3JkZXItY29sb3IgICAgOiAjMDA0ZTk5XHJcbn1cclxuXHJcbi8qIEVudHJhZGEgZGUgcGFyYW1ldHJvcyAqL1xyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbjogMCAwIC0xMHB4IDA7XHJcbn1cclxuXHJcbi8qIFNpbXVsYWNpb24gKi9cclxuLmNvbnRzaW11bGFjaW9uIHtcclxuICBtYXJnaW4gICAgOiAwIDAgMCAxNXB4O1xyXG4gIHRleHQtYWxpZ246IC13ZWJraXQtY2VudGVyO1xyXG59XHJcblxyXG4vKiBBbGVydGFzICovXHJcbi5hbGVydGEge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmFsZXJ0LWluZm8ge1xyXG4gIGNvbG9yICAgICAgICAgICA6ICMwMDRlOTk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdkYjRlOTI2O1xyXG4gIGJvcmRlci1jb2xvciAgICA6ICMwMDRlOTk7XHJcbn1cclxuXHJcbi8qIEJvdG9uIGRlIGluZm9ybWFjaW9uIGRlIGxvcyBwYXJhbWV0cm9zICovXHJcbi5pbmZvcGFyYW1ldHJvcyB7XHJcbiAgb3BhY2l0eSAgICA6IDAuNjtcclxuICBtYXJnaW4tbGVmdDogNnB4O1xyXG59XHJcblxyXG4uaW5mb3BhcmFtZXRyb3M6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDEuMDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContenidoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contenido',
          templateUrl: './contenido.component.html',
          styleUrls: ['./contenido.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/infoparametros/infoparametros.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/infoparametros/infoparametros.component.ts ***!
    \************************************************************/

  /*! exports provided: InfoparametrosComponent */

  /***/
  function srcAppInfoparametrosInfoparametrosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoparametrosComponent", function () {
      return InfoparametrosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var InfoparametrosComponent = function InfoparametrosComponent(activeModal) {
      _classCallCheck(this, InfoparametrosComponent);

      this.activeModal = activeModal;
      this.titulo = null;
      this.tcp_link = null;
      this.masinfo = null;
      this.supuestos = null;
      this.supuesto1 = null;
      this.supuesto2 = null;
      this.ip = null;
      this.ip_link = null;
      this.ip_text = null;
      this.mss = null;
      this.mss_link = null;
      this.mss_text = null;
      this.datos = null;
      this.datos_link = null;
      this.datos_text = null;
      this.sn = null;
      this.sn_link = null;
      this.sn_text = null;
      this.segperd = null;
      this.segperd_link = null;
      this.segperd_text = null;
      this.w = null;
      this.w_link = null;
      this.w_text = null;
      this.vc = null;
      this.vc_link = null;
      this.vc_text = null;
      this.timeout = null;
      this.timeout_link = null;
      this.timeout_text = null;
      this.alg = null;
      this.alg_link = null;
      this.alg_text = null;
      this.cerrar = null;
    };

    InfoparametrosComponent.ɵfac = function InfoparametrosComponent_Factory(t) {
      return new (t || InfoparametrosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
    };

    InfoparametrosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InfoparametrosComponent,
      selectors: [["app-infoparametros"]],
      decls: 64,
      vars: 34,
      consts: [[1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["target", "_blank", 3, "href", "title"], [1, "modal-body"], [2, "list-style-type", "square"], [2, "color", "#023163"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-modal", 3, "title", "click"]],
      template: function InfoparametrosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InfoparametrosComponent_Template_button_click_62_listener() {
            return ctx.activeModal.close("Close click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.titulo, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.tcp_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.masinfo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.supuestos, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.supuesto1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.supuesto2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.ip_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.masinfo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.ip, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.ip_text, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.mss_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.masinfo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.mss, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.mss_text, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.datos_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.masinfo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.datos, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.datos_text, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.sn_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.masinfo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.sn, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.sn_text, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.segperd, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.segperd_text, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.w_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.masinfo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.w);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.w_text, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.timeout, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.timeout_text, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.alg, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.alg_text, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.cerrar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cerrar);
        }
      },
      styles: [".modal-content[_ngcontent-%COMP%] {\r\n    width: 220%;\r\n    margin-left: -60%;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%] {\r\n    text-align: justify;\r\n}\r\n\r\n.btn-modal[_ngcontent-%COMP%] {\r\n    color       : #004e99;\r\n    border-color: #004e99;\r\n    margin-left : 10px;\r\n    margin-top  : 10px;\r\n}\r\n\r\n.btn-modal[_ngcontent-%COMP%]:hover {\r\n    color           : #fff;\r\n    background-color: #004e99;\r\n    border-color    : #004e99\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    color: #023163;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    color: #007bff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mb3BhcmFtZXRyb3MvaW5mb3BhcmFtZXRyb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2luZm9wYXJhbWV0cm9zL2luZm9wYXJhbWV0cm9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtY29udGVudCB7XHJcbiAgICB3aWR0aDogMjIwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNjAlO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5cclxuLmJ0bi1tb2RhbCB7XHJcbiAgICBjb2xvciAgICAgICA6ICMwMDRlOTk7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDRlOTk7XHJcbiAgICBtYXJnaW4tbGVmdCA6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wICA6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tbW9kYWw6aG92ZXIge1xyXG4gICAgY29sb3IgICAgICAgICAgIDogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRlOTk7XHJcbiAgICBib3JkZXItY29sb3IgICAgOiAjMDA0ZTk5XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICMwMjMxNjM7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMwMDdiZmY7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoparametrosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-infoparametros',
          templateUrl: './infoparametros.component.html',
          styleUrls: ['./infoparametros.component.css']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/simulacion/simulacion.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/simulacion/simulacion.component.ts ***!
    \****************************************************/

  /*! exports provided: SimulacionComponent */

  /***/
  function srcAppSimulacionSimulacionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimulacionComponent", function () {
      return SimulacionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function SimulacionComponent_span_0_tr_19_span_1_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, "simulacion.vc"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "simulacion.vc_letra"), "=", conversacion_r20.vc, "\xA0");
      }
    }

    function SimulacionComponent_span_0_tr_19_span_1_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](conversacion_r20.flagcli);
      }
    }

    function SimulacionComponent_span_0_tr_19_span_1_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "simulacion.mss"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" MSS=", conversacion_r20.msscli, ", ");
      }
    }

    function SimulacionComponent_span_0_tr_19_span_1_span_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "simulacion.an"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" AN=", conversacion_r20.ancli, ", ");
      }
    }

    function SimulacionComponent_span_0_tr_19_span_1_span_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "simulacion.mss"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" MSS=", conversacion_r20.mssserv, ", ");
      }
    }

    function SimulacionComponent_span_0_tr_19_span_1_span_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "simulacion.an"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" AN=", conversacion_r20.anserv, ", ");
      }
    }

    function SimulacionComponent_span_0_tr_19_span_1_span_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](conversacion_r20.flagserv);
      }
    }

    function SimulacionComponent_span_0_tr_19_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimulacionComponent_span_0_tr_19_span_1_span_2_Template, 4, 7, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SimulacionComponent_span_0_tr_19_span_1_span_3_Template, 4, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SimulacionComponent_span_0_tr_19_span_1_span_7_Template, 3, 4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SimulacionComponent_span_0_tr_19_span_1_span_8_Template, 3, 4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SimulacionComponent_span_0_tr_19_span_1_span_23_Template, 3, 4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SimulacionComponent_span_0_tr_19_span_1_span_24_Template, 3, 4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, SimulacionComponent_span_0_tr_19_span_1_span_31_Template, 4, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.vc != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.flagcli != null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 21, "simulacion.sn"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0SN=", conversacion_r20.sncli, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.msscli != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.ancli != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 23, "simulacion.datos"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("D=", conversacion_r20.dcli, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 25, "simulacion.w"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("W=", conversacion_r20.wcli, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("title", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 27, "simulacion.seg"), " ", conversacion_r20.numseg, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 29, "simulacion.sn"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SN=", conversacion_r20.snserv, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.mssserv != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.anserv != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 31, "simulacion.datos"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("D=", conversacion_r20.dserv, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 33, "simulacion.w"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("W=", conversacion_r20.wserv, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.flagserv != null);
      }
    }

    function SimulacionComponent_span_0_tr_19_span_2_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](conversacion_r20.flagcli);
      }
    }

    function SimulacionComponent_span_0_tr_19_span_2_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "simulacion.mss"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" MSS=", conversacion_r20.msscli, ", ");
      }
    }

    function SimulacionComponent_span_0_tr_19_span_2_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "simulacion.an"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" AN=", conversacion_r20.ancli, ", ");
      }
    }

    function SimulacionComponent_span_0_tr_19_span_2_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, "simulacion.vc"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "simulacion.vc_letra"), "=", conversacion_r20.vc, "\xA0");
      }
    }

    function SimulacionComponent_span_0_tr_19_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimulacionComponent_span_0_tr_19_span_2_span_2_Template, 4, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SimulacionComponent_span_0_tr_19_span_2_span_6_Template, 3, 4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SimulacionComponent_span_0_tr_19_span_2_span_7_Template, 3, 4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SimulacionComponent_span_0_tr_19_span_2_span_19_Template, 4, 7, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.flagcli != null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 12, "simulacion.sn"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SN=", conversacion_r20.sncli, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.msscli != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.ancli != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 14, "simulacion.datos"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("D=", conversacion_r20.dcli, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 16, "simulacion.w"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("W=", conversacion_r20.wcli, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("title", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 18, "simulacion.seg"), " ", conversacion_r20.numseg, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.vc != 0);
      }
    }

    function SimulacionComponent_span_0_tr_19_span_3_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 3, "simulacion.vc"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\xA0", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "simulacion.vc_letra"), "=", conversacion_r20.vc, "\xA0");
      }
    }

    function SimulacionComponent_span_0_tr_19_span_3_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "simulacion.mss"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" MSS=", conversacion_r20.mssserv, ", ");
      }
    }

    function SimulacionComponent_span_0_tr_19_span_3_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "simulacion.an"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" AN=", conversacion_r20.anserv, ", ");
      }
    }

    function SimulacionComponent_span_0_tr_19_span_3_span_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](conversacion_r20.flagserv);
      }
    }

    function SimulacionComponent_span_0_tr_19_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimulacionComponent_span_0_tr_19_span_3_span_2_Template, 4, 7, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SimulacionComponent_span_0_tr_19_span_3_span_11_Template, 3, 4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SimulacionComponent_span_0_tr_19_span_3_span_12_Template, 3, 4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SimulacionComponent_span_0_tr_19_span_3_span_19_Template, 4, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.vc != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("title", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 12, "simulacion.seg"), " ", conversacion_r20.numseg, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 14, "simulacion.sn"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SN=", conversacion_r20.snserv, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.mssserv != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.anserv != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 16, "simulacion.datos"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("D=", conversacion_r20.dserv, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 18, "simulacion.w"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("W=", conversacion_r20.wserv, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.flagserv != null);
      }
    }

    function SimulacionComponent_span_0_tr_19_span_4_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](conversacion_r20.flagcli);
      }
    }

    function SimulacionComponent_span_0_tr_19_span_4_span_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "simulacion.mss"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" MSS=", conversacion_r20.msscli, ", ");
      }
    }

    function SimulacionComponent_span_0_tr_19_span_4_span_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "simulacion.an"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" AN=", conversacion_r20.ancli, ", ");
      }
    }

    function SimulacionComponent_span_0_tr_19_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimulacionComponent_span_0_tr_19_span_4_span_2_Template, 4, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SimulacionComponent_span_0_tr_19_span_4_span_6_Template, 3, 4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SimulacionComponent_span_0_tr_19_span_4_span_7_Template, 3, 4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.flagcli != null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, "simulacion.sn"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SN=", conversacion_r20.sncli, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.msscli != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.ancli != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 13, "simulacion.datos"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("D=", conversacion_r20.dcli, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 15, "simulacion.w"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("W=", conversacion_r20.wcli, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("title", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 17, "simulacion.seg"), " ", conversacion_r20.numseg, "");
      }
    }

    function SimulacionComponent_span_0_tr_19_span_5_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "simulacion.mss"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" MSS=", conversacion_r20.mssserv, ", ");
      }
    }

    function SimulacionComponent_span_0_tr_19_span_5_span_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, "simulacion.an"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" AN=", conversacion_r20.anserv, ", ");
      }
    }

    function SimulacionComponent_span_0_tr_19_span_5_span_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](conversacion_r20.flagserv);
      }
    }

    function SimulacionComponent_span_0_tr_19_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "td", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SimulacionComponent_span_0_tr_19_span_5_span_10_Template, 3, 4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SimulacionComponent_span_0_tr_19_span_5_span_11_Template, 3, 4, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SimulacionComponent_span_0_tr_19_span_5_span_18_Template, 4, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("title", "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 11, "simulacion.seg"), " ", conversacion_r20.numseg, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 13, "simulacion.sn"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("SN=", conversacion_r20.snserv, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.mssserv != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.anserv != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 15, "simulacion.datos"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("D=", conversacion_r20.dserv, ", ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 17, "simulacion.w"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("W=", conversacion_r20.wserv, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.flagserv != null);
      }
    }

    function SimulacionComponent_span_0_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SimulacionComponent_span_0_tr_19_span_1_Template, 32, 35, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimulacionComponent_span_0_tr_19_span_2_Template, 20, 20, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SimulacionComponent_span_0_tr_19_span_3_Template, 20, 20, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SimulacionComponent_span_0_tr_19_span_4_Template, 19, 19, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SimulacionComponent_span_0_tr_19_span_5_Template, 19, 19, "span", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var conversacion_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.dir == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.dir == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.dir == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.dir == 0 - 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", conversacion_r20.dir == 0 - 2);
      }
    }

    function SimulacionComponent_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fa-icon", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "table", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SimulacionComponent_span_0_tr_19_Template, 6, 5, "tr", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, "simulacion.clien"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r16.faLaptop);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, "simulacion.ipclien"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.ipclien);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 13, "simulacion.serv"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r16.faServer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 15, "simulacion.ipserv"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.ipserv);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.comunicacion);
      }
    }

    function SimulacionComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var SimulacionComponent = /*#__PURE__*/function () {
      function SimulacionComponent() {
        _classCallCheck(this, SimulacionComponent);

        this.faLaptop = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLaptop"];
        this.faServer = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faServer"];
        this.ipclien = null;
        this.ipserv = null;
      }
      /**
      * @description Cambia el estado de la variable 'mostrar'
      * @author javierorp
      */


      _createClass(SimulacionComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.mostrar = this.generarSimulacion().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        }
        /**
         * @description Genera la simulacion
         * @author javierorp
         */

      }, {
        key: "generarSimulacion",
        value: function generarSimulacion() {
          console.clear();
          this.comunicacion = [];
          /*----------PRUEBA----------*/

          this.simular.snclien = 345;
          this.simular.mssclien = 770;
          this.simular.datosclien = 3300;
          this.simular.wclien = 8000;
          this.simular.snserv = 190;
          this.simular.mssserv = 680;
          this.simular.datosserv = 3000;
          this.simular.wserv = 2000;
          this.simular.cierre = "1";
          /*-----PARAMETROS DE ENTRADA-----*/
          // Cliente

          this.ipclien = this.simular.ipclien;
          var mssclien = this.simular.mssclien;
          var datosclien = this.simular.datosclien;
          var snclien = this.simular.snclien;
          var segperdclien = this.simular.segperdclien;
          var wclien = this.simular.wclien; // Servidor

          this.ipserv = this.simular.ipserv;
          var mssserv = this.simular.mssserv;
          var datosserv = this.simular.datosserv;
          var snserv = this.simular.snserv;
          var segperdserv = this.simular.segperdserv;
          var wserv = this.simular.wserv; // General

          var timeout = this.simular.timeout;
          var umbral = this.simular.umbral;
          var algort = this.simular.algort;
          var cierre = this.simular.cierre;
          /*-----VARIABLES-----*/

          var nseg = 0;
          var anclien = 0;
          var anserv = 0;
          var numpqtcli = Math.floor(datosclien / mssclien);
          var modpqtcli = datosclien % mssclien;
          var numpqtserv = Math.floor(datosserv / mssserv);
          var modpqtserv = datosserv % mssserv;
          var dclienenv = 0;
          var dservenv = 0;
          var vcclien = 1;
          var vcserv = 1;
          var mss = 0;
          var ultackclien = 0;
          var ultackserv = 0;
          var vcc = 0; // ----- Conexion -----
          // Enviamos los segmentos de SYN; SYN, ACK; y ACK

          this.comunicacion.push({
            numseg: ++nseg,
            dir: 1,
            flagcli: "SYN",
            sncli: snclien,
            ancli: 0,
            dcli: dclienenv,
            wcli: wclien,
            msscli: mssclien,
            flagserv: null,
            snserv: 0,
            anserv: 0,
            dserv: 0,
            wserv: 0,
            mssserv: 0,
            vc: 0
          });
          anserv = snclien + 1;
          this.comunicacion.push({
            numseg: ++nseg,
            dir: 2,
            flagcli: null,
            sncli: 0,
            ancli: 0,
            dcli: 0,
            wcli: 0,
            msscli: 0,
            flagserv: "SYN, ACK",
            snserv: snserv,
            anserv: anserv,
            dserv: dservenv,
            wserv: wserv,
            mssserv: mssserv,
            vc: vcclien
          });
          ultackserv = anserv;
          snclien += 1;
          anclien = snserv + 1;
          this.comunicacion.push({
            numseg: ++nseg,
            dir: 1,
            flagcli: "ACK",
            sncli: snclien,
            ancli: anclien,
            dcli: dclienenv,
            wcli: wclien,
            msscli: 0,
            flagserv: null,
            snserv: 0,
            anserv: 0,
            dserv: 0,
            wserv: 0,
            mssserv: 0,
            vc: vcserv
          });
          ultackclien = anclien; // Se elige el minimo MSS

          mss = Math.min(mssclien, mssserv); // ----- Envio de datos cliente->servidor -----

          var envack = 0; // Cada dos paquetes enviados por el cliente, el servidor devuelve un ACK
          // El cliente envia los paquetes completos

          for (var i = 0; i < numpqtcli; i++) {
            snclien += dclienenv;
            dclienenv = mss;

            if (nseg > 4 && envack >= 2) {
              if (anserv > ultackserv) {
                vcclien += Math.floor((anserv - ultackserv) / mss);
                vcc = vcclien;
              } else {
                vcc = 0;
              }

              this.comunicacion.push({
                numseg: ++nseg,
                dir: 0,
                flagcli: null,
                sncli: snclien,
                ancli: anclien,
                dcli: dclienenv,
                wcli: wclien,
                msscli: 0,
                flagserv: null,
                snserv: snserv,
                anserv: anserv,
                dserv: dservenv,
                wserv: wserv,
                mssserv: 0,
                vc: vcc
              });
              ultackclien = anclien;
              ultackserv = anserv;
              envack = 0;
            } else {
              anserv = snclien + dclienenv;
              this.comunicacion.push({
                numseg: ++nseg,
                dir: 1,
                flagcli: null,
                sncli: snclien,
                ancli: anclien,
                dcli: dclienenv,
                wcli: wclien,
                msscli: 0,
                flagserv: null,
                snserv: 0,
                anserv: 0,
                dserv: 0,
                wserv: 0,
                mssserv: 0,
                vc: 0
              });
              ultackclien = anclien;
              envack++;
            }
          } // El cliente envia el ultimo paquete con los datos restantes


          if (modpqtcli != 0) {
            snclien += dclienenv;
            anserv = snclien + dclienenv;
            ultackclien = anserv;
            dclienenv = modpqtcli;

            if (nseg > 4 && envack >= 2) {
              if (anserv > ultackserv) {
                vcclien += Math.floor((anserv - ultackserv) / mss);
                vcc = vcclien;
              } else {
                vcc = 0;
              }

              this.comunicacion.push({
                numseg: ++nseg,
                dir: 0,
                flagcli: null,
                sncli: snclien,
                ancli: anclien,
                dcli: dclienenv,
                wcli: wclien,
                msscli: 0,
                flagserv: null,
                snserv: snserv,
                anserv: anserv,
                dserv: dservenv,
                wserv: wserv,
                mssserv: 0,
                vc: vcc
              });
              ultackclien = anclien;
              ultackserv = anserv;
            } else {
              if (anclien > ultackclien) {
                vcserv += Math.floor((anclien - ultackclien) / mss);
                vcc = vcserv;
              } else {
                vcc = 0;
              }

              this.comunicacion.push({
                numseg: ++nseg,
                dir: 1,
                flagcli: null,
                sncli: snclien,
                ancli: anclien,
                dcli: dclienenv,
                wcli: wclien,
                msscli: 0,
                flagserv: null,
                snserv: 0,
                anserv: 0,
                dserv: 0,
                wserv: 0,
                mssserv: 0,
                vc: vcc
              });
              ultackclien = anclien;
            }
          } // El servidor envia el ACK correspondiente al ultimo paquete


          snserv += dservenv;
          anserv = snclien + dclienenv;

          if (anserv > ultackserv) {
            vcclien += Math.floor((anserv - ultackserv) / mss);
            vcc = vcclien;
          } else {
            vcc = 0;
          }

          this.comunicacion.push({
            numseg: ++nseg,
            dir: 2,
            flagcli: null,
            sncli: 0,
            ancli: 0,
            dcli: 0,
            wcli: 0,
            msscli: 0,
            flagserv: null,
            snserv: snserv,
            anserv: anserv,
            dserv: dservenv,
            wserv: wserv,
            mssserv: 0,
            vc: vcc
          });
          ultackserv = anserv; // ----- Envio de datos servidor->cliente -----

          snserv += 1;

          for (var i = 0; i < numpqtserv; i++) {
            snserv += dservenv;
            dservenv = mss;

            if (anserv > ultackserv) {
              vcclien += Math.floor((anserv - ultackserv) / mss);
              vcc = vcclien;
            } else {
              vcc = 0;
            }

            this.comunicacion.push({
              numseg: ++nseg,
              dir: 2,
              flagcli: null,
              sncli: 0,
              ancli: 0,
              dcli: 0,
              wcli: 0,
              msscli: 0,
              flagserv: null,
              snserv: snserv,
              anserv: anserv,
              dserv: dservenv,
              wserv: wserv,
              mssserv: 0,
              vc: vcc
            });
            ultackserv = anserv;
          } // El servidor envia el ultimo paquete con los datos restantes


          if (modpqtserv != 0) {
            snserv = snserv + dservenv;
            dservenv = modpqtserv;

            if (anserv > ultackserv) {
              vcclien += Math.floor((anserv - ultackserv) / mss);
              vcc = vcclien;
            } else {
              vcc = 0;
            }

            this.comunicacion.push({
              numseg: ++nseg,
              dir: 2,
              flagcli: null,
              sncli: 0,
              ancli: 0,
              dcli: 0,
              wcli: 0,
              msscli: 0,
              flagserv: null,
              snserv: snserv,
              anserv: anserv,
              dserv: dservenv,
              wserv: wserv,
              mssserv: 0,
              vc: vcc
            });
          } // ----- Cierre -----


          if (cierre == "1") {
            //Cliente cierra la conexion
            snclien = snclien + dclienenv;
            anclien = snserv + dservenv;
            this.comunicacion.push({
              numseg: ++nseg,
              dir: 1,
              flagcli: "FIN",
              sncli: snclien,
              ancli: anclien,
              dcli: 0,
              wcli: wclien,
              msscli: 0,
              flagserv: null,
              snserv: 0,
              anserv: 0,
              dserv: 0,
              wserv: 0,
              mssserv: 0,
              vc: 0
            });
            snserv = snserv + dservenv;
            anserv = snclien + 1;
            this.comunicacion.push({
              numseg: ++nseg,
              dir: 2,
              flagcli: null,
              sncli: 0,
              ancli: 0,
              dcli: 0,
              wcli: 0,
              msscli: 0,
              flagserv: "FIN, ACK",
              snserv: snserv,
              anserv: anserv,
              dserv: 0,
              wserv: wserv,
              mssserv: 0,
              vc: 0
            });
            snclien = snclien + 1;
            anclien = snserv + 1;
            this.comunicacion.push({
              numseg: ++nseg,
              dir: 1,
              flagcli: "ACK",
              sncli: snclien,
              ancli: anclien,
              dcli: 0,
              wcli: wclien,
              msscli: 0,
              flagserv: null,
              snserv: 0,
              anserv: 0,
              dserv: 0,
              wserv: 0,
              mssserv: 0,
              vc: 0
            });
          } else {
            // Servidor cierra la conexion
            snserv = snserv + dservenv;
            this.comunicacion.push({
              numseg: ++nseg,
              dir: 2,
              flagcli: null,
              sncli: 0,
              ancli: 0,
              dcli: 0,
              wcli: 0,
              msscli: 0,
              flagserv: "FIN",
              snserv: snserv,
              anserv: anserv,
              dserv: 0,
              wserv: wserv,
              mssserv: 0,
              vc: 0
            });
            snclien = snclien + dclienenv;
            anclien = snserv + 1;
            this.comunicacion.push({
              numseg: ++nseg,
              dir: 1,
              flagcli: "FIN, ACK",
              sncli: snclien,
              ancli: anclien,
              dcli: 0,
              wcli: wclien,
              msscli: 0,
              flagserv: null,
              snserv: 0,
              anserv: 0,
              dserv: 0,
              wserv: 0,
              mssserv: 0,
              vc: 0
            });
            snserv = snserv + 1;
            anserv = snclien + 1;
            this.comunicacion.push({
              numseg: ++nseg,
              dir: 2,
              flagcli: null,
              sncli: 0,
              ancli: 0,
              dcli: 0,
              wcli: 0,
              msscli: 0,
              flagserv: "ACK",
              snserv: snserv,
              anserv: anserv,
              dserv: 0,
              wserv: wserv,
              mssserv: 0,
              vc: 0
            });
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500));
          ; // Ocultar la imagen de carga y mostrar la simulacion
        }
      }]);

      return SimulacionComponent;
    }();

    SimulacionComponent.ɵfac = function SimulacionComponent_Factory(t) {
      return new (t || SimulacionComponent)();
    };

    SimulacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SimulacionComponent,
      selectors: [["app-simulacion"]],
      inputs: {
        simular: "simular"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 4,
      vars: 4,
      consts: [[4, "ngIf", "ngIfElse"], ["loading", ""], [1, "clien"], [1, "fas", "fa-laptop", "fa-2x-laptop", 3, "icon", "title"], [1, "ipcli", 3, "title"], [1, "serv"], [1, "fas", "fa-server", "fa-2x-server", 3, "icon", "title"], [1, "ipserv", 3, "title"], [1, "flujo"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "info-izq"], ["class", "vccli", 3, "title", 4, "ngIf"], ["title", "Flags", 4, "ngIf"], [3, "title"], [3, "title", 4, "ngIf"], ["src", "assets\\img\\flechaDoble.svg", "alt", "cliente<---->servidor", "draggable", "false", 1, "flecha"], [1, "info-dcha"], [1, "vccli", 3, "title"], ["title", "Flags"], ["src", "assets\\img\\flecha.svg", "alt", "cliente----><!--servidor", "draggable", "false", 1, "flechacli"], ["class", "vcserv", 3, "title", 4, "ngIf"], [1, "vcserv", 3, "title"], ["src", "assets\\img\\flecha.svg", "alt", "cliente<----servidor", "draggable", "false", 1, "flechaserv", 2, "transform", "scaleX(-1)"], ["src", "assets\\img\\flechaX.svg", "alt", "clientes--X  servidor", "draggable", "false", 1, "flechaperd"], ["src", "assets\\img\\flechaX.svg", "alt", "cliente  X--servidor", "draggable", "false", 1, "flechaperd", 2, "transform", "scaleX(-1)"], ["title", "Cargando...", 1, "load"], ["width", "15%", "alt", "Cargando...", "src", "assets\\img\\loading.gif"]],
      template: function SimulacionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SimulacionComponent_span_0_Template, 20, 17, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SimulacionComponent_ng_template_2_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.mostrar))("ngIfElse", _r17);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: ["table[_ngcontent-%COMP%] {\r\n    width        : 1000px;\r\n    margin-bottom: 10px;\r\n}\r\ntd[_ngcontent-%COMP%] {\r\n    border         : 2px solid black;\r\n    border-collapse: collapse;\r\n    border-style   : dashed;\r\n    width          : 20%;\r\n    height         : 40px;\r\n}\r\ntd.info-izq[_ngcontent-%COMP%] {\r\n    border        : hidden;\r\n    width         : 40%;\r\n    text-align    : right;\r\n    padding-right : 10px;\r\n    vertical-align: middle;\r\n}\r\ntd.info-dcha[_ngcontent-%COMP%] {\r\n    border        : hidden;\r\n    width         : 40%;\r\n    text-align    : left;\r\n    padding-left  : 10px;\r\n    vertical-align: middle;\r\n}\r\nth.clien[_ngcontent-%COMP%] {\r\n    border        : hidden;\r\n    width         : 40%;\r\n    text-align    : right;\r\n    padding-right : 10px;\r\n    vertical-align: middle;\r\n\r\n}\r\nth.serv[_ngcontent-%COMP%] {\r\n    border        : hidden;\r\n    width         : 40%;\r\n    text-align    : left;\r\n    padding-left  : 10px;\r\n    vertical-align: middle;\r\n\r\n}\r\n\r\ntable.flujo[_ngcontent-%COMP%] {\r\n    width        : 1000px;\r\n    margin-bottom: 30px;\r\n    padding-right: 40px;\r\n}\r\n\r\nimg.flechacli[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width : 100%;\r\n    -webkit-filter: opacity(0.5) drop-shadow(0 0 0 blue);\r\n            filter: opacity(0.5) drop-shadow(0 0 0 blue);\r\n}\r\nimg.flechaserv[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width : 100%;\r\n    -webkit-filter: opacity(.5) drop-shadow(0 0 0 green);\r\n            filter: opacity(.5) drop-shadow(0 0 0 green);\r\n}\r\nimg.flechaperd[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width : 100%;\r\n    -webkit-filter: opacity(.5) drop-shadow(0 0 0 red);\r\n            filter: opacity(.5) drop-shadow(0 0 0 red);\r\n}\r\nimg.flecha[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width : 100%;\r\n}\r\n\r\n.fa-2x-laptop[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n    color    : #3e3e7e;\r\n}\r\n.fa-2x-server[_ngcontent-%COMP%] {\r\n    font-size: 2em;\r\n    color    : #3e5e3e\r\n}\r\n\r\nspan.ipcli[_ngcontent-%COMP%] {\r\n    color: #3e3e7e;\r\n}\r\nspan.ipserv[_ngcontent-%COMP%] {\r\n    color: #3e5e3e;\r\n}\r\n\r\ndiv.load[_ngcontent-%COMP%] {\r\n    margin-top: 5%;\r\n}\r\n\r\nspan.vcserv[_ngcontent-%COMP%] {\r\n    background-color: #3e5e3e;\r\n    color           : white;\r\n    border-radius   : 4px;\r\n}\r\nspan.vccli[_ngcontent-%COMP%] {\r\n    background-color: #3e3e7e;\r\n    color           : white;\r\n    border-radius   : 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2ltdWxhY2lvbi9zaW11bGFjaW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCO0FBQ2xCO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHNCQUFzQjs7QUFFMUI7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixzQkFBc0I7O0FBRTFCO0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFHQSx1QkFBdUI7QUFDdkI7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG9EQUE0QztZQUE1Qyw0Q0FBNEM7QUFDaEQ7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osb0RBQTRDO1lBQTVDLDRDQUE0QztBQUNoRDtBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrREFBMEM7WUFBMUMsMENBQTBDO0FBQzlDO0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUVBLFdBQVc7QUFDWDtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGNBQWM7SUFDZDtBQUNKO0FBRUEsUUFBUTtBQUNSO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBLGlCQUFpQjtBQUNqQjtJQUNJLGNBQWM7QUFDbEI7QUFFQSx5QkFBeUI7QUFDekI7SUFDSSx5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9zaW11bGFjaW9uL3NpbXVsYWNpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRhYmxhIGdlbmVyYWwgKi9cclxudGFibGUge1xyXG4gICAgd2lkdGggICAgICAgIDogMTAwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxudGQge1xyXG4gICAgYm9yZGVyICAgICAgICAgOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXN0eWxlICAgOiBkYXNoZWQ7XHJcbiAgICB3aWR0aCAgICAgICAgICA6IDIwJTtcclxuICAgIGhlaWdodCAgICAgICAgIDogNDBweDtcclxufVxyXG5cclxudGQuaW5mby1penEge1xyXG4gICAgYm9yZGVyICAgICAgICA6IGhpZGRlbjtcclxuICAgIHdpZHRoICAgICAgICAgOiA0MCU7XHJcbiAgICB0ZXh0LWFsaWduICAgIDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0IDogMTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbnRkLmluZm8tZGNoYSB7XHJcbiAgICBib3JkZXIgICAgICAgIDogaGlkZGVuO1xyXG4gICAgd2lkdGggICAgICAgICA6IDQwJTtcclxuICAgIHRleHQtYWxpZ24gICAgOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0ICA6IDEwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG50aC5jbGllbiB7XHJcbiAgICBib3JkZXIgICAgICAgIDogaGlkZGVuO1xyXG4gICAgd2lkdGggICAgICAgICA6IDQwJTtcclxuICAgIHRleHQtYWxpZ24gICAgOiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQgOiAxMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbn1cclxuXHJcbnRoLnNlcnYge1xyXG4gICAgYm9yZGVyICAgICAgICA6IGhpZGRlbjtcclxuICAgIHdpZHRoICAgICAgICAgOiA0MCU7XHJcbiAgICB0ZXh0LWFsaWduICAgIDogbGVmdDtcclxuICAgIHBhZGRpbmctbGVmdCAgOiAxMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbn1cclxuXHJcbi8qIFRhYmxhIGRlIGZsdWpvICovXHJcbnRhYmxlLmZsdWpvIHtcclxuICAgIHdpZHRoICAgICAgICA6IDEwMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG5cclxuLyogSW1hZ2VuZXMgZGVsIGZsdWpvICovXHJcbmltZy5mbGVjaGFjbGkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGggOiAxMDAlO1xyXG4gICAgZmlsdGVyOiBvcGFjaXR5KDAuNSkgZHJvcC1zaGFkb3coMCAwIDAgYmx1ZSk7XHJcbn1cclxuXHJcbmltZy5mbGVjaGFzZXJ2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoIDogMTAwJTtcclxuICAgIGZpbHRlcjogb3BhY2l0eSguNSkgZHJvcC1zaGFkb3coMCAwIDAgZ3JlZW4pO1xyXG59XHJcblxyXG5pbWcuZmxlY2hhcGVyZCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICBmaWx0ZXI6IG9wYWNpdHkoLjUpIGRyb3Atc2hhZG93KDAgMCAwIHJlZCk7XHJcbn1cclxuXHJcbmltZy5mbGVjaGEge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGggOiAxMDAlO1xyXG59XHJcblxyXG4vKiBJY29ub3MgKi9cclxuLmZhLTJ4LWxhcHRvcCB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yICAgIDogIzNlM2U3ZTtcclxufVxyXG5cclxuLmZhLTJ4LXNlcnZlciB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yICAgIDogIzNlNWUzZVxyXG59XHJcblxyXG4vKiBJUHMgKi9cclxuc3Bhbi5pcGNsaSB7XHJcbiAgICBjb2xvcjogIzNlM2U3ZTtcclxufVxyXG5cclxuc3Bhbi5pcHNlcnYge1xyXG4gICAgY29sb3I6ICMzZTVlM2U7XHJcbn1cclxuXHJcbi8qIEdpZiBkZSBjYXJnYSAqL1xyXG5kaXYubG9hZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLyogVmVudGFuYSBkZSBjb25nZXN0aW9uKi9cclxuc3Bhbi52Y3NlcnYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlNWUzZTtcclxuICAgIGNvbG9yICAgICAgICAgICA6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgIDogNHB4O1xyXG59XHJcblxyXG5zcGFuLnZjY2xpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTNlN2U7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXMgICA6IDRweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimulacionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-simulacion',
          templateUrl: './simulacion.component.html',
          styleUrls: ['./simulacion.component.css']
        }]
      }], function () {
        return [];
      }, {
        simular: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/supbar/supbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/supbar/supbar.component.ts ***!
    \********************************************/

  /*! exports provided: SupbarComponent */

  /***/
  function srcAppSupbarSupbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupbarComponent", function () {
      return SupbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _acercade_acercade_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../acercade/acercade.component */
    "./src/app/acercade/acercade.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/button.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SupbarComponent_button_20_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r2.bandera);
      }
    }

    function SupbarComponent_button_20_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx_r3.bandera);
      }
    }

    function SupbarComponent_button_20_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupbarComponent_button_20_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var idioma_r1 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.CambiarIdioma(idioma_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SupbarComponent_button_20_span_1_Template, 2, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SupbarComponent_button_20_span_2_Template, 2, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var idioma_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", idioma_r1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idioma_r1 === "Espa\xF1ol");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idioma_r1 === "English");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", idioma_r1, " ");
      }
    }

    var SupbarComponent = /*#__PURE__*/function () {
      function SupbarComponent(titleService, modalService, translate) {
        _classCallCheck(this, SupbarComponent);

        this.titleService = titleService;
        this.modalService = modalService;
        this.translate = translate; // Titulo de la aplicacion

        this.title = 'Simulador gráfico de comunicaciones TCP';
        this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInfoCircle"];
        this.idiomas = ["Español", "English"];
        this.idiomaSeleccionado = "Español";
        this.bandera = "spain";
        this.idiomaActivo = 'es';
        var naviLang = navigator.language;

        if (naviLang.toUpperCase().indexOf("ES") == 0) {
          this.translate.setDefaultLang("es");
          this.idiomaSeleccionado = this.idiomas[0];
          this.bandera = "spain";
        } else {
          this.translate.setDefaultLang("en");
          this.idiomaSeleccionado = this.idiomas[1];
          this.bandera = "united_kingdom";
        }

        this.translate.get('index.titulo').subscribe(function (value) {
          titleService.setTitle(value);
        });
      }
      /**
       * TODO:
       * @description Abre la ventana 'Acerca de...' con la información de la aplicacion
       * @author javierorp
       */


      _createClass(SupbarComponent, [{
        key: "open",
        value: function open() {
          var modalRef = this.modalService.open(_acercade_acercade_component__WEBPACK_IMPORTED_MODULE_2__["AcercadeComponent"]);
          this.translate.get('acercade.titulo').subscribe(function (value) {
            modalRef.componentInstance.titulo = value;
          });
          this.translate.get('acercade.texto').subscribe(function (value) {
            modalRef.componentInstance.texto = value;
          });
          this.translate.get('acercade.texto2').subscribe(function (value) {
            modalRef.componentInstance.texto2 = value;
          });
          this.translate.get('acercade.repo').subscribe(function (value) {
            modalRef.componentInstance.repo = value;
          });
          this.translate.get('acercade.cerrar').subscribe(function (value) {
            modalRef.componentInstance.cerrar = value;
          });
        }
      }, {
        key: "CambiarIdioma",
        value: function CambiarIdioma(idioma) {
          var _this2 = this;

          this.idiomaSeleccionado = idioma;

          if (idioma == "Español") {
            this.bandera = "spain";
            this.idiomaActivo = 'es';
            this.translate.use('es');
          } else if (idioma == "English") {
            this.bandera = "united_kingdom";
            this.idiomaActivo = 'en';
            this.translate.use('en');
          }

          this.translate.get('index.titulo').subscribe(function (value) {
            _this2.titleService.setTitle(value);
          });
        }
      }, {
        key: "ObtenerIdioma",
        value: function ObtenerIdioma() {
          return this.idiomaActivo;
        }
      }]);

      return SupbarComponent;
    }();

    SupbarComponent.ɵfac = function SupbarComponent_Factory(t) {
      return new (t || SupbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]));
    };

    SupbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SupbarComponent,
      selectors: [["app-supbar"]],
      decls: 21,
      vars: 26,
      consts: [["role", "banner", 1, "toolbar"], ["target", "_blank", 3, "href", "title"], ["width", "120", 3, "alt", "src"], [1, "no-seleccionable"], ["mat-button", "", 1, "btn", "acercade", 3, "title", "click"], [3, "icon"], ["ngbDropdown", "", 1, "seleccion"], ["ngbDropdownToggle", "", 1, "btn", "btn-idioma", 3, "title"], ["width", "16px", 1, "bandera", 3, "alt", "src"], [1, "textoidioma"], ["ngbDropdownMenu", "", "aria-labelledby", "lenguaje", 1, "dropdown-menu"], ["ngbDropdownItem", "", 3, "title", "click", 4, "ngFor", "ngForOf"], ["ngbDropdownItem", "", 3, "title", "click"], [4, "ngIf"], ["width", "32px", "src", "assets\\img\\flags\\spain.png", 3, "alt"], ["width", "32px", "src", "assets\\img\\flags\\united_kingdom.png", 3, "alt"]],
      template: function SupbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupbarComponent_Template_button_click_10_listener() {
            return ctx.open();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SupbarComponent_button_20_Template, 4, 4, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 12, "supbar.link"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 14, "supbar.img-uni"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 16, "supbar.img-uni"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 18, "supbar.logo"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 20, "supbar.titulo"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 22, "supbar.btn-acercade"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faInfoCircle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 24, "supbar.btn-idioma"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", ctx.bandera);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets\\img\\flags\\", ctx.bandera, "_round.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.idiomaSeleccionado);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.idiomas);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FaIconComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownItem"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
      styles: [".toolbar[_ngcontent-%COMP%] {\r\n  font-family     : 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  font-size       : x-large;\r\n  height          : 60px;\r\n  margin          : -8px;\r\n  display         : flex;\r\n  align-items     : center;\r\n  background-color: #004e99;\r\n  color           : white;\r\n  box-shadow      : 0 2px 5px 0 #0000004d;\r\n  font-weight     : 100;\r\n}\r\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin: 15px 10px 10px 16px;\r\n}\r\n.no-seleccionable[_ngcontent-%COMP%] {\r\n  -moz-user-select   : none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select    : none;\r\n  user-select        : none;\r\n}\r\n\r\n.acercade[_ngcontent-%COMP%] {\r\n  color      : #fff;\r\n  border     : none;\r\n  margin-left: 2px;\r\n  position   : absolute;\r\n  right      : 0;\r\n}\r\n.acercade[_ngcontent-%COMP%]:hover {\r\n  color           : #004e99;\r\n  background-color: #fff;\r\n  border-color    : #fff;\r\n}\r\n.mat-button[_ngcontent-%COMP%] {\r\n  min-width   : 10px;\r\n  margin-right: 10px;\r\n  margin-top  : 3px;\r\n}\r\n\r\n.seleccion[_ngcontent-%COMP%] {\r\n  position    : absolute;\r\n  right       : 0;\r\n  margin-right: 50px;\r\n  margin-top  : 3px;\r\n}\r\n.bandera[_ngcontent-%COMP%] {\r\n  margin: 10px 5px 10px 10px !important;\r\n}\r\n.btn-idioma[_ngcontent-%COMP%] {\r\n  padding: 0px;\r\n  margin : 0px;\r\n  color  : white;\r\n\r\n}\r\n.textoidioma[_ngcontent-%COMP%] {\r\n  font-size   : 15px;\r\n  margin-right: 8px;\r\n}\r\n.btn-idioma[_ngcontent-%COMP%]:hover {\r\n  background-color: white;\r\n  color           : #004e99;\r\n}\r\n\r\n.dropdown-toggle[_ngcontent-%COMP%]:after {\r\n  color       : white;\r\n  margin-right: 4px;\r\n  margin-left : -3px;\r\n}\r\n.dropdown-toggle[_ngcontent-%COMP%]:hover::after {\r\n  color: #004e99;\r\n}\r\n.btn[_ngcontent-%COMP%]:focus {\r\n  box-shadow: none;\r\n}\r\n\r\n.dropdown-item[_ngcontent-%COMP%]:focus, .dropdown-item[_ngcontent-%COMP%]:hover {\r\n  color           : white;\r\n  text-decoration : none;\r\n  background-color: #004e99;\r\n}\r\n.dropdown-item[_ngcontent-%COMP%] {\r\n  padding: 0px;\r\n}\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n  padding: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VwYmFyL3N1cGJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQjtFQUNFLGlFQUFpRTtFQUNqRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsdUNBQXVDO0VBQ3ZDLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUEsOEJBQThCO0FBQzlCO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osY0FBYzs7QUFFaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7QUFFQSw2QkFBNkI7QUFDN0I7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUEsZ0JBQWdCO0FBQ2hCOztFQUVFLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3N1cGJhci9zdXBiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJhcnJhIGRlIGhlcnJhbWllbnRhcyAqL1xyXG4udG9vbGJhciB7XHJcbiAgZm9udC1mYW1pbHkgICAgIDogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplICAgICAgIDogeC1sYXJnZTtcclxuICBoZWlnaHQgICAgICAgICAgOiA2MHB4O1xyXG4gIG1hcmdpbiAgICAgICAgICA6IC04cHg7XHJcbiAgZGlzcGxheSAgICAgICAgIDogZmxleDtcclxuICBhbGlnbi1pdGVtcyAgICAgOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGU5OTtcclxuICBjb2xvciAgICAgICAgICAgOiB3aGl0ZTtcclxuICBib3gtc2hhZG93ICAgICAgOiAwIDJweCA1cHggMCAjMDAwMDAwNGQ7XHJcbiAgZm9udC13ZWlnaHQgICAgIDogMTAwO1xyXG59XHJcblxyXG4udG9vbGJhciBpbWcge1xyXG4gIG1hcmdpbjogMTVweCAxMHB4IDEwcHggMTZweDtcclxufVxyXG5cclxuLm5vLXNlbGVjY2lvbmFibGUge1xyXG4gIC1tb3otdXNlci1zZWxlY3QgICA6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3QgICAgOiBub25lO1xyXG4gIHVzZXItc2VsZWN0ICAgICAgICA6IG5vbmU7XHJcbn1cclxuXHJcbi8qIEJvdG9uIEFjZXJjYSBkZS4uLiovXHJcbi5hY2VyY2FkZSB7XHJcbiAgY29sb3IgICAgICA6ICNmZmY7XHJcbiAgYm9yZGVyICAgICA6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBwb3NpdGlvbiAgIDogYWJzb2x1dGU7XHJcbiAgcmlnaHQgICAgICA6IDA7XHJcbn1cclxuXHJcbi5hY2VyY2FkZTpob3ZlciB7XHJcbiAgY29sb3IgICAgICAgICAgIDogIzAwNGU5OTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1jb2xvciAgICA6ICNmZmY7XHJcbn1cclxuXHJcbi5tYXQtYnV0dG9uIHtcclxuICBtaW4td2lkdGggICA6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3AgIDogM3B4O1xyXG59XHJcblxyXG4vKiBCb3RvbiBzZWxlY2Npb24gZGUgaWRpb21hICovXHJcbi5zZWxlY2Npb24ge1xyXG4gIHBvc2l0aW9uICAgIDogYWJzb2x1dGU7XHJcbiAgcmlnaHQgICAgICAgOiAwO1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxuICBtYXJnaW4tdG9wICA6IDNweDtcclxufVxyXG5cclxuLmJhbmRlcmEge1xyXG4gIG1hcmdpbjogMTBweCA1cHggMTBweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4taWRpb21hIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luIDogMHB4O1xyXG4gIGNvbG9yICA6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuLnRleHRvaWRpb21hIHtcclxuICBmb250LXNpemUgICA6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5idG4taWRpb21hOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvciAgICAgICAgICAgOiAjMDA0ZTk5O1xyXG59XHJcblxyXG4vKiBUcmlhbmd1bG8gZGVsIGRlc3BsZWdhYmxlKi9cclxuLmRyb3Bkb3duLXRvZ2dsZTphZnRlciB7XHJcbiAgY29sb3IgICAgICAgOiB3aGl0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICBtYXJnaW4tbGVmdCA6IC0zcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi10b2dnbGU6aG92ZXI6OmFmdGVyIHtcclxuICBjb2xvcjogIzAwNGU5OTtcclxufVxyXG5cclxuLmJ0bjpmb2N1cyB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLyogRGVzcGxlZ2FibGUgKi9cclxuLmRyb3Bkb3duLWl0ZW06Zm9jdXMsXHJcbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICBjb2xvciAgICAgICAgICAgOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb24gOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRlOTk7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-supbar',
          templateUrl: './supbar.component.html',
          styleUrls: ['./supbar.component.css']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\javie\Documents\GitHub\tcp-simulador\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map