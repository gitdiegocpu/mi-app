
import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio.jsx';

function App(){
  return(
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos de freeCodeCamp</h1>
        <Testimonio
           nombre="Angelo Shawn"
           pais="Singapur"
           imagen="/Imagenes/Testimonio-Angelo.png"
           cargo="Ingeniero de Software"
           empresa="Amazon"
           testimonio="Da miedo cambiar de carrera, pero tuve la suerte de encontrar este anio lo que realmente me gusta, ya no es un trabajo mas, ya es lo que me gusta hacer todos los dias, encontrar nuevos retos es lo que mas me gusta, no es un trabajo, es mi Vida."
       />
       <Testimonio
           nombre="Maria Gutierrez"
           pais="Guatemala"
           imagen="/Imagenes/Testimonio-Maria.png"
           cargo="Ingeniera de Software"
           empresa="Amazon"
           testimonio="La ingeniria en sistemas es mi pasion, lo encontre en el 6to gradodesde entonces soy un amante a todo lo que sea computarizado, estoy totalmente agradecida con la vida por todo lo que hago. y si puedo ayudarte en algo, solo avisame aqui estare."
       />  
       <Testimonio
           nombre="Nicole Bostian"
           pais="Suecia"
           imagen="/Imagenes/Testimonio-Nicole.png"
           cargo="Ingenieria de Software"
           empresa="Spotify"
           testimonio="Siempre me gusto la musica, y debo admitirlo, tuve muchas entrevistas antes poder entrar a esta gran empresa, ahora se como se maneja todo industrial y musicalmente hablando soy afortunada de poder hacer las dos cosas que mas quiero a el mismo tiempo."  
       />          
      </div>
    </div>
  )
}


export default App;
