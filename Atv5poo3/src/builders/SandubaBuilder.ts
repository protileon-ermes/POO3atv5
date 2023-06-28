import Molho from "../componentes/Molho";
import Pao from "../componentes/pao";
import Proteina from "../componentes/Proteina";
import Salada from "../componentes/salada";
import SanduicheType from "../componentes/SanduicheType";
import Sanduiche from "../produtos/sanduiche";
import IBuilder from "./IBuilder";

export default class SandubaBuilder{
    private sanduiche = new Sanduiche();

    reset():void{
        this.sanduiche = new Sanduiche();
    }

    getSanduiche() : Sanduiche{
        const result : Sanduiche = this.sanduiche;
        this.reset();
        return result;
    }

    addMolho(molho : Molho){
        this.sanduiche.addMolho(molho);
    }

    setStype(tipo : SanduicheType){
        this.sanduiche.stype= tipo;
    }

    setProteina(tipo : Proteina){
        this.sanduiche.proteina = tipo;
    }

    setPao(tipo : Pao){
        this.sanduiche.pao = tipo;
    }

    setSalada(tipo : Salada){
        this.sanduiche.salada = tipo;
    }
}