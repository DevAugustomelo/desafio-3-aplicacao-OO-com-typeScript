




// # Aplicação 4
// ○ Crie um cliente que possua uma ContaCorrente
// ○ Efetue um depósito de 1000 nessa ContaCorrente
// ○ Crie um cliente que possua uma ContaPoupanca
// ○ Efetue um depósito de 1000 reais nessa conta Poupanca
// ○ Efetue uma transferência de 500 reais da ContaCorrente para ContaPoupanca


import { Cliente } from "../models/cliente";
import { ContaCorrente } from "../models/contaCorrente";
import { ContaPoupanca } from "../models/contaPoupanca";




let cliente04 = new Cliente('586.899.099.90', 'Augusto', '558199777-8899', true,
 [new ContaCorrente('5000-02', 200), new ContaPoupanca('8000-02', 0.01)]);

 let contaCC = cliente04.conta[0] as ContaCorrente;
 let contaCP = cliente04.conta[1] as ContaPoupanca;



contaCC.depositar(1000);


contaCP.depositar(1000);

contaCC.transferir(contaCP, 500);

contaCC.mostrarSaldo();

contaCP.mostrarSaldo();

