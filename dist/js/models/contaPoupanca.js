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
exports.ContaPoupanca = void 0;
var conta_1 = require("./conta");
var credito_1 = require("./credito");
var debito_1 = require("./debito");
var ContaPoupanca = (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca(numero, rentabilidade) {
        var _this = _super.call(this, numero) || this;
        _this.rentabilidadeMensal = 0.001;
        _this.rentabilidadeMensal = rentabilidade;
        return _this;
    }
    Object.defineProperty(ContaPoupanca.prototype, "rentabilidade", {
        get: function () {
            return this.rentabilidadeMensal;
        },
        enumerable: false,
        configurable: true
    });
    ContaPoupanca.prototype.depositar = function (valor) {
        this.creditos.push(new credito_1.Credito(valor, new Date()));
        return "Valor de ".concat(valor, " creditado na conta Poupan\u00E7a ").concat(this.numero);
    };
    ContaPoupanca.prototype.sacar = function (valor) {
        var saldo = this.calcularSaldo();
        if (valor > saldo) {
            return "Saldo indispon\u00EDvel. Saldo atual: ".concat(this.calcularSaldo(), " ");
        }
        else {
            this.debitos.push(new debito_1.Debito(valor, new Date()));
            return 'Saque efetuado da Poupança com sucesso.';
        }
    };
    ContaPoupanca.prototype.calcularRendimento = function (dataInicial, dataFinal) {
        var rendimento = 0;
        this.creditos.forEach(function (e) {
            if (e.data >= dataInicial && e.data <= dataFinal) {
                rendimento += e.valor;
            }
        });
        return console.log(rendimento);
    };
    ContaPoupanca.prototype.calcularSaldo = function () {
        var saldoTotal = 0;
        this.creditos.forEach(function (e) {
            saldoTotal += e.valor;
        });
        this.debitos.forEach(function (e) {
            saldoTotal -= e.valor;
        });
        return saldoTotal;
    };
    return ContaPoupanca;
}(conta_1.Conta));
exports.ContaPoupanca = ContaPoupanca;
