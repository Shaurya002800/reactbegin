import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo || {})

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to])
    }
  }

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault()
        convert()
      }}>
        <div>
          <InputBox
            label="From"
            amount={amount}
            currencyOption={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            // onAmountChange={(value) => setAmount(value)}
            selectCurrency={from}
            onAmountChange = {(amount) => setAmount(amount)}
          />
        </div>
        <div>
          <br />
          <button type="button" onClick={swap}>
            Swap
          </button>
          <br />
        </div>
        <div>
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOption={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />
        </div>
        <button type="submit">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </>
  )
}

export default App

