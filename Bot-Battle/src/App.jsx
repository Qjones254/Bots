// src/App.js
import React, { useState } from 'react';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';
import './App.css'


const App = () => {
  const [botArmy, setBotArmy] = useState([]);


  const handleAddToArmy = (bot) => {
    setBotArmy([...botArmy, bot]);
  };

  const handleRemoveFromArmy = (bot) => {
    setBotArmy(botArmy.filter(b => b.id !== bot.id));
  };

  const handleDischarge = (bot) => {
    fetch(`https://jsonfile-b.vercel.app/bots${bot.id}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          setBotArmy(botArmy.filter(b => b.id !== bot.id));
        }
      });
  };

  return (
    <>
    < div className='texting'>
      <h1>Bot Battle</h1>
      
    </div>
    <div className="app">
      <BotCollection 
        onAddToArmy={handleAddToArmy}
        onDischarge={handleDischarge}
      />
      <YourBotArmy 
        bots={botArmy} 
        onRemoveFromArmy={handleRemoveFromArmy}
      />
      
    </div>
    </>
  );
};

export default App;