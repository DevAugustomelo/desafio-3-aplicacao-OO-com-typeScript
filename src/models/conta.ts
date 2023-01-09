import { Credito } from "./credito";
import { Debito } from "./debito";



export abstract class Conta {
    
    private _numero: string;
    private _creditos: Credito[] = [];
    private _debitos: Debito[] = [];
    

    constructor(numero: string) {
        this._numero = numero;
    }

    public get numero(): string {
        return this._numero;
    }

    public get creditos(): Credito[] {
        return this._creditos;
    }

    public get debitos(): Debito[] {
        return this._debitos;
    }

    public depositar(valor: number) {
        this.creditos.push(new Credito(valor, new Date()))
        return `Valor de ${valor} Creditado.`
    }

    public sacar(valor: number) {}

    public calcularSaldo() {}

    public transferir(conta: Conta, valor: number) {}

    public calcularRendimento(dataInicial: string, dataFinal: string) {}


}




