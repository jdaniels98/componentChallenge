import './App.css';
import Udemy from './components/Udemy';
import AirBNB from './components/AirBNB';

function App() {
  return (
    <div id="appMain">
      <div id="udemyMain">
        <p id="udemyChallenge">Udemy Challenge</p>
        <AirBNB />
      </div>
    </div>
  );
}


export default App;
