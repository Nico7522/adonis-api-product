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
var Command_1 = require("App/Models/Command");
var User_1 = require("App/Models/User");
var commandDTO_1 = require("App/dto/commandDTO");
var CommandsController = /** @class */ (function () {
    function CommandsController() {
    }
    CommandsController.prototype.index = function () {
        return __awaiter(this, void 0, void 0, function () {
            var commands;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Command_1["default"].query().preload("products").preload("user")];
                    case 1:
                        commands = _a.sent();
                        if (commands) {
                            return [2 /*return*/, commands.map(function (command) { return new commandDTO_1.CommandDTO(command); })];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    CommandsController.prototype.show = function (_a) {
        var request = _a.request, response = _a.response;
        return __awaiter(this, void 0, void 0, function () {
            var id, commands;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = request.cookie("id");
                        return [4 /*yield*/, Command_1["default"].query()
                                .where("user_id", id)
                                .preload("products")];
                    case 1:
                        commands = _b.sent();
                        if (commands) {
                            response.json(commands.map(function (command) { return new commandDTO_1.CommandForUserDTO(command); }));
                            return [2 /*return*/];
                        }
                        response.notFound();
                        return [2 /*return*/];
                }
            });
        });
    };
    CommandsController.prototype.store = function (_a) {
        var request = _a.request;
        return __awaiter(this, void 0, void 0, function () {
            var userId, command, allProducts, created, productData, _i, allProducts_1, product, commandPosted;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userId = request.cookie('id');
                        command = new Command_1["default"]();
                        command.user_id = userId;
                        allProducts = request.body().products;
                        return [4 /*yield*/, command.save()];
                    case 1:
                        created = _b.sent();
                        productData = {};
                        for (_i = 0, allProducts_1 = allProducts; _i < allProducts_1.length; _i++) {
                            product = allProducts_1[_i];
                            productData[product.product_id] = {
                                quantity: product.quantity
                            };
                        }
                        return [4 /*yield*/, created.related("products").attach(productData)];
                    case 2:
                        _b.sent();
                        return [4 /*yield*/, created.save()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, Command_1["default"].find(created.id)];
                    case 4:
                        commandPosted = _b.sent();
                        if (!commandPosted) return [3 /*break*/, 6];
                        return [4 /*yield*/, commandPosted.load('products')];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [2 /*return*/, commandPosted];
                }
            });
        });
    };
    CommandsController.prototype.updateUser = function (_a) {
        var request = _a.request, params = _a.params, response = _a.response;
        return __awaiter(this, void 0, void 0, function () {
            var command, userId, newUser;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Command_1["default"].find(params.id)];
                    case 1:
                        command = _b.sent();
                        userId = request.input("user_id");
                        return [4 /*yield*/, User_1["default"].find(userId)];
                    case 2:
                        newUser = _b.sent();
                        if (!(command && newUser)) return [3 /*break*/, 5];
                        command.user_id = newUser.id;
                        return [4 /*yield*/, command.load("products")];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, command.save()];
                    case 4:
                        if (_b.sent()) {
                            return [2 /*return*/, response.json({
                                    message: "command succefully updated",
                                    command_updated: new commandDTO_1.CommandUpdatedDTO(command)
                                })];
                        }
                        _b.label = 5;
                    case 5: return [2 /*return*/, response.notModified()];
                }
            });
        });
    };
    CommandsController.prototype.updateProduct = function (_a) {
        var request = _a.request, params = _a.params, response = _a.response;
        return __awaiter(this, void 0, void 0, function () {
            var command, allProducts, productData, _i, allProducts_2, product;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Command_1["default"].find(params.id)];
                    case 1:
                        command = _b.sent();
                        allProducts = request.body().products;
                        if (!command) return [3 /*break*/, 6];
                        productData = {};
                        for (_i = 0, allProducts_2 = allProducts; _i < allProducts_2.length; _i++) {
                            product = allProducts_2[_i];
                            productData[product.product_id] = {
                                quantity: product.quantity
                            };
                        }
                        // L'option false rajoute des produits et ne supprime pas les rows déjà existants.
                        // await command.related("products").sync(productData, false);
                        return [4 /*yield*/, command.related("products").sync(productData)];
                    case 2:
                        // L'option false rajoute des produits et ne supprime pas les rows déjà existants.
                        // await command.related("products").sync(productData, false);
                        _b.sent();
                        command.updated_at = new Date();
                        return [4 /*yield*/, command.load("products")];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, command.load("user")];
                    case 4:
                        _b.sent();
                        command.updated_at = Date.now();
                        return [4 /*yield*/, command.save()];
                    case 5:
                        if (_b.sent()) {
                            return [2 /*return*/, response.json({
                                    message: "command succefully updated",
                                    command_updated: new commandDTO_1.CommandUpdatedDTO(command)
                                })];
                        }
                        _b.label = 6;
                    case 6: return [2 /*return*/, response.notModified()];
                }
            });
        });
    };
    return CommandsController;
}());
exports["default"] = CommandsController;
