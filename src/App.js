import React, { useState, useEffect } from 'react';

function CurrencyExchangeForm() {
  const [amount, setAmount] = useState(1);
  const [currencyFrom, setCurrencyFrom] = useState('USD');
  const [currencyTo, setCurrencyTo] = useState('MXN');
  const [exchangeRate, setExchangeRate] = useState(17.82099);
  const [fees, setFees] = useState({ percentage: 0, fixed: 0 });
  const [estimatedAmount, setEstimatedAmount] = useState(0);
  const [deliveryTime, setDeliveryTime] = useState(15);

  useEffect(() => {
    const totalFees = amount * fees.percentage + fees.fixed;
    setEstimatedAmount((amount - totalFees) * exchangeRate);
  }, [amount, exchangeRate, fees]);

  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value));
  };

  const handleCurrencyFromChange = (e) => {
    setCurrencyFrom(e.target.value);
  };

  const handleCurrencyToChange = (e) => {
    setCurrencyTo(e.target.value);
  };

  return (
    <div className="currency-exchange-form" style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Tu envías exactamente</h2>
      <input
        type="number"
        value={amount}
        onChange={handleAmountChange}
        min="1"
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <select value={currencyFrom} onChange={handleCurrencyFromChange} style={{ width: '100%', padding: '10px', marginTop: '10px' }}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
      </select>

      <div style={{ margin: '20px 0', color: 'gray' }}>
        <p>$0 Percentage quotation fee</p>
        <p>$0 Fixed quotation fee</p>
      </div>

      <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        <p>{exchangeRate} {currencyTo} = 1 {currencyFrom} <span style={{ color: 'green' }}>Balam Rate</span></p>
        <p style={{ fontSize: '12px', color: 'gray' }}>*Válido por 10 minutos</p>
      </div>

      <h2>Recibes exactamente</h2>
      <input
        type="number"
        value={estimatedAmount.toFixed(2)}
        readOnly
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      <select value={currencyTo} onChange={handleCurrencyToChange} style={{ width: '100%', padding: '10px', marginTop: '10px' }}>
        <option value="MXN">MXN</option>
        <option value="COP">COP</option>
        {/* Add more currencies as needed */}
      </select>

      <p style={{ color: 'gray', marginTop: '20px' }}>Tu dinero llega en {deliveryTime} minutos</p>

      <button style={{ width: '100%', padding: '15px', fontSize: '16px', backgroundColor: 'green', color: 'white', border: 'none', cursor: 'pointer' }}>
        Enviar ahora
      </button>
    </div>
  );
}

export default CurrencyExchangeForm;
