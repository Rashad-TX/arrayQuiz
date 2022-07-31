import {createContext, useContext, useState} from "react";

const VariableContext = createContext();

export const VariableHOC = ({children}) => {
    const [myArray, setMyArray] = useState([]);


const defCorrect = myArray.reduce(function(n, val) {return n + (val === "Definition");}, 0);
const mutCorrect = myArray.reduce(function(n, val) {return n + (val === "Mutators");}, 0);
const retCorrect = myArray.reduce(function(n, val) {return n + (val === "Returns");}, 0);
const IterCorrect = myArray.reduce(function(n, val) {return n + (val === "Iterations");}, 0);
const ObjCorrect = myArray.reduce(function(n, val) {return n + (val === "Objects");}, 0);
const CondCorrect = myArray.reduce(function(n, val) {return n + (val === "Conditional");}, 0);

return <VariableContext.Provider value={{defCorrect, mutCorrect, retCorrect, IterCorrect,ObjCorrect,CondCorrect, myArray, setMyArray  }}>
{children}
</VariableContext.Provider>
}

export const useVariable = () =>{
    return useContext(VariableContext)
}