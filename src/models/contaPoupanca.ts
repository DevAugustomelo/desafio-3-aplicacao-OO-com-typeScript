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

    
    public depositar(valor: number) {
        this.creditos.push(new Credito(valor, new Date()))
        return `Valor de ${valor} creditado na conta Poupança ${this.numero}`
        
    }


    public sacar(valor: number) {

        let saldo = this.calcularSaldo()
        if(valor > saldo) {
            return `Saldo indisponível. Saldo atual: ${this.calcularSaldo()} `
        }else {
            this.debitos.push(new Debito(valor, new Date()))
            return 'Saque efetuado da Poupança com sucesso.'
        }
        
        
    }

    public calcularRendimento(dataInicial: string, dataFinal: string) {

        let rendimento = 0;
        this.creditos.forEach(e => {

            if(e.data >= dataInicial && e.data <= dataFinal) {
                
                rendimento += e.valor
            }
        })
        
        return console.log(rendimento);
    }

    public calcularSaldo() {
        let saldoTotal: number = 0;
        this.creditos.forEach(e => {
            saldoTotal += e.valor;
        });

        this.debitos.forEach(e => {
            saldoTotal -= e.valor;
        })

        return saldoTotal        
    }

}
