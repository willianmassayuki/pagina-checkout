import '../styles/components/finishScreen.scss'
import React from 'react'
import { BsCheck2Circle } from 'react-icons/bs'

const FinishScreen = ({ data }) => {
  return (
    <div className='finish-container'>
      <h1>Envio de dados concluído!</h1>
      <BsCheck2Circle /> 
    <p>Obrigado pela preferência, {data.name}!</p>
    <p>Entraremos em contato o mais rápido possível.</p>
    </div>
  )
}

export default FinishScreen
