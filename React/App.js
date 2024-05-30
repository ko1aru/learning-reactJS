import './App.css';
import Form from './Assignments/Form'
import Game from './Assignments/Game'
import PasswordValidator from './Assignments/PasswordValidator'
import RollDice from './Assignments/RollDice'
import Counter from './Assignments/Counter'

function App() {
  return (
    <div className="App">
      <Form />
      <Game />
      <PasswordValidator />
      <RollDice />
      <Counter />
    </div>
  );
}

export default App;