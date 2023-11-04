import React from 'react';
import './App.css';
import Clouds from './Components/Clouds/Clouds';
import Logo from './Components/Logo/Logo';
import { useGlobalState } from './state';
import Mode from './Components/Mode/Mode';
import Timer from './Components/Timer/Timer';

function App() {
  const [scene, setScene] = useGlobalState('scene');
  const [prevScene, setPrevScene] = useGlobalState('previousScene');
  const [timeUp, setTimeUp] = useGlobalState('timeUp');

  let level = scene;

  
  return (
    <div className="App">
      <Clouds />
      {level === 'menu' && <Logo />}
      {level !== 'menu' && !timeUp && <Timer />}
      <main className={`${level === 'menu' && 'main-menu'}`}>
        <Mode level={level} />
      </main>
    </div>
  );
}

export default App;
