// src/components/BotCollection.js
import React, { useEffect, useState } from 'react';
import RobotCard from './RobotCard';
import './BotCollection.css'

const BotCollection = ({ onAddToArmy, onDischarge }) => {
  const [bots, setBots] = useState([]);
  const[search,setSearch]=useState('');

  useEffect(() => {
    // Fetch bots from db.json
    fetch('https://jsonfile-b.vercel.app/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const handleAddToArmy = (bot) => {
    if (!bots.find(b => b.id === bot.id).isInArmy) {
      onAddToArmy(bot);
    }
  };

  const handleDischarge = (bot) => {
    onDischarge(bot);
  };

  return (
    <>
    <div>
        
        <input className='input'
        //this allows everything in the aray to be accessed in the searchbar
        onChange={(e)=>setSearch(e.target.value)}
        type='text'
        placeholder='Search Bot'
        />
    </div>
    <div className="bot-collection">
      {bots.filter((bots)=>{
        return search.toLowerCase()===''? bots:bots.
        name.toLowerCase().includes(search)
      }).map(bot => (
        <RobotCard 
          key={bot.id}
          bot={bot}
          onAdd={handleAddToArmy}
          onRemove={handleDischarge}
          onDischarge={handleDischarge}
          isInArmy={bot.isInArmy}
        />
      ))}
    </div>
    </>
  );
};

export default BotCollection;