import React from 'react';
import './App.css';
import Clouds from './Components/Clouds/Clouds';
import Logo from './Components/Logo/Logo';
import { useGlobalState } from './state';
import Mode from './Components/Mode/Mode';
import Timer from './Components/Timer/Timer';

function App() {
  const [currentScene, setCurrentScene] = useGlobalState('scene');
  
  return (
    <div className="App">
      <Clouds />
      <Logo />
      {currentScene !== 'menu' && <Timer />}
      <main>
        <Mode level={currentScene} />
      </main>
    </div>
  );
}

export default App;
