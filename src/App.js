import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';

function App() {
  const tagManagerArgs = {
    gtmId: 'GTM-XXXXXX'
}

  useEffect(() => {
    ReactGA.initialize("G-ERGQGM3LY6");
    TagManager.initialize('GT-MKTRQH3')
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
      <button onClick={() => ReactGA.event("test_click_react4_2")} >Test2</button>
    </div>
  );
}

export default App;
