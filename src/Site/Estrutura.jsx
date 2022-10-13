import "./Style.css";
import Cerebro from "./capa.png"
import HorizontalScroll from 'react-scroll-horizontal'
import IA from "./IA.png";

function Site(){
    
    return(
        <div>
        
        <div className="capa">
        <img className="img1" src={Cerebro} alt="imagem1" />
        <p1 className="P1">INTELIGÊNCIA ARTIFICIAL</p1>
        <p2 className="P2">Causa Impactos Sociais, Econômicos e políticos.</p2>
        </div> 
        
         <div className="Telas">
        
            
            <HorizontalScroll>
            
            <div className="pag a1">
            <h1>IDEAÇÃO</h1>
            <img className="imgI" src="" alt="" />
            <p className="text1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            
         
            </div>

            
            <div className="pag b2">
            <h1>PROTOTIPAÇÃO</h1>
            <img className="imgP" src="" alt="" />
            <p className="text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            
            <div className="pag c3">
            <h1>DESAFIOS </h1>
            <img className="imgD" src="" alt="" />
            <p className="text3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            </HorizontalScroll>
        </div>

        
        <div className="Projeto">

        <h1 className="Titulo">Projeto</h1>
        <img className="img2" src="" alt="" />
        </div>

        
        <div className="Time">
            <h2 className="Ntime">NOSSO TIME</h2>
        </div>

     </div>
     
     
    );
}

export default Site;