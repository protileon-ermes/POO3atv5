import IBuilder from "../builders/IBuilder";
import Molho from "../componentes/Molho";
import Pao from "../componentes/pao";
import Proteina from "../componentes/Proteina";
import Salada from "../componentes/salada";
import SanduicheType from "../componentes/SanduicheType";

export default class Diretor{
    constructor(private builder : IBuilder){}

    constructSanduiche1(){
        this.builder.setStype(SanduicheType.NORMAL);
        this.builder.setPao(Pao.BRIOCHE);
        this.builder.setProteina(Proteina.CARNE);
        this.builder.setSalada(Salada.TOMATE);
        this.builder.addMolho(new Molho("ketchup"));
        this.builder.addMolho(new Molho("maionese"));
    }
}