import React from 'react'
import { TitleStyled, CurrencySelect, ConverterContainerStyled } from './styles'

export function Title({children}) {
    return <TitleStyled>{children}</TitleStyled>
}

export function ConverterContainer({children}) {
    return <ConverterContainerStyled>{children}</ConverterContainerStyled>
}

export function CurrencySelector({children, currencyData, currencyIn, called, ...restProps}) {

    let currencyAbbreviations = Object.keys(currencyData.rates)

    return (
        <CurrencySelect {...restProps} onChange={(event) => called(event.target.value)}>
            {currencyAbbreviations.map((currency, index) => {
                return <option value={restProps.currencyIn} key={index}>{currency}</option>
            })}
            {children}
        </CurrencySelect>
    )
}