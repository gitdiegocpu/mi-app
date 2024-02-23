
import './App.css';
import Testimonio from './componentes/Testimonio.jsx';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp</h1>
        <Testimonio 
            nombre='Maria Gutierrez'
            pais='Guatemala'
            imagen=''
            cargo='Ingeniera de Software'
            empresa='Spotify'
            testimonio='La ingeniria en sistemas es mi pasion, lo encontre en el 6to grado
            desde entonces soy un amante a todo lo que sea computarizado, estoy totalmente
            agradecida con la vida por todo lo que hago.
            y si puedo ayudarte en algo, solo avisame aqui estare.'  />

        <Testimonio
            nombre=''
            pais=''
            imagen=''
            cargo=''
            empresa=''
            testimonio=''     
            
            
            />


         <Testimonio
            nombre=''
            pais=''
            imagen=''
            cargo=''
            empresa=''
            testimonio=''     
            
            
            />







      </div>
    </div>
  );
}

export default App;
