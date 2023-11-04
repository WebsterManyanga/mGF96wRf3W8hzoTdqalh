import React from 'react';
import './GameOver.css';
import {VscDebugRestart} from 'react-icons/vsc';
import {AiOutlineMenu} from 'react-icons/ai';
import { useGlobalState } from '../../state';

export default function GameOver() {
  const [scene, setScene] = useGlobalState('scene');
  const [prevScene, setPrevScene] = useGlobalState('previousScene');
  const [timeUp, setTimeUp] = useGlobalState('timeUp');
  const [scoredId, setScoredId] = useGlobalState('scoredId');


  const restartScene = () => {
    setPrevScene(scene);
    setScene('restart');
  }
  
  const goToMenu = () => {
    setTimeUp(false);
    setScene('menu');
    setScoredId([]);
   
  }

  return (
    <div className='game-over'>
      <h1>Game Over</h1>
      <div className="game-over__options">
        <button  onClick={() => restartScene()}><VscDebugRestart/></button>
        <button onClick={() => goToMenu()}><AiOutlineMenu /></button>
      </div>
    </div>   
  )
}

