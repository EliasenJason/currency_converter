import React from 'react'
import { TitleStyled, CurrencySelectStyled, ConverterContainerStyled, CurrencyInputStyled } from './styles'

export function Title({children}) {
    return <TitleStyled>{children}</TitleStyled>
}

export function ConverterContainer({children}) {
    return <ConverterContainerStyled>{children}</ConverterContainerStyled>
}

export function CurrencySelector({children, currencyData, currencyIn, called, ...restProps}) {

    let currencyAbbreviations = Object.keys(currencyData.rates)

    return (
        <CurrencySelectStyled {...restProps} onChange={(event) => called(event.target.value)}>
            {currencyAbbreviations.map((currency, index) => {
                return <option value={restProps.currencyIn} key={index}>{currency}</option>
            })}
            {children}
        </CurrencySelectStyled>
    )
}

export function CurrencyInput({children, setAmount, select}) {
    return (
        <CurrencyInputStyled value={select} onChange={(event) => setAmount(event.target.value)}>
            {children}
        </CurrencyInputStyled>
    )
}