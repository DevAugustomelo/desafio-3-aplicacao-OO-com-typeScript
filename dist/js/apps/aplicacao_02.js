"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("../models/cliente");
var contaCorrente_1 = require("../models/contaCorrente");
var endereco_1 = require("../models/endereco");
var cliente = new cliente_1.Cliente('098.099.888-98', 'Augusto', '77899967-7898', false, [new contaCorrente_1.ContaCorrente("5000-01", 900)]);
cliente.addEndereco(new endereco_1.Endereco('54777123', 'Rua do jasmim', '6863', 'nd', 'Paulista', 'Pe'));
cliente.addEndereco(new endereco_1.Endereco('547873339', 'Av. Lindolfo Collor', '5577', 'nd', 'Recife', 'Pe'));
cliente.addEndereco(new endereco_1.Endereco('53413020', 'Rua Vinte e Seis', '556', 'CASA A', 'Paulista', 'PE'));
cliente.listarEnderecos(cliente);
