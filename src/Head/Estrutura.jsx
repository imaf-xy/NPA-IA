import "./Style.css";
import Cerebro from "./capa.png"

function Head(){
    return(
     <div className="capa">
        <img className="img1" src={Cerebro} alt="imagem1" />
        <figcaption1>INTELIGÊNCIA ARTIFICIAL</figcaption1>
        <figcaption2>Causa Impactos Sociais, Econômicos e políticos.</figcaption2>
     </div>
    );
}

export default Head;