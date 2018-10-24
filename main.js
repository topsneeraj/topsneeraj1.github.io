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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<a routerLink='/test1'>test1</a>\n<a routerLink='/test2'>test2</a>\n<a routerLink='/ex1'>ex</a>\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'moduledemo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _viewdata_viewdata_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewdata/viewdata.module */ "./src/app/viewdata/viewdata.module.ts");
/* harmony import */ var _approuting_approuting_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./approuting/approuting.module */ "./src/app/approuting/approuting.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _viewdata_viewdata_module__WEBPACK_IMPORTED_MODULE_2__["ViewdataModule"],
                _approuting_approuting_module__WEBPACK_IMPORTED_MODULE_3__["ApproutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/approuting/approuting.module.ts":
/*!*************************************************!*\
  !*** ./src/app/approuting/approuting.module.ts ***!
  \*************************************************/
/*! exports provided: ApproutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproutingModule", function() { return ApproutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ex1_ex1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ex1/ex1.component */ "./src/app/approuting/ex1/ex1.component.ts");
/* harmony import */ var _ex2_ex2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ex2/ex2.component */ "./src/app/approuting/ex2/ex2.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var app = [{ path: 'ex1', component: _ex1_ex1_component__WEBPACK_IMPORTED_MODULE_2__["Ex1Component"] }, { path: 'ex2', component: _ex2_ex2_component__WEBPACK_IMPORTED_MODULE_3__["Ex2Component"] }, { path: '', component: _ex1_ex1_component__WEBPACK_IMPORTED_MODULE_2__["Ex1Component"] }];
var ApproutingModule = /** @class */ (function () {
    function ApproutingModule() {
    }
    ApproutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(app)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
            declarations: [_ex1_ex1_component__WEBPACK_IMPORTED_MODULE_2__["Ex1Component"], _ex2_ex2_component__WEBPACK_IMPORTED_MODULE_3__["Ex2Component"]]
        })
    ], ApproutingModule);
    return ApproutingModule;
}());



/***/ }),

/***/ "./src/app/approuting/ex1/ex1.component.css":
/*!**************************************************!*\
  !*** ./src/app/approuting/ex1/ex1.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/approuting/ex1/ex1.component.html":
/*!***************************************************!*\
  !*** ./src/app/approuting/ex1/ex1.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>hello</h1>"

/***/ }),

/***/ "./src/app/approuting/ex1/ex1.component.ts":
/*!*************************************************!*\
  !*** ./src/app/approuting/ex1/ex1.component.ts ***!
  \*************************************************/
/*! exports provided: Ex1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ex1Component", function() { return Ex1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Ex1Component = /** @class */ (function () {
    function Ex1Component() {
    }
    Ex1Component.prototype.ngOnInit = function () {
    };
    Ex1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ex1',
            template: __webpack_require__(/*! ./ex1.component.html */ "./src/app/approuting/ex1/ex1.component.html"),
            styles: [__webpack_require__(/*! ./ex1.component.css */ "./src/app/approuting/ex1/ex1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Ex1Component);
    return Ex1Component;
}());



/***/ }),

/***/ "./src/app/approuting/ex2/ex2.component.css":
/*!**************************************************!*\
  !*** ./src/app/approuting/ex2/ex2.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/approuting/ex2/ex2.component.html":
/*!***************************************************!*\
  !*** ./src/app/approuting/ex2/ex2.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ex2 works!\n</p>\n"

/***/ }),

/***/ "./src/app/approuting/ex2/ex2.component.ts":
/*!*************************************************!*\
  !*** ./src/app/approuting/ex2/ex2.component.ts ***!
  \*************************************************/
/*! exports provided: Ex2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ex2Component", function() { return Ex2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Ex2Component = /** @class */ (function () {
    function Ex2Component() {
    }
    Ex2Component.prototype.ngOnInit = function () {
    };
    Ex2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ex2',
            template: __webpack_require__(/*! ./ex2.component.html */ "./src/app/approuting/ex2/ex2.component.html"),
            styles: [__webpack_require__(/*! ./ex2.component.css */ "./src/app/approuting/ex2/ex2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Ex2Component);
    return Ex2Component;
}());



/***/ }),

/***/ "./src/app/viewdata/disp/disp.component.css":
/*!**************************************************!*\
  !*** ./src/app/viewdata/disp/disp.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/viewdata/disp/disp.component.html":
/*!***************************************************!*\
  !*** ./src/app/viewdata/disp/disp.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/viewdata/disp/disp.component.ts":
/*!*************************************************!*\
  !*** ./src/app/viewdata/disp/disp.component.ts ***!
  \*************************************************/
/*! exports provided: DispComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispComponent", function() { return DispComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DispComponent = /** @class */ (function () {
    function DispComponent() {
    }
    DispComponent.prototype.ngOnInit = function () {
    };
    DispComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-disp',
            template: __webpack_require__(/*! ./disp.component.html */ "./src/app/viewdata/disp/disp.component.html"),
            styles: [__webpack_require__(/*! ./disp.component.css */ "./src/app/viewdata/disp/disp.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DispComponent);
    return DispComponent;
}());



/***/ }),

/***/ "./src/app/viewdata/viewdata.module.ts":
/*!*********************************************!*\
  !*** ./src/app/viewdata/viewdata.module.ts ***!
  \*********************************************/
/*! exports provided: ViewdataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewdataModule", function() { return ViewdataModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _disp_disp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disp/disp.component */ "./src/app/viewdata/disp/disp.component.ts");
/* harmony import */ var _viewdatarouting_viewdatarouting_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../viewdatarouting/viewdatarouting.module */ "./src/app/viewdatarouting/viewdatarouting.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ViewdataModule = /** @class */ (function () {
    function ViewdataModule() {
    }
    ViewdataModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _viewdatarouting_viewdatarouting_module__WEBPACK_IMPORTED_MODULE_3__["ViewdataroutingModule"]
            ],
            exports: [_disp_disp_component__WEBPACK_IMPORTED_MODULE_2__["DispComponent"]],
            declarations: [_disp_disp_component__WEBPACK_IMPORTED_MODULE_2__["DispComponent"]]
        })
    ], ViewdataModule);
    return ViewdataModule;
}());



/***/ }),

/***/ "./src/app/viewdatarouting/test1/test1.component.css":
/*!***********************************************************!*\
  !*** ./src/app/viewdatarouting/test1/test1.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/viewdatarouting/test1/test1.component.html":
/*!************************************************************!*\
  !*** ./src/app/viewdatarouting/test1/test1.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test1 works!\n</p>\n"

/***/ }),

/***/ "./src/app/viewdatarouting/test1/test1.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/viewdatarouting/test1/test1.component.ts ***!
  \**********************************************************/
/*! exports provided: Test1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test1Component", function() { return Test1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Test1Component = /** @class */ (function () {
    function Test1Component() {
    }
    Test1Component.prototype.ngOnInit = function () {
    };
    Test1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test1',
            template: __webpack_require__(/*! ./test1.component.html */ "./src/app/viewdatarouting/test1/test1.component.html"),
            styles: [__webpack_require__(/*! ./test1.component.css */ "./src/app/viewdatarouting/test1/test1.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Test1Component);
    return Test1Component;
}());



/***/ }),

/***/ "./src/app/viewdatarouting/test2/test2.component.css":
/*!***********************************************************!*\
  !*** ./src/app/viewdatarouting/test2/test2.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/viewdatarouting/test2/test2.component.html":
/*!************************************************************!*\
  !*** ./src/app/viewdatarouting/test2/test2.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  test2 works!\n</p>\n"

/***/ }),

/***/ "./src/app/viewdatarouting/test2/test2.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/viewdatarouting/test2/test2.component.ts ***!
  \**********************************************************/
/*! exports provided: Test2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Test2Component", function() { return Test2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Test2Component = /** @class */ (function () {
    function Test2Component() {
    }
    Test2Component.prototype.ngOnInit = function () {
    };
    Test2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test2',
            template: __webpack_require__(/*! ./test2.component.html */ "./src/app/viewdatarouting/test2/test2.component.html"),
            styles: [__webpack_require__(/*! ./test2.component.css */ "./src/app/viewdatarouting/test2/test2.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Test2Component);
    return Test2Component;
}());



/***/ }),

/***/ "./src/app/viewdatarouting/viewdatarouting.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/viewdatarouting/viewdatarouting.module.ts ***!
  \***********************************************************/
/*! exports provided: ViewdataroutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewdataroutingModule", function() { return ViewdataroutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _test1_test1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test1/test1.component */ "./src/app/viewdatarouting/test1/test1.component.ts");
/* harmony import */ var _test2_test2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test2/test2.component */ "./src/app/viewdatarouting/test2/test2.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var app = [{ path: 'test1', component: _test1_test1_component__WEBPACK_IMPORTED_MODULE_3__["Test1Component"] }, { path: 'test2', component: _test2_test2_component__WEBPACK_IMPORTED_MODULE_4__["Test2Component"] }];
var ViewdataroutingModule = /** @class */ (function () {
    function ViewdataroutingModule() {
    }
    ViewdataroutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(app)
            ],
            declarations: [_test1_test1_component__WEBPACK_IMPORTED_MODULE_3__["Test1Component"], _test2_test2_component__WEBPACK_IMPORTED_MODULE_4__["Test2Component"]]
        })
    ], ViewdataroutingModule);
    return ViewdataroutingModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /angular/moduledemo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map