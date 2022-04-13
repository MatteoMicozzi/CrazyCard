import { useState } from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import UserDetails from './components/UserDetails'

function App() {
  const [filteredCards, setFilteredCards] = useState([])
  const [cards, setCards] = useState([
    {
      id: 1,
      type: 'Student Life',
      aprPercentage: 18.9,
      balanceTransferOfferMonthsDuration: 0,
      purchaseOfferMonthsDuration: 6,
      creditAvailableInPounds: 1200,
      userStatus: 'student',
      minimumIncome: NaN
    },
    {
      id: 2,
      type: 'Anywhere Card',
      aprPercentage: 33.9,
      balanceTransferOfferMonthsDuration: 0,
      purchaseOfferMonthsDuration: 0,
      creditAvailableInPounds: 300,
      userStatus: 'any',
      minimumIncome: 0
    },
    {
      id: 3,
      type: 'Liquid Card',
      aprPercentage: 33.9,
      balanceTransferOfferMonthsDuration: 12,
      purchaseOfferMonthsDuration: 6,
      creditAvailableInPounds: 3000,
      userStatus: 'any',
      minimumIncome: 16000
    }
  ])

  const cardsForUser = (userData) => {
    var userCards = [];

    cards.forEach((card) => {
      if (card.userStatus == userData.status.toLowerCase()) {
        userCards.push(card);
      } else if (card.type == 'Anywhere Card') {
        userCards.push(card);
      } else if (parseInt(userData.income) >= card.minimumIncome) {
        userCards.push(card);
      };
    });

    setFilteredCards(userCards);
  };

  return (
    <div className="App">
      <div className="Form">
        <Header />
        <UserDetails onUserData={cardsForUser}/>
      </div>
      <Cards cards={filteredCards}/>
    </div>
  );
}

export default App;
