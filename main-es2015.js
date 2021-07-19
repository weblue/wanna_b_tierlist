(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/faq/faq.component */ "./src/app/components/faq/faq.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_oro_page_oro_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/oro-page/oro-page.component */ "./src/app/components/oro-page/oro-page.component.ts");
/* harmony import */ var _services_db_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/db-resolver.service */ "./src/app/services/db-resolver.service.ts");








const routes = [
    {
        path: '',
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        resolve: {
            db: _services_db_resolver_service__WEBPACK_IMPORTED_MODULE_5__["DbResolverService"]
        }
    },
    { path: 'faq', component: _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_2__["FaqComponent"] },
    { path: 'oro', component: _components_oro_page_oro_page_component__WEBPACK_IMPORTED_MODULE_4__["OroPageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _services_filter_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/filter-dialog.service */ "./src/app/services/filter-dialog.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/components/filter/filter.component.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/filter.service */ "./src/app/services/filter.service.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

















class AppComponent {
    constructor(data, filterDialogService, dialog, router, filter) {
        this.data = data;
        this.filterDialogService = filterDialogService;
        this.dialog = dialog;
        this.router = router;
        this.filter = filter;
        this.faUpArrow = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowUp"];
        this.toTop = document.getElementById("toTop");
        this._subscription = filterDialogService.showSidebarChange.subscribe(() => {
            if (this.dialogRef) {
                this.dialog.closeAll();
                this.dialogRef = null;
            }
            this.dialogRef = this.dialog.open(_components_filter_filter_component__WEBPACK_IMPORTED_MODULE_4__["FilterComponent"], {});
        });
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                gtag('config', 'UA-109524715-1', {
                    'page_path': event.urlAfterRedirects
                });
            }
        });
    }
    ngOnInit() {
        window.onscroll = function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                this.toTop.style.display = "block";
            }
            else {
                this.toTop.style.display = "none";
            }
        };
    }
    ngOnDestroy() {
        //prevent memory leak when component destroyed
        this._subscription.unsubscribe();
    }
    goToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_dialog_service__WEBPACK_IMPORTED_MODULE_2__["FilterDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 1, consts: [["id", "toTop", "title", "Go to top", 1, "button", "is-info", "is-small", 3, "click"], ["size", "lg", 3, "icon"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.goToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faUpArrow);
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FaIconComponent"]], styles: [".main-content[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  padding-top: 15px\n}\n\n#toTop[_ngcontent-%COMP%] {\n  display: none; \n  position: fixed; \n  bottom: 20px; \n  right: 30px; \n  z-index: 99; \n  border: none; \n  \n  padding-right: calc(0.75em - 1px);\n  padding-left: calc(0.75em - 1px);\n  \n  outline: none; \n  \n  cursor: pointer; \n  font-size: 1.25em; \n}\n\n#toTop[_ngcontent-%COMP%]:hover {\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLGFBQWEsRUFBRSxzQkFBc0I7RUFDckMsZUFBZSxFQUFFLDBCQUEwQjtFQUMzQyxZQUFZLEVBQUUsK0NBQStDO0VBQzdELFdBQVcsRUFBRSx5Q0FBeUM7RUFDdEQsV0FBVyxFQUFFLGtDQUFrQztFQUMvQyxZQUFZLEVBQUUsbUJBQW1CO0VBQ2pDLG9EQUFvRDtFQUNwRCxpQ0FBaUM7RUFDakMsZ0NBQWdDO0VBQ2hDLHdCQUF3QjtFQUN4QixhQUFhLEVBQUUsbUJBQW1CO0VBQ2xDLGlDQUFpQztFQUNqQyxlQUFlLEVBQUUsaUNBQWlDO0VBQ2xELGlCQUFpQixFQUFFLHVCQUF1QjtBQUM1Qzs7QUFFQTtFQUNFLG9FQUFvRTtBQUN0RSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWFpbi1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy10b3A6IDE1cHhcbn1cblxuI3RvVG9wIHtcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkOyAvKiBGaXhlZC9zdGlja3kgcG9zaXRpb24gKi9cbiAgYm90dG9tOiAyMHB4OyAvKiBQbGFjZSB0aGUgYnV0dG9uIGF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2UgKi9cbiAgcmlnaHQ6IDMwcHg7IC8qIFBsYWNlIHRoZSBidXR0b24gMzBweCBmcm9tIHRoZSByaWdodCAqL1xuICB6LWluZGV4OiA5OTsgLyogTWFrZSBzdXJlIGl0IGRvZXMgbm90IG92ZXJsYXAgKi9cbiAgYm9yZGVyOiBub25lOyAvKiBSZW1vdmUgYm9yZGVycyAqL1xuICAvKlRoaXMgb3ZlcnJpZGVzIGJ1bG1hJ3MgcmlnaHQgYW5kIGxlZnQgcGFkZGluZ3MgOigqL1xuICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDAuNzVlbSAtIDFweCk7XG4gIHBhZGRpbmctbGVmdDogY2FsYygwLjc1ZW0gLSAxcHgpO1xuICAvKmJhY2tncm91bmQ6IGRhcmtncmV5OyovXG4gIG91dGxpbmU6IG5vbmU7IC8qIFJlbW92ZSBvdXRsaW5lICovXG4gIC8qY29sb3I6IHdoaXRlOyAhKiBUZXh0IGNvbG9yICohKi9cbiAgY3Vyc29yOiBwb2ludGVyOyAvKiBBZGQgYSBtb3VzZSBwb2ludGVyIG9uIGhvdmVyICovXG4gIGZvbnQtc2l6ZTogMS4yNWVtOyAvKiBJbmNyZWFzZSBmb250IHNpemUgKi9cbn1cblxuI3RvVG9wOmhvdmVyIHtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiBncmV5OyAhKiBBZGQgYSBkYXJrLWdyZXkgYmFja2dyb3VuZCBvbiBob3ZlciAqISovXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _services_filter_dialog_service__WEBPACK_IMPORTED_MODULE_2__["FilterDialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _services_filter_service__WEBPACK_IMPORTED_MODULE_7__["FilterService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_disclaimers_disclaimers_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/disclaimers/disclaimers.component */ "./src/app/components/disclaimers/disclaimers.component.ts");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/table/table.component */ "./src/app/components/table/table.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/faq/faq.component */ "./src/app/components/faq/faq.component.ts");
/* harmony import */ var _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/filter/filter.component */ "./src/app/components/filter/filter.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _components_card_contents_card_contents_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/card-contents/card-contents.component */ "./src/app/components/card-contents/card-contents.component.ts");
/* harmony import */ var ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-cookieconsent */ "./node_modules/ngx-cookieconsent/__ivy_ngcc__/esm2015/ngx-cookieconsent.js");
/* harmony import */ var _components_oro_page_oro_page_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/oro-page/oro-page.component */ "./src/app/components/oro-page/oro-page.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");




































//TODO update this styling
const cookieConfig = {
    "cookie": {
        //TODO update this on deploy; maybe automate it?
        "domain": "cephalonwannab.com"
        // "domain": "localhost"
    },
    "position": "bottom-left",
    "theme": "classic",
    "palette": {
        "popup": {
            "background": "#000000",
            "text": "#ffffff",
            "link": "#ffffff"
        },
        "button": {
            "background": "#f1d600",
            "text": "#000000",
            "border": "transparent"
        }
    },
    "type": "info",
    "content": {
        "message": "We use cookies for analytics and site settings. They are never shared with 3rd parties.\n<br>\n<br>\nPlease whitelist us in your adblocker so we can learn where to improve the site.\n<br>",
        "dismiss": "Got it!",
        "deny": "Refuse cookies",
        "link": "Learn about cookies",
        "href": "https://cookiesandyou.com",
        "policy": "Cookie Policy"
    }
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_33__["CookieService"]
    ], imports: [[
            ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_31__["NgcCookieConsentModule"].forRoot(cookieConfig),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_27__["AppRoutingModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__["MatExpansionModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__["MatExpansionModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
        _components_disclaimers_disclaimers_component__WEBPACK_IMPORTED_MODULE_19__["DisclaimersComponent"],
        _components_table_table_component__WEBPACK_IMPORTED_MODULE_20__["TableComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
        _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_23__["FaqComponent"],
        _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_24__["FilterComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_28__["MainComponent"],
        _components_card_contents_card_contents_component__WEBPACK_IMPORTED_MODULE_30__["CardContentsComponent"],
        _components_oro_page_oro_page_component__WEBPACK_IMPORTED_MODULE_32__["OroPageComponent"]], imports: [ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_31__["NgcCookieConsentModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_27__["AppRoutingModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__["MatExpansionModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__["MatExpansionModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
                    _components_disclaimers_disclaimers_component__WEBPACK_IMPORTED_MODULE_19__["DisclaimersComponent"],
                    _components_table_table_component__WEBPACK_IMPORTED_MODULE_20__["TableComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
                    _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_23__["FaqComponent"],
                    _components_filter_filter_component__WEBPACK_IMPORTED_MODULE_24__["FilterComponent"],
                    _components_main_main_component__WEBPACK_IMPORTED_MODULE_28__["MainComponent"],
                    _components_card_contents_card_contents_component__WEBPACK_IMPORTED_MODULE_30__["CardContentsComponent"],
                    _components_oro_page_oro_page_component__WEBPACK_IMPORTED_MODULE_32__["OroPageComponent"],
                ],
                imports: [
                    ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_31__["NgcCookieConsentModule"].forRoot(cookieConfig),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_17__["FontAwesomeModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_27__["AppRoutingModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__["MatExpansionModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__["MatExpansionModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"],
                ],
                providers: [
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_33__["CookieService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/card-contents/card-contents.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/card-contents/card-contents.component.ts ***!
  \*********************************************************************/
/*! exports provided: CardContentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContentsComponent", function() { return CardContentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");





function CardContentsComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Munitions: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item.munitions);
} }
function CardContentsComponent_li_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.item.type);
} }
function CardContentsComponent_li_7_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "F. charge/Detonate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardContentsComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Trigger Type: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardContentsComponent_li_7_span_3_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardContentsComponent_li_7_span_4_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.item.type !== "Full charge/Detonate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.item.type === "Full charge/Detonate");
} }
function CardContentsComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Combo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.item.combo);
} }
function CardContentsComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Stance: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.item.stance);
} }
function CardContentsComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Riven Stat Rec: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.item.rivenrec);
} }
function CardContentsComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Base/Event: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.item.base);
} }
function CardContentsComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Notes: ", ctx_r6.item.notes, "");
} }
class CardContentsComponent {
    constructor() {
        this.faYoutube = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faYoutube"];
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        console.log('card init');
    }
}
CardContentsComponent.ɵfac = function CardContentsComponent_Factory(t) { return new (t || CardContentsComponent)(); };
CardContentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardContentsComponent, selectors: [["card-contents"]], inputs: { item: "item" }, decls: 21, vars: 11, consts: [[1, "title", "is-small"], [1, "card-container", "columns"], [1, "column", "is-one-third", "is-one-quarter-mobile"], [1, "stat-list"], [4, "ngIf"], ["target", "_blank", 1, "button", "is-large", "is-fullwidth", "youtube", "is-info", "is-outlined", 3, "href"], [1, "icon"], ["size", "lg", 3, "icon"], [1, "column"], ["target", "_blank", 3, "href"], [1, "is-medium"]], template: function CardContentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardContentsComponent_li_6_Template, 4, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CardContentsComponent_li_7_Template, 5, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CardContentsComponent_li_8_Template, 4, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CardContentsComponent_li_9_Template, 4, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CardContentsComponent_li_10_Template, 4, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CardContentsComponent_li_11_Template, 4, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Watch test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Build");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CardContentsComponent_p_20_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.munitions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.combo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.stance);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.rivenrec);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.base);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.item.yt_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faYoutube);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.item.dmgLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.notes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".card-container[_ngcontent-%COMP%] {\n  width: 100%;\n  flex-shrink: 0;\n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n}\n\n.stat-list[_ngcontent-%COMP%] {\n  border-right-width: thin;\n  border-bottom-width: thin;\n  border-color: lightslategray;\n  padding-bottom: .5em;\n}\n\n.youtube[_ngcontent-%COMP%] {\n  \n  color: white;\n  text-decoration: none;\n  \n  \n}\n\n.columns[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJkLWNvbnRlbnRzL2NhcmQtY29udGVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC1jb250ZW50cy9jYXJkLWNvbnRlbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xufVxuXG4uc3RhdC1saXN0IHtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiB0aGluO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiB0aGluO1xuICBib3JkZXItY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xuICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcbn1cblxuLnlvdXR1YmUge1xuICAvKmJhY2tncm91bmQtY29sb3I6ICMyODI4Mjg7Ki9cbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIC8qYm9yZGVyLWNvbG9yOiAjRkYwNzFCOyovXG4gIC8qYm9yZGVyLXdpZHRoOiAycHg7Ki9cbn1cblxuLmNvbHVtbnMge1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardContentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'card-contents',
                templateUrl: './card-contents.component.html',
                styleUrls: ['./card-contents.component.css']
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/disclaimers/disclaimers.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/disclaimers/disclaimers.component.ts ***!
  \*****************************************************************/
/*! exports provided: DisclaimersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisclaimersComponent", function() { return DisclaimersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class DisclaimersComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
    }
}
DisclaimersComponent.ɵfac = function DisclaimersComponent_Factory(t) { return new (t || DisclaimersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
DisclaimersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisclaimersComponent, selectors: [["app-disclaimers"]], decls: 12, vars: 0, consts: [[1, "message", "is-centered"], [1, "message-body"], ["routerLink", "oro"], [1, "message", "is-info", "is-centered", "is-hidden-tablet"]], template: function DisclaimersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Weapons are ranked with optimal forma count, however ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "rivens are not factored into weapon rankings!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Read more about ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "our testing process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "article", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Try desktop view for a better experience. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzY2xhaW1lcnMvZGlzY2xhaW1lcnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisclaimersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-disclaimers',
                templateUrl: './disclaimers.component.html',
                styleUrls: ['./disclaimers.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/faq/faq.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/faq/faq.component.ts ***!
  \*************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function FaqComponent_article_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r1.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class FaqComponent {
    constructor(dataService) {
        this.dataService = dataService;
    }
    ngOnInit() {
        this.dataService.getDb().subscribe(db => {
            this.faqs = Object.keys(db.faq).map(function (key) {
                return db.faq[key];
            });
        });
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 83, vars: 1, consts: [["id", "faq", 1, "container"], ["id", "faq-title", 1, "title"], [1, "message-collection"], ["class", "message", 4, "ngFor", "ngForOf"], [1, "message"], [1, "message-header", "subtitle", "ans-title"], [1, "message-body"], [1, "table"], ["title", "Type"], ["title", "Explanation"], [1, "message-body", 3, "innerHTML"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Frequently Asked Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FaqComponent_article_4_Template, 5, 2, "article", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "What do the Trigger Types mean?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Explanation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Full-Auto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Fires continuously while button is held down. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Held ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Fires continuous beam while button is held down. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Semi-Auto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Fires once per click. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Duplex ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Fires once on click and once on release. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Burst ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Fires a number of times per click. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Charge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Charges up when fire is held down, fires on release. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Spool-Up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Fires continuously while button is held down, fire rate increases over a short period. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Detonate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Detonates active projectiles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Full Charge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Charges up when fire is held down, only fires on release when fully charged. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " Force Charge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Weapon automatically charges on click and fires when fully charged. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Full-Auto Burst ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Fires bursts continuously while button is held down. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Throw ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Weapon automatically charges on click and is thrown when fully charged, losing access to it until picked up or when the weapon automatically returns after a set period of time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Mag Burst ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " Fires a number of times equal to the current maximum magazine size on click. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.faqs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".note-list[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n\n.note-list-item[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n\n\n\n#faq-title[_ngcontent-%COMP%] {\n  padding-top: 1em;\n}\n\n.ans-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXEvZmFxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXEvZmFxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90ZS1saXN0IHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5ub3RlLWxpc3QtaXRlbSB7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xufVxuXG4vKi5mYXEtcXVlc3Rpb24ge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDFyZW07XG59Ki9cblxuI2ZhcS10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG59XG5cbi5hbnMtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq',
                templateUrl: './faq.component.html',
                styleUrls: ['./faq.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/filter/filter.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/filter/filter.component.ts ***!
  \*******************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _models_FilterParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/FilterParams */ "./src/app/models/FilterParams.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/filter.service */ "./src/app/services/filter.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");



















function FilterComponent_mat_option_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r5);
} }
function FilterComponent_mat_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6);
} }
function FilterComponent_mat_form_field_30_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8);
} }
function FilterComponent_mat_form_field_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Trigger Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FilterComponent_mat_form_field_30_mat_option_4_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.triggerSelect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.triggerTypes);
} }
function FilterComponent_mat_form_field_32_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10);
} }
function FilterComponent_mat_form_field_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Munitions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FilterComponent_mat_form_field_32_mat_option_4_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r3.munitionSelect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.munitionTypes);
} }
function FilterComponent_mat_option_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r11);
} }
class FilterComponent {
    constructor(data, filter, dialog) {
        this.data = data;
        this.filter = filter;
        this.dialog = dialog;
        this.faCheck = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCheck"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"];
        this.tierSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.buildSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.triggerSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.categorySelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.munitionSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
    }
    ngOnInit() {
        this.tierTypes = this.filter.tierTypes;
        this.filterCategory = this.filter.filterCategory;
        if (this.data.getCurFilterParams()) {
            this.filterParams = this.data.getCurFilterParams();
            if (this.filterParams.base)
                this.filter.base = this.filterParams.base;
            else
                this.filter.base = '';
            if (this.filterParams.name)
                this.filter.name = this.filterParams.name;
            else
                this.filter.name = '';
            if (this.filterParams.mr)
                this.filter.mr = this.filterParams.mr;
            else
                this.filter.mr = null;
            if (this.filterParams.rivenDisp)
                this.filter.rivenDisp = this.filterParams.rivenDisp;
            else
                this.filter.rivenDisp = null;
            if (this.filterParams.tier) {
                this.filter.tierChoices = this.filterParams.tier;
                this.tierSelect.setValue(this.filterParams.tier);
            }
            else {
                this.filter.tierChoices = [];
                this.tierSelect.reset();
            }
            if (this.filterParams.buildType) {
                this.filter.buildChoices = this.filterParams.buildType;
                this.buildSelect.setValue(this.filterParams.buildType);
            }
            else {
                this.filter.buildChoices = [];
                this.buildSelect.reset();
            }
            if (this.filterParams.triggerType) {
                this.filter.triggerChoices = this.filterParams.triggerType;
                this.triggerSelect.setValue(this.filterParams.triggerType);
            }
            else {
                this.filter.triggerChoices = [];
                this.triggerSelect.reset();
            }
            if (this.filterParams.category) {
                this.filter.categoryChoices = this.filterParams.category;
                this.categorySelect.setValue(this.filterParams.category);
            }
            else {
                this.filter.categoryChoices = [];
                this.categorySelect.reset();
            }
            if (this.filterParams.munitions) {
                this.filter.munitionChoices = this.filterParams.munitions;
                this.munitionSelect.setValue(this.filterParams.munitions);
            }
            else {
                this.filter.munitionChoices = [];
                this.munitionSelect.reset();
            }
        }
        else {
            this.filter.base = '';
            this.filter.name = '';
            this.filter.mr = null;
            this.filter.rivenDisp = null;
            this.filter.buildChoices = [];
            this.buildSelect.reset();
            this.filter.triggerChoices = [];
            this.triggerSelect.reset();
            this.filter.categoryChoices = [];
            this.categorySelect.reset();
            this.filter.munitionChoices = [];
            this.munitionSelect.reset();
        }
        this.filter.filterCategory = this.data.currentTab;
        this.changeTab(this.data.currentTab);
    }
    changeTab(tab) {
        this.filter.changeTab(tab);
        this.categoryTypes = this.filter.categoryTypes;
        this.munitionTypes = this.filter.munitionTypes;
        this.buildTypes = this.filter.buildTypes;
        this.triggerTypes = this.filter.triggerTypes;
    }
    apply() {
        let filterParams = new _models_FilterParams__WEBPACK_IMPORTED_MODULE_2__["FilterParams"]();
        if (this.name) {
            filterParams.name = this.name;
        }
        if (this.base) {
            filterParams.base = this.base;
        }
        if (this.mr) {
            filterParams.mr = this.mr;
        }
        if (this.rivenDisp) {
            filterParams.rivenDisp = this.rivenDisp;
        }
        if (this.buildSelect.value) {
            filterParams.buildType = this.buildSelect.value;
        }
        if (this.categorySelect.value) {
            filterParams.category = this.categorySelect.value;
        }
        if (this.triggerSelect.value) {
            filterParams.triggerType = this.triggerSelect.value;
        }
        if (this.munitionSelect.value) {
            filterParams.munitions = this.munitionSelect.value;
        }
        if (this.tierSelect.value) {
            filterParams.tier = this.tierSelect.value;
        }
        this.filter.apply(filterParams);
        this.dialog.closeAll();
    }
    clear() {
        this.buildSelect.reset();
        this.categorySelect.reset();
        this.triggerSelect.reset();
        this.munitionSelect.reset();
        this.tierSelect.reset();
        this.filter.clear();
    }
}
FilterComponent.ɵfac = function FilterComponent_Factory(t) { return new (t || FilterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
FilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilterComponent, selectors: [["app-filter"]], decls: 59, vars: 14, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "name", "name", 3, "ngModel", "ngModelChange"], ["matInput", "", "name", "base", 3, "ngModel", "ngModelChange"], [1, "padded-bottom"], ["multiple", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "example-full-width", 4, "ngIf"], ["matInput", "", "type", "number", "name", "mr", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "name", "rivenDisp", 3, "ngModel", "ngModelChange"], [1, "button", "is-success", "is-outlined", "item-spacer", 3, "click"], [3, "icon"], [1, "button", "is-danger", "is-outlined", 3, "click"], [3, "value"]], template: function FilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_input_ngModelChange_7_listener($event) { return ctx.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Base");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_input_ngModelChange_12_listener($event) { return ctx.base = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FilterComponent_mat_option_21_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, FilterComponent_mat_option_27_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, FilterComponent_mat_form_field_30_Template, 5, 2, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, FilterComponent_mat_form_field_32_Template, 5, 2, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Build Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, FilterComponent_mat_option_39_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Mastery Rank (MR)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_input_ngModelChange_47_listener($event) { return ctx.mr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Riven Disposition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FilterComponent_Template_input_ngModelChange_52_listener($event) { return ctx.rivenDisp = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_53_listener() { return ctx.apply(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " \u00A0Apply ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FilterComponent_Template_button_click_56_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " \u00A0Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.base);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.tierSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tierTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.categorySelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categoryTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterCategory !== "Melee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filterCategory !== "Melee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.buildSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.buildTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.mr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rivenDisp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCheck);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTimes);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FaIconComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], styles: [".example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.padded-bottom[_ngcontent-%COMP%] {\n  padding-bottom: .25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXIvZmlsdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFkZGVkLWJvdHRvbSB7XG4gIHBhZGRpbmctYm90dG9tOiAuMjVlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filter',
                templateUrl: './filter.component.html',
                styleUrls: ['./filter.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _services_filter_service__WEBPACK_IMPORTED_MODULE_5__["FilterService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");






class FooterComponent {
    constructor() {
        this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"];
        this.faDiscord = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faDiscord"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faGithub"];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 40, vars: 3, consts: [[1, "content"], [1, "content", "container"], [1, "mat-headline"], [1, "animated-heartbeat", 3, "icon"], [1, "list-unstyled"], ["href", "https://reddit.com/u/sakai4eva", "target", "_blank", "rel", "noopener"], ["href", "https://matthewwang.me", "target", "_blank", "rel", "noopener"], ["href", "https://www.reddit.com/user/zhandragon", "target", "_blank", "rel", "noopener"], ["href", "https://discord.gg/Cq3jW27", "target", "_blank", "rel", "noopener"], [3, "icon"], ["href", "https://github.com/weblue/wanna_b_tierlist", "target", "_blank", "rel", "noopener"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "i_wanna_b_the_guy's Tier List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "built with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " by the tier list team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "author: nader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "curator: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "sakai4eva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "assistant curators: Quiggsy, Demto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "developers: nader, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "matt (mattxwang)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "thanks to: Kalgash, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Zhandragon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ", Brendan, .hallwayRaptor\u2122, Ypqah");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Discord Server");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " GitHub Repository");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u00A9 i_wanna_b_the_guy / nader 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHeart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faDiscord);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithub);
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: ["@-webkit-keyframes heartbeat {\n    0% {\n        transform: scale(0.75);\n    }\n    25% {\n        transform: scale(1);\n    }\n    50% {\n        transform: scale(0.75);\n    }\n    75% {\n        transform: scale(1);\n    }\n    100% {\n        transform: scale(0.75);\n    }\n}\n\n@keyframes heartbeat {\n    0% {\n        transform: scale(0.75);\n    }\n    25% {\n        transform: scale(1);\n    }\n    50% {\n        transform: scale(0.75);\n    }\n    75% {\n        transform: scale(1);\n    }\n    100% {\n        transform: scale(0.75);\n    }\n}\n\n.animated-heartbeat[_ngcontent-%COMP%] {\n    -webkit-animation: heartbeat 2s infinite;\n            animation: heartbeat 2s infinite;\n    color: tomato;\n    display: inline-block;\n}\n\n.list-unstyled[_ngcontent-%COMP%]{\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0FBQ0o7O0FBaEJBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksc0JBQXNCO0lBQzFCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0ksd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgaGVhcnRiZWF0IHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XG4gICAgfVxuICAgIDI1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICAgIH1cbn1cblxuLmFuaW1hdGVkLWhlYXJ0YmVhdCB7XG4gICAgYW5pbWF0aW9uOiBoZWFydGJlYXQgMnMgaW5maW5pdGU7XG4gICAgY29sb3I6IHRvbWF0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5saXN0LXVuc3R5bGVke1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _disclaimers_disclaimers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../disclaimers/disclaimers.component */ "./src/app/components/disclaimers/disclaimers.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../table/table.component */ "./src/app/components/table/table.component.ts");







class MainComponent {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        this.data.getDb().subscribe((db) => {
            this.listVersion = db.version;
        });
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 15, vars: 1, consts: [[1, "hero-body", "is-medium", "contents"], [1, "container"], [1, "title", "is-2"], [1, "subtitle", "is-4", "is-italic"], [1, "subtitle", "is-4"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "i_wanna_b_the_guy's Warframe Tier List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " An opinionated guide to everything Warframe. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Current Version:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-disclaimers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.listVersion, " ");
    } }, directives: [_disclaimers_disclaimers_component__WEBPACK_IMPORTED_MODULE_2__["DisclaimersComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__["MatDivider"], _table_table_component__WEBPACK_IMPORTED_MODULE_4__["TableComponent"]], styles: [".example-container[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.mat-card-title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n.mat-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLm1hdC1jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");








class NavbarComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.faDiscord = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faDiscord"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGithub"];
        this.faInfoCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faInfoCircle"];
    }
    ngOnInit() {
        // this.dataService.getDb().subscribe(db => this.listVersion = db.version);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 20, vars: 3, consts: [[1, "navbar", "is-fixed-top", "is-dark"], [1, "navbar-brand"], ["routerLink", "/", 1, "navbar-item", "title"], [1, "navbar-menu"], [1, "navbar-item", "has-dropdown", "is-hoverable"], [1, "navbar-link"], ["size", "lg", 3, "icon"], [1, "navbar-dropdown"], ["routerLink", "/faq", 1, "navbar-item"], ["routerLink", "/oro", 1, "navbar-item"], ["href", "https://discord.gg/Cq3jW27", "target", "_blank", "rel", "noopener", 1, "navbar-item", "discord-button"], [3, "icon"], ["href", "https://github.com/weblue/wanna_b_tierlist", "target", "_blank", "rel", "noopener", 1, "navbar-item", "is-info", "github-button"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "wanna_b Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0 FAQ and Notes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " FAQ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Testing Methodology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u00A0 Join our Discord ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u00A0 Github Repository ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faInfoCircle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faDiscord);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithub);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: [".nav-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n\tpadding-left: 1em;\n}\n.title[_ngcontent-%COMP%] {\n  color: white;\n  margin-right: 1em;\n}\n.discord-button[_ngcontent-%COMP%] {\n  \n  font-weight: bold;\n  \n}\n.github-button[_ngcontent-%COMP%]{\n  \n  \n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0NBQ2YsaUJBQWlCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG5cdHBhZGRpbmctbGVmdDogMWVtO1xufVxuLnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLmRpc2NvcmQtYnV0dG9uIHtcbiAgLypjb2xvcjogIzc1OEFENDsqL1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiA7Ki9cbn1cblxuLmdpdGh1Yi1idXR0b257XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogIzI0MjgyRDsqL1xuICAvKmNvbG9yOiB3aGl0ZXNtb2tlOyovXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/oro-page/oro-page.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/oro-page/oro-page.component.ts ***!
  \***********************************************************/
/*! exports provided: OroPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OroPageComponent", function() { return OroPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class OroPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
OroPageComponent.ɵfac = function OroPageComponent_Factory(t) { return new (t || OroPageComponent)(); };
OroPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OroPageComponent, selectors: [["app-oro-page"]], decls: 134, vars: 0, consts: [[1, "container"], ["id", "oro-title", 1, "title", "is-2"], [1, "subtitle", "is-4"], [1, "content", "is-medium"], [1, "title"], [1, "subtitle"], ["type", "1"], [1, "content"], [1, "title", "is-4", "is-spaced"], [1, "title", "is-5"]], template: function OroPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Testing Methodology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Outline of the process our curators use to rank weapons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "The Orokin 100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "The Orokin 100 challenge, usually shortened to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "oro100");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ", requires the following setup:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Using the Citadel Simulacrum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Warframe with 1.00 movespeed and no passive DPS increase. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Only two mods are installed: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Enemy Sense");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " and ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Enemy Radar.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " of each of the following enemies (total of 16 out of maximum 20): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Corrupted Lancer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Corrupted Crewman");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Corrupted Butcher");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Corrupted Moa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Corrupted Heavy Gunner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Corrupted Ancient");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Corrupted Bombard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Corrupted Nullifier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Friendly Fire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ": OFF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Invincibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, ": ON ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Pause AI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, ": OFF ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Enemy Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, ": 100 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " To ensure enemies spawn according to a fixed pattern and minimize variations: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Simulate the enemies ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "ONCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Return to the console and kill enemies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Exit the console");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Go to the console a third time and simulate again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "The time it takes to kill all 16 enemies is considered the scored for that run.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Testing Procedure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "The exact procedure used by our curators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Standard test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Tester should attempt up to three test runs to familiarize themselves with the weapon. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Minimum of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "five (5)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " complete attempts are made per weapon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " A run is considered incomplete if: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Tester drops out of bounds due to mistake in maneuver. If the mistake is induced by the weapon the run continues. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "An enemy drops out of bounds before fatal damage is dealt.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Tester fails to reset all conditions prior to run. This commonly includes, but is not limited to: Berserker proc(s), Bladed Rounds, failing to reload and pick up ammo, sniper combo, and others. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Any other errors that will severely impact results.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Depending on a weapon's performance, up to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " runs may be completed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " The following criteria is used to determine number of runs attempted: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "5 runs - All 5 runs fall below Top for that arsenal slot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "7 runs - Out of 5 runs, at least one (1) run fall within Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "9 runs - Out of 7 runs, at least three (3) runs within Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "11 runs - Out of 9 runs, at least five (5) runs fall within Top. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Final Scoring:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "After all runs are completed, the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "five (5) fastest runs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " will be used for final scoring. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "The final score is calculated with this formula:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "ROUND");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " ( [ Average of 5 fastest runs ] * ( 1 + [ Standard Deviation of 5 Fastest runs ] / 2) , 2 ) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "This ensures that the average time of each weapon is considered, while penalizing potential inconsistencies of the weapon.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#oro-title[_ngcontent-%COMP%] {\n  padding-top: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9vcm8tcGFnZS9vcm8tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9vcm8tcGFnZS9vcm8tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI29yby10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OroPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-oro-page',
                templateUrl: './oro-page.component.html',
                styleUrls: ['./oro-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/table/table.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/table/table.component.ts ***!
  \*****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _models_Database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/Database */ "./src/app/models/Database.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _services_filter_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/filter-dialog.service */ "./src/app/services/filter-dialog.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _models_FilterParams__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../models/FilterParams */ "./src/app/models/FilterParams.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/filter.service */ "./src/app/services/filter.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faTimes */ "./node_modules/@fortawesome/free-solid-svg-icons/faTimes.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _card_contents_card_contents_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../card-contents/card-contents.component */ "./src/app/components/card-contents/card-contents.component.ts");
























const _c0 = ["table"];
function TableComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0Filtering: [", ctx_r0.filterDisplay, "] ");
} }
function TableComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_li_5_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const tab_r30 = ctx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r31.switch(tab_r30.toLowerCase()); return ctx_r31.activeTab = tab_r30; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r30 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-active", ctx_r1.activeTab == tab_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r30, " ");
} }
function TableComponent_p_7_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Quick Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TableComponent_p_7_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.quickSearchName = $event; })("ngModelChange", function TableComponent_p_7_Template_input_ngModelChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.quickFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.quickSearchName);
} }
function TableComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_p_12_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fa-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0Clear Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r3.faTimes);
} }
function TableComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", element_r38.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r38.name);
} }
function TableComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r39.category, " ");
} }
function TableComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " MR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r40.mr, "");
} }
function TableComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Build Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_26_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", element_r41.dmgLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r41.dmg);
} }
function TableComponent_td_26_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Crit & Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", element_r41.dmgLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TableComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_td_26_a_1_Template, 2, 2, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_td_26_a_2_Template, 2, 1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r41.dmg !== "Critical & Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r41.dmg === "Critical & Status");
} }
function TableComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Munitions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r46.munitions, " ");
} }
function TableComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Riven Dispo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_32_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u272A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Higher-than-expected riven disposition for this rank");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableComponent_td_32_div_3_Template, 4, 0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, element_r47.rivenDisposition, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r47.specRivenDisp);
} }
function TableComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r49.notes, " ");
} }
function TableComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Trigger Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_38_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r50.type);
} }
function TableComponent_td_38_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "F. charge/Detonate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_td_38_span_1_Template, 2, 1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_td_38_span_2_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r50.type !== "Full charge/Detonate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r50.type === "Full charge/Detonate");
} }
function TableComponent_th_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Perf Index ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Performance Index; performance score relative to other weapons. See FAQ for more.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableComponent_td_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r54.perfIndex, "1.1-1"), " ");
} }
function TableComponent_th_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th");
} }
function TableComponent_td_44_fa_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 52);
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r56.faDown);
} }
function TableComponent_td_44_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 52);
} if (rf & 2) {
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r57.faUp);
} }
function TableComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_td_44_fa_icon_1_Template, 1, 1, "fa-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_td_44_fa_icon_2_Template, 1, 1, "fa-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r55 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r55 !== ctx_r23.expandedElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r55 === ctx_r23.expandedElement);
} }
function TableComponent_td_46_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "card-contents", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@detailExpand", element_r58 == ctx_r59.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", element_r58);
} }
function TableComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_td_46_div_1_Template, 2, 2, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r58 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r24.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r58 === ctx_r24.expandedElement);
} }
function TableComponent_td_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tier_r61 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r25.displayedColumns.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tier_r61.name);
} }
function TableComponent_tr_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 57);
} }
function TableComponent_tr_50_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_tr_50_Template_tr_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64); const row_r62 = ctx.$implicit; const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.expandedElement = ctx_r63.expandedElement === row_r62 ? null : row_r62; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r62 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("row-expanded", ctx_r27.expandedElement === row_r62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", row_r62.isTier);
} }
function TableComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 59);
} if (rf & 2) {
    const row_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", row_r65.isTier);
} }
function TableComponent_tr_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 60);
} if (rf & 2) {
    const row_r66 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !row_r66.isTier);
} }
const _c1 = function () { return ["expandedDetail"]; };
const _c2 = function () { return ["tierHeader"]; };
class TableComponent {
    constructor(changeDetectorRef, data, filter, filterDialog, dialog) {
        this.changeDetectorRef = changeDetectorRef;
        this.data = data;
        this.filter = filter;
        this.filterDialog = filterDialog;
        this.dialog = dialog;
        this.tabs = ['Primaries', 'Secondaries', 'Melees'];
        this.activeTab = this.tabs[0];
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faSearch"];
        this.faTimes = _fortawesome_free_solid_svg_icons_faTimes__WEBPACK_IMPORTED_MODULE_10__["faTimes"];
        this.faDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faChevronCircleDown"];
        this.faUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faChevronCircleUp"];
        this.loading = true;
        this.displayedColumns = [];
        this.tableDataSource = [];
        this.showSearch = true;
        this.showClear = false;
        this.filterDisplay = '';
        this._tableDataSub = data.dataChange.subscribe(() => {
            this.load(this.activeTab);
        });
        this.dialog.afterAllClosed.subscribe(() => {
            if (Object.keys(this.data.getCurFilterParams()).length !== 0) {
                this.showSearch = false;
                this.showClear = true;
                this.setFilterDisplay(JSON.stringify(this.data.getCurFilterParams()));
            }
            else {
                this.quickSearchName = null;
                this.showSearch = true;
                this.showClear = false;
                this.filterDisplay = null;
            }
        });
    }
    ngOnInit() {
        this.load(_models_Database__WEBPACK_IMPORTED_MODULE_3__["Categories"].PRIMARY.toString());
    }
    switch(tab) {
        // this.data.filterParams = new FilterParams();
        this.clear();
        tab = tab.toLowerCase();
        this.data.getTabData(tab).subscribe((array) => {
            this.loading = false;
            this.tableDataSource = array;
            this.displayedColumns = _models_Database__WEBPACK_IMPORTED_MODULE_3__["columnDefs"][tab];
            this.update();
        });
    }
    load(tab) {
        tab = tab.toLowerCase();
        this.data.getTabData(tab).subscribe((array) => {
            this.loading = false;
            this.tableDataSource = array;
            this.displayedColumns = _models_Database__WEBPACK_IMPORTED_MODULE_3__["columnDefs"][tab];
            this.update();
        });
    }
    toggleFilterDialog() {
        this.filterDialog.toggle();
    }
    clear() {
        this.filter.clear();
        this.quickSearchName = null;
        this.showSearch = true;
        this.showClear = false;
        this.filterDisplay = null;
    }
    update() {
        this.changeDetectorRef.detectChanges();
    }
    quickFilter() {
        let simpleParams = new _models_FilterParams__WEBPACK_IMPORTED_MODULE_7__["FilterParams"]();
        simpleParams.name = this.quickSearchName;
        this.data.setFilterParams(simpleParams);
    }
    setFilterDisplay(text) {
        text = text.replace(/"],"/g, " | ");
        text = text.replace(/","/g, ", ");
        text = text.replace(/[^a-zA-Z0-9 :,|]/g, "");
        text = text.replace(/[:]/g, ": ");
        this.filterDisplay = text;
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_service__WEBPACK_IMPORTED_MODULE_9__["FilterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_filter_dialog_service__WEBPACK_IMPORTED_MODULE_5__["FilterDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, decls: 53, vars: 12, consts: [["class", "level is-marginless", 4, "ngIf"], [1, "level", "is-marginless"], ["id", "special-nav-tabs", 1, "level-left", "tabs", "is-large"], [1, "level-item"], [3, "is-active", "click", 4, "ngFor", "ngForOf"], [1, "level-right", "has-text-right", "field", "is-grouped", "margin-left", "margin-right"], ["class", "level-item control", 4, "ngIf"], [1, "level-item", "control"], [1, "button", "is-info", "is-outlined", 3, "click"], ["size", "lg", 3, "icon"], ["mat-table", "", "matSort", "", "multiTemplateDataRows", "", 1, "container", "is-fullhd", "table", 3, "dataSource"], ["matColumnDef", "name"], ["class", "padded", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "padded", 4, "matCellDef"], ["matColumnDef", "category"], ["matColumnDef", "mr"], ["matColumnDef", "dmg"], ["matColumnDef", "munitions"], ["matColumnDef", "rivenDisposition"], ["matColumnDef", "notes"], ["matColumnDef", "type"], ["matColumnDef", "perfIndex"], ["matColumnDef", "expand"], [4, "matHeaderCellDef"], ["mat-cell", "", "class", "padded", "style", "width: 92px;", 4, "matCellDef"], ["matColumnDef", "expandedDetail"], ["mat-cell", "", "class", "row-borders", 4, "matCellDef"], ["matColumnDef", "tierHeader"], ["class", "padded", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "element-row top-border", 3, "hidden", "row-expanded", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "detail-row", 3, "hidden", 4, "matRowDef", "matRowDefColumns"], ["class", "sticky-tier", "mat-row", "", 3, "hidden", 4, "matRowDef", "matRowDefColumns"], [1, "level-left"], [1, "level-right", "has-text-right", "field", "margin-left", "margin-right"], [1, "notification", "is-light", "is-info", 2, "padding", ".625em .75em"], [3, "click"], [1, "example-full-width"], ["matInput", "", "name", "quick-search", 3, "ngModel", "ngModelChange"], [1, "button", "is-light", "is-danger", 3, "click"], [1, "padded"], ["mat-cell", "", 1, "padded"], ["target", "_blank", 1, "padded", 3, "href"], ["target", "_blank", 3, "href", 4, "ngIf"], ["target", "_blank", 3, "href"], ["class", "unusual_riven", 4, "ngIf"], [1, "unusual_riven"], [1, "tooltip_text"], [4, "ngIf"], [1, "perf_index"], ["mat-cell", "", 1, "padded", 2, "width", "92px"], ["size", "lg", "class", "is-pulled-right", 3, "icon", 4, "ngIf"], ["size", "lg", 1, "is-pulled-right", 3, "icon"], ["mat-cell", "", 1, "row-borders"], ["class", "row-detail top-border", 4, "ngIf"], [1, "row-detail", "top-border"], [2, "width", "100%", "flex-shrink", "0", 3, "item"], ["mat-header-row", ""], ["mat-row", "", 1, "element-row", "top-border", 3, "hidden", "click"], ["mat-row", "", 1, "detail-row", 3, "hidden"], ["mat-row", "", 1, "sticky-tier", 3, "hidden"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_div_1_Template, 6, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableComponent_li_5_Template, 3, 3, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TableComponent_p_7_Template, 5, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_Template_a_click_9_listener() { return ctx.toggleFilterDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00A0Open Filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableComponent_p_12_Template, 4, 1, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TableComponent_th_16_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TableComponent_td_17_Template, 3, 2, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TableComponent_th_19_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TableComponent_td_20_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TableComponent_th_22_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TableComponent_td_23_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TableComponent_th_25_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, TableComponent_td_26_Template, 3, 2, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, TableComponent_th_28_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, TableComponent_td_29_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, TableComponent_th_31_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, TableComponent_td_32_Template, 4, 5, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](33, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, TableComponent_th_34_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, TableComponent_td_35_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](36, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, TableComponent_th_37_Template, 2, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, TableComponent_td_38_Template, 3, 2, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](39, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, TableComponent_th_40_Template, 6, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, TableComponent_td_41_Template, 3, 4, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](42, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, TableComponent_th_43_Template, 1, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, TableComponent_td_44_Template, 3, 2, "td", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](45, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, TableComponent_td_46_Template, 2, 2, "td", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](47, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, TableComponent_td_48_Template, 3, 2, "td", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, TableComponent_tr_49_Template, 1, 0, "tr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, TableComponent_tr_50_Template, 1, 3, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, TableComponent_tr_51_Template, 1, 1, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, TableComponent_tr_52_Template, 1, 1, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showClear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.tableDataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__["FaIconComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _card_contents_card_contents_component__WEBPACK_IMPORTED_MODULE_17__["CardContentsComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DecimalPipe"]], styles: ["tr.element-row[_ngcontent-%COMP%]:hover {\n  \n  background: hsl(0, 0%, 40%);\n  cursor: pointer;\n}\n\ntd.mat-cell[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n\ntd.row-borders[_ngcontent-%COMP%] {\n  border-bottom: rgba(255, 255, 255, 0.12) solid 1px;\n}\n\ntr.detail-row[_ngcontent-%COMP%] {\n  height: 0;\n}\n\nth[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: calc(4rem - 0px);\n  \n  background: hsl(0, 0%, 30%);\n  border-bottom: 2px solid hsl(0, 0%, 60%) !important;\n  z-index: 2;\n}\n\n.sticky-tier[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  \n  \n  background: hsl(0, 0%, 30%);\n  \n  position: -webkit-sticky;\n  position: sticky;\n  border-bottom: 2px solid hsl(0, 0%, 60%) !important;\n  top: calc(7rem + 8px);\n  z-index: 1;\n}\n\n.row-detail[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  width: 100%;\n  flex-shrink: 0;\n}\n\n.list-unstyled[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n\n\n.mat-header-row[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n}\n\n.margin-left[_ngcontent-%COMP%] {\n  padding-left: 1em\n}\n\n.padded[_ngcontent-%COMP%] {\n  padding-top: .2em\n}\n\n.margin-right[_ngcontent-%COMP%] {\n  margin-right: .5em\n}\n\n.mat-cell[_ngcontent-%COMP%]{\n  font-size: 1.25em;\n}\n\n.unusual_riven[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted white;\n}\n\n.unusual_riven[_ngcontent-%COMP%]   .tooltip_text[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 15em;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px 0;\n\n  \n  position: absolute;\n  z-index: 3;\n}\n\n.unusual_riven[_ngcontent-%COMP%]:hover   .tooltip_text[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\n.perf_index[_ngcontent-%COMP%] {\n  border-bottom: 1px dotted white;\n}\n\n.perf_index[_ngcontent-%COMP%]   .tooltip_text[_ngcontent-%COMP%] {\n  visibility: hidden;\n  width: 15em;\n  top: 100%;\n  left: -50%;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 5px;\n\n  \n  position: absolute;\n}\n\n.perf_index[_ngcontent-%COMP%]:hover   .tooltip_text[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n}\n\n.top-border[_ngcontent-%COMP%] {\n  border-top: 1pt solid #dbdbdb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0RBQWtEO0FBQ3BEOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaURBQWlEO0VBQ2pELDJCQUEyQjtFQUMzQixtREFBbUQ7RUFDbkQsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGlEQUFpRDtFQUNqRCwyQkFBMkI7RUFDM0IsNENBQTRDO0VBQzVDLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsbURBQW1EO0VBQ25ELHFCQUFxQjtFQUNyQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxnQkFBZ0I7QUFDbEI7O0FBRUEsY0FBYzs7QUFHZDtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYzs7RUFFZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTs7RUFFWix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRyLmVsZW1lbnQtcm93OmhvdmVyIHtcbiAgLypyb3cgaG92ZXIgY29sb3IqL1xuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDQwJSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudGQubWF0LWNlbGwge1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuXG50ZC5yb3ctYm9yZGVycyB7XG4gIGJvcmRlci1ib3R0b206IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMikgc29saWQgMXB4O1xufVxuXG50ci5kZXRhaWwtcm93IHtcbiAgaGVpZ2h0OiAwO1xufVxuXG50aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogY2FsYyg0cmVtIC0gMHB4KTtcbiAgLypUaGlzIHNob3VsZCBiZSBzYW1lIGFzICR0YWJsZS1iYWNrZ3JvdW5kLWNvbG9yKi9cbiAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCAzMCUpO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgaHNsKDAsIDAlLCA2MCUpICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5zdGlja3ktdGllciB0ZCB7XG4gIC8qYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA1MCUpOyovXG4gIC8qVGhpcyBzaG91bGQgYmUgc2FtZSBhcyAkdGFibGUtYmFja2dyb3VuZC1jb2xvciovXG4gIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgMzAlKTtcbiAgLypib3JkZXItYm90dG9tOiAycHggc29saWQgaHNsKDAsIDAlLCA2MCUpOyovXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBoc2woMCwgMCUsIDYwJSkgIWltcG9ydGFudDtcbiAgdG9wOiBjYWxjKDdyZW0gKyA4cHgpO1xuICB6LWluZGV4OiAxO1xufVxuXG4ucm93LWRldGFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmxpc3QtdW5zdHlsZWQge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi8qIG92ZXJyaWRlcyAqL1xuXG5cbi5tYXQtaGVhZGVyLXJvdyB7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xufVxuXG4ubWFyZ2luLWxlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDFlbVxufVxuXG4ucGFkZGVkIHtcbiAgcGFkZGluZy10b3A6IC4yZW1cbn1cblxuLm1hcmdpbi1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogLjVlbVxufVxuXG4ubWF0LWNlbGx7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xufVxuXG4udW51c3VhbF9yaXZlbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHdoaXRlO1xufVxuXG4udW51c3VhbF9yaXZlbiAudG9vbHRpcF90ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMTVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogNXB4IDA7XG5cbiAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAzO1xufVxuXG4udW51c3VhbF9yaXZlbjpob3ZlciAudG9vbHRpcF90ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnBlcmZfaW5kZXgge1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIHdoaXRlO1xufVxuXG4ucGVyZl9pbmRleCAudG9vbHRpcF90ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMTVlbTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAtNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA1cHg7XG5cbiAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucGVyZl9pbmRleDpob3ZlciAudG9vbHRpcF90ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbn1cblxuLnRvcC1ib3JkZXIge1xuICBib3JkZXItdG9wOiAxcHQgc29saWQgI2RiZGJkYjtcbn1cbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('detailExpand', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0', opacity: '0', minHeight: '0', display: 'none' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*', opacity: '1', display: 'flex' })),
                // transition('collapsed => expanded',
                //   [
                //     style({ display: 'block' }),
                //     animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)')
                //   ]),
                // transition('expanded => collapsed',
                //   [
                //     animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)')
                //   ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: 0, opacity: 0, minHeight: '0' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*', opacity: '1', display: 'flex' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*', opacity: '1', display: 'flex' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: 0, opacity: 0, minHeight: '0' }))
                ])
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('detailExpand', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0', opacity: '0', minHeight: '0', display: 'none' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*', opacity: '1', display: 'flex' })),
                        // transition('collapsed => expanded',
                        //   [
                        //     style({ display: 'block' }),
                        //     animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)')
                        //   ]),
                        // transition('expanded => collapsed',
                        //   [
                        //     animate('400ms cubic-bezier(0.4, 0.0, 0.2, 1)')
                        //   ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: 0, opacity: 0, minHeight: '0' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*', opacity: '1', display: 'flex' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*', opacity: '1', display: 'flex' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms cubic-bezier(0.4, 0.0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: 0, opacity: 0, minHeight: '0' }))
                        ])
                    ]),
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _services_filter_service__WEBPACK_IMPORTED_MODULE_9__["FilterService"] }, { type: _services_filter_dialog_service__WEBPACK_IMPORTED_MODULE_5__["FilterDialogService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }]; }, { el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['table']
        }] }); })();


/***/ }),

/***/ "./src/app/models/Database.ts":
/*!************************************!*\
  !*** ./src/app/models/Database.ts ***!
  \************************************/
/*! exports provided: Database, Categories, tierTypes, columnDefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Database", function() { return Database; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categories", function() { return Categories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tierTypes", function() { return tierTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "columnDefs", function() { return columnDefs; });
class Database {
}
var Categories;
(function (Categories) {
    Categories["PRIMARY"] = "Primaries";
    Categories["SECONDARY"] = "Secondaries";
    Categories["MELEE"] = "Melees";
    Categories["ARCHWING"] = "Archwings";
    Categories["ARCHGUN"] = "Archguns";
    Categories["ARCHMELEE"] = "Archmelees";
    Categories["COMPANIONS"] = "Companions";
})(Categories || (Categories = {}));
const tierTypes = ['Exceptional', 'Satisfactory', 'Mediocre', 'Insufficient', 'Untested'];
const columnDefs = {
    'primaries': ['name', 'perfIndex', 'category', 'rivenDisposition', 'dmg', 'mr', 'expand'],
    'secondaries': ['name', 'perfIndex', 'category', 'rivenDisposition', 'dmg', 'mr', 'expand'],
    'melees': ['name', 'perfIndex', 'category', 'rivenDisposition', 'dmg', 'mr', 'expand']
};


/***/ }),

/***/ "./src/app/models/FilterParams.ts":
/*!****************************************!*\
  !*** ./src/app/models/FilterParams.ts ***!
  \****************************************/
/*! exports provided: FilterParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterParams", function() { return FilterParams; });
class FilterParams {
    constructor() {
    }
}


/***/ }),

/***/ "./src/app/models/Item.ts":
/*!********************************!*\
  !*** ./src/app/models/Item.ts ***!
  \********************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
class Item {
}


/***/ }),

/***/ "./src/app/models/Melee.ts":
/*!*********************************!*\
  !*** ./src/app/models/Melee.ts ***!
  \*********************************/
/*! exports provided: Melee, meleeCategories, meleeBuildTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Melee", function() { return Melee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meleeCategories", function() { return meleeCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meleeBuildTypes", function() { return meleeBuildTypes; });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/app/models/Item.ts");

class Melee extends _Item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
}
let meleeCategories = [
    "Sword and Shield",
    "Staff",
    "Scythe",
    "Fists",
    "Hammer",
    "Whip",
    "Sword",
    "Polearm",
    "Dagger",
    "Glaive",
    "Blade and Whip",
    "Dual Swords",
    "Rapier",
    "Nikana",
    "Dual Daggers",
    "Heavy Blade",
    "Machete",
    "Warfan",
    "Sparring",
    "Tonfa",
    "Nunchaku",
    "Two-handed Nikana",
    "Gunblade",
    "Claws"
];
let meleeBuildTypes = [
    'Status',
    'Heavy Attack',
    'Hybrid',
    'Critical'
];


/***/ }),

/***/ "./src/app/models/Primary.ts":
/*!***********************************!*\
  !*** ./src/app/models/Primary.ts ***!
  \***********************************/
/*! exports provided: Primary, primCategories, primBuildTypes, primTriggerTypes, primMunitionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Primary", function() { return Primary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primCategories", function() { return primCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primBuildTypes", function() { return primBuildTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primTriggerTypes", function() { return primTriggerTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primMunitionTypes", function() { return primMunitionTypes; });
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item */ "./src/app/models/Item.ts");

class Primary extends _Item__WEBPACK_IMPORTED_MODULE_0__["Item"] {
}
let primCategories = [
    'Shotgun',
    'Rifle',
    'Sniper',
    'Bow',
    'Launcher'
];
let primBuildTypes = [
    'Status',
    'Critical',
    'Raw'
];
let primTriggerTypes = [
    'Full-auto',
    'Held',
    'Semi-auto',
    'Force charge',
    'Full-auto burst',
    'Burst',
    'Charge',
    'Detonate',
    'Throw',
    'Spool-up',
    'Mag burst',
    'Duplex',
];
let primMunitionTypes = [
    'Projectile',
    'Beam',
    'Hitscan'
];


/***/ }),

/***/ "./src/app/models/Secondary.ts":
/*!*************************************!*\
  !*** ./src/app/models/Secondary.ts ***!
  \*************************************/
/*! exports provided: Secondary, secCategories, secBuildTypes, secTriggerTypes, secMunitionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Secondary", function() { return Secondary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secCategories", function() { return secCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secBuildTypes", function() { return secBuildTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secTriggerTypes", function() { return secTriggerTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secMunitionTypes", function() { return secMunitionTypes; });
class Secondary {
}
let secCategories = [
    'Semi-auto',
    'Auto',
    'Beam',
    'Shotgun',
    'Launcher',
    'Crossbow',
    'Thrown',
    'Semi-auto Explosive'
];
let secBuildTypes = [
    'Status',
    'Critical',
    'Raw',
    'Speed'
];
let secTriggerTypes = [
    'Full-auto',
    'Held',
    'Semi-auto',
    'Force charge',
    'Full-auto burst',
    'Burst',
    'Charge',
    'Detonate',
    'Throw',
    'Spool-up',
    'Mag burst',
    'Duplex',
];
let secMunitionTypes = [
    'Projectile',
    'Beam',
    'Hitscan'
];


/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService, firstTier, secondTier, thirdTier, fourthTier, untestedTier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstTier", function() { return firstTier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondTier", function() { return secondTier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thirdTier", function() { return thirdTier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fourthTier", function() { return fourthTier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untestedTier", function() { return untestedTier; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _models_FilterParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/FilterParams */ "./src/app/models/FilterParams.ts");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_5__);








class DataService {
    constructor(http) {
        this.http = http;
        this.dataChange = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.notifyTabListener = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.dbUrl = './assets/thelist.json';
        this.filterParams = new _models_FilterParams__WEBPACK_IMPORTED_MODULE_4__["FilterParams"]();
        this.Secondaries = {
            categoryTypes: [],
            buildTypes: [],
            triggerTypes: [],
            munitionTypes: []
        };
        this.Melees = {
            buildTypes: [],
            categoryTypes: []
        };
        this.Primaries = {
            triggerTypes: [],
            buildTypes: [],
            categoryTypes: [],
            munitionTypes: []
        };
        this.filterParams = new _models_FilterParams__WEBPACK_IMPORTED_MODULE_4__["FilterParams"]();
    }
    //Return or request the db
    getDb() {
        if (this.database) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.database);
        }
        return this.http.get(this.dbUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(db => {
            this.database = db;
            this.database.primaries = DataService.sort(db.Primaries);
            this.database.secondaries = DataService.sort(db.Secondaries);
            this.database.melees = DataService.sort(db.Melees);
            // This debug code will print all the filtered weapon field types
            // for (let item in db.Primaries) {
            //   if (!this.Primaries.categoryTypes.includes(db.Primaries[item].category))
            //     this.Primaries.categoryTypes.push(db.Primaries[item].category);
            //
            //   if (!this.Primaries.buildTypes.includes(db.Primaries[item].dmg))
            //     this.Primaries.buildTypes.push(db.Primaries[item].dmg);
            //
            //   if (!this.Primaries.triggerTypes.includes(db.Primaries[item].type) && !db.Primaries[item].type.includes('/')) {
            //     this.Primaries.triggerTypes.push(db.Primaries[item].type);
            //   }
            //
            //   if (!this.Primaries.munitionTypes.includes(db.Primaries[item].munitions) && !db.Primaries[item].munitions.includes('/'))
            //     this.Primaries.munitionTypes.push(db.Primaries[item].munitions);
            // }
            // console.log(this.Primaries);
            // for (let item in db.Secondaries) {
            //   if (!this.Secondaries.categoryTypes.includes(db.Secondaries[item].category))
            //     this.Secondaries.categoryTypes.push(db.Secondaries[item].category);
            //
            //   if (!this.Secondaries.buildTypes.includes(db.Secondaries[item].dmg)) {
            //     this.Secondaries.buildTypes.push(db.Secondaries[item].dmg);
            //   }
            //
            //   if (!this.Secondaries.triggerTypes.includes(db.Secondaries[item].type) && !db.Secondaries[item].type.includes('/')) {
            //     this.Secondaries.triggerTypes.push(db.Secondaries[item].type);
            //   }
            //
            //   if (!this.Secondaries.munitionTypes.includes(db.Secondaries[item].munitions) && !db.Secondaries[item].munitions.includes('/')) {
            //     this.Secondaries.munitionTypes.push(db.Secondaries[item].munitions);
            //   }
            // }
            // console.log(this.Secondaries);
            // for (let item in db.Melees) {
            //   if (!this.Melees.buildTypes.includes(db.Melees[item].dmg))
            //     this.Melees.buildTypes.push(db.Melees[item].dmg);
            //
            //   if (!this.Melees.categoryTypes.includes(db.Melees[item].category))
            //     this.Melees.categoryTypes.push(db.Melees[item].category);
            // }
            // console.log(this.Melees);
            return this.database;
        }));
    }
    getTabData(tab) {
        this.currentTab = tab;
        this.notifyTabListener.next(tab);
        return this.getDb().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(db => {
            return this.applyFilter(db[tab]);
        }));
    }
    static sort(values) {
        let itemArray = Object.values(values);
        let items;
        items = itemArray.sort((a, b) => {
            return a.rank - b.rank;
        });
        return items;
    }
    static injectTiers(values) {
        let items = DataService.sort(values);
        //Inject the tier lines
        let topAdded = false;
        let contAdded = false;
        let viaAdded = false;
        let nbAdded = false;
        let utAdded = false;
        for (let i = 0; i < items.length; i++) {
            if (items[i].tier === firstTier.name && !topAdded) {
                items.splice(i, 0, firstTier);
                topAdded = true;
            }
            else if (items[i].tier === secondTier.name && !contAdded) {
                items.splice(i, 0, secondTier);
                contAdded = true;
            }
            else if (items[i].tier === thirdTier.name && !viaAdded) {
                items.splice(i, 0, thirdTier);
                viaAdded = true;
            }
            else if (items[i].tier === fourthTier.name && !nbAdded) {
                items.splice(i, 0, fourthTier);
                nbAdded = true;
            }
            else if (items[i].tier === untestedTier.name && !utAdded) {
                items.splice(i, 0, untestedTier);
                utAdded = true;
            }
        }
        return items;
    }
    //TODO subscribe to this and add a loading screen
    setFilterParams(input) {
        // console.log(JSON.stringify(input));
        this.filterParams = input;
        // this.getTabData(this.currentTab);
        let promise = this.getDb().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(db => {
            return this.applyFilter(db[this.currentTab]);
        }));
        promise.subscribe(() => {
            this.dataChange.next();
        });
        return promise;
    }
    getCurFilterParams() {
        return this.filterParams;
    }
    clearFilters() {
        this.setFilterParams(new _models_FilterParams__WEBPACK_IMPORTED_MODULE_4__["FilterParams"]());
    }
    applyFilter(items) {
        return DataService.injectTiers(items.filter((item) => {
            let show = true;
            if (item.name && this.filterParams.name) {
                show = show && item.name.toLowerCase().includes(this.filterParams.name.toLowerCase());
            }
            if (item.base && this.filterParams.base) {
                show = show && item.base.toLowerCase().includes(this.filterParams.base.toLowerCase());
            }
            if (item.mr && this.filterParams.mr)
                show = show && this.filterParams.mr >= item.mr;
            if (item.rivenDisp && this.filterParams.rivenDisp)
                show = show && this.filterParams.rivenDisp <= item.rivenDisp;
            if (item.tier && this.filterParams.tier) {
                let match = false;
                this.filterParams.tier.forEach((tier) => {
                    if (item.tier === tier)
                        match = true;
                });
                show = show && match;
            }
            if (item.category && this.filterParams.category && this.filterParams.category.length > 0) {
                let match = false;
                this.filterParams.category.forEach((category) => {
                    if (item.category.includes(category))
                        match = true;
                });
                show = show && match;
            }
            if (item.munitions && this.filterParams.munitions && this.filterParams.munitions.length > 0) {
                let match = false;
                this.filterParams.munitions.forEach((munition) => {
                    if (item.munitions.includes(munition))
                        match = true;
                });
                show = show && match;
            }
            if (item.triggerType && this.filterParams.triggerType && this.filterParams.triggerType.length > 0) {
                let match = false;
                this.filterParams.triggerType.forEach((triggerType) => {
                    if (item.triggerType.includes(triggerType))
                        match = true;
                });
                show = show && match;
            }
            if (item.dmg && this.filterParams.buildType && this.filterParams.buildType.length > 0) {
                let match = false;
                this.filterParams.buildType.forEach((buildType) => {
                    if (item.dmg.includes(buildType))
                        match = true;
                });
                show = show && match;
            }
            return show;
        }));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();
const firstTier = { name: 'Exceptional', rank: 0, tier: null, isTier: true };
const secondTier = { name: 'Satisfactory', rank: 1, tier: null, isTier: true };
const thirdTier = { name: 'Mediocre', rank: 2, tier: null, isTier: true };
const fourthTier = { name: 'Insufficient', rank: 3, tier: null, isTier: true };
const untestedTier = { name: 'Untested', rank: 4, tier: null, isTier: true };


/***/ }),

/***/ "./src/app/services/db-resolver.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/db-resolver.service.ts ***!
  \*************************************************/
/*! exports provided: DbResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbResolverService", function() { return DbResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");





let DbResolverService = class DbResolverService {
    constructor(dataService) {
        this.dataService = dataService;
    }
    resolve(route) {
        return this.dataService.getDb();
    }
};
DbResolverService.ɵfac = function DbResolverService_Factory(t) { return new (t || DbResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
DbResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DbResolverService, factory: DbResolverService.ɵfac, providedIn: 'root' });
DbResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
], DbResolverService);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DbResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/filter-dialog.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/filter-dialog.service.ts ***!
  \***************************************************/
/*! exports provided: FilterDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDialogService", function() { return FilterDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__);



class FilterDialogService {
    constructor() {
        this.showSidebarChange = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    toggle() {
        this.showSidebarChange.next();
    }
}
FilterDialogService.ɵfac = function FilterDialogService_Factory(t) { return new (t || FilterDialogService)(); };
FilterDialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilterDialogService, factory: FilterDialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterDialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/filter.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/filter.service.ts ***!
  \********************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _models_Primary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Primary */ "./src/app/models/Primary.ts");
/* harmony import */ var _models_Database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Database */ "./src/app/models/Database.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _models_Secondary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/Secondary */ "./src/app/models/Secondary.ts");
/* harmony import */ var _models_Melee__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/Melee */ "./src/app/models/Melee.ts");








class FilterService {
    constructor(data) {
        this.data = data;
        this.tierTypes = _models_Database__WEBPACK_IMPORTED_MODULE_2__["tierTypes"];
        this._tabSub = data.notifyTabListener.subscribe((tab) => {
            this.changeTab(tab);
        });
    }
    changeTab(tab) {
        console.log('filter service: getting values for ' + tab);
        switch (tab) {
            case "primaries":
                this.filterCategory = "Primary";
                this.categoryTypes = Object.values(_models_Primary__WEBPACK_IMPORTED_MODULE_1__["primCategories"]);
                this.munitionTypes = Object.values(_models_Primary__WEBPACK_IMPORTED_MODULE_1__["primMunitionTypes"]);
                this.buildTypes = Object.values(_models_Primary__WEBPACK_IMPORTED_MODULE_1__["primBuildTypes"]);
                this.triggerTypes = Object.values(_models_Primary__WEBPACK_IMPORTED_MODULE_1__["primTriggerTypes"]);
                break;
            case "secondaries":
                this.filterCategory = "Secondary";
                this.categoryTypes = Object.values(_models_Secondary__WEBPACK_IMPORTED_MODULE_4__["secCategories"]);
                this.munitionTypes = Object.values(_models_Secondary__WEBPACK_IMPORTED_MODULE_4__["secMunitionTypes"]);
                this.buildTypes = Object.values(_models_Secondary__WEBPACK_IMPORTED_MODULE_4__["secBuildTypes"]);
                this.triggerTypes = Object.values(_models_Secondary__WEBPACK_IMPORTED_MODULE_4__["secTriggerTypes"]);
                break;
            case "melees":
                this.filterCategory = "Melee";
                this.categoryTypes = _models_Melee__WEBPACK_IMPORTED_MODULE_5__["meleeCategories"];
                this.munitionTypes = [];
                this.buildTypes = _models_Melee__WEBPACK_IMPORTED_MODULE_5__["meleeBuildTypes"];
                this.triggerTypes = [];
                break;
            default:
                this.filterCategory = "Item";
        }
    }
    clear() {
        this.base = '';
        this.name = '';
        this.mr = null;
        this.rivenDisp = null;
        this.munitionChoices = [];
        this.categoryChoices = [];
        this.triggerChoices = [];
        this.buildChoices = [];
        this.tierChoices = [];
        this.data.clearFilters();
    }
    apply(params) {
        if (Object.keys(params).length !== 0)
            this.data.setFilterParams(params);
    }
}
FilterService.ɵfac = function FilterService_Factory(t) { return new (t || FilterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
FilterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FilterService, factory: FilterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/wanna_b_tierlist/wanna_b_tierlist/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map