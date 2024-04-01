import React from "react";
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {
   
    return(
     <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={props.imagen}/>
        <div className="contenedor-texto-testimonio">
            <p className="nombre-testimonio"> <strong>{props.nombre}</strong> en {props.pais}</p>
            <p className="cargo-testimonio"> {props.cargo} en <strong>{props.empresa}</strong></p>
            <p className="texto-testimonio"> {props.testimonio}</p>
        </div>
     </div>
    )
}


export default Testimonio;



/*import imagenesTestimonio from '../Imagenes/Testimonio-Maria.png'*/

/*import imagenesTestimonio from '../Imagenes/Testimonio-Angelo.png'*/
/*import FotoMaria from '../Imagenes/Testimonio-Maria.png';*/
/*import '../hojas-de-estilo/Testimonio.css'; */

/*const Testimonio = ({ nombre, pais, imagen, cargo, empresa, testimonio }) => {
   return(
     <div className="testimonio">
       <img src={imagenesTestimonio} alt={nombre} />
        <h2>{nombre}</h2>
        <h3>{pais}</h3>
        <h4>{imagen}</h4>
        <h5>{cargo}</h5>
        <h6>{empresa}</h6>
        <p>{testimonio}</p>
     </div>
    );
};*/
   
