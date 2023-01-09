"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Funcionario = void 0;
var pessoa_1 = require("./pessoa");
var Funcionario = (function (_super) {
    __extends(Funcionario, _super);
    function Funcionario(_cpf, _nome, _telefone, _salario, cargo) {
        var _this = _super.call(this, _cpf, _nome, _telefone) || this;
        _this._salario = _salario;
        _this._cargo = cargo;
        return _this;
    }
    Object.defineProperty(Funcionario.prototype, "salario", {
        get: function () {
            return this._salario;
        },
        set: function (newSalario) {
            this._salario = newSalario;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "cargo", {
        get: function () {
            return this._cargo;
        },
        enumerable: false,
        configurable: true
    });
    Funcionario.prototype.addCargo = function (newCargo) {
        this._cargo.push(newCargo);
    };
    Funcionario.prototype.removerCargo = function (nome) {
    };
    Funcionario.prototype.autenticar = function () {
        return true;
    };
    return Funcionario;
}(pessoa_1.Pessoa));
exports.Funcionario = Funcionario;
