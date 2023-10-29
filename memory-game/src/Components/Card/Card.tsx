import React, { useRef, useState } from 'react';
import './Card.css';
import { useGlobalState } from '../../state';

export default function Card({id, position, cardsList, incrementCount, count, resetCount} : Proptype) {

    const [flipCard, setFlipCard] = useState('flip_2');
    const [cardFlippedPosition, SetCardFlippedPosition] = useGlobalState('cardFlippedPosition');
    const [scoredId, setScoredId] = useGlobalState('scoredId');
    const resetRef = useRef(false);

    if (scoredId.length === cardsList.length / 2) {
        console.log('WINNER');
    } 
    const flip = () => {
            flipCard === 'flip_1' ? setFlipCard('flip_2') : setFlipCard('flip_1');
            if (flipCard === 'flip_2') {
                incrementCount();
                if (cardFlippedPosition === -1) {
                    SetCardFlippedPosition(position);
                } else {
                    if (cardsList[cardFlippedPosition].id === id) {
                        setScoredId(prev=> [...prev,id]);
                    } else {
                        setTimeout(
                            () => {
                                setFlipCard('flip_2');
                            }
                            , 1000);
                    }
                }
            } else {
                resetCount();
                SetCardFlippedPosition(-1);
            }


    }
    const result = () => {
            if (flipCard === 'flip_1') {
    
                return (
                    <div className={`card ${scoredId.includes(id) && 'poof'}`}>
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
            
            return (
                <div className={`card ${scoredId.includes(id) && 'poof'}`} onClick={() => flip()}>
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

    if (resetRef.current) {

        resetRef.current = false;
        resetCount();
        SetCardFlippedPosition(-1);
        if (!scoredId.includes(id)) {setTimeout(() => setFlipCard('flip_2'), 1000)};
    }

    if (cardFlippedPosition === position && count === 2 && !resetRef.current) {
        resetRef.current = true;
        resetCount();
    }

    const output = result();
    return output;
}

interface Proptype {
    id: number,
    position: number
    cardsList: Cards[]
}