import React from 'react'
import { TitleStyled, CurrencyInStyled, ConverterContainerStyled } from './styles'

export function Title({children}) {
    return <TitleStyled>{children}</TitleStyled>
}

export function ConverterContainer({children}) {
    return <ConverterContainerStyled>{children}</ConverterContainerStyled>
}

export function CurrencyIn({children, currencyData, currencyIn, selectCurrencyIn, ...restProps}) {

    let currencyAbbreviations = Object.keys(currencyData.rates)

    return (
        <CurrencyInStyled {...restProps} onChange={(event) => selectCurrencyIn(event.target.value)}>
            {currencyAbbreviations.map((currency, index) => {
                return <option value={restProps.CurrencyIn} key={index}>{currency}</option>
            })}
            {children}
        </CurrencyInStyled>
    )
}