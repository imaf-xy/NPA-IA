import "./Style.css";
import Cerebro from "./capa.png"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from "gsap";
import ScrollHorizontal from "../ScrollHorizontal";
import Desafios from "./Desafios.png"
import { useEffect } from 'react'

import Projeto from "./Projeto.png"

function Site() {

    /*       gsap.registerPlugin(ScrollTrigger)
    
        useEffect(() => {
            const components = document.querySelectorAll('#component')
            const containerTela = document.querySelector('#containerTela')
    
            gsap.to(components, {
                xPercent: -100 * (components.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: containerTela,
                    //pin: true,
                    //scrub: 1,
                    //snap: 1 / (components.length - 1),
                    //end: () => "+=" + containerTela.offsetWidth
                }
            })
        }, [])   */

    return (
        <div className="container">
            <div className="capa">
                <img className="img1" src={Cerebro} alt="imagem1" />
                <p className="P1">INTELIGÊNCIA ARTIFICIAL</p>
                <p className="P2">Causa Impactos Sociais, Econômicos e políticos.</p>
            </div>


            <ScrollHorizontal titulo="IDEAÇÃO" text="Nesse processo, tivemos bastante ideias e projeções para nosso projeto, sempre tivemos a ideia de desenvolver uma IA, porém, discutimos diversos modelos de carros, placas, cores, etc. Essa parte de todo projeto é legal e inspirador, sempre idealizamos algo grandioso e todo o potencial que ele pode ter." />

            <ScrollHorizontal titulo="PROTOTIPAÇÃO" text="Podemos denominar essa parte como processo de adaptação, vemos que muitas de nossas ideias podem ser aplicadas, mas nem sempre como imaginamos, e o protótipo nos dá algo tangível do que realmente será nosso projeto." />

            <ScrollHorizontal titulo="DESAFIOS" text="ESSA PARTE É ATERRORIZANTE, só de lembrar das horas travando em uma coisa tão simples... Mas oque seria um projeto sem seus desafios? Com certeza não seria um projeto! Em particular, tivemos limitações na potência do equipamento, limitações técnicas e muitos, mais muitos problemas técnicos, nada que pode nos impedir, é claro!" Imagem={Desafios}/>

            <div className="Projeto">
                <h1 className="Titulo">Projeto</h1>
                <img className="img2" src={Projeto} alt="" />
            </div>


            <div className="Time">
                <h2 className="Ntime">NOSSO TIME</h2>
            </div>

            <div className="Footer">

            <p className="text Q">Quem Somos <br/> <a className="link" href="https://www.instagram.com/esdras_albino/" target="_blank">esdras_albino</a> <br/> <a className="link" href="https://www.instagram.com/bezerra_filipe/" target="_blank">bezerra_filipe</a> <br/> <a className="link" href="https://www.instagram.com/igormatias1307/" target="_blank">igormatias1307</a></p>
        
              <p className="text S">Sobre Nós</p>
              
              <p className="text B">kadjjfjkjfdadsdsddasdsdaaddasskjjkfjkjkjdafdaf</p>

            </div>

            
        </div>


    );
}

export default Site;