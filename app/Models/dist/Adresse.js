"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var Orm_1 = require("@ioc:Adonis/Lucid/Orm");
var User_1 = require("./User");
var Adresse = /** @class */ (function (_super) {
    __extends(Adresse, _super);
    function Adresse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Orm_1.column({ isPrimary: true })
    ], Adresse.prototype, "id");
    __decorate([
        Orm_1.column()
    ], Adresse.prototype, "zip");
    __decorate([
        Orm_1.column()
    ], Adresse.prototype, "street");
    __decorate([
        Orm_1.column()
    ], Adresse.prototype, "city");
    __decorate([
        Orm_1.column()
    ], Adresse.prototype, "numero");
    __decorate([
        Orm_1.column.dateTime({ autoCreate: true })
    ], Adresse.prototype, "createdAt");
    __decorate([
        Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true })
    ], Adresse.prototype, "updatedAt");
    __decorate([
        Orm_1.column()
    ], Adresse.prototype, "user_id");
    __decorate([
        Orm_1.belongsTo(function () { return User_1["default"]; })
    ], Adresse.prototype, "user");
    return Adresse;
}(Orm_1.BaseModel));
exports["default"] = Adresse;
