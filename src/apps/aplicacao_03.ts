




// # Aplicação 3
// ○ Crie um cliente que possua uma ContaCorrente
// ○ Efetue três depósitos de 100 nessa ContaCorrente
// ○ Efetue um saque de 50 reais nessa ContaCorrente
// ○ Imprima o valor do saldo dessa ContaCorrente

import { Cliente } from "../models/cliente";
import { ContaCorrente } from "../models/contaCorrente";
import { Endereco } from "../models/endereco";



//# Neste exemplo não foi atribuido limite inicial para a conta corrente, logo terá o saldo inicial de 100.

let cliente03 = new Cliente('098.099.888-98', 'Augusto', '77899967-7898', false,
 new ContaCorrente("5000-01"))

 console.log(cliente03.conta.depositar(100));
 console.log(cliente03.conta.depositar(100));
 console.log(cliente03.conta.depositar(100));

 console.log(cliente03.conta.sacar(50));

 console.log(cliente03.conta.calcularSaldo());

 //# O resultado deverá apresentar um saldo de 250 e um limite disponível de 350