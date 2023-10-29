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
  if (scene === 'restart') {
    level = prevScene;
    setScene(prevScene)
    setPrevScene('');
    setTimeUp(false);
  }
  
  return (
    <div className="App">
      <Clouds />
      <Logo />
      {level !== 'menu' && !timeUp && <Timer />}
      <main>
        <Mode level={level} />
      </main>
    </div>
  );
}

export default App;
