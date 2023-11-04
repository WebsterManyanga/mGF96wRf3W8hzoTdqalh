import React from 'react';
import './Clouds.css';
import cloudVector from '../../assets/cloud.svg';

export default function Clouds() {
    const cloud = <div className='cloud'><img src={cloudVector} alt="cloud"/></div>
    const clouds = new Array(21).fill(cloud);

  return (
    <div className='clouds'>
        <div className="clouds__batch batch1">
            {clouds}
        </div>
        <div className="clouds__batch batch2">
            {clouds}
        </div>
    </div>
  )
}
