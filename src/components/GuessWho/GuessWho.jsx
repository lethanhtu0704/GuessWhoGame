import { useState } from "react";
import './GuessWho.css'

export default function GuessWho({personList,randomPerson}) {
  const [disabledCards, setDisabledCards] = useState([]);

  const toggleCardDisable = (index) => {
    setDisabledCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

 
  return (
    <div className="App">
      <h2>Your person</h2>
      <div className="royal-image-container">
      <img className="royal-image" src={randomPerson.image} alt={randomPerson.name} />
      <p style={{fontWeight : "bold"}}> {randomPerson.name} </p>
      
      </div>
      <button onClick={()=>setDisabledCards([])} className="unchoose-btn">Enable All</button>
      <div className="game-board">
        
        {personList.map((person, index) => (
          <div
            key={index}
            className={`card ${disabledCards.includes(index) ? 'disabled' : ''}`}
            onClick={() => toggleCardDisable(index)}
          >
            <img src={person.image} alt={person.name} />
            <p>{person.name}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
}