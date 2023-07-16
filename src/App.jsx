import './styles/app.scss';

// Components
import Header from './components/Header';
import ClientForm from './components/ClientForm';
import ConfirmationScreen from './components/ConfirmationScreen';
import FinishScreen from './components/FinishScreen';

// Icons
import { TbArrowBack, TbArrowForwardUp } from 'react-icons/tb';
import { BsCheckCircleFill } from "react-icons/bs";

// Hooks
import { useForm } from './hooks/useForm';

function App() {
  
  const fcomponents = [ <ClientForm />, <ConfirmationScreen />, <FinishScreen /> ];

  // Extraindo dos components
  const { currentStep, currentComponent, changeStep, isFirstStep, isLastStep, isCompleted } = useForm(fcomponents);

  return (
    <>
        <Header />     
        <div className="form-container">
          <p>Etapas: Preencha os dados, confira as informações+enviar, envio completo</p>
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
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <TbArrowBack />
                <span>Voltar</span>
              </button>
              }
              { /* Mudança de botão caso esteja no último step */
              !isCompleted ?
                !isLastStep ? (
                  <button type="submit">
                    <span>Avançar</span>
                    <TbArrowForwardUp />
                  </button>
                ) : (
                  <button type="submit">
                    <span>Enviar</span>
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