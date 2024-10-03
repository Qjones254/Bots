// src/components/YourBotArmy.js
import React from 'react';
import BotCard from './RobotCard';



const YourBotArmy = ({ bots, onRemoveFromArmy,onDischarge }) => {
  return (
      <>
       <div>
        <h2>Your Bot Army</h2>
    </div>
    <div className="your-bot-army">
      {bots.map(bot => (
        <BotCard 
          key={bot.id}
          bot={bot}
          onAdd={() => {}}
          onRemove={onRemoveFromArmy}
          onDischarge={() => {}}
          isInArmy={true}
        />
      ))}
    </div>
   
    </>
  );
};

export default YourBotArmy;