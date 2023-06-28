import Molho from "../componentes/Molho";
import Pao from "../componentes/pao";
import Proteina from "../componentes/Proteina";
import Salada from "../componentes/salada";
import SanduicheType from "../componentes/SanduicheType";

export default class Sanduiche {
    private _molho : Molho[] = [];
    private _pao : Pao;
    private _proteina : Proteina;
    private _salada : Salada;
    private _stype : SanduicheType

    public addMolho(molho : Molho){
        this._molho.push(molho);
    }
    public get Molho() : Molho[]{
        return this._molho;
    }

    public get Stype() : SanduicheType{
        return this._stype;
    }
    public set Stype(tipo : SanduicheType){
        this._stype = tipo;
    }

    public get Pao() : Pao{
        return this._pao;
    }
    public set Pao(tipo : Pao){
        this._pao = tipo;
    }

    public get Proteina() : Proteina{
        return this._proteina;
    }
    public set Proteina(tipo : Proteina){
        this._proteina = tipo;
    }

    public get Salada() : Salada{
        return this._salada;
    }
    public set Salada(tipo : Salada){
        this._salada = tipo;
    }



    
}