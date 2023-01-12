import { Conta } from "./conta";
import { ContaPoupanca } from "./contaPoupanca";
import { Credito } from "./credito";
import { Debito } from "./debito";





export class ContaCorrente extends Conta {

    private _limite: number = 100;

    constructor(numero: string, limite?: number) {
        super(numero);
        // O limete poderá ser ou não instanciado com o valor desejado, 
        // caso não seja definido terá saldo inicial de 100.
        if(limite) {
            this._limite = limite};        
    }

    public get limite() {
        return this._limite;
    }

    public set limite(valor: number) {
        this._limite = valor;
    } 


    public depositar(valor: number) {
        this.creditos.push(new Credito(valor, new Date()))
        this._limite += valor;
        return `Valor de ${valor} Creditado na conta Corrente ${this.numero}.`
    }


    public sacar(valor: number) {

        if(valor > this._limite) {
            return `Saldo indisponível. ${this.calcularSaldo()}`
        }else{
            this.debitos.push(new Debito(valor, new Date()))
            this._limite -= valor;
            return 'Saque efetuado com sucesso.'
        };     
    }

    public transferir(conta: Conta, valor: number){

        if(valor > this._limite) {
            return `Saldo indisponível para tranferência. ${this.calcularSaldo()}`
        }else {
            this.debitos.push(new Debito(valor, new Date()))
            this._limite -= valor
            conta.creditos.push(new Credito(valor, new Date()))
            return `Transferência no valor de ${valor} efetuada para conta ${conta.numero}`
        }

    }

    public calcularSaldo() {

        let somaCreditos: number = 0;
        this.creditos.forEach(e =>{
            somaCreditos += e.valor
        });

        let somaDebitos: number = 0;
        this.debitos.forEach(e =>{
            somaDebitos += e.valor
        });

        const saldo: number = somaCreditos - somaDebitos;

        return ` Saldo da Conta Corrente nº ${this.numero} Atualizado: ${saldo}\n Limite de saque disponível: ${this._limite}`
    }
}

