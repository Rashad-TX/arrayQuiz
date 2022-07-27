import './App.css';
import React, {useState} from 'react';
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import End from './components/End';

function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
    <h1>JavaScript Array Methods Quiz</h1>

{gameState === "menu" && <Menu/>}
{gameState === "quiz" && <Quiz/>}    
{gameState === "end" && <End/>}            
    </div>
  );
}

export default App;
