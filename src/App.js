import { useState } from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import UserDetails from './components/UserDetails'

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      type: 'Student Life',
      aprPercentage: 18.9,
      balanceTransferOfferMonthsDuration: 0,
      purchaseOfferMonthsDuration: 6,
      creditAvailableInPounds: 1200,
      selected: false
    },
    {
      id: 2,
      type: 'Anywhere Card',
      aprPercentage: 33.9,
      balanceTransferOfferMonthsDuration: 0,
      purchaseOfferMonthsDuration: 0,
      creditAvailableInPounds: 300,
      selected: false
    },
    {
      id: 3,
      type: 'Liquid Card',
      aprPercentage: 33.9,
      balanceTransferOfferMonthsDuration: 12,
      purchaseOfferMonthsDuration: 6,
      creditAvailableInPounds: 3000,
      selected: false
    }
  ])

const cardsForUser = (userData) => {
  console.log(userData)
}

  return (
    <div className="App">
      <div className="Form">
        <Header />
        <UserDetails onUserData={cardsForUser}/>
      </div>
      <Cards cards={cards}/>
    </div>
  );
}

export default App;
