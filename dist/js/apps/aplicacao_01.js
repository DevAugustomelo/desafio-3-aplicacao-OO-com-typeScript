"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cargo_1 = require("../models/cargo");
var funcionario_1 = require("../models/funcionario");
var jose = new funcionario_1.Funcionario('055.999.777-90', 'José Augusto', '558199976-8777', 14900.87, [new cargo_1.Cargo("Gerente")]);
var maria = new funcionario_1.Funcionario('067.888.555-80', 'Maria Gomes', '558699034-8909', 3500.67, [new cargo_1.Cargo('Atendente')]);
var mostrarCargoAtual = function (nome) {
    var result = '';
    nome.cargo.forEach(function (e) {
        result = e.nome;
    });
    return result;
};
console.log("Nome: ".concat(jose.nome, " \nCargo: ").concat(mostrarCargoAtual(jose), " \nSal\u00E1rio: ").concat(jose.salario));
console.log("===================");
console.log("Nome: ".concat(maria.nome, " \nCargo: ").concat(mostrarCargoAtual(maria), " \nSal\u00E1rio: ").concat(maria.salario));
