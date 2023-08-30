"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Product_1 = require("App/Models/Product");
var User_1 = require("App/Models/User");
var TodosController = /** @class */ (function () {
    function TodosController() {
    }
    TodosController.prototype.index = function (_a) {
        var request = _a.request;
        return __awaiter(this, void 0, void 0, function () {
            var products;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Product_1["default"].query()];
                    case 1:
                        products = _b.sent();
                        return [2 /*return*/, products];
                }
            });
        });
    };
    TodosController.prototype.getByCategorie = function (_a) {
        var params = _a.params;
        return __awaiter(this, void 0, void 0, function () {
            var products, filteredProduct;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(params.categorie);
                        if (!(params.categorie === "all")) return [3 /*break*/, 2];
                        return [4 /*yield*/, Product_1["default"].query()];
                    case 1:
                        products = _b.sent();
                        return [2 /*return*/, products];
                    case 2: return [4 /*yield*/, Product_1["default"].query().where({
                            categorie: params.categorie
                        })];
                    case 3:
                        filteredProduct = _b.sent();
                        if (filteredProduct) {
                            return [2 /*return*/, filteredProduct];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    TodosController.prototype.show = function (_a) {
        var params = _a.params;
        return __awaiter(this, void 0, void 0, function () {
            var product, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Product_1["default"].find(params.id)];
                    case 1:
                        product = _b.sent();
                        if (product) {
                            return [2 /*return*/, product];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TodosController.prototype.update = function (_a) {
        var auth = _a.auth, request = _a.request, params = _a.params;
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Product_1["default"].find(params.id)];
                    case 1:
                        product = _b.sent();
                        if (!product) return [3 /*break*/, 3];
                        product.title = request.input("title");
                        product.description = request.input("description");
                        product.price = request.input("price");
                        product.img = request.input("img");
                        return [4 /*yield*/, product.save()];
                    case 2:
                        if (_b.sent()) {
                            return [2 /*return*/, product];
                        }
                        return [2 /*return*/]; // 422
                    case 3: return [2 /*return*/]; // 401
                }
            });
        });
    };
    TodosController.prototype.store = function (_a) {
        var auth = _a.auth, request = _a.request, response = _a.response;
        return __awaiter(this, void 0, void 0, function () {
            var productsToCreate, prod, products;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        productsToCreate = request.body();
                        prod = [];
                        productsToCreate.map(function (p) {
                            prod.push(p);
                        });
                        return [4 /*yield*/, Product_1["default"].createMany(prod)];
                    case 1:
                        products = _b.sent();
                        return [2 /*return*/, products];
                }
            });
        });
    };
    TodosController.prototype.destroy = function (_a) {
        var response = _a.response, auth = _a.auth, request = _a.request, params = _a.params;
        return __awaiter(this, void 0, void 0, function () {
            var user, product;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, auth.authenticate()];
                    case 1:
                        user = _b.sent();
                        return [4 /*yield*/, Product_1["default"].query().where("id", params.id)["delete"]()];
                    case 2:
                        product = _b.sent();
                        return [2 /*return*/, response.json({ message: "Deleted successfully" })];
                }
            });
        });
    };
    TodosController.prototype.like = function (_a) {
        var request = _a.request, response = _a.response;
        return __awaiter(this, void 0, void 0, function () {
            var userId, isProductExist, productToLike, isUserExist, alreadyLiked;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userId = request.cookie('id');
                        isProductExist = request.body().id;
                        return [4 /*yield*/, Product_1["default"].find(isProductExist)];
                    case 1:
                        productToLike = _b.sent();
                        return [4 /*yield*/, User_1["default"].find(userId)];
                    case 2:
                        isUserExist = _b.sent();
                        if (!(productToLike && isUserExist)) return [3 /*break*/, 5];
                        return [4 /*yield*/, productToLike.related('likes').query().where({ 'user_id': userId })];
                    case 3:
                        alreadyLiked = _b.sent();
                        if (alreadyLiked.length > 0) {
                            response.notModified();
                            return [2 /*return*/];
                        }
                        productToLike.like = productToLike.like + 1;
                        productToLike.related('likes').attach([isUserExist.id]);
                        return [4 /*yield*/, productToLike.save()];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, response.json({
                                message: "Product liked",
                                product: productToLike
                            })];
                    case 5: return [2 /*return*/, response.json({ message: "Error" })];
                }
            });
        });
    };
    TodosController.prototype.isLiked = function (_a) {
        var request = _a.request, params = _a.params;
        return __awaiter(this, void 0, void 0, function () {
            var userId, product, alreadyLiked;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userId = request.cookie('id');
                        return [4 /*yield*/, Product_1["default"].find(params.id)];
                    case 1:
                        product = _b.sent();
                        if (!(userId && product)) return [3 /*break*/, 3];
                        return [4 /*yield*/, product.related('likes').query().where({ 'user_id': userId })];
                    case 2:
                        alreadyLiked = _b.sent();
                        if (alreadyLiked.length > 0) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        _b.label = 3;
                    case 3: return [2 /*return*/, null];
                }
            });
        });
    };
    return TodosController;
}());
exports["default"] = TodosController;
