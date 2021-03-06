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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_choose_widget_choose_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/widget/widget-choose/widget-choose.component */ "./src/app/views/widget/widget-choose/widget-choose.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var _services_auth_gard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth-gard.service */ "./src/app/services/auth-gard.service.ts");

















var routes = [
    { path: '', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'profile', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [_services_auth_gard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'website', component: _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteListComponent"], canActivate: [_services_auth_gard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'website/new', component: _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteNewComponent"], canActivate: [_services_auth_gard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'website/:wid', component: _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteEditComponent"], canActivate: [_services_auth_gard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'website/:wid/page', component: _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__["PageListComponent"], canActivate: [_services_auth_gard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'website/:wid/page/new', component: _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__["PageNewComponent"], canActivate: [_services_auth_gard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'website/:wid/page/:pid', component: _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__["PageEditComponent"], canActivate: [_services_auth_gard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'website/:wid/page/:pid/widget', component: _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__["WidgetListComponent"], canActivate: [_services_auth_gard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'website/:wid/page/:pid/widget/new', component: _views_widget_widget_choose_widget_choose_component__WEBPACK_IMPORTED_MODULE_13__["WidgetChooseComponent"], canActivate: [_services_auth_gard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
    { path: 'website/:wid/page/:pid/widget/:wgid', component: _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetEditComponent"] },
    { path: 'website/:wid/page/:pid/widget/:wgid/flickr', component: _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_15__["FlickrImageSearchComponent"], canActivate: [_services_auth_gard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<div style=\"text-align:center\">-->\n  <!--<h1>-->\n    <!--Welcome to my webmaker!-->\n  <!--</h1>-->\n<!--</div>-->\n\n<!--<a routerLink=\"/login\">Login</a>-->\n<!--<a routerLink=\"/register\">Register</a>-->\n<!--<a routerLink=\"/profile\">Profile</a>-->\n\n\n\n<!--<p appChangeBgColor [changeBgColor]=\"color\" >Hello World </p>-->\n\n\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'webmaker5610';
        // test
        this.color = 'green';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/user/login/login.component */ "./src/app/views/user/login/login.component.ts");
/* harmony import */ var _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/user/register/register.component */ "./src/app/views/user/register/register.component.ts");
/* harmony import */ var _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/user/profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/page/page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/page/page-new/page-new.component */ "./src/app/views/page/page-new/page-new.component.ts");
/* harmony import */ var _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/page/page-edit/page-edit.component */ "./src/app/views/page/page-edit/page-edit.component.ts");
/* harmony import */ var _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/website/website-new/website-new.component */ "./src/app/views/website/website-new/website-new.component.ts");
/* harmony import */ var _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/website/website-edit/website-edit.component */ "./src/app/views/website/website-edit/website-edit.component.ts");
/* harmony import */ var _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/website/website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _views_widget_widget_choose_widget_choose_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/widget/widget-choose/widget-choose.component */ "./src/app/views/widget/widget-choose/widget-choose.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_heading_widget_heading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-heading/widget-heading.component */ "./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/widget-image.component */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/widget/widget-list/widget-list.component */ "./src/app/views/widget/widget-list/widget-list.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-youtube/widget-youtube.component */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-edit.component */ "./src/app/views/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _directives_change_bg_color_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./directives/change-bg-color.directive */ "./src/app/directives/change-bg-color.directive.ts");
/* harmony import */ var _directives_sortable_directive_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./directives/sortable-directive.directive */ "./src/app/directives/sortable-directive.directive.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _views_widget_widget_list_safe_pipe_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./views/widget/widget-list/safe-pipe.pipe */ "./src/app/views/widget/widget-list/safe-pipe.pipe.ts");
/* harmony import */ var _views_widget_widget_list_order_by_pipe_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./views/widget/widget-list/order-by-pipe.pipe */ "./src/app/views/widget/widget-list/order-by-pipe.pipe.ts");
/* harmony import */ var _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts");
/* harmony import */ var _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/flickr.service.client */ "./src/app/services/flickr.service.client.ts");
/* harmony import */ var _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-html/widget-html.component */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts");
/* harmony import */ var _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./views/widget/widget-edit/widget-text/widget-text.component */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts");
/* harmony import */ var ngx_quill_editor__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-quill-editor */ "./node_modules/ngx-quill-editor/index.js");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./services/shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _services_auth_gard_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./services/auth-gard.service */ "./src/app/services/auth-gard.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__["PageListComponent"],
                _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__["PageNewComponent"],
                _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__["PageEditComponent"],
                _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_12__["WebsiteNewComponent"],
                _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_13__["WebsiteEditComponent"],
                _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_14__["WebsiteListComponent"],
                _views_widget_widget_choose_widget_choose_component__WEBPACK_IMPORTED_MODULE_15__["WidgetChooseComponent"],
                _views_widget_widget_edit_widget_heading_widget_heading_component__WEBPACK_IMPORTED_MODULE_16__["WidgetHeadingComponent"],
                _views_widget_widget_edit_widget_image_widget_image_component__WEBPACK_IMPORTED_MODULE_17__["WidgetImageComponent"],
                _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_18__["WidgetListComponent"],
                _views_widget_widget_edit_widget_youtube_widget_youtube_component__WEBPACK_IMPORTED_MODULE_19__["WidgetYoutubeComponent"],
                _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_20__["WidgetEditComponent"],
                _directives_change_bg_color_directive__WEBPACK_IMPORTED_MODULE_25__["ChangeBgColorDirective"],
                _directives_sortable_directive_directive__WEBPACK_IMPORTED_MODULE_26__["SortableDirective"],
                _views_widget_widget_list_safe_pipe_pipe__WEBPACK_IMPORTED_MODULE_28__["SafePipe"],
                _views_widget_widget_list_order_by_pipe_pipe__WEBPACK_IMPORTED_MODULE_29__["OrderByPipe"],
                _views_widget_widget_edit_widget_image_flickr_image_search_flickr_image_search_component__WEBPACK_IMPORTED_MODULE_30__["FlickrImageSearchComponent"],
                _views_widget_widget_edit_widget_html_widget_html_component__WEBPACK_IMPORTED_MODULE_32__["WidgetHtmlComponent"],
                _views_widget_widget_edit_widget_text_widget_text_component__WEBPACK_IMPORTED_MODULE_33__["WidgetTextComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_37__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_quill_editor__WEBPACK_IMPORTED_MODULE_34__["QuillEditorModule"],
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_21__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_22__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__["WidgetService"], _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_31__["FlickrService"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_35__["SharedService"], _services_auth_gard_service__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_38__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_38__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/change-bg-color.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/change-bg-color.directive.ts ***!
  \*********************************************************/
/*! exports provided: ChangeBgColorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeBgColorDirective", function() { return ChangeBgColorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChangeBgColorDirective = /** @class */ (function () {
    function ChangeBgColorDirective(el) {
        this.el = el;
    }
    ChangeBgColorDirective.prototype.onClick = function () {
        this.changeMe(this.changeBgColor);
    };
    ChangeBgColorDirective.prototype.changeMe = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChangeBgColorDirective.prototype, "changeBgColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ChangeBgColorDirective.prototype, "onClick", null);
    ChangeBgColorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appChangeBgColor]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ChangeBgColorDirective);
    return ChangeBgColorDirective;
}());



/***/ }),

/***/ "./src/app/directives/sortable-directive.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/directives/sortable-directive.directive.ts ***!
  \************************************************************/
/*! exports provided: SortableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableDirective", function() { return SortableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SortableDirective = /** @class */ (function () {
    function SortableDirective(el) {
        this.el = el;
        this.newIndexes = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // this will emit an event for the parent
    }
    SortableDirective.prototype.ngAfterViewInit = function () {
        this.appSortable(this);
    };
    SortableDirective.prototype.appSortable = function (refe) {
        jQuery(this.el.nativeElement).sortable({
            axis: 'y',
            start: function (event, ui) {
                console.log('Old position: ' + ui.item.index());
                refe.initialIndex = ui.item.index();
            },
            stop: function (event, ui) {
                console.log('New position: ' + ui.item.index());
                refe.newIndexes.emit({
                    startIndex: refe.initialIndex,
                    endIndex: ui.item.index()
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SortableDirective.prototype, "newIndexes", void 0);
    SortableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSortable]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SortableDirective);
    return SortableDirective;
}());



/***/ }),

/***/ "./src/app/model/page.model.client.ts":
/*!********************************************!*\
  !*** ./src/app/model/page.model.client.ts ***!
  \********************************************/
/*! exports provided: Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var Page = /** @class */ (function () {
    function Page(_id, pageName, pageTitle, websiteId) {
        this._id = _id;
        this.name = pageName;
        this.title = pageTitle;
        this.websiteId = websiteId;
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/model/user.model.client.ts":
/*!********************************************!*\
  !*** ./src/app/model/user.model.client.ts ***!
  \********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(_id, username, password, firstName, lastName, email) {
        this._id = _id;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/model/website.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/model/website.model.client.ts ***!
  \***********************************************/
/*! exports provided: Website */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Website", function() { return Website; });
var Website = /** @class */ (function () {
    function Website(_id, websiteName, websiteDescription, developerId) {
        this._id = _id;
        this.name = websiteName;
        this.description = websiteDescription;
        this.developerId = developerId;
    }
    return Website;
}());



/***/ }),

/***/ "./src/app/model/widget.model.client.ts":
/*!**********************************************!*\
  !*** ./src/app/model/widget.model.client.ts ***!
  \**********************************************/
/*! exports provided: Widget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
var Widget = /** @class */ (function () {
    function Widget(name, _id, widgetType, pageId) {
        this.name = name;
        this._id = _id;
        this.widgetType = widgetType;
        this.pageId = pageId;
    }
    return Widget;
}());



/***/ }),

/***/ "./src/app/services/auth-gard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/auth-gard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service.client */ "./src/app/services/user.service.client.ts");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService) {
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function () {
        return this.userService.loggedIn();
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/flickr.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/flickr.service.client.ts ***!
  \***************************************************/
/*! exports provided: FlickrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrService", function() { return FlickrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FlickrService = /** @class */ (function () {
    function FlickrService(http) {
        this.http = http;
        this.api = { 'searchPhotos': this.searchPhotos,
        };
        this.key = 'ce732fc28bcf40025297ccc22b4a324d';
        this.secret = '2b32279a76c53c89';
        this.flickerUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=API_KEY&text=TEXT' +
            '&format=json&nojsoncallback=1';
    }
    FlickrService.prototype.searchPhotos = function (searchTerm) {
        var url = this.flickerUrl
            .replace('API_KEY', this.key)
            .replace('TEXT', searchTerm);
        return this.http.get(url);
    };
    FlickrService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FlickrService);
    return FlickrService;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/page.service.client.ts ***!
  \*************************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.api = { 'createPage': this.createPage,
            'findPageByWebsiteId': this.findPageByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    PageService.prototype.createPage = function (websiteId, page) {
        var newPage = { name: page.name, title: page.title, websiteId: websiteId };
        return this.http.post(this.baseUrl + '/api/website/' + websiteId + '/page', newPage).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId + '/page').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    PageService.prototype.findPageById = function (pageId) {
        return this.http.get(this.baseUrl + '/api/page/' + pageId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    PageService.prototype.updatePage = function (pageId, page) {
        return this.http.put(this.baseUrl + '/api/page/' + pageId, page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    PageService.prototype.deletePage = function (pageId) {
        return this.http.delete(this.baseUrl + '/api/page/' + pageId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/shared.service.client.ts ***!
  \***************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
    }
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared.service.client */ "./src/app/services/shared.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var UserService = /** @class */ (function () {
    function UserService(http, sharedService, router) {
        this.http = http;
        this.sharedService = sharedService;
        this.router = router;
        this.api = { 'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'updateUser': this.updateUser,
            'findUserByCredentials': this.findUserByCredentials,
            'deleteUser': this.deleteUser,
            'login': this.login,
            'logout': this.logout,
            'loggedIn': this.loggedIn,
        };
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.options = { withCredentials: true };
    }
    UserService.prototype.login = function (username, password) {
        var body = {
            username: username,
            password: password,
        };
        return this.http.post(this.baseUrl + '/api/login', body, this.options);
    };
    UserService.prototype.logout = function () {
        return this.http.post(this.baseUrl + '/api/logout', '', this.options);
    };
    UserService.prototype.register = function (username, password) {
        var user = {
            username: username,
            password: password
        };
        return this.http.post(this.baseUrl + '/api/register', user, this.options);
    };
    UserService.prototype.loggedIn = function () {
        var _this = this;
        return this.http.post(this.baseUrl + '/api/loggedin', '', this.options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            if (user !== 0) {
                _this.sharedService.user = user;
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        }));
    };
    UserService.prototype.createUser = function (user) {
        var newUser = { firstName: user.firstName, lastName: user.lastNAme, email: user.email, password: user.password,
            username: user.username };
        return this.http.post(this.baseUrl + '/api/user', newUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    UserService.prototype.findUserById = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    UserService.prototype.findUserByUsername = function (userName) {
        return this.http.get(this.baseUrl + '/api/user?username=' + userName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        console.log('find user by credentials');
        return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password);
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.http.delete(this.baseUrl + '/api/user/' + userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _shared_service_client__WEBPACK_IMPORTED_MODULE_5__["SharedService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/website.service.client.ts ***!
  \****************************************************/
/*! exports provided: WebsiteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteService", function() { return WebsiteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.api = { 'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        var newWebsite = { name: website.name, description: website.description, developerId: userId };
        return this.http.post(this.baseUrl + '/api/user/' + userId + '/website', newWebsite).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        return this.http.get(this.baseUrl + '/api/user/' + userId + '/website').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        return this.http.get(this.baseUrl + '/api/website/' + websiteId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        return this.http.put(this.baseUrl + '/api/website/' + websiteId, website).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        return this.http.delete(this.baseUrl + '/api/website/' + websiteId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response;
        }));
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetService", function() { return WidgetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var WidgetService = /** @class */ (function () {
    function WidgetService(http) {
        this.http = http;
        this.api = { 'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget
        };
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var newWidget = { name: widget.name, widgetType: widget.widgetType, pageId: pageId };
        return this.http.post(this.baseUrl + '/api/page/' + pageId + '/widget', newWidget).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        return this.http.get(this.baseUrl + '/api/page/' + pageId + '/widget').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        console.log('send wgid:' + widgetId);
        return this.http.get(this.baseUrl + '/api/widget/' + widgetId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        return this.http.put(this.baseUrl + '/api/widget/' + widgetId, widget).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        return this.http.delete(this.baseUrl + '/api/widget/' + widgetId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            return response;
        }));
    };
    WidgetService.prototype.reorderWidgets = function (startIndex, endIndex, pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget?start=' + startIndex + '&end=' + endIndex;
        return this.http.put(url, '', { responseType: 'text' });
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1lZGl0L3BhZ2UtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/website/{{wid}}/page\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" href=\"#\">\n        Edit Page\n      </a>\n    </div>\n    <span (click)=\"UpdatePage()\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-check\"></i>\n    </span>\n  </div>\n</nav>\n\n\n<div class=\"container cl-container-left-padding\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <form class=\"cl-text-padding\">\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input [(ngModel)]=\"page.name\" name=\"page-name\" type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\" required #pageName=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!pageName.valid && pageName.touched\">\n          Please enter page name!\n    </span>\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input [(ngModel)]=\"page.title\" name=\"page-title\" type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\">\n    </div>\n    <a class=\"btn btn-danger  btn-block\" (click)=\"DeletePage()\" routerLink=\"/website/{{wid}}/page\">Delete</a>\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-edit/page-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-edit/page-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: PageEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageEditComponent", function() { return PageEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _model_page_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/page.model.client */ "./src/app/model/page.model.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");






var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(activeRouter, pageService, router, sharedService) {
        this.activeRouter = activeRouter;
        this.pageService = pageService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid page name!';
        this.page = new _model_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"]('', '', '', '');
    }
    PageEditComponent.prototype.UpdatePage = function () {
        var _this = this;
        console.log(this.page.name);
        console.log(this.page.title);
        if (this.page.name.length < 1) {
            this.errorFlag = true;
        }
        else {
            this.activeRouter.params.subscribe(function (params) {
                return _this.pageService.updatePage(_this.page._id, _this.page)
                    .subscribe(function (pages) {
                    _this.router.navigate(['website', _this.wid, 'page']);
                }, function (error) {
                    if (error) {
                        _this.errorMsg = error;
                        console.log(error);
                        _this.errorFlag = true;
                    }
                });
            });
        }
    };
    PageEditComponent.prototype.DeletePage = function () {
        var _this = this;
        console.log(this.page.name);
        console.log(this.page.title);
        this.pageService.deletePage(this.page._id);
        this.activeRouter.params.subscribe(function (params) {
            return _this.pageService.deletePage(_this.page._id)
                .subscribe(function (pages) { });
        });
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.uid = _this.sharedService.user._id;
            _this.wid = params['wid'];
            _this.pageService.findPageById(params['pid']).subscribe(function (page) {
                if (page) {
                    _this.page = page;
                }
            });
            console.log('user id: ' + _this.uid);
            console.log('page id: ' + _this.page._id);
            console.log('web id: ' + _this.wid);
        });
    };
    PageEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-edit',
            template: __webpack_require__(/*! ./page-edit.component.html */ "./src/app/views/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__(/*! ./page-edit.component.css */ "./src/app/views/page/page-edit/page-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1saXN0L3BhZ2UtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/website\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" href=\"#\">\n        Pages\n      </a>\n    </div>\n    <a routerLink=\"/website/{{wid}}/page/new\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-plus\"></i>\n    </a>\n\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <ul class=\"list-group cl-list-group-borderless cl-text-blue\">\n    <li *ngFor=\"let item of pages\" class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">\n      <a routerLink=\"/website/{{wid}}/page/{{item._id}}/widget\" class=\"cl-text-blue\">{{item.name}}</a>\n      <a routerLink=\"/website/{{wid}}/page/{{item._id}}\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>\n    </li>\n\n    <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/1/widget\" class=\"cl-text-blue\">Blog Post</a>-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/1\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/2/widget\" class=\"cl-text-blue\">Blogs</a>-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/2\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/3/widget\" class=\"cl-text-blue\">Home</a>-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/3\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/4/widget\" class=\"cl-text-blue\">About</a>-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/4\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/5/widget\" class=\"cl-text-blue\">Contact Us</a>-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/5\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>-->\n    <!--</li>-->\n  </ul>\n</div>\n\n\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");





var PageListComponent = /** @class */ (function () {
    function PageListComponent(router, pageService, websiteService) {
        this.router = router;
        this.pageService = pageService;
        this.websiteService = websiteService;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.websiteService.findWebsiteById(params['wid']).subscribe(function (website) {
                if (website) {
                    _this.pages = website.pages;
                }
            });
            // this.pageService.findPageByWebsiteId(params['wid']).subscribe((pages: any) => {
            //   if (pages) {
            //     this.pages = pages;
            //   }
            // });
            console.log('web id: ' + _this.wid);
        });
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_4__["WebsiteService"]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2UvcGFnZS1uZXcvcGFnZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/website/{{wid}}/page\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" href=\"#\">\n        New Page\n      </a>\n    </div>\n    <span (click)=\"CreatePage()\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-check\"></i>\n    </span>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <form>\n    <div class=\"form-group cl-text-padding\">\n      <label for=\"page-name\">Name</label>\n      <input [(ngModel)]=\"page.name\" name=\"page-name\" type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\" required #pageName=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!pageName.valid && pageName.touched\">\n          Please enter page name!\n    </span>\n    <div class=\"form-group cl-text-padding\">\n      <label for=\"page-title\">Title</label>\n      <input [(ngModel)]=\"page.title\" name=\"page-title\" type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\">\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-new/page-new.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/page/page-new/page-new.component.ts ***!
  \***********************************************************/
/*! exports provided: PageNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNewComponent", function() { return PageNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");
/* harmony import */ var _model_page_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/page.model.client */ "./src/app/model/page.model.client.ts");





var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(activeRouter, pageService, router) {
        this.activeRouter = activeRouter;
        this.pageService = pageService;
        this.router = router;
        this.errorMsg = 'Invalid page name!';
        this.page = new _model_page_model_client__WEBPACK_IMPORTED_MODULE_4__["Page"]('', '', '', '');
    }
    PageNewComponent.prototype.CreatePage = function () {
        var _this = this;
        console.log(this.page.name);
        console.log(this.page.title);
        if (this.page.name.length < 1) {
            this.errorFlag = true;
        }
        else {
            this.activeRouter.params.subscribe(function (params) {
                return _this.pageService.createPage(_this.wid, _this.page)
                    .subscribe(function (pages) {
                    _this.router.navigate(['website', _this.wid, 'page']);
                }, function (error) {
                    if (error) {
                        _this.errorMsg = error;
                        console.log(error);
                        _this.errorFlag = true;
                    }
                });
            });
        }
    };
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.wid = params['wid'];
            console.log('website id: ' + _this.wid);
        });
    };
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/views/user/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/views/user/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/user/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"username\" placeholder=\"username\" class=\"form-control\" ngModel required #username=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <div class=\"form-group\">\n      <input type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control\" ngModel required #password=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block cl-blue-navbar\" type=\"submit\">Login</button>\n    </div>\n\n    <div class=\"form-group\">\n      <a routerLink=\"/register\" class=\"btn btn-success btn-block\">Register</a>\n    </div>\n  </form>\n\n  <div>\n    <a href=\"/facebook/login\" class=\"btn btn-primary btn-block\">\n      <i class=\"fab fa-facebook-f\"></i>\n      Facebook\n    </a>\n  </div>\n\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/views/user/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/user/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, sharedService) {
        this.router = router;
        this.userService = userService;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid username or password !';
        this.errorFlag = false;
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        var username = this.loginForm.value.username;
        var password = this.loginForm.value.password;
        console.log('username:' + username);
        console.log('password:' + password);
        // this.userService.findUserByCredentials(username, password)
        //   .subscribe((user: User) => {
        //     if (user) {
        //       this.router.navigate(['/user', user._id ]);
        //       } else {
        //       console.log(username);
        //       console.log(password);
        //       this.errorFlag = true;
        //     }
        // });
        this.userService.login(username, password)
            .subscribe(function (data) {
            if (data) {
                _this.sharedService.user = data;
                _this.router.navigate(['/profile']);
            }
            else {
                _this.errorFlag = true;
                console.log(_this.errorMsg);
            }
        }, function (error) {
            console.log(error);
            if (error) {
                _this.errorFlag = true;
                console.log(error);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        console.log('init login page');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/user/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/views/user/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/user/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <a class=\"cl-text-white cl-text-bold navbar-brand\" routerLink=\"/user/{{userId}}\">\n      Profile\n    </a>\n    <a (click)=\"UpdateUser()\" routerLink=\"/profile\" class=\"navbar-brand cl-text-white\">\n        <span class=\"fa fa-check\">\n        </span>\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"user.username\" name=\"username\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input [(ngModel)]=\"user.email\" name=\"email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"alice@wonderland.com\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"user.firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Alice\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"user.lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Wonderland\">\n    </div>\n  </form>\n  <a class=\"btn btn-primary btn-block cl-blue-navbar\" routerLink=\"/website\">Websites</a>\n  <a (click)=\"DeleteUser()\" class=\"btn btn-danger  btn-block\" routerLink=\"/login\">Delete User</a>\n  <a (click)=\"Logout()\" class=\"btn btn-danger  btn-block\" routerLink=\"/login\">Logout</a>\n</div>\n\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"row container-fluid navbar-brand\">\n    <div class=\"col-sm-3 text-center\">\n      <a routerLink=\"\">\n        <span class=\"fas fa-check cl-text-white\"></span>\n      </a>\n    </div>\n    <div class=\"col-sm-3 text-center\">\n      <a routerLink=\"\">\n        <span class=\"fas fa-plus cl-text-white\"></span>\n      </a>\n    </div>\n    <div class=\"col-sm-3 text-center\">\n      <a routerLink=\"\">\n        <span class=\"fas fa-star cl-text-white\" ></span>\n      </a>\n    </div>\n    <div class=\"col-sm-3 text-center\">\n      <a routerLink=\"\">\n        <span class=\"fas fa-heart cl-text-white\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _model_user_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/user.model.client */ "./src/app/model/user.model.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(activeRouter, userService, router, sharedService) {
        this.activeRouter = activeRouter;
        this.userService = userService;
        this.router = router;
        this.sharedService = sharedService;
        this.user = new _model_user_model_client__WEBPACK_IMPORTED_MODULE_4__["User"]('', '', '', '', '', '');
    }
    ProfileComponent.prototype.UpdateUser = function () {
        var _this = this;
        console.log(this.user['username']);
        console.log(this.user['firstName']);
        console.log(this.user['lastName']);
        console.log(this.user['email']);
        this.activeRouter.params.subscribe(function (params) {
            return _this.userService.updateUser(_this.user['_id'], _this.user)
                .subscribe(function (user) {
                _this.user = user;
                _this.sharedService.user = user;
            });
        });
    };
    ProfileComponent.prototype.DeleteUser = function () {
        var _this = this;
        console.log('delete user');
        this.activeRouter.params.subscribe(function (params) {
            return _this.userService.deleteUser(_this.user['_id'])
                .subscribe(function (res) {
                console.log(res);
                _this.sharedService.user = null;
            });
        });
    };
    ProfileComponent.prototype.Logout = function () {
        var _this = this;
        this.userService.logout()
            .subscribe(function (data) {
            _this.router.navigate(['/login']);
            _this.sharedService.user = null;
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.sharedService.user;
        this.userId = this.sharedService.user._id;
        this.activeRouter.params.subscribe(function (params) {
            //  this.userId = params['uid'];
            //  console.log(this.userId);
            // this.userService.findUserById(this.userId)
            //   .subscribe((user: User) => {
            //     if (user) {
            //       this.user = user;
            //     }
            //   });
            console.log(_this.user);
            _this.username = _this.user['username'];
        });
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/views/user/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/views/user/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/user/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/views/user/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VzZXIvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/user/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/user/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n  <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"username\" placeholder=\"username\" class=\"form-control\" ngModel required #username=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n    <div class=\"form-group\">\n      <input type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control\" ngModel required #password=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n    <div class=\"form-group\">\n      <input type=\"password\" name=\"verifyPassword\" placeholder=\"verify password\" class=\"form-control\" ngModel required #password=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please reenter password!\n    </span>\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block cl-blue-navbar\" type=\"submit\">Register</button>\n    </div>\n\n    <div class=\"form-group\">\n      <a routerLink=\"/login\" class=\"btn btn-danger btn-block\">Cancel</a>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/views/user/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/user/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _model_user_model_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/user.model.client */ "./src/app/model/user.model.client.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMsg = 'Invalid username or password!';
        this.errorFlag = false;
        this.username = '';
        this.password = '';
        this.verifyPassword = '';
        this.user = new _model_user_model_client__WEBPACK_IMPORTED_MODULE_5__["User"]('', '', '', '', '', '');
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifyPassword = this.registerForm.value.verifyPassword;
        console.log(this.username);
        console.log(this.password);
        console.log(this.verifyPassword);
        this.user.username = this.username;
        this.user.password = this.password;
        if (this.password === this.verifyPassword) {
            // this.userService.createUser(this.user)
            //   .subscribe((user: User) => {
            //     this.user = user;
            //     this.router.navigate(['/user', this.user._id]);
            //   }, (error: any) => {
            //     if (error) {
            //       this.errorFlag = true;
            //     }
            //   });
            this.userService.register(this.username, this.password)
                .subscribe(function (user) {
                _this.user = user;
                _this.router.navigate(['/profile']);
            }, function (error) {
                if (error) {
                    _this.errorFlag = true;
                    _this.errorMsg = error._body;
                }
            });
        }
        else {
            this.errorMsg = 'Passwords do not match!';
            this.errorFlag = true;
        }
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/views/user/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/views/user/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1lZGl0L3dlYnNpdGUtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n\n      <a routerLink=\"/website\" class=\"navbar-brand cl-text-white\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n        Websites\n      </a>\n      <a routerLink=\"/website/new\" class=\"navbar-brand cl-text-white float-right cl-icon-padding\">\n        <i class=\"fas fa-plus\"></i>\n      </a>\n    </div>\n\n    <div class=\"row col-sm-8\">\n      <a routerLink=\"/profile\" class=\"navbar-brand d-block d-sm-none cl-text-white\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n        Edit Websites\n      </a>\n      <span (click)=\"UpdateWebsite()\"  class=\"navbar-brand cl-text-white ml-auto\">\n        <i class=\"fas fa-check\"></i>\n      </span>\n    </div>\n  </div>\n</nav>\n\n<div class=\"row container-fluid\">\n\n  <div class=\"col-sm-4 d-none d-sm-block\">\n    <ul class=\"list-group cl-list-group-borderless cl-text-blue\">\n      <li *ngFor=\"let item of websites\" class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">\n        <a routerLink=\"/website/{{item._id}}/page\" class=\"cl-text-blue\">{{item.name}}</a>\n        <a routerLink=\"/website/{{item._id}}\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"col-sm-8\">\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <form class=\"cl-text-padding\">\n      <div class=\"form-group\">\n        <label for=\"website-name\">Website Name</label>\n        <input [(ngModel)]=\"website.name\" name=\"website-name\" type=\"text\" class=\"form-control\" id=\"website-name\" placeholder=\"Blogger\" required #websiteName=\"ngModel\">\n        <span class=\"help-block\" *ngIf=\"!websiteName.valid && websiteName.touched\">\n          Please enter website name!\n        </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website-description\">Website Description</label>\n        <textarea [(ngModel)]=\"website.description\" name=\"website-description\" id=\"website-description\" class=\"form-control\" rows=\"5\"\n                  placeholder=\"Blog is a blog-publishing service....\"></textarea>\n      </div>\n      <a class=\"btn btn-danger  btn-block\" (click)=\"DeleteWebsite()\" routerLink=\"/website\">Delete</a>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-text-white cl-icon-padding\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-edit/website-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-edit/website-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteEditComponent", function() { return WebsiteEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _model_website_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/website.model.client */ "./src/app/model/website.model.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");






var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(activeRouter, websiteService, router, sharedService) {
        this.activeRouter = activeRouter;
        this.websiteService = websiteService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid website name!';
        this.website = new _model_website_model_client__WEBPACK_IMPORTED_MODULE_4__["Website"]('', '', '', '');
        this.errorFlag = false;
    }
    WebsiteEditComponent.prototype.UpdateWebsite = function () {
        var _this = this;
        console.log(this.website.name);
        console.log(this.website.description);
        if (this.website.name.length < 1) {
            this.errorFlag = true;
        }
        else {
            return this.websiteService.updateWebsite(this.website._id, this.website)
                .subscribe(function (websites) {
                _this.websites = websites;
                // this.router.navigate(['/user', this.uid, 'website']);
                _this.router.navigate(['/website']);
            }, function (error) {
                if (error) {
                    _this.errorMsg = error;
                    console.log(error);
                    _this.errorFlag = true;
                }
            });
        }
    };
    WebsiteEditComponent.prototype.DeleteWebsite = function () {
        var _this = this;
        console.log(this.website.name);
        console.log(this.website.description);
        this.activeRouter.params.subscribe(function (params) {
            return _this.websiteService.deleteWebsite(_this.website._id)
                .subscribe(function (websites) { });
        });
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.uid = _this.sharedService.user._id;
            _this.website._id = params['wid'];
            _this.websiteService.findWebsiteById(params['wid']).subscribe(function (website) {
                if (website) {
                    _this.website = website;
                }
            });
            _this.websiteService.findWebsitesByUser(_this.uid).subscribe(function (websites) {
                if (websites) {
                    _this.websites = websites;
                }
            });
            console.log('user id: ' + _this.uid);
            console.log('web id: ' + _this.website._id);
        });
    };
    WebsiteEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-edit',
            template: __webpack_require__(/*! ./website-edit.component.html */ "./src/app/views/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__(/*! ./website-edit.component.css */ "./src/app/views/website/website-edit/website-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1saXN0L3dlYnNpdGUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/profile\" class=\"navbar-brand cl-icon-padding cl-text-white\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"\">\n        Websites\n      </a>\n    </div>\n    <a routerLink='/website/new' class=\"navbar-brand cl-text-white\">\n      <i class=\"fas fa-plus\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <ul class=\"list-group cl-list-group-borderless cl-text-blue\">\n    <li *ngFor=\"let item of websites\" class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">\n      <a routerLink=\"/website/{{item._id}}/page\" class=\"cl-text-blue\">{{item.name}}</a>\n      <a routerLink=\"/website/{{item._id}}\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-text-white cl-icon-padding\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");





var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(router, websiteService, sharedService) {
        this.router = router;
        this.websiteService = websiteService;
        this.sharedService = sharedService;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            // this.websites = this.sharedService.user.websites;
            _this.websiteService.findWebsitesByUser(_this.sharedService.user._id).subscribe(function (websites) {
                if (websites) {
                    _this.websites = websites;
                    _this.sharedService.user.websites = websites;
                }
            });
            // this.uid = params['uid'];
            // // this.websiteService.findWebsitesByUser(params['uid']).subscribe((websites: any) => {
            // //   if (websites) {
            // //     this.websites = websites;
            // //   }
            // // });
            // this.userervice.findUserById(params['uid']).subscribe((user: any) => {
            //   if (user) {
            //     this.websites = user.websites;
            //   }
            // });
            console.log('user id: ' + _this.sharedService.user._id);
        });
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/views/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dlYnNpdGUvd2Vic2l0ZS1uZXcvd2Vic2l0ZS1uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n\n      <a routerLink=\"/website\" class=\"navbar-brand cl-text-white\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"#\">\n        Websites\n      </a>\n      <a routerLink=\"/website/new\" class=\"navbar-brand cl-text-white float-right cl-icon-padding\">\n        <i class=\"fas fa-plus\"></i>\n      </a>\n    </div>\n\n    <div class=\"row col-sm-8\">\n      <a routerLink=\"/website\" class=\"navbar-brand d-block d-sm-none cl-text-white\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"#\">\n        New Websites\n      </a>\n      <span (click)=\"CreateWebsite()\" class=\"navbar-brand cl-text-white ml-auto\">\n        <i class=\"fas fa-check\"></i>\n      </span>\n\n    </div>\n  </div>\n</nav>\n\n<div class=\"row container-fluid\">\n  <div class=\"col-sm-4 d-none d-sm-block \">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <li *ngFor=\"let item of websites\" class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">\n        <a routerLink=\"/website/{{item._id}}/page\" class=\"cl-text-blue\">{{item.name}}</a>\n        <a routerLink=\"/website/{{item._id}}\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-sm-8\">\n    <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n      {{errorMsg}}\n    </div>\n    <form class=\"cl-text-padding\">\n      <div class=\"form-group\">\n        <label for=\"website-name\">Name</label>\n        <input [(ngModel)]=\"website.name\" name=\"website-name\" type=\"text\" class=\"form-control\" id=\"website-name\" placeholder=\"Blogger\" required #websiteName=\"ngModel\">\n        <span class=\"help-block\" *ngIf=\"!websiteName.valid && websiteName.touched\">\n          Please enter website name!\n        </span>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website-description\">Description</label>\n        <textarea [(ngModel)]=\"website.description\" name=\"website-description\" id=\"website-description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\"></textarea>\n      </div>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-text-white cl-icon-padding\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-new/website-new.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/website/website-new/website-new.component.ts ***!
  \********************************************************************/
/*! exports provided: WebsiteNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteNewComponent", function() { return WebsiteNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");
/* harmony import */ var _model_website_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/website.model.client */ "./src/app/model/website.model.client.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");






var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(activateRouter, websiteService, router, sharedService) {
        this.activateRouter = activateRouter;
        this.websiteService = websiteService;
        this.router = router;
        this.sharedService = sharedService;
        this.website = new _model_website_model_client__WEBPACK_IMPORTED_MODULE_4__["Website"]('', '', '', '');
        this.errorMsg = 'Invalid website name!';
        this.errorFlag = false;
    }
    WebsiteNewComponent.prototype.CreateWebsite = function () {
        var _this = this;
        console.log(this.website.name);
        console.log(this.website.description);
        if (this.website.name.length < 1) {
            this.errorFlag = true;
        }
        else {
            return this.websiteService.createWebsite(this.uid, this.website)
                .subscribe(function (res) {
                console.log('res');
                _this.router.navigate(['/website']);
            }, function (error) {
                if (error) {
                    _this.errorMsg = error;
                    console.log(error);
                    _this.errorFlag = true;
                }
            });
        }
    };
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activateRouter.params.subscribe(function (params) {
            _this.uid = _this.sharedService.user._id;
            _this.websiteService.findWebsitesByUser(_this.uid).subscribe(function (websites) {
                if (websites) {
                    _this.websites = websites;
                }
            });
            console.log('user id: ' + _this.uid);
        });
    };
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-choose/widget-choose.component.css":
/*!************************************************************************!*\
  !*** ./src/app/views/widget/widget-choose/widget-choose.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtY2hvb3NlL3dpZGdldC1jaG9vc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/views/widget/widget-choose/widget-choose.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/widget/widget-choose/widget-choose.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/website/{{wid}}/page/{{pid}}/widget\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" routerLink=\"#\">\n        Choose Widget\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"updateWidgetType('HEADING')\" routerLink=\"/website/{{wid}}/page/{{pid}}/widget/{{wgid}}\" class=\"cl-text-blue\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"#\" class=\"cl-text-blue\">Label</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"updateWidgetType('HTML')\" routerLink=\"/website/{{wid}}/page/{{pid}}/widget/{{wgid}}\" class=\"cl-text-blue\">HTML</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"updateWidgetType('INPUT')\" routerLink=\"/website/{{wid}}/page/{{pid}}/widget/{{wgid}}\" class=\"cl-text-blue\">Text Input</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"#\" class=\"cl-text-blue\">Link</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"#\" class=\"cl-text-blue\">Button</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"updateWidgetType('IMAGE')\" routerLink=\"/website/{{wid}}/page/{{pid}}/widget/{{wgid}}\" class=\"cl-text-blue\">Image</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a (click)=\"updateWidgetType('YOUTUBE')\" routerLink=\"/website/{{wid}}/page/{{pid}}/widget/{{wgid}}\" class=\"cl-text-blue\">YouTube</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"#\" class=\"cl-text-blue\">Data Table</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"#\" class=\"cl-text-blue\">Repeater</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-choose/widget-choose.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/widget/widget-choose/widget-choose.component.ts ***!
  \***********************************************************************/
/*! exports provided: WidgetChooseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetChooseComponent", function() { return WidgetChooseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _model_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/widget.model.client */ "./src/app/model/widget.model.client.ts");





var WidgetChooseComponent = /** @class */ (function () {
    function WidgetChooseComponent(router, widgetService) {
        this.router = router;
        this.widgetService = widgetService;
        this.widget = new _model_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"]('', '', 'HEADING', '');
    }
    WidgetChooseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            console.log('web id: ' + _this.wid);
            console.log('page id: ' + _this.pid);
            _this.widget.size = 1;
            _this.widgetService.createWidget(_this.pid, _this.widget).subscribe(function (widget) {
                console.log(widget.toString());
                if (widget) {
                    console.log(widget);
                    _this.widget = widget;
                    _this.wgid = widget._id.toString();
                }
            });
        });
    };
    WidgetChooseComponent.prototype.updateWidgetType = function (widgetType) {
        var _this = this;
        this.widget.widgetType = widgetType;
        console.log('widget type is ' + this.widget.widgetType);
        this.router.params.subscribe(function (params) {
            console.log('going to update widget: id = ' + _this.widget._id.toString());
            return _this.widgetService.updateWidget(_this.widget._id, _this.widget).subscribe(function (widgets) {
            });
        });
    };
    WidgetChooseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-choose',
            template: __webpack_require__(/*! ./widget-choose.component.html */ "./src/app/views/widget/widget-choose/widget-choose.component.html"),
            styles: [__webpack_require__(/*! ./widget-choose.component.css */ "./src/app/views/widget/widget-choose/widget-choose.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
    ], WidgetChooseComponent);
    return WidgetChooseComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n\n  <div *ngSwitchCase =\"'HEADING'\">\n    <app-widget-heading></app-widget-heading>\n  </div>\n\n  <div *ngSwitchCase =\"'IMAGE'\">\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase =\"'YOUTUBE'\">\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n  <div *ngSwitchCase =\"'HTML'\">\n    <app-widget-html></app-widget-html>\n  </div>\n\n  <div *ngSwitchCase =\"'INPUT'\">\n    <app-widget-text></app-widget-text>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetEditComponent", function() { return WidgetEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _model_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../model/widget.model.client */ "./src/app/model/widget.model.client.ts");





var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(router, widgetService) {
        this.router = router;
        this.widgetService = widgetService;
        this.widget = new _model_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"]('', '', '', '');
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            console.log('wgid: ' + params['wgid']);
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                _this.widget = widget;
                console.log('widget: ' + widget);
            });
            console.log('web id: ' + _this.wid);
            console.log('widget id: ' + _this.widget._id);
        });
    };
    WidgetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-edit',
            template: __webpack_require__(/*! ./widget-edit.component.html */ "./src/app/views/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__(/*! ./widget-edit.component.css */ "./src/app/views/widget/widget-edit/widget-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaGVhZGluZy93aWRnZXQtaGVhZGluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/website/{{wid}}/page/{{pid}}/widget\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" routerLink=\"#\">\n        Widgets Edit\n      </a>\n    </div>\n    <span (click)=\"UpdateWidget()\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-check\"></i>\n    </span>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"heading-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\" name=\"widget-name\" type=\"text\" class=\"form-control\" id=\"heading-name\" placeholder=\"Name\" required #widgetName=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!widgetName.valid && widgetName.touched\">\n          Please enter widget name!\n    </span>\n    <div class=\"form-group\">\n      <label for=\"heading-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" name=\"widget-text\" type=\"text\" class=\"form-control\" id=\"heading-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-size\">Size</label>\n      <input [(ngModel)]=\"widget.size\" name=\"heading-size\" type=\"text\" class=\"form-control\" id=\"heading-size\" placeholder=\"3\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger  btn-block\" (click)=\"DeleteWidget()\" routerLink=\"/website/{{wid}}/page/{{pid}}/widget\">Delete</a>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WidgetHeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHeadingComponent", function() { return WidgetHeadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _model_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../model/widget.model.client */ "./src/app/model/widget.model.client.ts");





var WidgetHeadingComponent = /** @class */ (function () {
    function WidgetHeadingComponent(activeRouter, widgetService, router) {
        this.activeRouter = activeRouter;
        this.widgetService = widgetService;
        this.router = router;
        this.errorMsg = 'Invalid widget name!';
        this.widget = new _model_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"]('', '', '', '');
    }
    WidgetHeadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                if (widget) {
                    _this.widget = widget;
                }
            });
            console.log('widget id: ' + _this.widget._id);
            console.log('web id: ' + _this.wid);
        });
    };
    WidgetHeadingComponent.prototype.UpdateWidget = function () {
        var _this = this;
        console.log(this.widget.name);
        console.log(this.widget.text);
        console.log(this.widget.size);
        if (this.widget.name.length < 1) {
            this.errorFlag = true;
        }
        else {
            this.activeRouter.params.subscribe(function (params) {
                return _this.widgetService.updateWidget(_this.widget._id, _this.widget)
                    .subscribe(function (widget) {
                    _this.router.navigate(['website', _this.wid, 'page', _this.pid, 'widget']);
                }, function (error) {
                    if (error) {
                        _this.errorMsg = error;
                        console.log(error);
                        _this.errorFlag = true;
                    }
                });
            });
        }
    };
    WidgetHeadingComponent.prototype.DeleteWidget = function () {
        var _this = this;
        console.log(this.widget.name);
        console.log(this.widget.text);
        console.log(this.widget.size);
        this.activeRouter.params.subscribe(function (params) {
            return _this.widgetService.deleteWidget(_this.widget._id)
                .subscribe(function (widgets) { });
        });
    };
    WidgetHeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-heading',
            template: __webpack_require__(/*! ./widget-heading.component.html */ "./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.html"),
            styles: [__webpack_require__(/*! ./widget-heading.component.css */ "./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetHeadingComponent);
    return WidgetHeadingComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaHRtbC93aWRnZXQtaHRtbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/website/{{wid}}/page/{{pid}}/widget\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" routerLink=\"#\">\n        Widgets Edit\n      </a>\n    </div>\n    <span (click)=\"UpdateWidget()\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-check\"></i>\n    </span>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <form novalidate name=\"model.myform\">\n    <div class=\"form-group\">\n      <label for=\"Name\">Name</label>\n      <input [(ngModel)]=\"widget.name\"\n             type=\"text\"\n             class=\"form-control\"\n             id=\"Name\"\n             name=\"widname\"\n             placeholder=\"Name\"\n             required #widgetName=\"ngModel\">\n    <span class=\"help-block\" *ngIf=\"!widgetName.valid && widgetName.touched\">\n          Please enter widget name!\n    </span>\n    </div>\n    <!--<div ng-model=\"model.widget.text\"-->\n    <!--text-angular-->\n    <!--ta-toolbar=\"[['h1','h2','h3'],['bold','italics','underline','strikeThrough'],-->\n    <!--['ul','ol'],['justifyLeft','justifyCenter','justifyRight','justifyFull'],-->\n    <!--['indent','outdent'],['html']]\">-->\n    <!--</div>-->\n\n    <!-- use with ngModel -->\n    <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n    <!--[options]=\"editorOptions\"-->\n    <!--(blur)=\"onEditorBlured($event)\"-->\n    <!--(focus)=\"onEditorFocused($event)\"-->\n    <!--(ready)=\"onEditorCreated($event)\"-->\n    <!--(change)=\"onContentChanged($event)\"-->\n  </form>\n  <p></p>\n  <a class=\"btn btn-danger  btn-block\" (click)=\"DeleteWidget()\" routerLink=\"/website/{{wid}}/page/{{pid}}/widget\">Delete</a>\n</div>\n\n\n\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-html/widget-html.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WidgetHtmlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetHtmlComponent", function() { return WidgetHtmlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _model_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../model/widget.model.client */ "./src/app/model/widget.model.client.ts");





var WidgetHtmlComponent = /** @class */ (function () {
    function WidgetHtmlComponent(activeRouter, widgetService, router) {
        this.activeRouter = activeRouter;
        this.widgetService = widgetService;
        this.router = router;
        this.errorMsg = 'Invalid widget name!';
        this.widget = new _model_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"]('', '', '', '');
    }
    WidgetHtmlComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.error = 'Enter the name of the widget';
        this.alert = '* Enter the widget name';
        this.activeRouter.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                if (widget) {
                    _this.widget = widget;
                }
            }, function (error) { return console.log(error); });
            console.log('widget id: ' + _this.widget._id);
            console.log('web id: ' + _this.wid);
        });
    };
    WidgetHtmlComponent.prototype.UpdateWidget = function () {
        var _this = this;
        console.log(this.widget);
        if (this.widget.name.length < 1) {
            this.errorFlag = true;
        }
        else {
            this.activeRouter.params.subscribe(function (params) {
                return _this.widgetService.updateWidget(_this.widget._id, _this.widget)
                    .subscribe(function (widget) {
                    _this.router.navigate(['website', _this.wid, 'page', _this.pid, 'widget']);
                }, function (error) {
                    if (error) {
                        _this.errorMsg = error;
                        console.log(error);
                        _this.errorFlag = true;
                    }
                });
            });
        }
    };
    WidgetHtmlComponent.prototype.DeleteWidget = function () {
        var _this = this;
        console.log(this.widget);
        this.activeRouter.params.subscribe(function (params) {
            return _this.widgetService.deleteWidget(_this.widget._id)
                .subscribe(function (widgets) { }, function (error) { return console.log(error); });
        });
    };
    WidgetHtmlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-html',
            template: __webpack_require__(/*! ./widget-html.component.html */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.html"),
            styles: [__webpack_require__(/*! ./widget-html.component.css */ "./src/app/views/widget/widget-edit/widget-html/widget-html.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetHtmlComponent);
    return WidgetHtmlComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaW1hZ2UvZmxpY2tyLWltYWdlLXNlYXJjaC9mbGlja3ItaW1hZ2Utc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" routerLink=\"#\">\n        Search Flickr\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <div class=\"input-group\">\n    <input [(ngModel)]=\"searchText\" type=\"text\" class=\"form-control\">\n    <span class=\"input-group-btn\">\n       <a (click)=\"searchPhotos()\" class=\"btn btn-default\" type=\"button\">\n           <i class=\"fas fa-search\"></i>\n       </a>\n    </span>\n  </div>\n\n  <div class=\"row\">\n    <div *ngFor = \"let pic of photos['photo']\" class=\"col-xs-4\">\n      <img (click)=\"selectPhoto(pic)\"\n           width=\"100%\"\n           [src] = \"'https://farm' + pic.farm + '.staticflickr.com/' + pic.server + '/' +   pic.id + '_' + pic.secret + '_s.jpg'\"/>\n      <p></p>\n\n    </div>\n  </div>\n\n</div>\n\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: FlickrImageSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlickrImageSearchComponent", function() { return FlickrImageSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_widget_model_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../model/widget.model.client */ "./src/app/model/widget.model.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/flickr.service.client */ "./src/app/services/flickr.service.client.ts");






var FlickrImageSearchComponent = /** @class */ (function () {
    function FlickrImageSearchComponent(router, activatedRouter, flickrService, widgetService) {
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.flickrService = flickrService;
        this.widgetService = widgetService;
        this.photos = new Array();
        this.widget = new _model_widget_model_client__WEBPACK_IMPORTED_MODULE_3__["Widget"]('', '', '', '');
    }
    FlickrImageSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRouter.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                if (widget) {
                    _this.widget = widget;
                }
            }, function (error) { return console.log(error); });
            console.log('widget id: ' + _this.widget._id);
        });
    };
    FlickrImageSearchComponent.prototype.searchPhotos = function () {
        var _this = this;
        this.flickrService
            .searchPhotos(this.searchText)
            .subscribe(function (data) {
            // let val = data._body;
            // val = val.replace('jsonFlickrApi(', '');
            // val = val.substring(0, val.length - 1);
            // val = JSON.parse(val);
            _this.photos = data.photos;
            // this.photos = val.photos;
        });
    };
    FlickrImageSearchComponent.prototype.selectPhoto = function (photo) {
        var _this = this;
        var url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server;
        url += '/' + photo.id + '_' + photo.secret + '_b.jpg';
        this.widget.url = url;
        console.log('flickr: ' + url);
        this.widgetService
            .updateWidget(this.widget._id, this.widget)
            .subscribe(function (data) {
            var result = data;
            if (result) {
                _this.router.navigate(['/website/', _this.wid, 'page', _this.pid, 'widget', _this.widget._id]);
            }
            else {
                _this.error = 'failed!';
            }
        });
    };
    FlickrImageSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flickr-image-search',
            template: __webpack_require__(/*! ./flickr-image-search.component.html */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.html"),
            styles: [__webpack_require__(/*! ./flickr-image-search.component.css */ "./src/app/views/widget/widget-edit/widget-image/flickr-image-search/flickr-image-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_flickr_service_client__WEBPACK_IMPORTED_MODULE_5__["FlickrService"],
            _services_widget_service_client__WEBPACK_IMPORTED_MODULE_4__["WidgetService"]])
    ], FlickrImageSearchComponent);
    return FlickrImageSearchComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtaW1hZ2Uvd2lkZ2V0LWltYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/website/{{wid}}/page/{{pid}}/widget\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" routerLink=\"#\">\n        Widgets Edit\n      </a>\n    </div>\n    <span (click)=\"UpdateWidget()\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-check\"></i>\n    </span>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"image-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\" name=\"widget-name\" type=\"text\" class=\"form-control\" id=\"image-name\" placeholder=\"Name\" required #widgetName=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!widgetName.valid && widgetName.touched\">\n          Please enter widget name!\n    </span>\n    <div class=\"form-group\">\n      <label for=\"image-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" name=\"widget-text\" type=\"text\" class=\"form-control\" id=\"image-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input [(ngModel)]=\"widget.url\" name=\"widget-URL\" type=\"text\" class=\"form-control\" id=\"image-URL\" placeholder=\"URL\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-width\">Width</label>\n      <input [(ngModel)]=\"widget.width\" name=\"widget-width\" type=\"text\" class=\"form-control\" id=\"image-width\" placeholder=\"100%\">\n    </div>\n  </form>\n  <form ngNoForm action=\"{{baseUrl}}/api/upload\" method=\"post\" enctype=\"multipart/form-data\">\n    <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\n    <input  name=\"widgetId\" value=\"{{widget._id}}\"   style=\"display: none\"/>\n    <input  name=\"websiteId\" value=\"{{wid}}\"   style=\"display: none\"/>\n    <input  name=\"pageId\" value=\"{{pid}}\"   style=\"display: none\"/>\n    <input  name=\"userId\" value=\"{{uid}}\"   style=\"display: none\"/>\n    <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n    <br/>\n  </form>\n\n  <a class=\"btn btn-secondary  btn-block\" routerLink=\"/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}/flickr\">Search</a>\n  <a class=\"btn btn-danger  btn-block\" (click)=\"DeleteWidget()\" routerLink=\"/website/{{wid}}/page/{{pid}}/widget\">Delete</a>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-image/widget-image.component.ts ***!
  \*********************************************************************************/
/*! exports provided: WidgetImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetImageComponent", function() { return WidgetImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _model_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../model/widget.model.client */ "./src/app/model/widget.model.client.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_shared_service_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/shared.service.client */ "./src/app/services/shared.service.client.ts");







var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(activeRouter, widgetService, router, sharedService) {
        this.activeRouter = activeRouter;
        this.widgetService = widgetService;
        this.router = router;
        this.sharedService = sharedService;
        this.errorMsg = 'Invalid widget name!';
        this.widget = new _model_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"]('', '', '', '');
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.uid = _this.sharedService.user._id;
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                if (widget) {
                    _this.widget = widget;
                }
            });
            console.log('widget id: ' + _this.widget._id);
            console.log('web id: ' + _this.wid);
        });
    };
    WidgetImageComponent.prototype.UpdateWidget = function () {
        var _this = this;
        console.log(this.widget.name);
        console.log(this.widget.text);
        console.log(this.widget.size);
        if (this.widget.name.length < 1) {
            this.errorFlag = true;
        }
        else {
            this.activeRouter.params.subscribe(function (params) {
                return _this.widgetService.updateWidget(_this.widget._id, _this.widget)
                    .subscribe(function (widget) {
                    _this.router.navigate(['website', _this.wid, 'page', _this.pid, 'widget']);
                });
            }, function (error) {
                if (error) {
                    _this.errorMsg = error;
                    console.log(error);
                    _this.errorFlag = true;
                }
            });
        }
    };
    WidgetImageComponent.prototype.DeleteWidget = function () {
        var _this = this;
        console.log(this.widget.name);
        console.log(this.widget.text);
        console.log(this.widget.size);
        this.activeRouter.params.subscribe(function (params) {
            return _this.widgetService.deleteWidget(_this.widget._id)
                .subscribe(function (widgets) { });
        });
    };
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_shared_service_client__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-text/widget-text.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQtdGV4dC93aWRnZXQtdGV4dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-text/widget-text.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/website/{{wid}}/page/{{pid}}/widget\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" routerLink=\"#\">\n        Widgets Edit\n      </a>\n    </div>\n    <span (click)=\"UpdateWidget()\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-check\"></i>\n    </span>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"input-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\" name=\"widget-name\" type=\"text\" class=\"form-control\" id=\"input-name\" placeholder=\"Name\" required #widgetName=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!widgetName.valid && widgetName.touched\">\n          Please enter widget name!\n    </span>\n    <div class=\"form-group\">\n      <label for=\"input-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" name=\"widget-text\" type=\"text\" class=\"form-control\" id=\"input-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"input-rows\">Rows</label>\n      <input [(ngModel)]=\"widget.rows\" name=\"widget-rows\" type=\"number\" class=\"form-control\" id=\"input-rows\" placeholder=\"3\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"input-placeholder\">Placeholder</label>\n      <input [(ngModel)]=\"widget.placeholder\" name=\"widget-placeholder\" type=\"text\" class=\"form-control\" id=\"input-placeholder\" placeholder=\"placeholder\" required>\n    </div>\n    <div class=\"form-group input-group\">\n      <input type=\"text\" readonly value=\"Formatted\" class=\"form-control\"/>\n      <span class=\"input-group-addon\">\n        <input [(ngModel)]=\"widget.formatted\" name=\"widget-formatted\" type=\"checkbox\"/>\n      </span>\n    </div>\n  </form>\n  <a class=\"btn btn-danger  btn-block\" (click)=\"DeleteWidget()\" routerLink=\"/website/{{wid}}/page/{{pid}}/widget\">Delete</a>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-text/widget-text.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WidgetTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetTextComponent", function() { return WidgetTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _model_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../model/widget.model.client */ "./src/app/model/widget.model.client.ts");





var WidgetTextComponent = /** @class */ (function () {
    function WidgetTextComponent(activeRouter, widgetService, router) {
        this.activeRouter = activeRouter;
        this.widgetService = widgetService;
        this.router = router;
        this.errorMsg = 'Invalid widget name!';
        this.widget = new _model_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"]('', '', '', '');
    }
    WidgetTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                if (widget) {
                    _this.widget = widget;
                }
            });
            console.log('widget id: ' + _this.widget._id);
            console.log('web id: ' + _this.wid);
        });
    };
    WidgetTextComponent.prototype.UpdateWidget = function () {
        var _this = this;
        console.log(this.widget);
        if (this.widget.name.length < 1) {
            this.errorFlag = true;
        }
        else {
            this.activeRouter.params.subscribe(function (params) {
                return _this.widgetService.updateWidget(_this.widget._id, _this.widget)
                    .subscribe(function (widget) {
                    _this.router.navigate(['website', _this.wid, 'page', _this.pid, 'widget']);
                });
            }, function (error) {
                if (error) {
                    _this.errorMsg = error;
                    console.log(error);
                    _this.errorFlag = true;
                }
            });
        }
    };
    WidgetTextComponent.prototype.DeleteWidget = function () {
        var _this = this;
        console.log(this.widget);
        this.activeRouter.params.subscribe(function (params) {
            return _this.widgetService.deleteWidget(_this.widget._id)
                .subscribe(function (widgets) { });
        });
    };
    WidgetTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-text',
            template: __webpack_require__(/*! ./widget-text.component.html */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.html"),
            styles: [__webpack_require__(/*! ./widget-text.component.css */ "./src/app/views/widget/widget-edit/widget-text/widget-text.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetTextComponent);
    return WidgetTextComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtZWRpdC93aWRnZXQteW91dHViZS93aWRnZXQteW91dHViZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/website/{{wid}}/page/{{pid}}/widget\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" routerLink=\"#\">\n        Widgets Edit\n      </a>\n    </div>\n    <span (click)=\"UpdateWidget()\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-check\"></i>\n    </span>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n  <form>\n    <div class=\"form-group\">\n      <label for=\"youtube-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\" name=\"widget-name\" type=\"text\" class=\"form-control\" id=\"youtube-name\" placeholder=\"Name\" required #widgetName=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!widgetName.valid && widgetName.touched\">\n          Please enter widget name!\n    </span>\n    <div class=\"form-group\">\n      <label for=\"youtube-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" name=\"widget-text\" type=\"text\" class=\"form-control\" id=\"youtube-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-URL\">URL</label>\n      <input [(ngModel)]=\"widget.url\" name=\"widget-URL\" type=\"text\" class=\"form-control\" id=\"youtube-URL\" placeholder=\"URL\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-width\">Width</label>\n      <input [(ngModel)]=\"widget.width\" name=\"widget-width\" type=\"text\" class=\"form-control\" id=\"youtube-width\" placeholder=\"100%\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger btn-block\" (click)=\"DeleteWidget()\" routerLink=\"/website/{{wid}}/page/{{pid}}/widget\">Delete</a>\n</div>\n\n<<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.ts ***!
  \*************************************************************************************/
/*! exports provided: WidgetYoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetYoutubeComponent", function() { return WidgetYoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _model_widget_model_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../model/widget.model.client */ "./src/app/model/widget.model.client.ts");





var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(activeRouter, widgetService, router) {
        this.activeRouter = activeRouter;
        this.widgetService = widgetService;
        this.router = router;
        this.errorMsg = 'Invalid widget name!';
        this.widget = new _model_widget_model_client__WEBPACK_IMPORTED_MODULE_4__["Widget"]('', '', '', '');
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeRouter.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widgetService.findWidgetById(params['wgid']).subscribe(function (widget) {
                if (widget) {
                    _this.widget = widget;
                }
            });
            console.log('widget id: ' + _this.widget._id);
            console.log('web id: ' + _this.wid);
        });
    };
    WidgetYoutubeComponent.prototype.UpdateWidget = function () {
        var _this = this;
        console.log(this.widget.name);
        console.log(this.widget.text);
        console.log(this.widget.size);
        if (this.widget.name.length < 1) {
            this.errorFlag = true;
        }
        else {
            this.activeRouter.params.subscribe(function (params) {
                return _this.widgetService.updateWidget(_this.widget._id, _this.widget)
                    .subscribe(function (widget) {
                    _this.router.navigate(['website', _this.wid, 'page', _this.pid, 'widget']);
                }, function (error) {
                    if (error) {
                        _this.errorMsg = error;
                        console.log(error);
                        _this.errorFlag = true;
                    }
                });
            });
        }
    };
    WidgetYoutubeComponent.prototype.DeleteWidget = function () {
        var _this = this;
        console.log(this.widget.name);
        console.log(this.widget.text);
        console.log(this.widget.size);
        this.activeRouter.params.subscribe(function (params) {
            return _this.widgetService.deleteWidget(_this.widget._id)
                .subscribe(function (widgets) { });
        });
    };
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/order-by-pipe.pipe.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/widget/widget-list/order-by-pipe.pipe.ts ***!
  \****************************************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, args) {
        array.sort(function (a, b) {
            if (a.position < b.position) {
                return -1;
            }
            else if (a.position > b.position) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    OrderByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/safe-pipe.pipe.ts":
/*!************************************************************!*\
  !*** ./src/app/views/widget/widget-list/safe-pipe.pipe.ts ***!
  \************************************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        // splitting input url on '='
        // the result is two elements in the output array
        var parts = url.split('=');
        var id = parts[1];
        url = 'https://www.youtube.com/embed/' + id;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".youtube-widget {\n  position: relative;\n  padding-bottom: 56.25%; /* 16:9 */\n  height: 0;\n}\n\n.youtube-widget iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCLEVBQUUsU0FBUztFQUNqQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvd2lkZ2V0L3dpZGdldC1saXN0L3dpZGdldC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueW91dHViZS13aWRnZXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7IC8qIDE2OjkgKi9cbiAgaGVpZ2h0OiAwO1xufVxuXG4ueW91dHViZS13aWRnZXQgaWZyYW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/website/{{wid}}/page\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" href=\"#\">\n        Widgets\n      </a>\n    </div>\n    <a routerLink=\"/website/{{wid}}/page/{{pid}}/widget/new\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-plus\"></i>\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n\n  <div class=\"widget-list\" appSortable (newIndexes)=\"reorderWidgets($event)\">\n\n  <div *ngFor=\"let widget of widgets | orderBy\">\n\n    <div [ngSwitch]=\"widget.widgetType\">\n\n      <div *ngSwitchCase=\"'HEADING'\"  class=\"row\">\n        <div [innerHTML]=\"getHeading(widget)\"></div>\n        <div class=\"ml-auto\">\n          <a routerLink=\"/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\">\n            <span class=\"fas fa-cog cl-text-blue\"></span>\n          </a>\n          <a routerLink=\"#\">\n            <span class=\"fas fa-bars cl-text-blue\"></span>\n          </a>\n        </div>\n      </div>\n\n\n\n      <div *ngSwitchCase=\"'HTML'\" class=\"row\">\n        <div [innerHTML]=\"widget.text\"></div>\n        <div class=\"ml-auto\">\n          <a routerLink=\"/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\">\n            <span class=\"fas fa-cog cl-text-blue\"></span>\n          </a>\n          <a routerLink=\"#\">\n            <span class=\"fas fa-bars cl-text-blue\"></span>\n          </a>\n        </div>\n      </div>\n\n\n      <div *ngSwitchCase=\"'INPUT'\">\n\n        <div *ngIf=\"widget.formatted\">\n          <quill-editor [(ngModel)]=\"widget.text\" name=\"text\"></quill-editor>\n        </div>\n        <input *ngIf=\"!widget.formatted && (!widget.rows || widget.rows===1)\" placeholder=\"{{widget.placeholder}}\" class=\"form-control\"/>\n        <textarea *ngIf=\"!widget.formatted && (widget.rows > 1)\" rows=\"{{widget.rows}}\" placeholder=\"{{widget.placeholder}}\" class=\"form-control\">{{widget.text}}</textarea>\n        <div class=\"row\">\n          <p></p>\n          <div class=\"ml-auto\">\n            <a routerLink=\"/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\">\n              <span class=\"fas fa-cog cl-text-blue\"></span>\n            </a>\n            <a routerLink=\"#\">\n              <span class=\"fas fa-bars cl-text-blue\"></span>\n            </a>\n          </div>\n        </div>\n      </div>\n\n\n\n      <div *ngSwitchCase=\"'YOUTUBE'\" >\n        <div class=\"youtube-widget embed-responsive embed-responsive-16by9\">\n          <iframe class=\"embed-responsive-item\" [src]=\"widget.url | safe\" [ngStyle]=\"{'width': widget.width}\" allowfullscreen></iframe>\n        </div>\n        <div class=\"row\">\n          <p></p>\n          <div class=\"ml-auto\">\n            <a routerLink=\"/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\">\n              <span class=\"fas fa-cog cl-text-blue cl-widget-list-icons\"></span>\n            </a>\n            <a routerLink=\"#\">\n              <span class=\"fas fa-bars cl-text-blue cl-widget-list-icons\"></span>\n            </a>\n          </div>\n        </div>\n      </div>\n\n\n\n      <div *ngSwitchCase=\"'IMAGE'\" class=\"row\">\n          <img class=\"img-responsive img-rounded cl-widget-images\" [ngStyle]=\"{'width': widget.width}\"\n               [src]=\"getSafeUrl(widget)\">\n          <div class=\"ml-auto\">\n            <a routerLink=\"/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\">\n              <span class=\"fas fa-cog cl-text-blue\"></span>\n            </a>\n            <a routerLink=\"#\">\n              <span class=\"fas fa-bars cl-text-blue\"></span>\n            </a>\n          </div>\n        </div>\n    </div>\n  </div>\n    </div>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"#\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n        <i class=\"fas fa-play cl-text-blue\"></i>\n      </a>\n      <a routerLink=\"#\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n        <i class=\"fas fa-eye cl-text-blue\"></i>\n      </a>\n    </div>\n    <a routerLink=\"/profile\" class=\"navbar-brand cl-icon-padding cl-text-blue float-right\">\n      <i class=\"fas fa-user cl-text-blue\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");






var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(router, widgetService, pageService, sanitizer) {
        this.router = router;
        this.widgetService = widgetService;
        this.pageService = pageService;
        this.sanitizer = sanitizer;
        this.widgets = new Array();
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            // this.widgetService.findWidgetsByPageId(params['pid']).subscribe((widgets: any) => {
            //   if (widgets) {
            //     this.widgets = widgets;
            //   }
            // });
            _this.pageService.findPageById(params['pid']).subscribe(function (page) {
                if (page) {
                    _this.widgets = page.widgets;
                }
            });
            console.log('web id: ' + _this.wid);
            console.log('page id: ' + _this.pid);
            console.log(_this.widgets);
        });
    };
    WidgetListComponent.prototype.getSafeUrl = function (widget) {
        console.log(widget.url);
        return this.sanitizer.bypassSecurityTrustResourceUrl(widget.url);
    };
    WidgetListComponent.prototype.getHeading = function (widget) {
        console.log(widget.text);
        console.log(widget.size);
        var heading = '<h' + widget.size + '>' + widget.text + '</h' + widget.size + '>';
        console.log(heading);
        return heading;
    };
    WidgetListComponent.prototype.reorderWidgets = function (indexes) {
        this.widgetService.reorderWidgets(indexes.startIndex, indexes.endIndex, this.pid)
            .subscribe(function (data) { return console.log(data); });
    };
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_5__["PageService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



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
var environment = {
    production: false,
    baseUrl: 'http://localhost:3200'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/yang/Documents/NEU/cs5610/webmaker5610/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map