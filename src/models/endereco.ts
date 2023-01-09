





export class Endereco {
    constructor(
        private _cep: string,
        private _logradouro: string,
        private _numero: string,
        private _complemento: string,
        private _cidade: string,
        private _uf: string

    ) {}

    public get cep(): string {
        return this._cep;
    }

    public get logradouro(): string {
        return this._logradouro;
    }

    public get numero(): string {
        return this._numero;
    }

    public get complemento(): string {
        return this._complemento;
    }

    public get cidade(): string {
        return this._cidade;
    }

    public get uf(): string {
        return this._uf;
    }


    public set cep(newCep: string) {
        this._cep = newCep;
    }

    public set logradouro(newLog: string) {
        this._logradouro = newLog;
    }

    public set numero(newNum: string) {
        this._numero = newNum;
    }

    public set complemento(newComplem: string) {
        this._complemento = newComplem;
    }

    public set cidade(newCidade: string) {
        this._cidade = newCidade;
    }

    public set uf(newUf: string) {
        this._uf = newUf;
    }

}



