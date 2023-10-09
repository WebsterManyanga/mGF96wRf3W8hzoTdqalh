import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clouds from './Components/Clouds/Clouds';
import Logo from './Components/Logo/Logo';
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <div className="App">
      <Clouds />
      <Logo />
      <Menu />
    </div>
  );
}

export default App;
