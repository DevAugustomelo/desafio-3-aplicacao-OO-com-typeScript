"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("../models/cliente");
var contaCorrente_1 = require("../models/contaCorrente");
var contaPoupanca_1 = require("../models/contaPoupanca");
var clienteCC = new cliente_1.Cliente('586.899.099.90', 'Augusto', '558199777-8899', true, new contaCorrente_1.ContaCorrente('5000-02', 200));
console.log(clienteCC.conta.depositar(1000));
var clienteCP = new cliente_1.Cliente('444.555.666.70', 'Matheus', '99999999999', false, new contaPoupanca_1.ContaPoupanca('8000-02', 0.01));
console.log(clienteCP.conta.depositar(1000));
console.log(clienteCC.conta.transferir(clienteCP.conta, 500));
console.log(clienteCC.conta.calcularSaldo());
console.log("Saldo em conta Poupança: ", clienteCP.conta.calcularSaldo());