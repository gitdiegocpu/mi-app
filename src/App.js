
import React from 'react';
import './App.css';
import Testimonio from './componentes/Testimonio.jsx';

const App = () => {
  return (
    <div className="App">
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
      <div className='contenedor-principal'>
      
       {testimonios.map((testimonio, index) => (
         <Testimonio
           key={index}
           nombre={testimonio.nombre}
           pais={testimonio.pais}
           imagen={testimonio.imagen}
           cargo={testimonio.cargo}
           empresa={testimonio.empresa}
           testimonio={testimonio.testimonio}
         />
        ))}
      
        

        const testimonios = [

          {
            nombre='Maria Gutierrez',
            pais='Guatemala',
            imagen='Foto_Maria',
            cargo='Ingeniera de Software',
            testimonios = 'La ingeniria en sistemas es mi pasion, lo encontre en el 6to gradodesde entonces soy un amante a todo lo que sea computarizado, estoy totalmente agradecida con la vida por todo lo que hago. y si puedo ayudarte en algo, solo avisame aqui estare.', 
            empresa='Spotify',
          },
          

          {
            nombre='Angelo Shawn',
            pais='Singapur',
            imagen='Foto_Angelo',
            cargo='Ingeniero de Software',
            testimonio='Da miedo cambiar de carrera, pero tuve la suerte de encontrar este anio lo que realmente me gusta, ya no es un trabajo mas, ya es lo que me gusta hacer todos los dias, encontrar nuevos retos es lo que mas me gusta, no es un trabajo, es mi Vida.', 
            empresa='Amazon'
               
          },


          {
            nombre='Nicole Bostian',
            pais='Suecia',
            imagen='Foto_Nicole',
            cargo='Ingenieria de Software',
            testimonio='Siempre me gusto la musica, y debo admitirlo, tuve muchas entrevistas antes poder entrar a esta gran empresa, ahora se como se maneja todo industrial y musicalmente hablando soy afortunada de poder hacer las dos cosas que mas quiero a el mismo tiempo.', 
            empresa='Spotify'
               
          }

        ];


      </div>
    </div>
  );
}

export default App;
