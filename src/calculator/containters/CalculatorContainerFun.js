import React, {useCallback, useEffect, useState} from 'react';
import CurrencyDropdown from "../components/CurrencyDropdown";

const getCurrencyUrl = (base, target) => {
    return `https://api.ratesapi.io/api/latest?base=${base}&symbols=${target}`
}

const allCurrenciesUrl = `https://api.ratesapi.io/api/latest?base=USD`;

export function CalculatorContainerFun() {
    const [amount, setAmount] = useState('')
    const [baseCurrency, setBaseCurrency] = useState('PLN')
    const [targetCurrency, setTargetCurrency] = useState('USD')
    const [allCurrencies, setAllCurrencies] = useState(['USD', 'PLN'])
    const [converted, setConverted] = useState(0)
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(getCurrencyUrl(baseCurrency, targetCurrency))
            .then((r => r.json()))
            .then(({rates}) => {
                const rate = rates[targetCurrency];
                setConverted(Number(amount) * Number(rate))
            })
    }

    useEffect(() => {
            fetch(allCurrenciesUrl)
                .then((r => r.json()))
                .then(({rates}) => {
                    setAllCurrencies(Object.keys(rates))
                })
        }
        , [])

    const handleAmountChange = useCallback((event) => {
            setAmount(Number(event.target.value))
        },
        []
    )
    const handleBaseCurrencyChange = useCallback((event) => {
            setBaseCurrency(event.target.value)
        },
        []
    )

    const handleTargetCurrencyChange = useCallback((event) => {
        setTargetCurrency(event.target.value)
    }, [])
    return (
        <div>
            <form onSubmit={handleSubmit}>
                Wprowadziłeś: {amount} {baseCurrency} <br/>
                <input type="number" placeholder={'amount'} value={amount}
                       onChange={handleAmountChange}/>
                <CurrencyDropdown
                    name={'base'}
                    allCurrencies={allCurrencies}
                    onChange={handleBaseCurrencyChange}
                    value={baseCurrency}
                />

                <CurrencyDropdown
                    name={'target'}
                    onChange={handleTargetCurrencyChange}
                    allCurrencies={allCurrencies}
                    value={targetCurrency}
                />

                <button type='submit'>Submit</button>
            </form>
            Po konwersji:
            {converted}
        </div>
    )
}

