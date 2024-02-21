import React from "react";
import FotoMaria from '../Imagenes/Testimonio-Maria.png';

function Testimonio () {
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio"
                 src={FotoMaria}
                 alt="Foto de Maria"/>
                 <div className="contenedor-texto-textimonio">
                    <p className="nombre-testimonio"> Maria Bostian en Suecia </p>
                    <p className="cargo-testimonio"> Ingenieria de Software en Spotify </p>
                    <p className="texto-testimonio"> La ingeniria en sistemas es mi pasion, lo encontre en el 6to grado
                                                     desde entonces soy un amante a todo lo que sea computarizado, estoy totalmente
                                                     agradecida con la vida por todo lo que hago.
                                                     y si puedo ayudarte en algo, solo avisame aqui estare.</p>

                 </div>

        </div>

    );
}

export default Testimonio;