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
var Adresse_1 = require("App/Models/Adresse");
var User_1 = require("App/Models/User");
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.prototype.login = function (_a) {
        var request = _a.request, auth = _a.auth, response = _a.response;
        return __awaiter(this, void 0, void 0, function () {
            var email, password, token, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        email = request.input("email");
                        password = request.input("password");
                        return [4 /*yield*/, auth.use("api").attempt(email, password, {
                                expiresIn: "10 days"
                            })];
                    case 1:
                        token = _b.sent();
                        return [4 /*yield*/, User_1["default"].findBy("email", email)];
                    case 2:
                        user = _b.sent();
                        response.cookie('id', user === null || user === void 0 ? void 0 : user.id, {
                            httpOnly: true,
                            secure: true
                        });
                        response.json({
                            user: user,
                            token: token.toJSON()
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthController.prototype.logout = function (_a) {
        var response = _a.response;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                response.clearCookie('id');
                response.json({ message: "Succefully logout" });
                return [2 /*return*/];
            });
        });
    };
    AuthController.prototype.register = function (_a) {
        var request = _a.request, auth = _a.auth;
        return __awaiter(this, void 0, void 0, function () {
            var email, password, name, surname, adresse, user, adresseToFind, isAdressExist, newAdress, token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        email = request.input("email");
                        password = request.input("password");
                        name = request.input("name");
                        surname = request.input("surname");
                        adresse = request.input('adresse');
                        user = new User_1["default"]();
                        user.email = email;
                        user.password = password;
                        user.name = name;
                        user.surname = surname;
                        return [4 /*yield*/, user.save()
                            // const adresses = (await Adresse.create(adresse)).related('user').create(user)
                        ];
                    case 1:
                        _b.sent();
                        adresseToFind = { zip: adresse.zip, street: adresse.street, city: adresse.city, number: adresse.number };
                        return [4 /*yield*/, Adresse_1["default"].query().where(adresseToFind).first()];
                    case 2:
                        isAdressExist = _b.sent();
                        if (!isAdressExist) return [3 /*break*/, 4];
                        return [4 /*yield*/, user.related('adresse').associate(isAdressExist)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 4: return [4 /*yield*/, Adresse_1["default"].create(adresse)];
                    case 5:
                        newAdress = _b.sent();
                        return [4 /*yield*/, user.related('adresse').associate(newAdress)];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7: return [4 /*yield*/, auth.use("api").login(user, {
                            expiresIn: "10 days"
                        })];
                    case 8:
                        token = _b.sent();
                        return [2 /*return*/, {
                                user: user,
                                token: token.toJSON()
                            }];
                }
            });
        });
    };
    return AuthController;
}());
exports["default"] = AuthController;
