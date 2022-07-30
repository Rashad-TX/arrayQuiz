import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { Questions } from "../helpers/Questions";




const Charts = () =>{

const defQuest =  Questions.filter((obj) => obj.category === "Definition").length;
const mutQuest = Questions.filter((obj) => obj.category === "Mutators").length;
const retQuest  = Questions.filter((obj) => obj.category === "Returns").length;
const iterQuest = Questions.filter((obj) => obj.category === "Iterations").length;
const objQuest = Questions.filter((obj) => obj.category === "Objects").length;
const condQuest  = Questions.filter((obj) => obj.category === "Conditional").length;
    

   <h1>% Correct By Category </h1>
   
    const barData = {
        labels: ["Definitions","Mutators","Returns","Iteration", "Objects","Conditional"],
        datasets: [{
            data: [defQuest, mutQuest,retQuest,iterQuest,objQuest,condQuest],
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