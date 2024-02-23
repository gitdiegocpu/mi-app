import React from "react";
import imagenesTestimonio from '../Imagenes/Testimonio-Maria.png'
/*import FotoMaria from '../Imagenes/Testimonio-Maria.png';*/
/*import '../hojas-de-estilo/Testimonio.css'; */

const Testimonio = ({ nombre, pais, imagen, cargo, empresa, testimonio }) => {
   return(
     <div className="testimonio">
       <img src={imagenesTestimonio} alt="Testimonio" />
        <h2>{nombre}</h2>
        <h3>{pais}</h3>
        <h4>{imagen}</h4>
        <h5>{cargo}</h5>
        <h6>{empresa}</h6>
        <p>{testimonio}</p>
     </div>
    )
}
   

export default Testimonio;