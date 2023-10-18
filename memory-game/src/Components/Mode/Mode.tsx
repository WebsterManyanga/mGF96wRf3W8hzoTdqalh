import React, { useState } from 'react';
import './Mode.css';
import Card from '../Card/Card';
import { cardsLibrary } from '../../cardsLibrary';
import Menu from '../Menu/Menu';
import { useGlobalState } from '../../state';

export default function Mode({level}: Proptype) {
  const [randomizedCardsList, setRandomizedCardsList] = useState([]);
  const [count, setCount] = useState(0);
  let currentCount = count;

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
    case 'hard': 
      break;
  }

  const expandedCardsList = [...cardsList,...cardsList];
  if (randomizedCardsList.length === 0) {
    setRandomizedCardsList(randomizeCards(expandedCardsList));
  } 
  const cards = randomizedCardsList.map((card, i) => <Card id={card.id} position={i} cardsList={randomizedCardsList} incrementCount={() => setCount(++currentCount)} count={count} resetCount={() => setCount(0)}/>)
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