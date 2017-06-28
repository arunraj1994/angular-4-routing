"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Dev1Component = (function () {
    function Dev1Component() {
        this.name = 'page2';
    }
    Dev1Component = __decorate([
        core_1.Component({
            selector: 'app-dev1',
            template: "<div class=\"service-name\">\n  \t\t\t\t<h1>Service name</h1>\n  \t\t\t\t<ul class=\"service-list\">\n  \t\t\t\t\t<li>LOGIN</li>\n  \t\t\t\t\t<li>MTG</li>\n  \t\t\t\t\t<li>TRANSACTION ACCOUNT</li>\n  \t\t\t\t</ul>\n             </div>\n             <div class=\"status\">\n  \t\t\t\t<h1>Status</h1>\n  \t\t\t\t<ul class=\"status-list\">\n  \t\t\t\t<li><span class=\"glyphicon glyphicon-ok-circle ok-sign\"></span><span class=\"glyphicon glyphicon-remove-circle remove-sign\"></span></li>\n  \t\t\t\t<li><span class=\"glyphicon glyphicon-ok-circle ok-sign\"></span><span class=\"glyphicon glyphicon-remove-circle remove-sign\"></span></li>\n  \t\t\t\t<li><span class=\"glyphicon glyphicon-ok-circle ok-sign\"></span><span class=\"glyphicon glyphicon-remove-circle remove-sign\"></span></li>\n  \t\t\t\t</ul>\n             </div>",
        }), 
        __metadata('design:paramtypes', [])
    ], Dev1Component);
    return Dev1Component;
}());
exports.Dev1Component = Dev1Component;
//# sourceMappingURL=dev1.component.js.map