import "./Style.css";
import Cerebro from "./capa.png"
import HorizontalScroll from 'react-scroll-horizontal'

function Site(){
    
    return(
        
     <div className="capa">
        <img className="img1" src={Cerebro} alt="imagem1" />
        <figcaption1>INTELIGÊNCIA ARTIFICIAL</figcaption1>
        <figcaption2>Causa Impactos Sociais, Econômicos e políticos.</figcaption2>
         
         <div className="Telas">
            <HorizontalScroll>
            <div className="pag 1">
            <h1>assasas</h1>
            </div>

            <div className="pag 2">
            <h1>assasas</h1>
            </div>

            <div className="pag 3">
            <h1>assasas</h1>
            </div>
            </HorizontalScroll>
        </div>
     </div>
     
     
    );
}

export default Site;