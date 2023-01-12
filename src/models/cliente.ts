import { Conta } from "./conta";
import { Endereco } from "./endereco";
import { IUsuario } from "./iUsuario";
import { Pessoa } from "./pessoa";


export class Cliente extends Pessoa implements IUsuario {

    private _vip: boolean;
    private _conta: Conta[];
    // private _endereco: Array<Endereco> = [];
    private _endereco: Endereco[] = [];
   

    constructor(
        _cpf: string,
        _nome: string,
        _telefone: string,
        vip: boolean,
        conta: Conta[],

    ) {
        super(_cpf, _nome, _telefone);
        this._vip = vip;
        this._conta = conta;
    }

    public get vip():boolean{
        return this._vip;
    }  
    
    public get conta() {
        return this._conta;        
    }

   

    public get endereco() {
        return this._endereco;
    }


    public set vip(valor: boolean) {
        this._vip = valor;
    }

    public addConta(newConta: Conta) {

        this._conta.push(newConta);

    }

    public addEndereco(newEndereco: Endereco) {
        this._endereco.push(newEndereco);

    }

    public listarEnderecos(cliente: Cliente): void {
        var cont = 1;
        return cliente.endereco.forEach(e => {
            console.log(`\n Endereço: ${cont++}\n CEP: ${e.cep}\n Logradouro: ${e.logradouro}`);
            console.log(` Número: ${e.numero}\n Complemento: ${e.complemento}\n Cidade: ${e.cidade}\n UF: ${e.uf}`);
        });
    }


    public autenticar(): boolean {
        return true;
    }
}


