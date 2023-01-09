"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Debito = void 0;
var Debito = (function () {
    function Debito(valor, data) {
        this._valor = valor;
        this._data = data;
    }
    Object.defineProperty(Debito.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Debito.prototype, "data", {
        get: function () {
            return this._data.toLocaleDateString();
        },
        enumerable: false,
        configurable: true
    });
    return Debito;
}());
exports.Debito = Debito;
