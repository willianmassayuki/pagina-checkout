import React, { useState } from 'react'
import { CurrentDate } from './CurrentDate'

const ClientForm = () => {

    const { inputRef } = CurrentDate();

    const [dataPartida, setDataPartida] = useState('');

  const handleDataPartidaChange = (event) => {
    const selectedDate = event.target.value;
    setDataPartida(selectedDate);
  };


  return (
    <div>   
        {/* Por padrão check em ida e volta */}
        <div className="form-control">
            <p>Escolha entre Ida ou Ida e volta:</p>
            <label htmlFor="ida">Ida</label>
            <input type="radio" name="ida-volta" id="ida" value="ida"/>
            <label htmlFor="ida-volta">Ida e volta</label>
            <input type="radio" name="ida-volta" id="ida-volta" value="ida-volta" defaultChecked/>
        </div>
        <div className="form-control">
            <p>Informe o número de passageiros:</p>
            <label htmlFor="adultos">Adultos:</label>
            <input type="number" name="adultos" id="adultos" min="1" max="10" defaultValue="1" required/>
            <label htmlFor="criancas">Crianças (Entre 2 a 11 anos):</label>
            <input type="number" name="criancas" id="criancas" min="0" max="10" defaultValue="0"/>
            <label htmlFor="bebes">Bebês (Até 2 anos):</label>
            <input type="number" name="bebes" id="bebes" min="0" max="10" defaultValue="0"/>
        </div>
        <div className="form-control">
            <label htmlFor="origem">Partindo de:</label>
            <input type="text" name="origem" id="origem" placeholder="Informe a origem" required/>
        </div>
        <div className="form-control">
            <label htmlFor="destino">Destino:</label>
            <input type="text" name="destino" id="destino" placeholder="Informe o destino" required/>
        </div>
        <div className="form-control">
            <label htmlFor="data-partida">Data de partida:</label>
            <input type="date" name="data-partida" id="data-partida" ref={inputRef} onChange={handleDataPartidaChange} required/>
        </div>
        <div className="form-control">
            <label htmlFor="data-volta">Data de volta:</label>
            <input type="date" name="data-volta" id="data-volta" min={dataPartida} required/>
        </div>
        <div className="form-control">
            <label htmlFor="name">Nome do passageiro principal:</label>
            <input type="text" name="name" id="name" placeholder="Nome completo" required/>
        </div>
        <div className="form-control">
            <label htmlFor="email">E-mail do passageiro principal:</label>
            <input type="email" name="email" id="email" placeholder="email@example.com" required/>
        </div>
    </div>
  )
}

export default ClientForm