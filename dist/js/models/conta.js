"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = (function () {
    function Conta(numero) {
        this._creditos = [];
        this._debitos = [];
        this._numero = numero;
    }
    Object.defineProperty(Conta.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "creditos", {
        get: function () {
            return this._creditos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "debitos", {
        get: function () {
            return this._debitos;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.depositar = function (valor) { };
    Conta.prototype.sacar = function (valor) { };
    Conta.prototype.mostrarAlert = function (msg) {
        return console.log(msg);
    };
    return Conta;
}());
exports.Conta = Conta;
