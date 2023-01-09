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
exports.Cliente = void 0;
var pessoa_1 = require("./pessoa");
var Cliente = (function (_super) {
    __extends(Cliente, _super);
    function Cliente(_cpf, _nome, _telefone, vip, conta) {
        var _this = _super.call(this, _cpf, _nome, _telefone) || this;
        _this._endereco = [];
        _this._contasCorrentes = [];
        _this._contasPoupancas = [];
        _this._vip = vip;
        _this._conta = conta;
        return _this;
    }
    Object.defineProperty(Cliente.prototype, "vip", {
        get: function () {
            return this._vip;
        },
        set: function (valor) {
            this._vip = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "conta", {
        get: function () {
            return this._conta;
        },
        enumerable: false,
        configurable: true
    });
    Cliente.prototype.acessarConta = function (numero) {
    };
    Object.defineProperty(Cliente.prototype, "endereco", {
        get: function () {
            return this._endereco;
        },
        enumerable: false,
        configurable: true
    });
    Cliente.prototype.addEndereco = function (newEndereco) {
        this._endereco.push(newEndereco);
    };
    Cliente.prototype.listarEnderecos = function (cliente) {
        var cont = 1;
        return cliente.endereco.forEach(function (e) {
            console.log("\n Endere\u00E7o: ".concat(cont++, "\n CEP: ").concat(e.cep, "\n Logradouro: ").concat(e.logradouro));
            console.log(" N\u00FAmero: ".concat(e.numero, "\n Complemento: ").concat(e.complemento, "\n Cidade: ").concat(e.cidade, "\n UF: ").concat(e.uf));
        });
    };
    Cliente.prototype.autenticar = function () {
        return true;
    };
    return Cliente;
}(pessoa_1.Pessoa));
exports.Cliente = Cliente;
