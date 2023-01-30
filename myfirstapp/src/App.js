import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import  SecondComponent  from './SecondComponent';
import {ThreeComponent} from './ThreeComponent';
import EventClickReact from './EventClickReact';

function App() {
  const recordsMedic = {
    height: "187cm",
    group: "H+",
    state: "Good",
    allergies: "None"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido
          <div className='Components'>
            <EventClickReact/>
            <hr/>
            <ThreeComponent 
              name="Yesid"
              age="19" 
              records={recordsMedic}/>
            <hr/>
            <SecondComponent/>
            <hr/>
            <MyComponent />
            <hr/>
          </div>
          
        </p>
      </header>
    </div>
    
  );
}

export default App;
