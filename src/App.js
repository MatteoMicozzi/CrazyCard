import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [cards] = useState([
    {
      id: 1,
      cardType: 'Student Life',
      aprPercentage: 18.9,
      balanceTransferOfferMonthsDuration: 0,
      purchaseOfferMonthsDuration: 6,
      poundsCreditAvailable: 1200,
      selected: false
    },
    {
      id: 2,
      cardType: 'Anywhere Card',
      aprPercentage: 33.9,
      balanceTransferOfferMonthsDuration: 0,
      purchaseOfferMonthsDuration: 0,
      poundsCreditAvailable: 300,
      selected: false
    },
    {
      id: 3,
      cardType: 'Liquid Card',
      aprPercentage: 33.9,
      balanceTransferOfferMonthsDuration: 12,
      purchaseOfferMonthsDuration: 6,
      poundsCreditAvailable: 3000,
      selected: false
    }
  ])

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
