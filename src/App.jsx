import GuessWho from './components/GuessWho/GuessWho.jsx';
import Player from './components/Player.jsx';
import { Person } from './utils/Person.js';

function App() {
   function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
  } 
  const randomPerson = Person[Math.round(Math.random(Person.length))]
  return (
    <>
      <GuessWho personList={shuffleArray(Person)} randomPerson={randomPerson}/>
      {/* <div id="challenges"></div> */}
    </>
  );
}

export default App;
