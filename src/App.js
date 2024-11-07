import React, { useState } from 'react';
import './App.css';

function App() {
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(17.82);
  const exchangeRate = 17.82099;

  const handleAmountChange = (e) => {


    const inputValue = e.target.value;
    setAmount(inputValue);
    setConvertedAmount((inputValue * exchangeRate).toFixed(2));
  };

  return (
    <div className="App">
      <h1>Currency Exchange</h1>
      <form>
        <div>
          <label>Tu envías exactamente</label>
          <div className="input-container">
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              min="1"
              step="1"
            />
            <select>
              <option value="USD">🇺🇸 USD</option>
            </select>
          </div>
        </div>

        <div>
          <p>$0 Percentage quotation fee</p>
          <p>$0 Fixed quotation fee</p>
        </div>

        <div>
          <p>{`$${exchangeRate} MXN = $1 USD`}</p>
          <small>*Válido por 10 minutos</small>
        </div>

        <div>
          <label>Recibes exactamente</label>
          <div className="input-container">
            <input
              type="text"
              value={convertedAmount}
              readOnly
            />
            <select>
              <option value="MXN">🇲🇽 MXN</option>
            </select>
          </div>
        </div>

        <p>Tu dinero llega en 15 minutos</p>
        <button type="button">Enviar ahora</button>
      </form>
    </div>
  );
}

export default App;
