import React from 'react'
import "./Style.css";


export default function ScrollHorizontal(props) {
    return (

        <div className="pag"> 
            <h1>{props.titulo}</h1>
            <div className='flex'>
                <img className="imgI" src={props.Imagem} alt="" />
                <p className="text1">{props.text}</p>
            </div>
        </div>

    )
}
