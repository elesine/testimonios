import './App.css';
import React from "react";
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
     
     <div className="contenedor-principal">
       <h1>Esto es lo que dicen nuestro alumnos:</h1>
  
       <Testimonio
        nombre="Juan Wang"
        pais="Italia"
        imagen="juan"
        cargo="Ingeniero de Software"
        empresa="Amazon"
        testimonio={<>Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. <strong> freeCodeCamp cambió mi vida.</strong></>
        } />
       <Testimonio
        nombre="Anna China"
        pais="Nigeria"
        imagen="anna"
        cargo="Ingeniera de Software"
        empresa="ChatDesk"
        testimonio={<><strong>freeCodeCamp fue la puerta de entrada a mi carrera
          </strong> como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.</>}/>
      
        <Testimonio
        nombre="Emma Bostian"
        pais="Suecia"
        imagen="emma"
        cargo="Ingeniera de Software"
        empresa="Spotify"
        testimonio={<>Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en <strong> freeCodeCamp me dio las habilidades</strong> y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.</>} />
     
        <Testimonio
        nombre="Emma Bostian"
        pais="Suecia"
        imagen="emma"
        cargo="Ingeniera de Software"
        empresa="Spotify"
        testimonio={<React.Fragment>Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en <span className="bold">freeCodeCamp me dio las habilidades</span> y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.</React.Fragment>}

        />
     </div>
    </div>
  );
}

export default App;
