import { Conta } from "./conta";
import { Credito } from "./credito";
import { Debito } from "./debito";




export class ContaPoupanca extends Conta {

    private rentabilidadeMensal = 0.001;

    constructor(numero: string, rentabilidade: number) {
        super(numero);
        this.rentabilidadeMensal = rentabilidade;

    }

    get rentabilidade():number {
        return this.rentabilidadeMensal;
    }

    public depositar(valor: number): void {
        this.creditos.push(new Credito(valor, new Date()));
        this.mostrarAlert (`Valor de ${valor} creditado na conta Poupança ${this.numero}`);
        
    }
    public depositarCP(valor: number, data: Date) {
        this.creditos.push(new Credito(valor, data));
        this.mostrarAlert (`Valor de ${valor} creditado na conta Poupança ${this.numero}`);
        
    }


    public sacarCP(valor: number, data: Date) {

        let saldo = this.calcularSaldo();
        if(valor > saldo) {
            this.mostrarAlert(`Saldo indisponível `);
        }else {
            this.debitos.push(new Debito(valor, data));
            this.mostrarAlert('Saque da Poupança efetuado com sucesso.');
        }
        
        
    }

    public calcularRendimento() {

        let saldo = this.calcularSaldo();
        let rendimento = saldo * this.rentabilidadeMensal;
        
        
        return rendimento;
    }

    public calcularSaldo() {
        let saldoTotal: number = 0;
        this.creditos.forEach(e => {
            saldoTotal += e.valor;
        });

        this.debitos.forEach(e => {
            saldoTotal -= e.valor;
        })

        return saldoTotal;        
    }

    public mostrarSaldo() {
        let saldo = this.calcularSaldo();
        this.mostrarAlert(` Saldo da Conta Poupança nº ${this.numero} Atualizado: ${saldo}`);
    }

}
