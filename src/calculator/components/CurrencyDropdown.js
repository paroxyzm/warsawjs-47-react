import React from "react";

export default function CurrencyDropdown({allCurrencies, name, onChange, value}) {
    const id = `${name}Id`

    return allCurrencies ? (
            <select name={name} id={id} value={value}
                    onChange={onChange}>
                {allCurrencies.map((currency) => (
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        )
        : null
}
