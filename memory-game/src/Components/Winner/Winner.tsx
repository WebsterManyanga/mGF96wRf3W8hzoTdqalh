import React from 'react';
import {VscDebugRestart} from 'react-icons/vsc';
import {AiOutlineMenu} from 'react-icons/ai';
import { useGlobalState } from '../../state';


export default function Winner() {
  const [scene, setScene] = useGlobalState('scene');
  const [prevScene, setPrevScene] = useGlobalState('previousScene');
  const [timeUp, setTimeUp] = useGlobalState('timeUp');
  const [win, setWin] = useGlobalState('win');
  const restartScene = () => {
    setWin(false);
    setPrevScene(scene);
    setScene('restart');
  }
  
  const goToMenu = () => {
    setTimeUp(false);
    setScene('menu');
  }
  return (
    <div className='game-over'>
      <h1 style={{'color': '#0f0'}}>You Win!</h1>
      <div className="game-over__options">
        <button  onClick={() => restartScene()}><VscDebugRestart/></button>
        <button onClick={() => goToMenu()}><AiOutlineMenu /></button>
      </div>
    </div>   
  )
}

