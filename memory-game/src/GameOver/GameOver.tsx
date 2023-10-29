import React from 'react';
import './GameOver.css';
import {VscDebugRestart} from 'react-icons/vsc';
import {AiOutlineMenu} from 'react-icons/ai';

export default function GameOver() {
  return (
    <div className='game-over'>
      <h1>Game Over</h1>
      <div className="game-over__options">
        <button><VscDebugRestart/></button>
        <button><AiOutlineMenu /></button>
      </div>
    </div>   
  )
}
