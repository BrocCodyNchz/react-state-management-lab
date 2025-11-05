import { useState } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] =  useState([]); //Team state is an empty array
  const [money, setMoney] = useState(100); //Money state starts at 100

  //Below sets the pool of available fighters
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]);

 //Handles the fighters by checking the money first 
  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      return;
    }
  //Adds them to the team by copying old team and then adding additional fighter and removing them from pool.
    setTeam([...team, fighter]);
    setZombieFighters(zombieFighters.filter(f => f.id !== fighter.id)); //had to change to F because names were conflicting.
    setMoney(money - fighter.price);
  };
//Removing them from the team and adding them back into the pool as well as refunding the money.
  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter(f => f.id !== fighter.id));
    setZombieFighters([...zombieFighters, fighter]);
    setMoney(money + fighter.price);
  };

  const totalStrength = team.reduce((sum, f) => sum + f.strength, 0); //reduce loops through team and sums up strength.
  const totalAgility = team.reduce((sum, f) => sum + f.agility, 0); //reduce loops through team and sums up agility.

  return (
      <div className='App'>
        <div className='header-stats'>
          <h1>Zombie Fighters</h1>
          <h2>Money: ${money}</h2>
          <div className='team-stats-inline'>
            <h2>Total Strength: {totalStrength}</h2>
            <h2>Total Agility: {totalAgility}</h2>
          </div>
        </div>
        
        <h2>Team</h2>

        {team.length === 0 ? (
          <p><em>Pick some team members!</em></p> //EM is emphasize text (italics)
        ) : ( //was looking at Conditional (ternary) operators on MDN and tried it here. Only reason I did not you if/else
            <ul className='team-list'>
              {team.map(fighter => (
                <li key={fighter.id} className='fighter-card'>
                  <img src={fighter.img} alt={fighter.name} />
                  <h3>{fighter.name}</h3>
                  <p>Price: ${fighter.price}</p>
                  <p>Strength: {fighter.strength}</p>
                  <p>Agility: {fighter.agility}</p>
                  <button onClick={() => handleRemoveFighter(fighter)}>Remove</button>
                </li>
              ))} 
            </ul>
        )}

        <h2>Fighters</h2>

            <ul className='fighters-list'>
              {zombieFighters.map(fighter => (
                <li key={fighter.id} className='fighter-card'>
                  <img src={fighter.img} alt={fighter.name} />
                  <h3>{fighter.name}</h3>
                  <p>Price: ${fighter.price}</p>
                  <p>Strength: {fighter.strength}</p>
                  <p>Agility: {fighter.agility}</p>
                  <button onClick={() => handleAddFighter(fighter)}>Add</button>
                </li>
              ))}
            </ul>
        </div>
  );
}

export default App

