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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-task/add-task.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-task/add-task.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-task/add-task.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-task/add-task.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Cоздание задания</h1>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <form (ngSubmit)=\"addTask(task)\" #taskForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Название</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"task.taskName\" name=\"name\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"startDate\">Дата начала</label>\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"task.startDate\" name=\"startDate\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"endDate\">Дата окончания</label>\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"task.endDate\" name=\"endDate\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <h1>Участники</h1>\r\n          <table class=\"table\">\r\n            <tbody>\r\n            <tr  *ngFor=\"let person of people\">\r\n              <td>  <input type=\"checkbox\" class=\"form-control\" [(ngModel)]=\"person.is\"  name=\"personName\"></td>\r\n              <td><label for=\"personName\">{{person.fName}}</label></td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n          <!--<ul>-->\r\n            <!--<li  *ngFor=\"let person of people\">-->\r\n              <!--<input type=\"checkbox\" class=\"form-control\" [(ngModel)]=\"person.is\"  name=\"personName\">-->\r\n              <!--<label for=\"personName\">{{person.fName}}</label>-->\r\n            <!--</li>-->\r\n          <!--</ul>-->\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!taskForm.form.valid\">Сохранить</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-task/add-task.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-task/add-task.component.ts ***!
  \************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_task_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/task.model */ "./src/app/model/task.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(http, router) {
        this.http = http;
        this.router = router;
    }
    AddTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.task = new _model_task_model__WEBPACK_IMPORTED_MODULE_3__["Task"]();
        this.http.get('/tasks/people').subscribe(function (data) {
            _this.people = data;
        });
    };
    AddTaskComponent.prototype.addTask = function (data) {
        var _this = this;
        this.people.forEach(function (p) { return console.log(p.is); });
        data.person = this.people.filter(function (p) { return p.is; });
        console.log(data.person);
        this.http.post('/tasks', data)
            .subscribe(function () {
            _this.router.navigate(['/task-list']);
        }, function (err) {
            console.log(err);
        });
    };
    AddTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/add-task/add-task.component.html"),
            styles: [__webpack_require__(/*! ./add-task.component.css */ "./src/app/add-task/add-task.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



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

module.exports = "<router-outlet></router-outlet>"

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
        this.title = 'app';
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/task-list/task-list.component.ts");
/* harmony import */ var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-task/add-task.component */ "./src/app/add-task/add-task.component.ts");
/* harmony import */ var _edit_task_task_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-task/task-edit.component */ "./src/app/edit-task/task-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    {
        path: 'task-list',
        component: _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_6__["TaskListComponent"],
        data: { title: 'Task List' }
    },
    { path: '',
        redirectTo: '/task-list',
        pathMatch: 'full'
    },
    {
        path: 'task-create',
        component: _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_7__["AddTaskComponent"],
        data: { title: 'Add task' }
    },
    {
        path: 'task-edit/:id',
        component: _edit_task_task_edit_component__WEBPACK_IMPORTED_MODULE_8__["TaskEditComponent"],
        data: { title: 'Edit Contact' }
    },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_6__["TaskListComponent"],
                _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_7__["AddTaskComponent"],
                _edit_task_task_edit_component__WEBPACK_IMPORTED_MODULE_8__["TaskEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit-task/task-edit.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-task/task-edit.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-task/task-edit.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-task/task-edit.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Редактирование задания</h1>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <form (ngSubmit)=\"updateTask(task.id, task)\" #taskForm=\"ngForm\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Название</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"task.taskName\" name=\"name\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"startDate\">Дата начала</label>\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"task.startDate\" name=\"startDate\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"endDate\">Дата окончания</label>\r\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"task.endDate\" name=\"endDate\" required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <h1>Участники</h1>\r\n          <table class=\"table\">\r\n            <tbody>\r\n            <tr  *ngFor=\"let person of people\">\r\n              <td>  <input type=\"checkbox\" class=\"form-control\" [(ngModel)]=\"person.is\"  name=\"personName\"></td>\r\n              <td><label for=\"personName\">{{person.fName}}</label></td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!taskForm.form.valid\">Сохранить</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/edit-task/task-edit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-task/task-edit.component.ts ***!
  \**************************************************/
/*! exports provided: TaskEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEditComponent", function() { return TaskEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_task_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/task.model */ "./src/app/model/task.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskEditComponent = /** @class */ (function () {
    function TaskEditComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
    }
    TaskEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.task = new _model_task_model__WEBPACK_IMPORTED_MODULE_3__["Task"]();
        this.http.get('/tasks/people').subscribe(function (data) {
            _this.people = data;
        });
        this.getTask(this.route.snapshot.params['id']);
    };
    TaskEditComponent.prototype.getTask = function (id) {
        var _this = this;
        this.http.get('/tasks/' + id).subscribe(function (data) {
            _this.task = data;
        });
    };
    TaskEditComponent.prototype.updateTask = function (id, data) {
        var _this = this;
        data.person = this.people.filter(function (p) { return p.is; });
        console.log(data.person);
        this.http.put('/tasks/' + id, data)
            .subscribe(function (res) {
            _this.router.navigate(['/task-list']);
        }, function (err) {
            console.log(err);
        });
    };
    TaskEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-edit',
            template: __webpack_require__(/*! ./task-edit.component.html */ "./src/app/edit-task/task-edit.component.html"),
            styles: [__webpack_require__(/*! ./task-edit.component.css */ "./src/app/edit-task/task-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TaskEditComponent);
    return TaskEditComponent;
}());



/***/ }),

/***/ "./src/app/model/task.model.ts":
/*!*************************************!*\
  !*** ./src/app/model/task.model.ts ***!
  \*************************************/
/*! exports provided: Person, Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Person = /** @class */ (function () {
    function Person() {
        this.is = false;
    }
    return Person;
}());

var Task = /** @class */ (function () {
    function Task() {
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/task-list/task-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/task-list/task-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/task-list/task-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/task-list/task-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <table class=\"table\">\r\n        <thead>\r\n        <tr>\r\n            <th>Дата начала</th>\r\n            <th>Дата окончания</th>\r\n            <th>Название</th>\r\n            <th>Участники</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let task of tasks\">\r\n            <td>{{ task.startDate | date: 'd-MM-yyyy' }}</td>\r\n            <td>{{ task.endDate | date: 'd-MM-yyyy'}}</td>\r\n            <td>{{ task.taskName }}</td>\r\n            <td> <span *ngFor=\"let person of task.person\">{{ person.fName }}; </span></td>\r\n            <td><button class=\"edit btn btn-success\" [routerLink]=\"['/task-edit', task.id]\">Редактировать</button></td>\r\n            <td><button class=\"delete btn btn-danger\" (click)=\"deleteTask(task.id)\">Удалить</button></td>\r\n        </tr>\r\n        </tbody>\r\n    </table>\r\n    <button [routerLink]=\"['/task-create']\" class=\"addTask btn btn-primary\">Добавить задание</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/task-list/task-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/task-list/task-list.component.ts ***!
  \**************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/tasks').subscribe(function (data) {
            _this.tasks = data;
        });
    };
    TaskListComponent.prototype.deleteTask = function (id) {
        var _this = this;
        this.http.delete('/tasks/' + id)
            .subscribe(function (data) {
            _this.tasks = _this.tasks.filter(function (u) { return u.id !== id; });
        }, function (err) {
            console.log(err);
        });
    };
    TaskListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__(/*! ./task-list.component.html */ "./src/app/task-list/task-list.component.html"),
            styles: [__webpack_require__(/*! ./task-list.component.css */ "./src/app/task-list/task-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskListComponent);
    return TaskListComponent;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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

module.exports = __webpack_require__(/*! C:\task_manager\src\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map