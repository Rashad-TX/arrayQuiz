import './App.css';
import React, {useState, useContext} from 'react';
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import End from './components/End';
import {QuizContext} from "./helpers/Context";
import { VariableHOC } from './helpers/vContext';
import Info from "./assets/images/info.svg";
import ReactAudioPlayer from 'react-audio-player';
import ClassicalSong from  "./assets/audio/classical1.mp3";
import Notes from "./assets/images/music.svg";

function App() {
 const [gameState, setGameState] = useState("menu");
 const [score, setScore] =useState(0)

  return (
    <div className="App">
    <h1 className="header-text">JavaScript Quiz</h1>
        <div>
       <ReactAudioPlayer src={ClassicalSong}  controls/>
       </div>
       <div className="info-area">
       <img src={Info} alt="info-icon" className="info-icon"/> <p>Press play for study music</p> <img src={Notes} alt="music-icon" className="music-icon"/>
       </div>
 
<VariableHOC>
<QuizContext.Provider value={{gameState, setGameState, score, setScore}}>

{gameState === "menu" && <Menu/>}
{gameState === "quiz" && <Quiz/>}    
{gameState === "end" && <End/>}  
</QuizContext.Provider>         
</VariableHOC>
    </div>
  );
}

export default App;
