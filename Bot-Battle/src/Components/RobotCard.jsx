import React from 'react';

const RobotCard = ({ bot, onAdd, onRemove, onDischarge, isInArmy }) => {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url}/>
      <h3>{bot.name}</h3>
      <button onClick={() => onAdd(bot)}disabled ={isInArmy}>Add to Army</button>
      <button onClick={() => onRemove(bot)} disabled={!isInArmy}>Remove from Army</button>
      <button onClick={() => onDischarge(bot)} className="discharge-button">x</button>
    </div>
  );
};

export default RobotCard;