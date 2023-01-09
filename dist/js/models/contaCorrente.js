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
exports.ContaCorrente = void 0;
var conta_1 = require("./conta");
var credito_1 = require("./credito");
var debito_1 = require("./debito");
var ContaCorrente = (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(numero, limite) {
        var _this = _super.call(this, numero) || this;
        _this._limite = 100;
        if (limite) {
            _this._limite = limite;
        }
        ;
        return _this;
    }
    Object.defineProperty(ContaCorrente.prototype, "limite", {
        get: function () {
            return this._limite;
        },
        enumerable: false,
        configurable: true
    });
    ContaCorrente.prototype.depositar = function (valor) {
        this.creditos.push(new credito_1.Credito(valor, new Date()));
        this._limite += valor;
        return "Valor de ".concat(valor, " Creditado na conta Corrente ").concat(this.numero, ".");
    };
    ContaCorrente.prototype.sacar = function (valor) {
        if (valor > this._limite) {
            return "Saldo indispon\u00EDvel. ".concat(this.calcularSaldo());
        }
        else {
            this.debitos.push(new debito_1.Debito(valor, new Date()));
            this._limite -= valor;
            return 'Saque efetuado com sucesso.';
        }
        ;
    };
    ContaCorrente.prototype.transferir = function (conta, valor) {
        if (valor > this._limite) {
            return "Saldo indispon\u00EDvel para tranfer\u00EAncia. ".concat(this.calcularSaldo());
        }
        else {
            this.debitos.push(new debito_1.Debito(valor, new Date()));
            this._limite -= valor;
            conta.creditos.push(new credito_1.Credito(valor, new Date()));
            return "Transfer\u00EAncia no valor de ".concat(valor, " efetuada para conta ").concat(conta.numero);
        }
    };
    ContaCorrente.prototype.calcularSaldo = function () {
        var somaCreditos = 0;
        this.creditos.forEach(function (e) {
            somaCreditos += e.valor;
        });
        var somaDebitos = 0;
        this.debitos.forEach(function (e) {
            somaDebitos += e.valor;
        });
        var saldo = somaCreditos - somaDebitos;
        return " Saldo da Conta Corrente n\u00BA ".concat(this.numero, " Atualizado: ").concat(saldo, "\n Limite de saque dispon\u00EDvel: ").concat(this._limite);
    };
    return ContaCorrente;
}(conta_1.Conta));
exports.ContaCorrente = ContaCorrente;
