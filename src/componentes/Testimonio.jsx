import React from "react";
import FotoMaria from '../Imagenes/Testimonio-Maria.png';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio () {
 /*const Testimonio = {nombre, pais, cargo, imagen, empresa, testimonio} */
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio"
                 src={FotoMaria}
                 alt="Foto de Maria"/>
                 <div className="contenedor-texto-textimonio">
                    <p className="nombre-testimonio"> {props.nobmre} , {props.pais} </p>
                    <p className="cargo-testimonio"> {props.cargo} , {props.empresa} </p>
                    <p className="texto-testimonio"> "{props.testimonio}" </p>

                 </div>

        </div>

    );
 
}

export default Testimonio;