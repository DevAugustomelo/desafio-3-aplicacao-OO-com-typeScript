




// # Aplicação 2
// ○ Crie um cliente e adicione 3 endereços a ele
// ○ Imprima os endereços desse cliente



import { Cliente } from "../models/cliente";
import { ContaCorrente } from "../models/contaCorrente";
import { Endereco } from "../models/endereco";




let cliente = new Cliente('098.099.888-98', 'Augusto', '77899967-7898', false,
 new ContaCorrente("5000-01",900))



 cliente.addEndereco(new Endereco('54777123','Rua do jasmim', '6863', 'nd', 'Paulista', 'Pe'));
 cliente.addEndereco(new Endereco('547873339','Av. Lindolfo Collor', '5577', 'nd', 'Recife', 'Pe'));
 cliente.addEndereco(new Endereco('53413020', 'Rua Vinte e Seis', '556', 'CASA A', 'Paulista', 'PE'));

cliente.listarEnderecos(cliente);

