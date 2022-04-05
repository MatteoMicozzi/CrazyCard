const Card = ({ card }) => {
  return (
    <div className='Card'>
      <h2>{card.type}</h2>
      <p>Apr: {card.aprPercentage}%</p>
      <p>Balance Transfer Offer Duration: {card.balanceTransferOfferMonthsDuration} Months</p>
      <p>Purchase Offer Duration: {card.purchaseOfferMonthsDuration} Months</p>
      <p>Credit Available: £{card.creditAvailableInPounds}</p>
    </div>
  )
}

export default Card
