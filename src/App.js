import './App.css';
import { useState,useEffect } from 'react';
import Card from './components/Card';

const kartResimler=[
  {"src":"/img/1.png",eslesme:false},
  {"src":"/img/2.png",eslesme:false},
  {"src":"/img/4.png",eslesme:false},
  {"src":"/img/5.png",eslesme:false},
  {"src":"/img/7.png",eslesme:false},
  {"src":"/img/8.png",eslesme:false},
  {"src":"/img/9.png",eslesme:false},
  {"src":"/img/10.png",eslesme:false},
  {"src":"/img/11.png",eslesme:false},
  {"src":"/img/13.png",eslesme:false}
]

function App() {
  const [kartlar,setKartlar]=useState([]);
  const [birinciSecilen,setBirinciSecilen]=useState([]);
  const [ikinciSecilen,setIkinciSecilen]=useState([]);
  const [secimSayisi,setSecimSayisi]=useState(0);

  useEffect(()=>{

    if(birinciSecilen && ikinciSecilen){
  
      if(birinciSecilen.src===ikinciSecilen.src){
      setKartlar(oncekiKart=>{
        return oncekiKart.map(kart=>{
        if(kart.src==birinciSecilen.src){
          return {...kart,eslesme:true}
        }else{
          return kart
        }
        })
      })
      secimSayisiResetle();
      }else{
      //console.log("kartlar eşleşmedi");
      secimSayisiResetle();
      }
    }
  
  },[birinciSecilen,ikinciSecilen])
  
  const karistir=()=>{
	  
    const karistirilmisKartlar=[...kartResimler,...kartResimler]
    .sort(()=>Math.random()-0.5)
    .map((k)=>({...k,id:Math.random()}))

    setKartlar(karistirilmisKartlar);
  }

  const kartSec=(kart)=>{
    console.log(kart);
  
    birinciSecilen ? setIkinciSecilen(kart) : setBirinciSecilen(kart);
  }
  
  const secimSayisiResetle=()=>{
    setBirinciSecilen(null);
    setIkinciSecilen(null);
    setSecimSayisi(oncekiSayi=>oncekiSayi+1);
  
  }
  console.log(secimSayisi);

  console.log(kartlar);

  return (
    <div className="App">
      <h1>React Hafıza Oyunu</h1>
      <button onClick={karistir}>Yeni Oyun</button>
      <div className='card-grid'>
        {kartlar.map(kart=>(
	        <Card key={kart.id} kart={kart} kartSec={kartSec} donus={kart === birinciSecilen || kart===ikinciSecilen || kart.eslesme}/>
        ))}
      </div>
    </div>
  );
}

export default App;
