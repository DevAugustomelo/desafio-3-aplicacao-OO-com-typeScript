"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("../models/cliente");
var contaPoupanca_1 = require("../models/contaPoupanca");
var cliente = new cliente_1.Cliente('444.555.666.70', 'Matheus', '99999999999', false, new contaPoupanca_1.ContaPoupanca('8000-03', 0.01));
