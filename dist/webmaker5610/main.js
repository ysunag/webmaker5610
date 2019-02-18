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















var routes = [
    { path: 'login', component: _views_user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'user/:uid', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'register', component: _views_user_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'profile', component: _views_user_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'user/:uid/website', component: _views_website_website_list_website_list_component__WEBPACK_IMPORTED_MODULE_8__["WebsiteListComponent"] },
    { path: 'user/:uid/website/new', component: _views_website_website_new_website_new_component__WEBPACK_IMPORTED_MODULE_6__["WebsiteNewComponent"] },
    { path: 'user/:uid/website/:wid', component: _views_website_website_edit_website_edit_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteEditComponent"] },
    { path: 'user/:uid/website/:wid/page', component: _views_page_page_list_page_list_component__WEBPACK_IMPORTED_MODULE_9__["PageListComponent"] },
    { path: 'user/:uid/website/:wid/page/new', component: _views_page_page_new_page_new_component__WEBPACK_IMPORTED_MODULE_10__["PageNewComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid', component: _views_page_page_edit_page_edit_component__WEBPACK_IMPORTED_MODULE_11__["PageEditComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: _views_widget_widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_12__["WidgetListComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: _views_widget_widget_choose_widget_choose_component__WEBPACK_IMPORTED_MODULE_13__["WidgetChooseComponent"] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: _views_widget_widget_edit_widget_edit_component__WEBPACK_IMPORTED_MODULE_14__["WidgetEditComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<div style=\"text-align:center\">-->\n  <!--<h1>-->\n    <!--Welcome to my webmaker!-->\n  <!--</h1>-->\n<!--</div>-->\n\n<a routerLink=\"/login\">Login</a>\n<a routerLink=\"/register\">Register</a>\n<a routerLink=\"/profile\">Profile</a>\n<router-outlet></router-outlet>\n"

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
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [_services_user_service_client__WEBPACK_IMPORTED_MODULE_21__["UserService"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_22__["WebsiteService"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_23__["PageService"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_24__["WidgetService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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


var PageService = /** @class */ (function () {
    function PageService() {
        this.pages = [
            { _id: '321', name: 'Post 1', websiteId: '456', title: 'Lorem' },
            { _id: '432', name: 'Post 2', websiteId: '456', title: 'Lorem' },
            { _id: '543', name: 'Post 3', websiteId: '456', title: 'Lorem' }
        ];
        this.api = { 'createPage': this.createPage,
            'findPageByWebsiteId': this.findPageByWebsiteId,
            'findPageById': this.findPageById,
            'updatePage': this.updatePage,
            'deletePage': this.deletePage
        };
    }
    PageService.prototype.createPage = function (websiteId, page) {
        page.websiteId = websiteId;
        page._id = Math.random().toString(36).substr(2, 9);
        this.pages.push(page);
        return page;
    };
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var res = [];
        for (var x = 0; x < this.pages.length; x++) {
            if (this.pages[x].websiteId === websiteId) {
                res.push(this.pages[x]);
            }
        }
        return res;
    };
    PageService.prototype.findPageById = function (pageId) {
        for (var _i = 0, _a = this.pages; _i < _a.length; _i++) {
            var page = _a[_i];
            if (page._id === pageId) {
                return page;
            }
        }
    };
    PageService.prototype.updatePage = function (pageId, page) {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i]._id === pageId) {
                this.pages[i] = page;
                return;
            }
        }
    };
    PageService.prototype.deletePage = function (pageId) {
        for (var i in this.pages) {
            if (this.pages[i]._id === pageId) {
                var j = +i;
                this.pages.splice(j, 1);
            }
        }
    };
    PageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageService);
    return PageService;
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


var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [
            { _id: '123', username: 'alice', password: 'alice', firstName: 'Alice', lastName: 'Wonder', email: 'alice@alice' },
            { _id: '234', username: 'bob', password: 'bob', firstName: 'Bob', lastName: 'Marley', email: 'bob@bob' },
            { _id: '345', username: 'charly', password: 'charly', firstName: 'Charly', lastName: 'Garcia', email: 'charly@charly' },
            { _id: '456', username: 'jannunzi', password: 'jannunzi', firstName: 'Jose', lastName: 'Annunzi', email: 'jannunzi@jannunzi' }
        ];
        this.api = { 'createUser': this.createUser,
            'findUserById': this.findUserById,
            'findUserByUsername': this.findUserByUsername,
            'updateUser': this.updateUser,
            'findUserByCredentials': this.findUserByCredentials,
            'deleteUser': this.deleteUser
        };
    }
    UserService.prototype.createUser = function (user) {
        user._id = Math.random().toString(36).substr(2, 9);
        this.users.push(user);
        return user;
    };
    UserService.prototype.findUserById = function (userId) {
        for (var x = 0; x < this.users.length; x++) {
            if (this.users[x]._id === userId) {
                return this.users[x];
            }
        }
    };
    UserService.prototype.findUserByUsername = function (username, userName) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.username === userName) {
                return user;
            }
        }
    };
    UserService.prototype.updateUser = function (userId, user) {
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i]['_id'] === userId) {
                user[i] = user;
                return;
            }
        }
    };
    UserService.prototype.findUserByCredentials = function (username, password) {
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (user.username === username && user.password === password) {
                return user;
            }
        }
    };
    UserService.prototype.deleteUser = function (userId) {
        for (var i in this.users) {
            if (this.users[i]._id === userId) {
                var j = +i;
                this.users.splice(j, 1);
            }
        }
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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


var WebsiteService = /** @class */ (function () {
    function WebsiteService() {
        this.websites = [
            { _id: '123', name: 'Facebook', developerId: '456', description: 'Lorem' },
            { _id: '234', name: 'Tweeter', developerId: '456', description: 'Lorem' },
            { _id: '456', name: 'Gizmodo', developerId: '456', description: 'Lorem' },
            { _id: '890', name: 'Go', developerId: '123', description: 'Lorem' },
            { _id: '567', name: 'Tic Tac Toe', developerId: '123', description: 'Lorem' },
            { _id: '678', name: 'Checkers', developerId: '123', description: 'Lorem' },
            { _id: '789', name: 'Chess', developerId: '234', description: 'Lorem' }
        ];
        this.api = { 'createWebsite': this.createWebsite,
            'findWebsitesByUser': this.findWebsitesByUser,
            'findWebsiteById': this.findWebsiteById,
            'updateWebsite': this.updateWebsite,
            'deleteWebsite': this.deleteWebsite
        };
    }
    WebsiteService.prototype.createWebsite = function (userId, website) {
        website._id = Math.random().toString(36).substr(2, 9);
        website.developerId = userId;
        this.websites.push(website);
        return website;
    };
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var res = [];
        for (var x = 0; x < this.websites.length; x++) {
            if (this.websites[x].developerId === userId) {
                res.push(this.websites[x]);
            }
        }
        return res;
    };
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        for (var _i = 0, _a = this.websites; _i < _a.length; _i++) {
            var website = _a[_i];
            if (website._id === websiteId) {
                return website;
            }
        }
    };
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        for (var i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteId) {
                this.websites[i] = website;
                return;
            }
        }
    };
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        for (var i in this.websites) {
            if (this.websites[i]._id === websiteId) {
                var j = +i;
                this.websites.splice(j, 1);
            }
        }
    };
    WebsiteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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


var WidgetService = /** @class */ (function () {
    function WidgetService() {
        this.widgets = [
            { _id: '123', widgetType: 'HEADING', pageId: '321', size: 2, text: 'GIZMODO', name: 'No.1' },
            { _id: '234', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', name: 'No.2' },
            { _id: '345', widgetType: 'IMAGE', pageId: '321', width: '100%',
                url: 'http://lorempixel.com/400/200/', name: 'No.3' },
            { _id: '456', widgetType: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>', name: 'No.4' },
            { _id: '567', widgetType: 'HEADING', pageId: '321', size: 4, text: 'Lorem ipsum', name: 'No.5' },
            { _id: '678', widgetType: 'YOUTUBE', pageId: '321', width: '100%',
                url: 'https://www.youtube.com/embed/AM2Ivdi9c4E', name: 'No.6' },
            { _id: '789', widgetType: 'HTML', pageId: '321', text: '<p>Lorem ipsum</p>', name: 'No.7' }
        ];
        this.api = { 'createWidget': this.createWidget,
            'findWidgetsByPageId': this.findWidgetsByPageId,
            'findWidgetById': this.findWidgetById,
            'updateWidget': this.updateWidget,
            'deleteWidget': this.deleteWidget
        };
    }
    WidgetService.prototype.createWidget = function (pageId, widget) {
        widget._id = Math.random().toString(36).substr(2, 9);
        widget.pageId = pageId;
        this.widgets.push(widget);
        return widget;
    };
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var res = [];
        for (var x = 0; x < this.widgets.length; x++) {
            if (this.widgets[x].pageId === pageId) {
                res.push(this.widgets[x]);
            }
        }
        return res;
    };
    WidgetService.prototype.findWidgetById = function (widgetId) {
        for (var _i = 0, _a = this.widgets; _i < _a.length; _i++) {
            var widget = _a[_i];
            if (widget._id === widgetId) {
                return widget;
            }
        }
    };
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        for (var i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i]._id === widgetId) {
                this.widgets[i] = widget;
                return;
            }
        }
    };
    WidgetService.prototype.deleteWidget = function (widgetId) {
        for (var i in this.widgets) {
            if (this.widgets[i]._id === widgetId) {
                var j = +i;
                this.widgets.splice(j, 1);
            }
        }
    };
    WidgetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" href=\"#\">\n        Edit Page\n      </a>\n    </div>\n    <a (click)=\"UpdatePage()\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container cl-container-left-padding\">\n  <form class=\"cl-text-padding\">\n    <div class=\"form-group\">\n      <label for=\"page-name\">Name</label>\n      <input [(ngModel)]=\"page.name\" name=\"page-name\" type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"page-title\">Title</label>\n      <input [(ngModel)]=\"page.title\" name=\"page-title\" type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\">\n    </div>\n    <a class=\"btn btn-danger  btn-block\" (click)=\"DeletePage()\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\">Delete</a>\n  </form>\n</div>\n\n<<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/user/{{uid}}\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

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




var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(router, pageService) {
        this.router = router;
        this.pageService = pageService;
    }
    PageEditComponent.prototype.UpdatePage = function () {
        console.log(this.page.name);
        console.log(this.page.title);
        this.pageService.updatePage(this.page._id, this.page);
    };
    PageEditComponent.prototype.DeletePage = function () {
        console.log(this.page.name);
        console.log(this.page.title);
        this.pageService.deletePage(this.page._id);
    };
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.page = _this.pageService.findPageById(params['pid']);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
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

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/user/{{uid}}/website\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" href=\"#\">\n        Pages\n      </a>\n    </div>\n    <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/new\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-plus\"></i>\n    </a>\n\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <ul class=\"list-group cl-list-group-borderless cl-text-blue\">\n    <li *ngFor=\"let item of pages\" class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{item._id}}/widget\" class=\"cl-text-blue\">{{item.name}}</a>\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{item._id}}\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>\n    </li>\n\n    <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/1/widget\" class=\"cl-text-blue\">Blog Post</a>-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/1\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/2/widget\" class=\"cl-text-blue\">Blogs</a>-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/2\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/3/widget\" class=\"cl-text-blue\">Home</a>-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/3\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/4/widget\" class=\"cl-text-blue\">About</a>-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/4\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/5/widget\" class=\"cl-text-blue\">Contact Us</a>-->\n      <!--<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/5\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>-->\n    <!--</li>-->\n  </ul>\n</div>\n\n\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/user/{{uid}}\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/page/page-list/page-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/page/page-list/page-list.component.ts ***!
  \*************************************************************/
/*! exports provided: Page, PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");




var Page = /** @class */ (function () {
    function Page(_id, pageName, pageTitle, websiteId) {
        this._id = _id;
        this.name = pageName;
        this.title = pageTitle;
        this.websiteId = websiteId;
    }
    return Page;
}());

var PageListComponent = /** @class */ (function () {
    function PageListComponent(router, pageService) {
        this.router = router;
        this.pageService = pageService;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pages = _this.pageService.findPageByWebsiteId(params['wid']);
            console.log('user id: ' + _this.uid);
            console.log('web id: ' + _this.wid);
        });
    };
    PageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-list',
            template: __webpack_require__(/*! ./page-list.component.html */ "./src/app/views/page/page-list/page-list.component.html"),
            styles: [__webpack_require__(/*! ./page-list.component.css */ "./src/app/views/page/page-list/page-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_3__["PageService"]])
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

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" href=\"#\">\n        New Page\n      </a>\n    </div>\n    <a (click)=\"CreatePage()\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group cl-text-padding\">\n      <label for=\"page-name\">Name</label>\n      <input [(ngModel)]=\"page.name\" name=\"page-name\" type=\"text\" class=\"form-control\" id=\"page-name\" placeholder=\"Page Name\">\n    </div>\n    <div class=\"form-group cl-text-padding\">\n      <label for=\"page-title\">Title</label>\n      <input [(ngModel)]=\"page.title\" name=\"page-title\" type=\"text\" class=\"form-control\" id=\"page-title\" placeholder=\"Page Title\">\n    </div>\n  </form>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/user/{{uid}}\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

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
/* harmony import */ var _page_list_page_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-list/page-list.component */ "./src/app/views/page/page-list/page-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/page.service.client */ "./src/app/services/page.service.client.ts");





var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(router, pageService) {
        this.router = router;
        this.pageService = pageService;
        this.page = new _page_list_page_list_component__WEBPACK_IMPORTED_MODULE_2__["Page"]('', '', '', '');
    }
    PageNewComponent.prototype.CreatePage = function () {
        console.log(this.page.name);
        console.log(this.page.title);
        this.pageService.createPage(this.wid, this.page);
    };
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            console.log('user id: ' + _this.uid);
            console.log('website id: ' + _this.wid);
        });
    };
    PageNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-new',
            template: __webpack_require__(/*! ./page-new.component.html */ "./src/app/views/page/page-new/page-new.component.html"),
            styles: [__webpack_require__(/*! ./page-new.component.css */ "./src/app/views/page/page-new/page-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_page_service_client__WEBPACK_IMPORTED_MODULE_4__["PageService"]])
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

module.exports = "<h2>{{username}}</h2>\n\n<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Login</h1>\n  <form (ngSubmit)=\"login()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"username\" placeholder=\"username\" class=\"form-control\" ngModel required #username=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n\n    <div class=\"form-group\">\n      <input type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control\" ngModel required #password=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block cl-blue-navbar\" type=\"submit\">Login</button>\n    </div>\n\n    <div class=\"form-group\">\n      <a routerLink=\"/register\" class=\"btn btn-success btn-block\">Register</a>\n    </div>\n  </form>\n</div>\n\n\n\n"

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





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMsg = 'Invalid username or password !';
        this.errorFlag = false;
    }
    LoginComponent.prototype.login = function () {
        var username = this.loginForm.value.username;
        var password = this.loginForm.value.password;
        var user = this.userService.findUserByCredentials(username, password);
        if (!!user) {
            this.router.navigate(['/user', user._id]);
        }
        else {
            this.errorFlag = true;
            this.errorMsg = 'Invalid username or password!';
        }
    };
    LoginComponent.prototype.ngOnInit = function () { };
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
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

module.exports = "<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <a class=\"cl-text-white cl-text-bold navbar-brand\" routerLink=\"/user/{{userId}}\">\n      Profile\n    </a>\n    <a (click)=\"UpdateUser()\" class=\"navbar-brand cl-text-white\">\n        <span class=\"fa fa-check\">\n        </span>\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input [(ngModel)]=\"user.username\" name=\"username\" type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Username\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"email\">Email address</label>\n      <input [(ngModel)]=\"user.email\" name=\"email\" type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"alice@wonderland.com\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"first-name\">First Name</label>\n      <input [(ngModel)]=\"user.firstName\" name=\"firstName\" type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Alice\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"last-name\">Last Name</label>\n      <input [(ngModel)]=\"user.lastName\" name=\"lastName\" type=\"text\" class=\"form-control\" id=\"last-name\" placeholder=\"Wonderland\">\n    </div>\n  </form>\n  <a class=\"btn btn-primary btn-block cl-blue-navbar\" routerLink=\"/user/{{userId}}/website\">Websites</a>\n  <a class=\"btn btn-danger  btn-block\" routerLink=\"/login\">Logout</a>\n</div>\n\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"row container-fluid navbar-brand\">\n    <div class=\"col-sm-3 text-center\">\n      <a routerLink=\"\">\n        <span class=\"fas fa-check cl-text-white\"></span>\n      </a>\n    </div>\n    <div class=\"col-sm-3 text-center\">\n      <a routerLink=\"\">\n        <span class=\"fas fa-plus cl-text-white\"></span>\n      </a>\n    </div>\n    <div class=\"col-sm-3 text-center\">\n      <a routerLink=\"\">\n        <span class=\"fas fa-star cl-text-white\" ></span>\n      </a>\n    </div>\n    <div class=\"col-sm-3 text-center\">\n      <a routerLink=\"\">\n        <span class=\"fas fa-heart cl-text-white\"></span>\n      </a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/user/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/user/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: User, ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service.client */ "./src/app/services/user.service.client.ts");




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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    ProfileComponent.prototype.UpdateUser = function () {
        console.log(this.user['username']);
        console.log(this.user['firstName']);
        console.log(this.user['lastName']);
        console.log(this.user['email']);
        this.userService.updateUser(this.user['_id'], this.user);
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.userId = params['uid'];
            console.log(_this.userId);
            _this.user = _this.userService.findUserById(_this.userId);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
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

module.exports = "<h2>{{username}}</h2>\n\n<div class=\"container\">\n  <div *ngIf=\"errorFlag\" class=\"alert alert-danger\">\n    {{errorMsg}}\n  </div>\n\n  <h1>Register</h1>\n  <form (ngSubmit)=\"register()\" #f=\"ngForm\">\n\n    <div class=\"form-group\">\n      <input type=\"text\" name=\"username\" placeholder=\"username\" class=\"form-control\" ngModel required #username=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!username.valid && username.touched\">\n      Please enter username!\n    </span>\n    <div class=\"form-group\">\n      <input type=\"password\" name=\"password\" placeholder=\"password\" class=\"form-control\" ngModel required #password=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please enter password!\n    </span>\n    <div class=\"form-group\">\n      <input type=\"verify password\" name=\"verifyPassword\" placeholder=\"verify password\" class=\"form-control\" ngModel required #password=\"ngModel\">\n    </div>\n    <span class=\"help-block\" *ngIf=\"!password.valid && password.touched\">\n      Please reenter password!\n    </span>\n\n    <div class=\"form-group\">\n      <button [disabled]=\"!f.valid\" class=\"btn btn-primary btn-block cl-blue-navbar\" type=\"submit\">Register</button>\n    </div>\n\n    <div class=\"form-group\">\n      <a routerLink=\"/login\" class=\"btn btn-danger btn-block\">Cancel</a>\n    </div>\n  </form>\n</div>\n"

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
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../profile/profile.component */ "./src/app/views/user/profile/profile.component.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.errorMsg = 'Invalid username or password!';
        this.errorFlag = false;
        this.username = '';
        this.password = '';
        this.verifyPassword = '';
        this.user = new _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["User"]('', '', '', '', '', '');
    }
    RegisterComponent.prototype.register = function () {
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifyPassword = this.registerForm.value.verifyPassword;
        console.log(this.username);
        console.log(this.password);
        console.log(this.verifyPassword);
        this.user.username = this.username;
        this.user.password = this.password;
        this.user = this.userService.createUser(this.user);
        this.router.navigate(['/user', this.user._id]);
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

module.exports = "<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n\n      <a routerLink=\"/user/{{uid}}/website\" class=\"navbar-brand cl-text-white\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n        Websites\n      </a>\n      <a routerLink=\"/user/{{uid}}/website/new\" class=\"navbar-brand cl-text-white float-right cl-icon-padding\">\n        <i class=\"fas fa-plus\"></i>\n      </a>\n    </div>\n\n    <div class=\"row col-sm-8\">\n      <a routerLink=\"/user/{{uid}}\" class=\"navbar-brand d-block d-sm-none cl-text-white\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" href=\"#\">\n        Edit Websites\n      </a>\n      <a (click)=\"UpdateWebsite()\"  routerLink=\"/user/{{uid}}/website\" class=\"navbar-brand cl-text-white ml-auto\">\n        <i class=\"fas fa-check\"></i>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"row container-fluid\">\n  <div class=\"col-sm-4 d-none d-sm-block\">\n\n    <ul class=\"list-group cl-list-group-borderless cl-text-blue\">\n\n\n      <li *ngFor=\"let item of websites\" class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">\n        <a routerLink=\"/user/{{uid}}/website/{{item._id}}/page\" class=\"cl-text-blue\">{{item.name}}</a>\n        <a routerLink=\"/user/{{uid}}/website/{{item._id}}\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>\n      </li>\n\n      <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n        <!--<a routerLink=\"/user/{{uid}}/website/1/page\" class=\"cl-text-blue\">{{websites[0].name}}</a>-->\n        <!--<a routerLink=\"/user/{{uid}}/website/1\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>-->\n      <!--</li>-->\n      <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n        <!--<a routerLink=\"/user/{{uid}}/website/2/page\" class=\"cl-text-blue\">{{websites[1].name}}</a>-->\n        <!--<a routerLink=\"/user/{{uid}}/website/2\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>-->\n      <!--</li>-->\n      <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n        <!--<a routerLink=\"/user/{{uid}}/website/3/page\" class=\"cl-text-blue\">{{websites[2].name}}</a>-->\n        <!--<a routerLink=\"/user/{{uid}}/website/3\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>-->\n      <!--</li>-->\n      <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n        <!--<a routerLink=\"/user/{{uid}}/website/4/page\" class=\"cl-text-blue\">{{websites[3].name}}</a>-->\n        <!--<a routerLink=\"/user/{{uid}}/website/4\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>-->\n      <!--</li>-->\n    </ul>\n\n  </div>\n  <div class=\"col-sm-8\">\n    <form class=\"cl-text-padding\">\n      <div class=\"form-group\">\n        <label for=\"website-name\">Website Name</label>\n        <input [(ngModel)]=\"website.name\" name=\"website-name\" type=\"text\" class=\"form-control\" id=\"website-name\" placeholder=\"Blogger\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website-description\">Website Description</label>\n        <textarea [(ngModel)]=\"website.description\" name=\"website-description\" id=\"website-description\" class=\"form-control\" rows=\"5\"\n                  placeholder=\"Blog is a blog-publishing service....\"></textarea>\n      </div>\n      <a class=\"btn btn-danger  btn-block\" (click)=\"DeleteWebsite()\" routerLink=\"/user/{{uid}}/website\">Delete</a>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/user/{{uid}}\" class=\"navbar-brand cl-text-white cl-icon-padding\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

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




var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(router, websiteService) {
        this.router = router;
        this.websiteService = websiteService;
    }
    WebsiteEditComponent.prototype.UpdateWebsite = function () {
        console.log(this.website.name);
        console.log(this.website.description);
        this.websiteService.updateWebsite(this.website._id, this.website);
    };
    WebsiteEditComponent.prototype.DeleteWebsite = function () {
        console.log(this.website.name);
        console.log(this.website.description);
        this.websiteService.deleteWebsite(this.website._id);
    };
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.website = _this.websiteService.findWebsiteById(params['wid']);
            _this.websites = _this.websiteService.findWebsitesByUser(params['uid']);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"]])
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

module.exports = "<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/user/{{uid}}\" class=\"navbar-brand cl-icon-padding cl-text-white\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"\">\n        Websites\n      </a>\n    </div>\n    <a routerLink='/user/{{uid}}/website/new' class=\"navbar-brand cl-text-white\">\n      <i class=\"fas fa-plus\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <ul class=\"list-group cl-list-group-borderless cl-text-blue\">\n    <li *ngFor=\"let item of websites\" class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">\n      <a routerLink=\"/user/{{uid}}/website/{{item._id}}/page\" class=\"cl-text-blue\">{{item.name}}</a>\n      <a routerLink=\"/user/{{uid}}/website/{{item._id}}\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>\n    </li>\n    <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n      <!--<a routerLink=\"/user/{{uid}}/website/1/page\" class=\"cl-text-blue\">Address Book App</a>-->\n      <!--<a routerLink=\"/user/{{uid}}/website/1\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n      <!--<a routerLink=\"/user/{{uid}}/website/2/page\" class=\"cl-text-blue\">Blogger</a>-->\n      <!--<a routerLink=\"/user/{{uid}}/website/2\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n      <!--<a routerLink=\"/user/{{uid}}/website/3/page\" class=\"cl-text-blue\">Blogging App</a>-->\n      <!--<a routerLink=\"/user/{{uid}}/website/3\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>-->\n    <!--</li>-->\n    <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n      <!--<a routerLink=\"/user/{{uid}}/website/4/page\" class=\"cl-text-blue\">Script Testing App</a>-->\n      <!--<a routerLink=\"/user/{{uid}}/website/4\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>-->\n    <!--</li>-->\n  </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/user/{{uid}}\" class=\"navbar-brand cl-text-white cl-icon-padding\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/views/website/website-list/website-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/website/website-list/website-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: Website, WebsiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Website", function() { return Website; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteListComponent", function() { return WebsiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");




var Website = /** @class */ (function () {
    function Website(_id, websiteName, websiteDescription, developerId) {
        this._id = _id;
        this.name = websiteName;
        this.description = websiteDescription;
        this.developerId = developerId;
    }
    return Website;
}());

var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(router, websiteService) {
        this.router = router;
        this.websiteService = websiteService;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.websites = _this.websiteService.findWebsitesByUser(params['uid']);
            console.log('user id: ' + _this.uid);
        });
    };
    WebsiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-list',
            template: __webpack_require__(/*! ./website-list.component.html */ "./src/app/views/website/website-list/website-list.component.html"),
            styles: [__webpack_require__(/*! ./website-list.component.css */ "./src/app/views/website/website-list/website-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_3__["WebsiteService"]])
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

module.exports = "<nav class=\"navbar fixed-top cl-blue-navbar\">\n  <div class=\"row container-fluid\">\n    <div class=\"col-sm-4 d-none d-sm-block\">\n\n      <a routerLink=\"/user/{{uid}}\" class=\"navbar-brand cl-text-white\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"#\">\n        Websites\n      </a>\n      <a routerLink=\"/user/{{uid}}/new\" class=\"navbar-brand cl-text-white float-right cl-icon-padding\">\n        <i class=\"fas fa-plus\"></i>\n      </a>\n    </div>\n\n    <div class=\"row col-sm-8\">\n      <a routerLink=\"/user/{{uid}}\" class=\"navbar-brand d-block d-sm-none cl-text-white\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"cl-text-white navbar-brand cl-text-bold\" routerLink=\"#\">\n        New Websites\n      </a>\n      <a (click)=\"CreateWebsite()\" routerLink=\"/user/{{uid}}/website\" class=\"navbar-brand cl-text-white ml-auto\">\n        <i class=\"fas fa-check\"></i>\n      </a>\n\n    </div>\n  </div>\n</nav>\n\n<div class=\"row container-fluid\">\n  <div class=\"col-sm-4 d-none d-sm-block \">\n    <ul class=\"list-group cl-list-group-borderless\">\n      <li *ngFor=\"let item of websites\" class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">\n        <a routerLink=\"/user/{{uid}}/website/{{item._id}}/page\" class=\"cl-text-blue\">{{item.name}}</a>\n        <a routerLink=\"/user/{{uid}}/website/{{item._id}}\" class=\"cl-text-blue\"><span class=\"fas fa-cog\"></span></a>\n      </li>\n      <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n        <!--<a routerLink=\"/user/{{uid}}/website/3/page\" class=\"cl-text-blue\">Blogging App</a>-->\n        <!--<a routerLink=\"/user/{{uid}}/website/3\" class=\"cl-text-blue\"><span class=\"fas fa-cog cl-icon-padding\"></span></a>-->\n      <!--</li>-->\n      <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n        <!--<a routerLink=\"/user/{{uid}}/website/1/page\" class=\"cl-text-blue\">Address Book App</a>-->\n        <!--<a routerLink=\"/user/{{uid}}/website/1\" class=\"cl-text-blue\"><span class=\"fas fa-cog cl-icon-padding\"></span></a>-->\n      <!--</li>-->\n      <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n        <!--<a routerLink=\"/user/{{uid}}/website/4/page\" class=\"cl-text-blue\">Script Testing App</a>-->\n        <!--<a routerLink=\"/user/{{uid}}/website/4\" class=\"cl-text-blue\"><span class=\"fas fa-cog cl-icon-padding\"></span></a>-->\n      <!--</li>-->\n      <!--<li class=\"list-group-item cl-list-item-borderless d-flex justify-content-between\">-->\n        <!--<a routerLink=\"/user/{{uid}}/website/2/page\" class=\"cl-text-blue\">Blogger</a>-->\n        <!--<a routerLink=\"/user/{{uid}}/website/2\" class=\"cl-text-blue\"><span class=\"fas fa-cog cl-icon-padding\"></span></a>-->\n      <!--</li>-->\n    </ul>\n  </div>\n  <div class=\"col-sm-8\">\n    <form class=\"cl-text-padding\">\n      <div class=\"form-group\">\n        <label for=\"website-name\">Name</label>\n        <input [(ngModel)]=\"website.name\" name=\"website-name\" type=\"text\" class=\"form-control\" id=\"website-name\" placeholder=\"Blogger\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"website-description\">Description</label>\n        <textarea [(ngModel)]=\"website.description\" name=\"website-description\" id=\"website-description\" class=\"form-control\" rows=\"5\" placeholder=\"Description\"></textarea>\n      </div>\n    </form>\n  </div>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-blue-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/user/{{uid}}\" class=\"navbar-brand cl-text-white cl-icon-padding\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

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
/* harmony import */ var _website_list_website_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../website-list/website-list.component */ "./src/app/views/website/website-list/website-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_website_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/website.service.client */ "./src/app/services/website.service.client.ts");





var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(router, websiteService) {
        this.router = router;
        this.websiteService = websiteService;
        this.website = new _website_list_website_list_component__WEBPACK_IMPORTED_MODULE_2__["Website"]('', '', '', '');
    }
    WebsiteNewComponent.prototype.CreateWebsite = function () {
        console.log(this.website.name);
        console.log(this.website.description);
        this.websiteService.createWebsite(this.uid, this.website);
    };
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.websites = _this.websiteService.findWebsitesByUser(params['uid']);
            console.log('user id: ' + _this.uid);
            console.log('websites:' + _this.websites[0].name);
        });
    };
    WebsiteNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-website-new',
            template: __webpack_require__(/*! ./website-new.component.html */ "./src/app/views/website/website-new/website-new.component.html"),
            styles: [__webpack_require__(/*! ./website-new.component.css */ "./src/app/views/website/website-new/website-new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_website_service_client__WEBPACK_IMPORTED_MODULE_4__["WebsiteService"]])
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

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" routerLink=\"#\">\n        Choose Widget\n      </a>\n    </div>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <ul class=\"list-group cl-list-group-borderless\">\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/:wgid\" class=\"cl-text-blue\">Header</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"#\" class=\"cl-text-blue\">Label</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"#\" class=\"cl-text-blue\">HTML</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"#\" class=\"cl-text-blue\">Text Input</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"#\" class=\"cl-text-blue\">Link</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"#\" class=\"cl-text-blue\">Button</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/:wgid\" class=\"cl-text-blue\">Image</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/:wgid\" class=\"cl-text-blue\">YouTube</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"#\" class=\"cl-text-blue\">Data Table</a>\n    </li>\n    <li class=\"list-group-item cl-list-item-borderless\">\n      <a routerLink=\"#\" class=\"cl-text-blue\">Repeater</a>\n    </li>\n  </ul>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/user/{{uid}}\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

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



var WidgetChooseComponent = /** @class */ (function () {
    function WidgetChooseComponent(router) {
        this.router = router;
    }
    WidgetChooseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            console.log('user id: ' + _this.uid);
            console.log('web id: ' + _this.wid);
            console.log('page id: ' + _this.pid);
        });
    };
    WidgetChooseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-choose',
            template: __webpack_require__(/*! ./widget-choose.component.html */ "./src/app/views/widget/widget-choose/widget-choose.component.html"),
            styles: [__webpack_require__(/*! ./widget-choose.component.css */ "./src/app/views/widget/widget-choose/widget-choose.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n\n  <div *ngSwitchCase ='HEADING'>\n    <app-widget-heading></app-widget-heading>\n  </div>\n\n  <div *ngSwitchCase ='IMAGE'>\n    <app-widget-image></app-widget-image>\n  </div>\n\n  <div *ngSwitchCase ='YOUTUBE'>\n    <app-widget-youtube></app-widget-youtube>\n  </div>\n\n</div>\n"

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




var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(router, widgetService) {
        this.router = router;
        this.widgetService = widgetService;
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widget = _this.widgetService.findWidgetById(params['pid']);
            console.log('user id: ' + _this.uid);
            console.log('widget id: ' + _this.widget._id);
            console.log('web id: ' + _this.wid);
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

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" routerLink=\"#\">\n        Widgets Edit\n      </a>\n    </div>\n    <a (click)=\"UpdateWidget()\" routerLink=\"user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"heading-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\" name=\"widget-name\" type=\"text\" class=\"form-control\" id=\"heading-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" name=\"widget-text\" type=\"text\" class=\"form-control\" id=\"heading-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"heading-size\">Size</label>\n      <input [(ngModel)]=\"widget.size\" name=\"heading-size\" type=\"text\" class=\"form-control\" id=\"heading-size\" placeholder=\"3\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger  btn-block\" (click)=\"DeleteWidget()\" routerLink=\"user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\">Delete</a>\n</div>\n\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/user/{{uid}}\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

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




var WidgetHeadingComponent = /** @class */ (function () {
    function WidgetHeadingComponent(router, widgetService) {
        this.router = router;
        this.widgetService = widgetService;
    }
    WidgetHeadingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widget = _this.widgetService.findWidgetById(params['pid']);
            console.log('user id: ' + _this.uid);
            console.log('widget id: ' + _this.widget._id);
            console.log('web id: ' + _this.wid);
        });
    };
    WidgetHeadingComponent.prototype.UpdateWidget = function () {
        console.log(this.widget.name);
        console.log(this.widget.text);
        console.log(this.widget.size);
        this.widgetService.updateWidget(this.widget._id, this.widget);
    };
    WidgetHeadingComponent.prototype.DeleteWidget = function () {
        console.log(this.widget.name);
        console.log(this.widget.text);
        console.log(this.widget.size);
        this.widgetService.deleteWidget(this.widget._id);
    };
    WidgetHeadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-heading',
            template: __webpack_require__(/*! ./widget-heading.component.html */ "./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.html"),
            styles: [__webpack_require__(/*! ./widget-heading.component.css */ "./src/app/views/widget/widget-edit/widget-heading/widget-heading.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
    ], WidgetHeadingComponent);
    return WidgetHeadingComponent;
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

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" routerLink=\"#\">\n        Widgets Edit\n      </a>\n    </div>\n    <a (click)=\"UpdateWidget()\" routerLink=\"user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"image-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\" name=\"widget-name\" type=\"text\" class=\"form-control\" id=\"image-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" name=\"widget-text\" type=\"text\" class=\"form-control\" id=\"image-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-URL\">URL</label>\n      <input [(ngModel)]=\"widget.url\" name=\"widget-URL\" type=\"text\" class=\"form-control\" id=\"image-URL\" placeholder=\"URL\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image-width\">Width</label>\n      <input [(ngModel)]=\"widget.width\" name=\"widget-width\" type=\"text\" class=\"form-control\" id=\"image-width\" placeholder=\"100%\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputFile\">Upload</label>\n      <input [(ngModel)]=\"widget.file\" name=\"widget-file\" type=\"file\" class=\"form-control\" id=\"exampleInputFile\">\n    </div>\n  </form>\n  <a class=\"btn btn-primary btn-block cl-blue-navbar\" routerLink=\"#\">Upload Image</a>\n  <a class=\"btn btn-danger  btn-block\" (click)=\"DeleteWidget()\" routerLink=\"user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\">Delete</a>\n</div>\n\n<<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/user/{{uid}}\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

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




var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(router, widgetService) {
        this.router = router;
        this.widgetService = widgetService;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widget = _this.widgetService.findWidgetById(params['pid']);
            console.log('user id: ' + _this.uid);
            console.log('widget id: ' + _this.widget._id);
            console.log('web id: ' + _this.wid);
        });
    };
    WidgetImageComponent.prototype.UpdateWidget = function () {
        console.log(this.widget.name);
        console.log(this.widget.text);
        console.log(this.widget.size);
        this.widgetService.updateWidget(this.widget._id, this.widget);
    };
    WidgetImageComponent.prototype.DeleteWidget = function () {
        console.log(this.widget.name);
        console.log(this.widget.text);
        console.log(this.widget.size);
        this.widgetService.deleteWidget(this.widget._id);
    };
    WidgetImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-image',
            template: __webpack_require__(/*! ./widget-image.component.html */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__(/*! ./widget-image.component.css */ "./src/app/views/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
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

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" routerLink=\"#\">\n        Widgets Edit\n      </a>\n    </div>\n    <a (click)=\"UpdateWidget()\" routerLink=\"user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-check\"></i>\n    </a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <form>\n    <div class=\"form-group\">\n      <label for=\"youtube-name\">Name</label>\n      <input [(ngModel)]=\"widget.name\" name=\"widget-name\" type=\"text\" class=\"form-control\" id=\"youtube-name\" placeholder=\"Name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-text\">Text</label>\n      <input [(ngModel)]=\"widget.text\" name=\"widget-text\" type=\"text\" class=\"form-control\" id=\"youtube-text\" placeholder=\"Text\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-URL\">URL</label>\n      <input [(ngModel)]=\"widget.url\" name=\"widget-URL\" type=\"text\" class=\"form-control\" id=\"youtube-URL\" placeholder=\"URL\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"youtube-width\">Width</label>\n      <input [(ngModel)]=\"widget.width\" name=\"widget-width\" type=\"text\" class=\"form-control\" id=\"youtube-width\" placeholder=\"100%\">\n    </div>\n  </form>\n  <a class=\"btn btn-danger btn-block\" (click)=\"DeleteWidget()\" routerLink=\"user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\">Delete</a>\n</div>\n\n<<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid justify-content-end\">\n    <a routerLink=\"/user/{{uid}}\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n      <span class=\"fas fa-user\"></span>\n    </a>\n  </div>\n</nav>\n"

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




var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(router, widgetService) {
        this.router = router;
        this.widgetService = widgetService;
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widget = _this.widgetService.findWidgetById(params['pid']);
            console.log('user id: ' + _this.uid);
            console.log('widget id: ' + _this.widget._id);
            console.log('web id: ' + _this.wid);
        });
    };
    WidgetYoutubeComponent.prototype.UpdateWidget = function () {
        console.log(this.widget.name);
        console.log(this.widget.text);
        console.log(this.widget.size);
        this.widgetService.updateWidget(this.widget._id, this.widget);
    };
    WidgetYoutubeComponent.prototype.DeleteWidget = function () {
        console.log(this.widget.name);
        console.log(this.widget.text);
        console.log(this.widget.size);
        this.widgetService.deleteWidget(this.widget._id);
    };
    WidgetYoutubeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-youtube',
            template: __webpack_require__(/*! ./widget-youtube.component.html */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__(/*! ./widget-youtube.component.css */ "./src/app/views/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3dpZGdldC93aWRnZXQtbGlzdC93aWRnZXQtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/views/widget/widget-list/widget-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/widget/widget-list/widget-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"navbar-brand cl-text-black cl-icon-padding\">\n        <i class=\"fas fa-angle-left\"></i>\n      </a>\n      <a class=\"navbar-brand cl-text-black cl-text-bold cl-text-grey\" href=\"#\">\n        Widgets\n      </a>\n    </div>\n    <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\" class=\"navbar-brand cl-text-black float-right cl-icon-padding\">\n      <i class=\"fas fa-plus\"></i>\n    </a>\n  </div>\n</nav>\n\n\n<div class=\"container\">\n\n\n  <div *ngFor=\"let widget of widgets\">\n\n    <div [ngSwitch]=\"widget.widgetType\">\n\n      <div *ngSwitchCase=\"'HEADING'\"  class=\"row\">\n        <div [innerHTML]=\"getHeading(widget)\"></div>\n        <div class=\"ml-auto\">\n          <a routerLink=\"user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\">\n            <span class=\"fas fa-cog cl-text-blue\"></span>\n          </a>\n          <a routerLink=\"#\">\n            <span class=\"fas fa-bars cl-text-blue\"></span>\n          </a>\n        </div>\n      </div>\n\n\n\n      <div *ngSwitchCase=\"'HTML'\" class=\"row\">\n        <div [innerHTML]=\"widget.text\"></div>\n        <div class=\"ml-auto\">\n          <a routerLink=\"#\">\n            <span class=\"fas fa-cog cl-text-blue\"></span>\n          </a>\n          <a routerLink=\"#\">\n            <span class=\"fas fa-bars cl-text-blue\"></span>\n          </a>\n        </div>\n      </div>\n\n\n\n      <div *ngSwitchCase=\"'YOUTUBE'\" class=\"row\">\n        <div class=\"embed-responsive embed-responsive-16by9\">\n          <iframe class=\"embed-responsive-item\" [src]=\"getSafeUrl(widget)\" allowfullscreen></iframe>\n        </div>\n        <div class=\"ml-auto\">\n          <a routerLink=\"user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\">\n            <span class=\"fas fa-cog cl-text-blue cl-widget-list-icons\"></span>\n          </a>\n          <a routerLink=\"#\">\n            <span class=\"fas fa-bars cl-text-blue cl-widget-list-icons\"></span>\n          </a>\n        </div>\n      </div>\n\n\n\n      <div *ngSwitchCase=\"'IMAGE'\" class=\"row\">\n          <img class=\"img-responsive img-rounded cl-widget-images\"\n               [src]=\"getSafeUrl(widget)\">\n          <div class=\"ml-auto\">\n            <a routerLink=\"user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\">\n              <span class=\"fas fa-cog cl-text-blue\"></span>\n            </a>\n            <a routerLink=\"#\">\n              <span class=\"fas fa-bars cl-text-blue\"></span>\n            </a>\n          </div>\n        </div>\n    </div>\n  </div>\n\n\n\n\n\n\n\n\n  <!--<div class=\"row\">-->\n    <!--<h1>London terror attack: Police fired 'unprecedented' number of rounds</h1>-->\n    <!--<div class=\"ml-auto\">-->\n      <!--<a routerLink=\"widget-heading.html\">-->\n        <!--<span class=\"fas fa-cog cl-text-blue\"></span>-->\n      <!--</a>-->\n      <!--<a routerLink=\"#\">-->\n        <!--<span class=\"fas fa-bars cl-text-blue\"></span>-->\n      <!--</a>-->\n    <!--</div>-->\n  <!--</div>-->\n\n\n  <!--<div class=\"row\">-->\n    <!--<h3>Counterterrorism officers patrol near the scene of the attack on London Bridge.</h3>-->\n    <!--<div class=\"ml-auto\">-->\n      <!--<a routerLink=\"widget-heading.html\">-->\n        <!--<span class=\"fas fa-cog cl-text-blue\"></span>-->\n      <!--</a>-->\n      <!--<a routerLink=\"#\">-->\n        <!--<span class=\"fas fa-bars cl-text-blue\"></span>-->\n      <!--</a>-->\n    <!--</div>-->\n  <!--</div>-->\n\n  <!--<div class=\"row\">-->\n    <!--<img class=\"img-responsive img-rounded cl-widget-images\"-->\n         <!--src=\"http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg\">-->\n    <!--<div class=\"ml-auto\">-->\n      <!--<a routerLink=\"widget-image.html\">-->\n        <!--<span class=\"fas fa-cog cl-text-blue\"></span>-->\n      <!--</a>-->\n      <!--<a routerLink=\"#\">-->\n        <!--<span class=\"fas fa-bars cl-text-blue\"></span>-->\n      <!--</a>-->\n    <!--</div>-->\n  <!--</div>-->\n\n  <!--<div class=\"row\">-->\n    <!--<p>Armed officers responding to the London Bridge terror attack fired an \"unprecedented\" number of rounds at the three attackers because they were wearing what appeared to be suicide belts, police said.</p>-->\n    <!--<div class=\"ml-auto\">-->\n      <!--<a routerLink=\"#\">-->\n        <!--<span class=\"fas fa-cog cl-text-blue\"></span>-->\n      <!--</a>-->\n      <!--<a routerLink=\"#\">-->\n        <!--<span class=\"fas fa-bars cl-text-blue\"></span>-->\n      <!--</a>-->\n    <!--</div>-->\n  <!--</div>-->\n\n  <!--<div class=\"row\">-->\n    <!--<h3>Report: Incident at London Bridge</h3>-->\n    <!--<div class=\"ml-auto\">-->\n      <!--<a routerLink=\"widget-heading.html\">-->\n        <!--<span class=\"fas fa-cog cl-text-blue\"></span>-->\n      <!--</a>-->\n      <!--<a routerLink=\"#\">-->\n        <!--<span class=\"fas fa-bars cl-text-blue\"></span>-->\n      <!--</a>-->\n    <!--</div>-->\n  <!--</div>-->\n\n  <!--<div class=\"row\">-->\n    <!--<div class=\"embed-responsive embed-responsive-16by9\">-->\n      <!--<iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/APexI9Zb6iE\" allowfullscreen></iframe>-->\n    <!--</div>-->\n    <!--<div class=\"ml-auto\">-->\n      <!--<a routerLink=\"widget-youtube.html\">-->\n        <!--<span class=\"fas fa-cog cl-text-blue cl-widget-list-icons\"></span>-->\n      <!--</a>-->\n      <!--<a routerLink=\"#\">-->\n        <!--<span class=\"fas fa-bars cl-text-blue cl-widget-list-icons\"></span>-->\n      <!--</a>-->\n    <!--</div>-->\n  <!--</div>-->\n\n  <!--<div class=\"row\">-->\n    <!--<p>There is a report of an incident has occurred at London Bridge. From CNN London.</p>-->\n    <!--<div class=\"ml-auto\">-->\n      <!--<a routerLink=\"#\">-->\n        <!--<span class=\"fas fa-cog cl-text-blue\"></span>-->\n      <!--</a>-->\n      <!--<a routerLink=\"#\">-->\n        <!--<span class=\"fas fa-bars cl-text-blue\"></span>-->\n      <!--</a>-->\n    <!--</div>-->\n  <!--</div>-->\n</div>\n\n<nav class=\"navbar fixed-bottom cl-grey-navbar\">\n  <div class=\"container-fluid\">\n    <div>\n      <a routerLink=\"#\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n        <i class=\"fas fa-play cl-text-blue\"></i>\n      </a>\n      <a routerLink=\"#\" class=\"navbar-brand cl-icon-padding cl-text-blue\">\n        <i class=\"fas fa-eye cl-text-blue\"></i>\n      </a>\n    </div>\n    <a routerLink=\"/user/{{uid}}\" class=\"navbar-brand cl-icon-padding cl-text-blue float-right\">\n      <i class=\"fas fa-user cl-text-blue\"></i>\n    </a>\n  </div>\n</nav>\n"

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





var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(router, widgetService, sanitizer) {
        this.router = router;
        this.widgetService = widgetService;
        this.sanitizer = sanitizer;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widgets = _this.widgetService.findWidgetsByPageId(params['pid']);
            console.log('user id: ' + _this.uid);
            console.log('web id: ' + _this.wid);
            console.log('page id: ' + _this.pid);
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
    WidgetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/views/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/views/widget/widget-list/widget-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_widget_service_client__WEBPACK_IMPORTED_MODULE_3__["WidgetService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
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