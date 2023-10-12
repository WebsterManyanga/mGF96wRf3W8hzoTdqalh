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
  const cards = cardsList.map(card => <Card/>)
  
  return (
    <main>
      {cards}
    </main>
  )
}


interface Proptype {
  level: String
}