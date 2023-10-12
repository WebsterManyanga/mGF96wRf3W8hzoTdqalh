import React from 'react';
import './Menu.css';
import { useGlobalState } from '../../state';

export default function Menu() {
  const [currentScene, setCurrentScene] = useGlobalState('scene');
  return (
        <div className="menu">
            <button type="button" onClick={() => setCurrentScene('easy')}>Easy</button>
            <button type="button" onClick={() => setCurrentScene('medium')}>MEDIUM</button>
            <button type="button" onClick={() => setCurrentScene('hard')}>HARD</button>
        </div>
  )
}
