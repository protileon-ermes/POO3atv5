import Molho from "../componentes/Molho";
import Pao from "../componentes/pao";
import Proteina from "../componentes/Proteina";
import Salada from "../componentes/salada";
import SanduicheType from "../componentes/SanduicheType";
import Sanduiche from "../produtos/sanduiche";

export default interface IBuilder{
    reset() : void;
    getSanduiche() : Sanduiche;
    setStype(tipo : SanduicheType);
    setPao(tipo : Pao)
    setProteina(tipo : Proteina);
    setSalada(tipo : Salada);
    addMolho(molho : Molho);
}