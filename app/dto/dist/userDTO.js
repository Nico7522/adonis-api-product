"use strict";
exports.__esModule = true;
exports.UserDTO = void 0;
var UserDTO = /** @class */ (function () {
    function UserDTO(_a) {
        var id = _a.id, name = _a.name, surname = _a.surname, birthdate = _a.birthdate, email = _a.email, created_at = _a.created_at, updated_at = _a.updated_at, commands = _a.commands, adresse = _a.adresse;
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.birthdate = birthdate;
        this.email = email;
        this.commands = commands;
        this.adresse = adresse;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
    return UserDTO;
}());
exports.UserDTO = UserDTO;
