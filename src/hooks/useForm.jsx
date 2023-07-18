import { isValidElement, useState } from "react";

export function useForm(steps) {
    // Step ou tela atual, começando da posição 0
    const [ currentStep, setCurrentStep ] = useState(0);

    // Função que recebe um índice e um evento para evitar o recarregamento da página
    function changeStep(i, e) {
       if(e) e.preventDefault();

        if (i < 0 || i >= steps.length) return;

        setCurrentStep(i);
    }
 
    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isFirstStep: currentStep === 0 ? true : false,
        isLastStep: currentStep + 1 === steps.length - 1 ? true : false,
        isCompleted: currentStep + 1 === steps.length ? true : false, 
    }
}