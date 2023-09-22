import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import ReactGA from "react-ga4";
import TagManager from 'react-gtm-module';
import { useGoogleLogin, useGoogleOneTapLogin, hasGrantedAllScopesGoogle } from '@react-oauth/google';





function App() {
  const tagManagerArgs = {
    gtmId: 'GTM-XXXXXX'
}

const login = useGoogleLogin({
  onSuccess: tokenResponse => console.log(tokenResponse),
  scope: 'https://www.googleapis.com/auth/cloud-platform https://www.googleapis.com/auth/analytics.edit https://www.googleapis.com/auth/service.management'
});


// function triggerLogin() {
//   login();
// }

  // useEffect(() => {
  //   // ReactGA.initialize("G-ERGQGM3LY6");
  //   // TagManager.initialize('GT-M9CKK23W')
  //   triggerLogin();
  //   console.log('called')
  // },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      {/* <button onClick={() => ReactGA.event("test_click_react4")} >Test Event</button>
      <button onClick={() => ReactGA.event("test_click_react4_2")} >Test Event 2</button> */}
      <div style={{margin:20}} >
      <button onClick={() => login()} >Sign in with Google 🚀{' '}</button>
      </div>
      
    </div>
  );
}

export default App;
