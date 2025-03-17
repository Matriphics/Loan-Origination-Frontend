import './App.css';
import { useState } from 'react';
import Nav from './Nav';
import Chatbot from './Chatbot'
import Vision from './Vision'

function App() {
  const [loggedin, setLoggedin] = useState(false)
  const [makerloggedin, setMakerLoggedin] = useState(false)
  const [checkerloggedin, setCheckerLoggedin] = useState(false)

  return (
    <div className="App">
      <Vision></Vision>
      <Nav setLoggedin={setLoggedin} setMakerLoggedin={setMakerLoggedin} setCheckerLoggedin={setCheckerLoggedin}></Nav>
      <Chatbot></Chatbot>
    </div>
  );
}

export default App;
