import logo from './logo.svg';
import './App.css';
// import ColorPick from './ColorPick';
import Slider from "./Slider"
import DangerButton from './DangerButton';


function Welcome(props) {
  return <h1>Bonjour, {props.name}</h1>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
         {/* <Slider />  */}
         <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <DangerButton />
      <Welcome name="Edite" />
    </div>
      </header>
    </div>
  );
}

export default App;
