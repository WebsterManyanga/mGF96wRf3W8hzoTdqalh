import React from 'react';
import './Logo.css';
import logoPng from '../../assets/Logo.png';

export default function Logo() {
  return (
    <header className='logo'>
      <img src={logoPng} alt="logo" />
    </header>
  )
}
