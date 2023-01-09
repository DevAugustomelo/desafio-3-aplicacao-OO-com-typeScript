"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = (function () {
    function Pessoa(_cpf, _nome, _telefone) {
        this._cpf = _cpf;
        this._nome = _nome;
        this._telefone = _telefone;
    }
    Object.defineProperty(Pessoa.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (cpf) {
            this._cpf = cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pessoa.prototype, "telefone", {
        get: function () {
            return this._telefone;
        },
        set: function (tel) {
            this._telefone = tel;
        },
        enumerable: false,
        configurable: true
    });
    return Pessoa;
}());
exports.Pessoa = Pessoa;
