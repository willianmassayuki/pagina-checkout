import '../styles/components/confirmationScreen.scss';

import React from 'react'

const ConfirmationScreen = ({ data }) => {
  return (
    <div>
      <h1>Por favor, confirme seus dados</h1>
     
        <p><b>Ida e volta:</b> {data.idaVolta}</p>
        <p><b>Adultos:</b> {data.adultos}</p>
        <p><b>Crianças:</b> {data.criancas}</p>
        <p><b>Bebês:</b> {data.bebes}</p>
        <p><b>Origem:</b> {data.origem}</p>
        <p><b>Destino:</b> {data.destino}</p>
        <p><b>Data de partida:</b> {data.dataPartida}</p>
        <p><b>Data de volta:</b> {data.dataVolta}</p>
        <p><b>Nome do passageiro principal:</b> {data.name}</p>
        <p><b>E-mail do passageiro principal:</b> {data.email}</p>
    </div>
  )
}

export default ConfirmationScreen
