




// # Aplicação 4
// ○ Crie um cliente que possua uma ContaCorrente
// ○ Efetue um depósito de 1000 nessa ContaCorrente
// ○ Crie um cliente que possua uma ContaPoupanca
// ○ Efetue um depósito de 1000 reais nessa conta Poupanca
// ○ Efetue uma transferência de 500 reais da ContaCorrente para ContaPoupanca


import { Cliente } from "../models/cliente";
import { ContaCorrente } from "../models/contaCorrente";
import { ContaPoupanca } from "../models/contaPoupanca";




let clienteCC = new Cliente('586.899.099.90', 'Augusto', '558199777-8899', true,
 new ContaCorrente('5000-02', 200))


 console.log(clienteCC.conta.depositar(1000));



 let clienteCP = new Cliente('444.555.666.70', 'Matheus', '99999999999', false, new ContaPoupanca('8000-02', 0.01))

console.log(clienteCP.conta.depositar(1000))

console.log(clienteCC.conta.transferir(clienteCP.conta, 500))

console.log(clienteCC.conta.calcularSaldo());


console.log("Saldo em conta Poupança: ", clienteCP.conta.calcularSaldo())

