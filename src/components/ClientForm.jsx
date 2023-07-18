import React, { useState } from 'react'
import { CurrentDate } from './CurrentDate'

const ClientForm = ({ data, updateFieldHandler }) => {

    const { inputRef } = CurrentDate();  
    const [iv, setIv] = useState('');  
    const [dataPartida, setDataPartida] = useState('');

    const handleChange = (event) => {
        const selectedIv = event.target.value;
        setIv(selectedIv)
        updateFieldHandler("idaVolta", selectedIv)
    };

    const handleDataPartidaChange = (event) => {
        const selectedDate = event.target.value;
        setDataPartida(selectedDate);
        updateFieldHandler("dataPartida", selectedDate)
    };

    return (
    <div>   
        {/* Integridade padrão por ser um input do tipo radio. Obrigatório uma das opções */}
        <div className="form-control">
            <h4>Escolha entre Ida ou Ida e volta:</h4>
            <div className="input-radius-group">
                <div>
                    <label htmlFor="ida">Ida </label>
                    <input type="radio" name="ida-volta" id="ida"
                    value="Ida"
                    checked={ iv === 'Ida'}
                    onChange={(e) => handleChange(e)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="ida-volta">Ida e volta </label>
                    <input type="radio" name="ida-volta" id="ida-volta"
                    value="Ida e volta"
                    checked={ iv === 'Ida e volta'}
                    onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
        </div>
        {/* Range de pessoas limitados por min e max, além de aceitar apenas número por ser tipo number. Obrigatório apenas adultos */}
        <div className="form-control">
            <h4>Informe o número de passageiros:</h4>
            <label htmlFor="adultos">Adultos: </label>
            <input type="number" name="adultos" id="adultos" min="1" max="10" required
                value={data.adultos || "0"}
                onChange={(e) => updateFieldHandler("adultos", e.target.value)}
            />
            <label htmlFor="criancas">Crianças (Entre 2 a 11 anos): </label>
            <input type="number" name="criancas" id="criancas" min="0" max="10" 
                value={data.criancas || "0"}
                onChange={(e) => updateFieldHandler("criancas", e.target.value)}
            />
            <label htmlFor="bebes">Bebês (Até 2 anos): </label>
            <input type="number" name="bebes" id="bebes" min="0" max="10"
                value={data.bebes || "0"}
                onChange={(e) => updateFieldHandler("bebes", e.target.value)}
            />
        </div>
        {/* Entrada de texto para origem e destino livre. Possível integração para escolha entre opções. Obrigatório */}
        <div className="form-control">
            <label htmlFor="origem">Partindo de: </label>
            <input type="text" name="origem" id="origem" placeholder="Informe a origem" required
                value={data.origem || ""}
                onChange={(e) => updateFieldHandler("origem", e.target.value)}
            />
        </div>
        <div className="form-control">
            <label htmlFor="destino">Destino: </label>
            <input type="text" name="destino" id="destino" placeholder="Informe o destino" required
                value={data.destino || ""}
                onChange={(e) => updateFieldHandler("destino", e.target.value)}
            />
        </div>
        { /* Seleção de data no calendário, seleção de data de origem começando a partir do dia atual, e de destino a partir da data de origem. Obrigatório */}
        <div className="form-control">
            <label htmlFor="data-partida">Data de partida: </label>
            <input type="date" name="data-partida" id="data-partida" ref={inputRef} onChange={handleDataPartidaChange} required
                value={data.dataPartida || ""}
            />
        </div>
        <div className="form-control">
            <label htmlFor="data-volta">Data de volta: </label>
            <input type="date" name="data-volta" id="data-volta" min={dataPartida} required
                value={data.dataVolta || ""}
                onChange={(e) => updateFieldHandler("dataVolta", e.target.value)}
            />
        </div>
        { /* Obrigatório */ }
        <div className="form-control">
            <label htmlFor="name">Nome do passageiro principal: </label>
            <input type="text" name="name" id="name" placeholder="Nome completo" required
                value={data.name || ""}
                onChange={(e) => updateFieldHandler("name", e.target.value)}
            />
        </div>
        { /* Entrada de email com validação de formato. Obrigatório */ }
        <div className="form-control">
            <label htmlFor="email">E-mail do passageiro principal: </label>
            <input type="email" name="email" id="email" placeholder="email@example.com" required
                value={data.email || ""}
                onChange={(e) => updateFieldHandler("email", e.target.value)}
            />
        </div>
    </div>
  )
}

export default ClientForm