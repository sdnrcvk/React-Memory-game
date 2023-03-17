import './Card.css'

import React from 'react'

export default function Card({kart,kartSec,donus}) {

  const kartTiklandi=()=>{
    kartSec(kart);
  }

  return (
    <div className='card' key={kart.id}>
        <div className={donus ? "flipped":""}>
        <img className='front' src={kart.src} alt="kart ön yüz" />
        <img className='back' src="/img/17.png" onClick={kartTiklandi}/>
        </div>
    </div>
  )
}
