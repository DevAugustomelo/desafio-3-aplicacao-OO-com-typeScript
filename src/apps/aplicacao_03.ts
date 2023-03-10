




// # Aplicação 3
// ○ Crie um cliente que possua uma ContaCorrente
// ○ Efetue três depósitos de 100 nessa ContaCorrente
// ○ Efetue um saque de 50 reais nessa ContaCorrente
// ○ Imprima o valor do saldo dessa ContaCorrente

import { Cliente } from "../models/cliente";
import { ContaCorrente } from "../models/contaCorrente";



//# Neste exemplo não foi atribuido limite inicial para a conta corrente, logo terá o saldo inicial de 100.

let cliente03 = new Cliente('098.099.888-98', 'Augusto', '77899967-7898', false, [new ContaCorrente("5000-01")]);

let clienteCC = cliente03.conta[0] as ContaCorrente;


 clienteCC.depositar(100);
 clienteCC.depositar(100);
 clienteCC.depositar(100);




clienteCC.sacar(50);

 clienteCC.mostrarSaldo();

 //# O resultado deverá apresentar um saldo de 250 e um limite disponível de 100