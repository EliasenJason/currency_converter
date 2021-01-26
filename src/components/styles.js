import styled, { createGlobalStyle } from 'styled-components'
import backgroundImg from '../pictures/money.jpg'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    background-image: url(${backgroundImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`

export const TitleStyled = styled.h1`
    text-align: center;
    width: 50%;
    border: black 5px solid;
    margin: auto;
    padding: 1em;
    border-radius: 20px;
    background-color: black;
    color: green;
    font-size: 50px;
`
export const ConverterContainerStyled = styled.div`
    margin: 10%;
    width: 30%;
    height: 300px;
    background-color: white;
`
export const CurrencySelect = styled.select`
  
`

