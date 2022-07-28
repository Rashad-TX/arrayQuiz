import React, {useState, useContext} from "react";
import { Questions } from "../helpers/Questions";
import {QuizContext} from "../helpers/Context";
import { getByPlaceholderText } from "@testing-library/react";
import Buzzer from "../assets/audio/Buzzer.mp3";
import Correct from "../assets/audio/Correct.mp3";


function Quiz(){
const {score, setScore, setGameState} = useContext(QuizContext);
const [currQuestion, setCurrQuestion] =useState(0);
const[optionChosen, setOptionChosen] = useState("");
const [buttonColor1, setButtonColor1] = useState("white");
const [buttonColor2, setButtonColor2] = useState("white");
const [buttonColor3, setButtonColor3] = useState("white");
const [buttonColor4, setButtonColor4] = useState("white");
const qPerc = ((score / Questions.length) * 100).toFixed(1);

const audio = new Audio(Correct);
const audio2 = new Audio(Buzzer);


const pressedOption1 =(event) =>{
    setOptionChosen(event.target.id);
    setButtonColor1("goldenrod");
}
const pressedOption2 =(event) =>{
    setOptionChosen(event.target.id);
    setButtonColor2("goldenrod");
}
const pressedOption3 =(event) =>{
    setOptionChosen(event.target.id);
    setButtonColor3("goldenrod");
}
const pressedOption4 =(event) =>{
    setOptionChosen(event.target.id);
    setButtonColor4("goldenrod");
}

    



const nextQuestion = () => {
    if(Questions[currQuestion].answer == optionChosen){
        setScore(score + 1);
        audio.play();
        setButtonColor1("white");
        setButtonColor2("white");
        setButtonColor3("white");
        setButtonColor4("white");
        setCurrQuestion(currQuestion +1)
    } else {
       audio2.play()
       setCurrQuestion(currQuestion +1);
       setButtonColor1("white");
       setButtonColor2("white");
       setButtonColor3("white");
       setButtonColor4("white");
    }
}

const completeQuiz = () => {
    if(Questions[currQuestion].answer == optionChosen){
        setScore(score + 1);
}
setGameState("end");
}
return(
<div className="Quiz">
<div className="scoreboard">
<h3 >Question {currQuestion} / {Questions.length}</h3>
<h3>Score: {score} / {Questions.length}</h3>
<h3> {qPerc} %</h3>

</div>
<h1 className="question-text">{Questions[currQuestion].question}</h1>
<p className="cat-area">{Questions[currQuestion].category}</p>
<div className="options">
<button style={{ backgroundColor: buttonColor1 }}  id="optionA" className="opt-btn" onClick={pressedOption1}>{Questions[currQuestion].optionA}</button>
<button style={{ backgroundColor: buttonColor2 }}   id="optionB" className="opt-btn" onClick={pressedOption2}>{Questions[currQuestion].optionB}</button>
<button style={{ backgroundColor: buttonColor3}}  id="optionC" className="opt-btn" onClick={pressedOption3}>{Questions[currQuestion].optionC}</button>
<button style={{ backgroundColor: buttonColor4 }}  id="optionD" className="opt-btn" onClick={pressedOption4}>{Questions[currQuestion].optionD}</button>
<div>
{currQuestion == Questions.length -1 ? ( <button onClick={completeQuiz} className="final-btn">Complete Quiz</button>) :    
(<button onClick={nextQuestion} className="final-btn">Submit</button>)}
</div>

</div>




</div>
    )
}

export default Quiz;