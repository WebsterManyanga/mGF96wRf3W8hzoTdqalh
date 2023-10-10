import React from 'react';
import './App.css';
import Clouds from './Components/Clouds/Clouds';
import Logo from './Components/Logo/Logo';
import Menu from './Components/Menu/Menu';
import { useGlobalState } from './state';
import Easy from './Components/Easy/Easy';
import Timer from './Components/Timer/Timer';

function App() {
  const [currentScene, setCurrentScene] = useGlobalState('scene');
  let scene = <Menu />

  switch (currentScene) {
    case 'easy': scene = <Easy />; break;
    default: scene = <Menu />; break;
  }


  return (
    <div className="App">
      <Clouds />
      <Logo />
      {currentScene !== 'menu' && <Timer />}
      <main>
      {scene}
      </main>
    </div>
  );
}

export default App;
