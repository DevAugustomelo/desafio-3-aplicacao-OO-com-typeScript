import { Cargo } from "./cargo";
import { IUsuario } from "./iUsuario";
import { Pessoa } from "./pessoa";



export class Funcionario extends Pessoa implements IUsuario{
  private _cargo: Cargo[];

  constructor(
    _cpf: string,
    _nome: string,
    _telefone: string,
    private _salario: number,
    cargo: Cargo[]
  ) {
    super(_cpf, _nome, _telefone);
    this._cargo = cargo;
  }


  public get salario(): number {
    return this._salario;
  }

  public get cargo() {
    return this._cargo  
  }

  set salario(newSalario: number) {
    this._salario = newSalario;
  }

  // public set cargo(novoCargo: Cargo[]) {
  //   this._cargo = novoCargo;
  // }


  public addCargo(newCargo: Cargo) {
    this._cargo.push(newCargo)
  }

  public removerCargo(nome: string) {
  
  }
  
  autenticar(): boolean {
    return true 
  }
}



