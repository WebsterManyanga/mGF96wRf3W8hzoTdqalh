import React, { useRef, useState } from 'react';
import './Card.css';
import { useGlobalState } from '../../state';
import cardBg from '../../assets/background.jpg';
import { CardsList } from '../../types';

export default function Card({id, position, cardsList, incrementCount, count, resetCount, img} : Proptype) {

    const [flipCard, setFlipCard] = useState('flip_2');
    const [cardFlippedPosition, SetCardFlippedPosition] = useGlobalState('cardFlippedPosition');
    const [scoredId, setScoredId] = useGlobalState('scoredId');
    const [win, setWin] = useGlobalState('win');
    const [timeUp, setTimeUp] = useGlobalState('timeUp');
    const resetRef = useRef(false);
    const[scene, setScene] = useGlobalState('scene');

    if (scoredId.length === cardsList.length / 2 && !win) {
        setWin(true);
    } 

    if (timeUp && flipCard === 'flip_1') {
        resetRef.current = true;
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
                        setTimeout(() => setFlipCard('flip_2'), 2000)

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
        let poof = '';
        if (scoredId.includes(id)) {
            poof = 'poof';
        }

        
            if (flipCard === 'flip_1') {  
                return (
                    <div className={`card ${poof}`}>
                    <div className={`card__inner ${flipCard} `}>
                        <div className="card__back">
                            <img src={cardBg} alt="card" />
                        </div>
                        <div className="card__front">
                            <img src={img} alt="card" />
                        </div>
                    </div>
                </div>        
                )
            }
            
            return (
                <div className={`card ${poof}`} onClick={() => flip()}>
                <div className={`card__inner ${flipCard}`}>
                    <div className="card__back">
                    <img src={cardBg} alt="card" />
                    </div>
                    <div className="card__front">
                        <img src={img} alt="" />
                    </div>
                </div>
                </div>
        
            )
    }

    if (resetRef.current) {

        resetRef.current = false;
        resetCount();
        SetCardFlippedPosition(-1);
        if (!scoredId.includes(id)) {
            setTimeout(() => setFlipCard('flip_2'), 1000)
        } else {
            setTimeout(() => setFlipCard('flip_2'), 2000)
        }
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
    position: number,
    cardsList: CardsListgit ,
    incrementCount: () => void,
    count: number,
    resetCount: () => void,
    img: string
}