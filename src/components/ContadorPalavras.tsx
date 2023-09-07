import React, { useState } from 'react';
import InputField from './InputField';

const ContadorPalavras = () => {

  const [frase, setFrase] = useState<string>('');
  const [resultado, setResultado] = useState<number | string>('');

  const contaPalavras = () => {
    if (frase === '' || frase === ' ') {
      return (
        setResultado(`A frase contem ${0} palavras.`)
      )
    }
    const fraseSemEspaco = frase.trim();
    const palavras = fraseSemEspaco.split(' ');
    setResultado(`A frase contem ${palavras.length} palavra${palavras.length > 1 ? 's' : ''}`)
    setFrase('')
  }

  return (
    <section className='grid bg-cor3 p-5 rounded-lg gap-4'>
      <h1 className='text-3xl text-center font-bold text-cor1'>Contador de Palavras</h1>
      <InputField
        label="Digite uma frase:"
        type="text"
        value={frase}
        placeholder='Insira sua frase aqui'
        onChange={setFrase}
      />
      <button className='py-3 px-6 bg-cor1 rounded-md text-cor4 text-lg'
        onClick={contaPalavras}
      >
        Contar Palavras
      </button>
      <p className='text-center text-cor4'>{resultado}</p>
    </section>
  )
}

export default ContadorPalavras;
