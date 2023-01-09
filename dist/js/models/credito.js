"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Credito = void 0;
var Credito = (function () {
    function Credito(valor, data) {
        this._valor = valor;
        this._data = data;
    }
    Object.defineProperty(Credito.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Credito.prototype, "data", {
        get: function () {
            return this._data.toLocaleDateString();
        },
        enumerable: false,
        configurable: true
    });
    return Credito;
}());
exports.Credito = Credito;
