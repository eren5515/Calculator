import { wait } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import Button from "./button";
import Operator from "./operator";
import Screen from "./screen";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,0,"."];
const operators = ["AC","+", "-", "x", "/", "="];

var inputValue = 0;

var LastOperator = "";

function Calculator() {
  

  const [currentInput, setCurrentInput] = useState("0");
  const [currentResult, setCurrentResult] = useState(0);

  function handleChange(input) {

    if (currentInput==="0"){

        setCurrentInput(input);

    }
    else{
        setCurrentInput((prevValue) => {
            return prevValue.toString() + input.toString();
          });

    }
    
        

    
    
  }

  function operatorPressed(input) {
    
    

    if (input ==="AC"){
        setCurrentInput("0");
        setCurrentResult(0);
        LastOperator="";

    }
    else if (input === "=") {
        
        inputValue = parseFloat(currentInput);
        console.log(LastOperator);

        if (LastOperator==="+"){
            setCurrentResult(currentResult + inputValue);
            setCurrentInput((currentResult + inputValue).toString());
        }

        else if (LastOperator==="-"){
            setCurrentResult(currentResult - inputValue);
            setCurrentInput((currentResult - inputValue).toString());
        }
        else if (LastOperator==="/"){
            setCurrentResult(currentResult / inputValue);
            setCurrentInput((currentResult / inputValue).toString());
        }
        else if (LastOperator==="x"){
            setCurrentResult(currentResult * inputValue);
            setCurrentInput((currentResult * inputValue).toString());
        }
        LastOperator="";

      
      
    }
    
    else{
        
        inputValue = parseFloat(currentInput);
        if (LastOperator==="+"){
            setCurrentResult(currentResult + inputValue);
            setCurrentInput("");
        }

        else if (LastOperator==="-"){
            setCurrentResult(currentResult - inputValue);
            setCurrentInput("");
        }
        else if (LastOperator==="/"){
            setCurrentResult(currentResult / inputValue);
            setCurrentInput("");
        }
        else if (LastOperator==="x"){
            setCurrentResult(currentResult * inputValue);
            setCurrentInput("");
        }
        
        else if (LastOperator===""){
            
            
            setCurrentResult(inputValue);
            setCurrentInput("");

        }
        LastOperator = input;
        
        
        



    }

    
    

    
    
    
   
  }

  return (
    <div className="calculatorBox">
      <Screen value={currentInput} />

      <div class="buttonBox">
      <div class="numberBox">
        {numbers.map((number) => (
          <Button
            key={number.index}
            value={number}
            onClick={handleChange}
          ></Button>
          
        ))}
        
        
      </div>

      <div class="operatorBox">
      {operators.map((operator) => (
          <Operator
            key={operator.index}
            onClick={operatorPressed}
            value={operator}
          />
        ))}
      </div>
      </div>
      
    </div>
  );
}

export default Calculator;
