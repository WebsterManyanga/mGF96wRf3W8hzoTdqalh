import React, { useRef, useState } from 'react';
import './Card.css';
import { useGlobalState } from '../../state';

export default function Card({id, position, cardsList, incrementCount, count, resetCount} : Proptype) {

    const [flipCard, setFlipCard] = useState('flip_2');
    const [cardFlippedPosition, SetCardFlippedPosition] = useGlobalState('cardFlippedPosition');
    const [reset, setReset] = useGlobalState('reset');
    const resetRef = useRef(false);

    const flip = () => {
        flipCard === 'flip_1' ? setFlipCard('flip_2') : setFlipCard('flip_1');
        if (flipCard === 'flip_2') {
            incrementCount();
            if (cardFlippedPosition === -1) {
                SetCardFlippedPosition(position);
            } else {
                if (cardsList[cardFlippedPosition].id === id) {
                    console.log('score');
                } else {
                    console.log('fail');
                    setTimeout(
                        () => {
                            setFlipCard('flip_2');
                        }
                        , 1000);
                }
            }
        }

    }


    if (resetRef.current) {

        resetRef.current = false;
        resetCount();
        SetCardFlippedPosition(-1);
        setFlipCard('flip_2');
    }

    if (cardFlippedPosition === position && count === 2 && !resetRef.current) {
        resetRef.current = true;
        console.log(`closing: ${position}`);
        resetCount();
    }

    console.log(`count: ${count}`);
    console.log(`cardFlippedPositon: ${cardFlippedPosition}`);


  return (
    <div className='card' onClick={() => flip()}>
        <div className={`card__inner ${flipCard}`}>
            <div className="card__back">
                <div></div>
            </div>
            <div className="card__front">
                <h1>{id}</h1>
            </div>
        </div>
    </div>
  )
}

interface Proptype {
    id: number,
    position: number
}