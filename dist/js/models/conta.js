"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var credito_1 = require("./credito");
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
    Conta.prototype.depositar = function (valor) {
        this.creditos.push(new credito_1.Credito(valor, new Date()));
        return "Valor de ".concat(valor, " Creditado.");
    };
    Conta.prototype.sacar = function (valor) { };
    Conta.prototype.calcularSaldo = function () { };
    Conta.prototype.transferir = function (conta, valor) { };
    Conta.prototype.calcularRendimento = function (dataInicial, dataFinal) { };
    return Conta;
}());
exports.Conta = Conta;
