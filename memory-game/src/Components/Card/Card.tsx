import React, { useState } from 'react';
import './Card.css';

export default function Card({id} : Proptype) {

    const [flipCard, setFlipCard] = useState('');

    const flip = () => {
        if (!flipCard) {
            setFlipCard('flip_1');
            return;
        } 

        flipCard === 'flip_1' ? setFlipCard('flip_2') : setFlipCard('flip_1');
    }

 
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
    id: number
}