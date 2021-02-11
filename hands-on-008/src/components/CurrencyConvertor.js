import React, { useState } from 'react';

const CurrencyConvertor = () => {
    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState("");

    const handleForm = (event) => {
        event.preventDefault();
        // console.log({ amount, currency });
        if (currency.toLowerCase() == "euro") {
            window.alert("Converting to Euro Amount is " + (amount*(88.31)));
        }
    }

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    }

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    }

    return (
        <div>
            <h2>Currency Convertor</h2>
            <form onSubmit={handleForm}>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" onChange={handleAmountChange} value={amount} />
                </div>

                <div>
                    <label htmlFor="currency">Currency</label>
                    <input type="text" id="currency" onChange={handleCurrencyChange} value={currency} />
                </div>
                <input type="submit" />
            </form>
        </div>
    );
}

export default CurrencyConvertor;