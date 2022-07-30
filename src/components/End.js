import React, {useContext} from "react";
import {Questions} from '../helpers/Questions';
import {QuizContext} from "../helpers/Context";
import "../App";
import Charts from "./Charts";



function End(){
const {score, setScore, setGameState} = useContext(QuizContext);
const ePerc = ((score / Questions.length) * 100).toFixed(1);
const defQuest =  Questions.filter((obj) => obj.category === "Definition").length;
const mutQuest = Questions.filter((obj) => obj.category === "Mutators").length;
const retQuest  = Questions.filter((obj) => obj.category === "Returns").length;
const IterQuest = Questions.filter((obj) => obj.category === "Iterations").length;
const ObjQuest = Questions.filter((obj) => obj.category === "Objects").length;
const CondQuest  = Questions.filter((obj) => obj.category === "Conditional").length;


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
<div style={{width:"500px", margin:"0,auto"}}>
<Charts/>
</div>

</div>
    )
}

export default End;