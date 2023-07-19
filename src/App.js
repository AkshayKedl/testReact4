import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import ReactGA from "react-ga4";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-ERGQGM3LY6");
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={() => ReactGA.event("test_click_react4")} >Test</button>
    </div>
  );
}

export default App;
