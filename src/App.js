import React from 'react';
import {GlobalStyle} from './components/styles'
import {Title, CurrencyIn, ConverterContainer} from './components'

function App() {
  const [currency] = React.useState({"rates":{"CAD":1.5381,"HKD":9.4005,"ISK":156.6,"PHP":58.232,"DKK":7.4393,"HUF":359.57,"CZK":26.19,"AUD":1.5642,"RON":4.8738,"SEK":10.1059,"IDR":17026.94,"INR":88.6625,"BRL":6.3888,"RUB":89.09,"HRK":7.569,"JPY":126.21,"THB":36.396,"CHF":1.0805,"SGD":1.609,"PLN":4.5379,"BGN":1.9558,"TRY":8.9492,"CNY":7.8409,"NOK":10.3108,"NZD":1.6853,"ZAR":18.4147,"USD":1.2124,"MXN":24.0418,"ILS":3.8095,"GBP":0.88943,"KRW":1330.37,"MYR":4.8932},"base":"EUR","date":"2021-01-14"})

  // React.useEffect(()=> {
  //   fetch('https://api.exchangeratesapi.io/latest')
  //     .then(response => response.json())
  //     .then(data => setCurrency(data))
  // },[])

  console.log(currency)

  return (
    <>
      <GlobalStyle />
      <Title>Amazing Currency Converter testing!</Title>
      <ConverterContainer>
        <CurrencyIn currencyTypes={currency}></CurrencyIn>
      </ConverterContainer>
    </>
  );
}

export default App;
