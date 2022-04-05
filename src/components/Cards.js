const Cards = ({ cards }) => {
  return (
    <>
      {cards.map((card) => (
        <div className='Card' key={card.id}>{card.type}</div>
      ))}
    </>
  )
}

export default Cards
