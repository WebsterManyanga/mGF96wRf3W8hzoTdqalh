import React from 'react';
import './Timer.css';
import Countdown from 'react-countdown';
import { useGlobalState } from '../../state';

export default function Timer() {
  const [timeUp, setTimeUp] = useGlobalState('timeUp');
  const renderer = ({hours, minutes, seconds, completed}:RendererType) => {
    if (minutes === 1) {
      return <span>60</span>
    }
    if (completed) {
      setTimeUp(true);
      return 'Time-Up';
    }
    else {
      return <span>{seconds}</span>
    }
  } 
  
  return (
    <div className='timer'>
      <div className="counter">
        <Countdown date={Date.now() + 60000} renderer={renderer}/>
      </div>
    </div>
  )

  
}



interface RendererType {
  hours: number,
  minutes: number,
  seconds: number,
  completed: boolean
}