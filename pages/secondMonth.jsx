import React, {useRef} from 'react';

import Header from '../components/Header';
import CreateElement from '../components/CreateElement';
import ReadElement from '../components/ReadElement';
import UpdateElement from '../components/UpdateElement';
import DeleteElement from '../components/DeleteElement';

const secondMonth = () => {
  return(
    <>
      <Header />
      <div className="text-container">
        <h1 className="title">Segundo Mes</h1>    
        <p>
          El Segundo mes comenzó a generar muchos más retos.
          A pesar de que la teoría la podía digerir fácilmente
          la práctica comenzó a dar golpes en la cabeza.
          En esta parte creo que la forma más explícita de mostrar
          el nuevo conocimiento es una pequeña muestra del concepto
          CRUD para Crear, leeR (Read), actUalizar (Update) y borrar (Delete)
          [me falló ahí jaja].
        </p>
      </div>
      <div className="formulario__container">
        <CreateElement />
        <ReadElement />
        <UpdateElement />
        <DeleteElement />
      </div>
    </>
  )
}

export default secondMonth;
