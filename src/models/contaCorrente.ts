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
    
    
    public mostrarAlert(msg:string): void{
        return console.log(msg);
    }


    public depositar(valor: number) {
        this.creditos.push(new Credito(valor, new Date()));
        this.mostrarAlert(`Valor de ${valor} Creditado na conta Corrente ${this.numero}.`);
    }


    public sacar(valor: number) {

        let saldo = this.calcularSaldo();

        if(valor > saldo + this._limite) {
            this.mostrarAlert('Saldo indisponível.');
        }else{
            this.debitos.push(new Debito(valor, new Date()));
            this.mostrarAlert('Saque efetuado com sucesso.');
        };     
    }

    public transferir(conta: Conta, valor: number){

        let saldo = this.calcularSaldo();

        if(valor > saldo + this._limite) {
            this.mostrarAlert(`Saldo indisponível para tranferência.`);
        }else {
            this.debitos.push(new Debito(valor, new Date()));
            conta.creditos.push(new Credito(valor, new Date()));
            this.mostrarAlert(`Transferência no valor de ${valor} efetuada para conta ${conta.numero}`);
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
        return saldo;
    }


    public mostrarSaldo() {
        let saldo = this.calcularSaldo();
        this.mostrarAlert(
            ` Saldo da Conta Corrente nº ${this.numero} Atualizado: ${saldo}\n Limite da conta: ${this._limite}`)
    }
}

