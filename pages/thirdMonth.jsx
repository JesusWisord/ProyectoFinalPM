import React, { useRef } from 'react';

import Header from '../components/Header';
import DjangoComponent from '../components/DjangoComponent'

const thirdMonth = () => {
  return(
    <>
      <Header />
      <div className="text-container">
        <h1 className="title">Tercer Mes</h1>    
        <p>
          El tercer mes fue mágico poder entrar más a los temas
          matemáticos (que me encantan). Python resultó ser un
          pain in the ass pero me abrió un mundo de posibilidades que
          ahora toca explotar por completo. Para ejemplificar este mes
          cree un pequeño y sencillo servidor con Django y cree una función que
          devuelve la "mano" para comenzar a jugar rummie.
          Esto con la intención de poder comenzar un programa para calcular
          el número de turnos máximos para poder hacer el primer movimiento
          o las probabilidades de obtener el peor juego posible.
        </p>
      </div>
      <div className="formulario__container">
        <DjangoComponent/>
      </div>
    </>
  )
}

export default thirdMonth;
