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
var Command_1 = require("./Command");
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Product.prototype, "quantity", {
        get: function () {
            var quantity = this.$extras.pivot_quantity;
            return quantity;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Orm_1.column({ isPrimary: true })
    ], Product.prototype, "id");
    __decorate([
        Orm_1.column()
    ], Product.prototype, "title");
    __decorate([
        Orm_1.column()
    ], Product.prototype, "description");
    __decorate([
        Orm_1.column()
    ], Product.prototype, "price");
    __decorate([
        Orm_1.column()
    ], Product.prototype, "img");
    __decorate([
        Orm_1.column.dateTime({ autoCreate: true })
    ], Product.prototype, "created_at");
    __decorate([
        Orm_1.column.dateTime({ autoCreate: true, autoUpdate: true })
    ], Product.prototype, "updated_at");
    __decorate([
        Orm_1.manyToMany(function () { return Command_1["default"]; }, {
            pivotTable: 'command_products',
            pivotTimestamps: true
        })
    ], Product.prototype, "commands");
    __decorate([
        Orm_1.computed()
    ], Product.prototype, "quantity");
    return Product;
}(Orm_1.BaseModel));
exports["default"] = Product;
