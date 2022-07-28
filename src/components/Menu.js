import React,{useContext}  from "react";
import {QuizContext} from "../helpers/Context";


function Menu(){
const {gameState, setGameState} = useContext(QuizContext);
 
    
    return(
<div className="Menu">
<div>
<button className="start-btn" onClick={()=>{setGameState("quiz")}}>Start Quiz</button>
</div>
</div>
    )
}

export default Menu;