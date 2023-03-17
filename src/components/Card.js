import './Card.css'

import React from 'react'

export default function Card({kart}) {
  return (
    <div className='card' key={kart.id}>
        <div>
        <img className='front' src={kart.src} alt="kart ön yüz" />
        <img className='back' src="/img/17.png" />
        </div>
    </div>
  )
}
