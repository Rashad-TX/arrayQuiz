import React, {useState,useContext} from 'react';
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { Questions } from "../helpers/Questions";
import {useVariable} from "../helpers/vContext";
import {QuizContext} from "../helpers/Context";






const Charts = () =>{
const {defCorrect, mutCorrect, retCorrect, IterCorrect } = useVariable();
const {score, setScore, setGameState} = useContext(QuizContext);
const defQuest =  Questions.filter((obj) => obj.category === "Definition").length;
const mutQuest = Questions.filter((obj) => obj.category === "Mutators").length;
const retQuest  = Questions.filter((obj) => obj.category === "Returns").length;
const iterQuest = Questions.filter((obj) => obj.category === "Iterations").length;


const defPerc = (defCorrect/defQuest) *100;
const mutPerc=  (mutCorrect/mutQuest) *100 ;
const retPerc = (retCorrect/retQuest) *100;
const iterPerc = (IterCorrect/iterQuest) *100;

    

   <h1>% Correct By Category </h1>
   
    const barData = {
        labels: ["Definitions","Mutators","Returns","Iteration"],
        datasets: [{
          label: 'Percentage By Category',
            data: [defPerc, mutPerc,retPerc,iterPerc],
            backgroundColor: ['blue','green', 'red','orange','gold','gray'],
            borderColor:["white", "white","white","white","white","white"],       
            borderWidth:2 , 
             
               }],
    };
    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
    };
    
      return (
        <div className="App main">
               <Bar data={barData} options={options} />
        </div>
      );
    }

export default Charts;