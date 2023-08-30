"use strict";
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
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
var Route_1 = require("@ioc:Adonis/Core/Route");
Route_1["default"].get('/', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, { hello: 'world' }];
    });
}); });
Route_1["default"].group(function () {
    Route_1["default"].get("user", "UsersController.index");
    Route_1["default"].get("user/:id", "UsersController.show");
    Route_1["default"].put("user/:id", "UsersController.update");
    Route_1["default"]["delete"]("user/:id", "UsersController.destroy");
}).prefix('api');
Route_1["default"].group(function () {
    Route_1["default"].post("register", "AuthController.register");
    Route_1["default"].post("login", "AuthController.login");
    Route_1["default"].get("logout", "AuthController.logout");
}).prefix("api");
Route_1["default"].group(function () {
    Route_1["default"].get('command', "CommandsController.index");
    Route_1["default"].post('command', "CommandsController.store");
    Route_1["default"].put('command/user/:id', "CommandsController.updateUser");
    Route_1["default"].put('command/product/:id', "CommandsController.updateProduct");
    Route_1["default"].get('command/user', "CommandsController.show");
}).prefix('api');
Route_1["default"].group(function () {
    Route_1["default"].get("product", "ProductsController.index");
    Route_1["default"].get("product/:id", "ProductsController.show");
    Route_1["default"].get("product/isliked/:id", "ProductsController.isLiked");
    Route_1["default"].get("product/isdisliked/:id", "ProductsController.isDisliked");
    Route_1["default"].get("product/categorie/:categorie", "ProductsController.getByCategorie");
    Route_1["default"].put("product/update/:id", "ProductsController.update");
    Route_1["default"].post("product", "ProductsController.store");
    Route_1["default"].put("product/like", "ProductsController.like");
    Route_1["default"].put("product/dislike", "ProductsController.dislike");
}).prefix('api');
