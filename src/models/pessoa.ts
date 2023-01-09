




export abstract class Pessoa {

    constructor(
    private _cpf: string,
    private _nome: string,
    private _telefone: string) {}


    public get cpf(): string {
        return this._cpf; 
    }

    public get nome (): string {
        return this._nome;
    }

    public get telefone(): string {
        return this._telefone;
    }

    public set cpf(cpf: string) {
        this._cpf = cpf;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public set telefone(tel: string) {
        this._telefone = tel;
    }
}

