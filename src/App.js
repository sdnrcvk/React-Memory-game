import './App.css';
import { useState } from 'react';
import Card from './components/Card';

const kartResimler=[
  {"src":"/img/1.png"},
  {"src":"/img/2.png"},
  {"src":"/img/4.png"},
  {"src":"/img/5.png"},
  {"src":"/img/7.png"},
  {"src":"/img/8.png"},
  {"src":"/img/9.png"},
  {"src":"/img/10.png"},
  {"src":"/img/11.png"},
  {"src":"/img/13.png"}
]

function App() {
  const [kartlar,setKartlar]=useState([]);

  const karistir=()=>{
	  
    const karistirilmisKartlar=[...kartResimler,...kartResimler]
    .sort(()=>Math.random()-0.5)
    .map((k)=>({...k,id:Math.random()}))

    setKartlar(karistirilmisKartlar);
  }
  
  console.log(kartlar);

  return (
    <div className="App">
      <h1>React Hafıza Oyunu</h1>
      <button onClick={karistir}>Yeni Oyun</button>
      <div className='card-grid'>
        {kartlar.map(kart=>(
	        <Card key={kart.id} kart={kart} />
        ))}
      </div>
    </div>
  );
}

export default App;
