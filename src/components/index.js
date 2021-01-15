import React from 'react'
import { TitleStyled, CurrencyInStyled, ConverterContainerStyled } from './styles'

export function Title({children}) {
    return <TitleStyled>{children}</TitleStyled>
}

export function ConverterContainer({children}) {
    return <ConverterContainerStyled>{children}</ConverterContainerStyled>
}

export function CurrencyIn({children, currencyTypes, ...restProps}) {
    let currencyAbbreviations = Object.keys(currencyTypes.rates)
    return (
        <CurrencyInStyled {...restProps}>
            {currencyAbbreviations.map(currency => {
                return <option value={currency}>{currency}</option>
            })}
            {children}
        </CurrencyInStyled>
    )
}