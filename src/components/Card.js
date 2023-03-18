import './Card.css'

import React from 'react'

export default function Card({kart,kartSec,donus,aktiflik}) {

  const kartTiklandi=()=>{
    if(!aktiflik){
        kartSec(kart);
    }
  }


  return (
    <div className='card' key={kart.id}>
        <div className={donus ? "flipped":""}>
        <img className='front' src={kart.src} alt="kart ön yüz" />
        <img className='back' src="/img/14.png" onClick={kartTiklandi}/>
        </div>
    </div>
  )
}
