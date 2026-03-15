import { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const resultado = peso && altura ? (peso / (altura * altura)).toFixed(2) : null;

  const getClassificacao = (imc) => {
    if (!imc) return '';
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc >= 18.5 && imc <= 24.9) return 'Peso comum';
    if (imc >= 25 && imc <= 29.9) return 'Sobrepeso';
    if (imc >= 30 && imc <= 34.9) return 'Obesidade grau 1';
    if (imc >= 35 && imc <= 39.9) return 'Obesidade grau 2';
    if (imc >= 40) return 'Obesidade grau 3';
  };

  return (
    <>
      <h1 className='titleHeader'>Calculadora IMC</h1>
      <div className="inputs">
        <input
          className='inputItem'
          placeholder="Peso (kg)"
          type="number"
          step="any"
          value={peso}
          onChange={e => setPeso(e.target.value)}
        />
        <input
          className='inputItem'
          placeholder="Altura (m)"
          type="number"
          step="any"
          value={altura}
          onChange={e => setAltura(e.target.value)}
        />
      </div>

      {resultado && (
        <p className="result">
          Seu IMC é {resultado}. {getClassificacao(resultado)}.
        </p>
      )}
    </>
  );
}

export default App