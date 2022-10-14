import "./Style.css";
import Cerebro from "./capa.png"
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import gsap from "gsap";
import ScrollHorizontal from "../ScrollHorizontal";
import IA from "./IA.png";

import { useEffect } from 'react'

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
                <p1 className="P1">INTELIGÊNCIA ARTIFICIAL</p1>
                <p2 className="P2">Causa Impactos Sociais, Econômicos e políticos.</p2>
            </div>


            <ScrollHorizontal titulo="IDEAÇÃO" text="Nesse processo, tivemos bastante ideias e projeções para nosso projeto, sempre tivemos a ideia de desenvolver uma IA, porém, discutimos diversos modelos de carros, placas, cores, etc. Essa parte de todo projeto é legal e inspirador, sempre idealizamos algo grandioso e todo o potencial que ele pode ter." />

            <ScrollHorizontal titulo="PROTOTIPAÇÃO" text="Podemos denominar essa parte como processo de adaptação, vemos que muitas de nossas ideias podem ser aplicadas, mas nem sempre como imaginamos, e o protótipo nos dá algo tangível do que realmente será nosso projeto." />

            <ScrollHorizontal titulo="DESAFIOS" text="ESSA PARTE É ATERRORIZANTE, só de lembrar das horas travando em uma coisa tão simples... Mas oque seria um projeto sem seus desafios? Com certeza não seria um projeto! Em particular, tivemos limitações na potência do equipamento, limitações técnicas e muitos, mais muitos problemas técnicos, nada que pode nos impedir, é claro!" />

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