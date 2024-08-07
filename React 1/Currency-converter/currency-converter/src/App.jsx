import { useState } from 'react'
import { InputBox } from './Compunents'
import './App.css'
import useCurrencyInfo from './CustomHook/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currancyInfo = useCurrencyInfo(from)
  // const options = Object.keys(currancyInfo)
  const options = currancyInfo ? Object.keys(currancyInfo) : [];
  
  
  const SwapInputs = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  // let backgroundImage = "https://unsplash.com/photos/100-us-dollar-bill-YVnvtMA2mok";
  // let backgroundImage = "";
  const convert = () => {
    console.log(amount)
    setConvertedAmount(amount * currancyInfo[to])
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center 
      items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1591033594798-33227a05780d?q=80&w=1359&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto 
        border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                selectCurrency={from}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChange={(amount)=>setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 
                -translate-y-1/2 border-2 border-white ro unded-md 
                bg-red-600 text-white px-2 py-0.5"
                onClick={SwapInputs}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="to"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable

              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600  
            text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

}

export default App
