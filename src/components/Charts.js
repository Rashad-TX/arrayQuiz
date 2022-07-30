import React, {useState,useContext} from 'react';
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { Questions } from "../helpers/Questions";
import {VariableContext} from "../helpers/vContext";
import {QuizContext} from "../helpers/Context";






const Charts = () =>{
const {defCorrect, mutCorrect, retCorrect, IterCorrect,ObjCorrect,CondCorrect } = useContext(VariableContext);
const {score, setScore, setGameState} = useContext(QuizContext);
const defQuest =  Questions.filter((obj) => obj.category === "Definition").length;
const mutQuest = Questions.filter((obj) => obj.category === "Mutators").length;
const retQuest  = Questions.filter((obj) => obj.category === "Returns").length;
const iterQuest = Questions.filter((obj) => obj.category === "Iterations").length;
const objQuest = Questions.filter((obj) => obj.category === "Objects").length;
const condQuest  = Questions.filter((obj) => obj.category === "Conditional").length;

const defPerc = defCorrect/defQuest;
const mutPerc=  mutCorrect/mutQuest ;
const retPerc = retCorrect/retQuest;
const iterPerc = IterCorrect/iterQuest;
const objPerc = ObjCorrect/objQuest;
const condPerc =CondCorrect/condQuest;
    

   <h1>% Correct By Category </h1>
   
    const barData = {
        labels: ["Definitions","Mutators","Returns","Iteration", "Objects","Conditional"],
        datasets: [{
            data: [defPerc, mutPerc,retPerc,iterPerc,objPerc,condPerc],
            backgroundColor: ['blue','green', 'red','orange','gold','gray'],
            borderColor:["black", "black","black","black","black","black"],       
            borderWidth:2      
               }]
        
    };
    
      return (
        <div className="App main">
               <Bar data={barData}  />
        </div>
      );
    }

export default Charts;