import React, {useContext} from "react";
import {Questions} from '../helpers/Questions';
import {QuizContext} from "../helpers/Context";
import "../App";
import Charts from "./Charts";






function End(){
const {score, setScore, setGameState} = useContext(QuizContext);
const ePerc = ((score / Questions.length) * 100).toFixed(1);



const restartQuiz =() =>{
    setScore(0);
    setGameState('menu');

}    
    return(
<div className="End">
<h1>RESULTS</h1>

<h3>Score: {score} / {Questions.length}</h3>
<h3> {ePerc} %</h3>
<button onClick={restartQuiz}>Retry</button>
</div>
    )
}

export default End;