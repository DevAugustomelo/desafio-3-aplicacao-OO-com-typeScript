




// #Aplicação 1
// Crie dois funcionários do banco, um gerente e um atendente.

import { Cargo } from "../models/cargo";
import { Funcionario } from "../models/funcionario";


const jose = new Funcionario('055.999.777-90', 'José Augusto', '558199976-8777', 14900.87, [new Cargo("Gerente")]);

const maria = new Funcionario('067.888.555-80', 'Maria Gomes', '558699034-8909', 3500.67, [new Cargo('Atendente')]);




let mostrarCargoAtual = function(nome: Funcionario) {
    let result: string = '';
    nome.cargo.forEach(e => {
        result = e.nome;

    }); return result
}



console.log(`Nome: ${jose.nome} \nCargo: ${mostrarCargoAtual(jose)} \nSalário: ${jose.salario}` );

console.log("===================");

console.log(`Nome: ${maria.nome} \nCargo: ${mostrarCargoAtual(maria)} \nSalário: ${maria.salario}` );


