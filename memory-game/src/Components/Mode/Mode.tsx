import React from 'react';
import './Mode.css';
import Card from '../Card/Card';
import { cardsLibrary } from '../../cardsLibrary';
import Menu from '../Menu/Menu';

export default function Mode({level}: Proptype) {

  if (level === 'menu') {
    return <Menu />
  }

  const cardsList = [...cardsLibrary];

  switch (level) {
    case 'easy': 
      cardsList.splice(0,7);
      break;
    case 'medium':
      cardsList.splice(0,3);
      break;
  }

  const expandedCardsList = [...cardsList,...cardsList];
  const randomizedCardsList = randomizeCards(expandedCardsList);
  const cards = randomizedCardsList.map(card => <Card id={card.id}/>)
  
  return (
    <main>
      {cards}
    </main>
  )
}

const randomizeCards = (cardsList:CardsList) => {
  const result = [];
  const selectedNumbers:number[] = [];
  
  while (selectedNumbers.length < cardsList.length) {
    let index = Math.floor(Math.random() * cardsList.length);
    if (selectedNumbers.includes(index)) {
      let i = 0;
      let size = selectedNumbers.length;

      while (i < cardsList.length && selectedNumbers.length === size) {
          if (!selectedNumbers.includes(i)) {
            selectedNumbers.push(i);
          } else {
            i++;
          }
      }
      index = i;
    } else {
      selectedNumbers.push(index);
    }
    result.push(cardsList[index]);
  }

  return result;

}



interface Proptype {
  level: String
}

interface Card {
  id: number,
  img: string,
  selected: boolean
}
type CardsList = Card[];