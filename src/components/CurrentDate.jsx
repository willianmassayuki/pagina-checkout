import React, { useEffect, useRef } from 'react';

export function CurrentDate() {
  const inputRef = useRef(null);

  useEffect(() => {
    const inputDate = inputRef.current;

    const dataAtual = new Date();
    const dataFormatada = dataAtual.toISOString().split('T')[0];

    inputDate.setAttribute('min', dataFormatada);
  }, []);

  return {
    inputRef
  }
}