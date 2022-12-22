import { useEffect } from 'react';
import { messaging } from './firebase';
import { getToken } from "firebase/messaging";
import logo from './logo.svg';
import './App.css';

function App() {

  async function requestPermission() {
  const permission = await Notification.requestPermission()
  if (permission === 'granted') {
  //Generate Token
  const token = await getToken(messaging, { vapidkey: "BJ1vIvsIoz9XEqxMcVK8n1TWFf2vQJx4gsuqHQvNRI6SFGHqbcicUuL2eVi2RnPB5ZvX6s5PS9hS1kJGz8-u3JU" })
  console.log("Token Generated", token);
  //send this token to database
  } else if (permission === 'denied') {
    alert("You have Disabled Notifications")
    }
  }

  useEffect(() => {
    //req user for notification permission
    requestPermission();
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
    </div>
  );
}

export default App;
