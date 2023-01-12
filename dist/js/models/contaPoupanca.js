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
        this.mostrarAlert("Valor de ".concat(valor, " creditado na conta Poupan\u00E7a ").concat(this.numero));
    };
    ContaPoupanca.prototype.depositarCP = function (valor, data) {
        this.creditos.push(new credito_1.Credito(valor, data));
        this.mostrarAlert("Valor de ".concat(valor, " creditado na conta Poupan\u00E7a ").concat(this.numero));
    };
    ContaPoupanca.prototype.sacarCP = function (valor, data) {
        var saldo = this.calcularSaldo();
        if (valor > saldo) {
            this.mostrarAlert("Saldo indispon\u00EDvel ");
        }
        else {
            this.debitos.push(new debito_1.Debito(valor, data));
            this.mostrarAlert('Saque da Poupança efetuado com sucesso.');
        }
    };
    ContaPoupanca.prototype.calcularRendimento = function () {
        var saldo = this.calcularSaldo();
        var rendimento = saldo * this.rentabilidadeMensal;
        return rendimento;
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
    ContaPoupanca.prototype.mostrarSaldo = function () {
        var saldo = this.calcularSaldo();
        this.mostrarAlert(" Saldo da Conta Poupan\u00E7a n\u00BA ".concat(this.numero, " Atualizado: ").concat(saldo));
    };
    return ContaPoupanca;
}(conta_1.Conta));
exports.ContaPoupanca = ContaPoupanca;
