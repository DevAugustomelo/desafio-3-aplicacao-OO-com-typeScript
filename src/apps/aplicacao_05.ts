import { Cliente } from "../models/cliente";
import { ContaPoupanca } from "../models/contaPoupanca";




// #Aplicação 5
// ○ Crie um cliente que possua uma ContaPoupanca
// ○ Defina a rentabilidadeMensal em 1%
// ○ Efetue 1 depósito por mês de 200 reais do dia 01/01/2022 até 31/12/2022
// ○ Efetue um saque de 100 reais no dia 05/03/2022
// ○ Efetue um saque de 200 reais no dia 08/07/2022
// ○ Calcule o saldo da conta poupança considerando os rendimentos





let cliente = new Cliente('444.555.666.70', 'Matheus', '99999999999', false, [new ContaPoupanca('8000-03', 0.01)]);

let conta = cliente.conta[0] as ContaPoupanca;

conta.depositar(400);

console.log(conta);





