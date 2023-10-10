import React from 'react';
import './Timer.css';
import Countdown from 'react-countdown';

export default function Timer() {
  return (
    <div className='timer'>
      <div className="counter">
        <Countdown date={Date.now() + 60000} renderer={renderer}/>
      </div>
    </div>
  )
}


const renderer = ({hours, minutes, seconds, completed}:RendererType) => {
  if (minutes === 1) {
    return <span>60</span>
  }
  if (completed) {
    return 'Done';
  }
  else {
    return <span>{seconds}</span>
  }
} 

interface RendererType {
  hours: number,
  minutes: number,
  seconds: number,
  completed: boolean
}