import './styles/app.scss';

// Components
import Header from './components/Header';
import ClientForm from './components/ClientForm';
import ConfirmationScreen from './components/ConfirmationScreen';
import FinishScreen from './components/FinishScreen';

// Icons
import { BsCheckCircleFill } from "react-icons/bs";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

// Hooks
import { useForm } from './hooks/useForm';
import { useState } from 'react';

// Template de dados
const formTemplate = {
  idaVolta: "",
  adultos: "",
  criancas: "",
  bebes: "",
  origem: "",
  destino: "",
  dataPartida: "",
  dataVolta: "",
  name: "",
  email: "",
}

function App() {

  const [ data, setData ] = useState(formTemplate);

  // Função para atualização de dados ao passar a primeira tela
  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  // Componentes que variam dentro do container principal
  const fcomponents = [ 
  <ClientForm data={data} updateFieldHandler={updateFieldHandler}/>, 
  <ConfirmationScreen data={data} />, 
  <FinishScreen data={data} /> 
  ];

  // Extraindo dos components
  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep, isCompleted } = useForm(fcomponents);

  return (
    <>
        <Header />     
        <div className="form-container">
          {/* Ao apertar o botão Avançar faz mudar o currentStep e o currentComponent por consequência */}
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">
              { currentComponent }
            </div>
            <div className="actions">
              {/* Este botão faz o voltar o currentStep em um step*/}
              { isFirstStep || isCompleted ? 
              null
              : 
              <button type="button" onClick={(e) => changeStep(currentStep - 1, e)}>
                <IoMdArrowRoundBack />
                <span>Voltar</span>
              </button>
              }
              {/* Mudança de botão caso esteja no último step ou na tela de conclusão */
              !isCompleted ?
                !isLastStep ? (
                  <button type="submit">
                    <span>Avançar</span>
                    <IoMdArrowRoundForward />
                  </button>
                ) : (
                  <button type="submit" >
                    <span>Confirmar</span>
                    <BsCheckCircleFill />
                  </button>
                ) : null
              }
            </div>
          </form>
        </div>
    </>
  )
}

export default App
