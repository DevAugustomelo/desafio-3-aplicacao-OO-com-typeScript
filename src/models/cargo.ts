





export class Cargo {
    private _nome: string;

    constructor(nome:string) {
        this._nome = nome;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(cargo: string) {
        this._nome = cargo;
    }


}
