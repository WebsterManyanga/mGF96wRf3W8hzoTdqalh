import React, { useState } from 'react';
import './Mode.css';
import Card from '../Card/Card';
import { cardsLibrary } from '../../cardsLibrary';
import Menu from '../Menu/Menu';
import { CardsList } from '../../types';
import { useGlobalState } from '../../state';
import GameOver from '../GameOver/GameOver';
import Timer from '../Timer/Timer';
import Winner from '../Winner/Winner';
import { randomizeCards } from '../../randomizeCards';

export default function Mode({level}: Proptype) {
  const [randomizedCardsList, setRandomizedCardsList] = useGlobalState('randomizedCardsList');
  const [count, setCount] = useState(0);
  const [timeUp, setTimeUp] = useGlobalState('timeUp');
  const [win, setWin] = useGlobalState('win');
  const [scene, setScene] = useGlobalState('scene');
  const [prevScene, setPrevScene] = useGlobalState('previousScene');
  const [scoredId, setScoredId] = useGlobalState('scoredId');

  let currentCount = count;



  if (level === 'menu') {
    return <Menu />
  }

  if (scene === 'restart') {
    level = prevScene;
    setScene(prevScene);
    setPrevScene('');
    setTimeUp(false);
    setRandomizedCardsList(prev => randomizeCards(prev));
    setScoredId([]);
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
  const cards = randomizedCardsList.map((card, i) => <Card id={card.id} position={i} cardsList={randomizedCardsList} incrementCount={() => setCount(++currentCount)} count={count} resetCount={() => setCount(0)} img={card.img} />)
  return (
    <>
      <div className='level'>
        {timeUp && <GameOver />}
        {win && <Winner />}
        <div className={level}>
          {cards}
        </div>

      </div>
    </>
  )
}




interface Proptype {
  level: string
}
