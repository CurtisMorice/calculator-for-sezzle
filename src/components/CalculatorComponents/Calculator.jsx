import React, { useState } from "react";
import { NumberButton } from "./NumberButton";
import { FunctionButton } from "./FunctionButton";
import { ClearButton } from "./ClearButton";
import { Display } from "./Display";
import { EqualButton } from "./EqualButton";
import { BackButton } from "./BackButton";
import { NegativeButton } from "./NegativeButton";
import { CalcList } from './CalcList';
import { CalculatorStyles } from "../styles/Styles";


export function Calculator() {

  const [numberButtonHasBeenHit, setNumberButtonHasBeenHit] = useState(false);
  const [functionButtonHasBeenHit, setFunctionButtonHasBeenHit] = useState(false)
  const [lastButtonWasFunction, setLastButtonWasFunction] = useState(false);

  const handleNumberButtonClick = () => {
    setNumberButtonHasBeenHit(true);
    setLastButtonWasFunction(false);
  };
  const handleFunctionButtonClick = () => {
    setFunctionButtonHasBeenHit(true);
    setLastButtonWasFunction(true);
  };
  const isValid = () => {
    return numberButtonHasBeenHit && functionButtonHasBeenHit && !lastButtonWasFunction;
  }

  console.log(isValid());
  return (
    <CalculatorStyles>
      <div className="display">
        <h1 style={{ color: "#fff" }}>Calculator-Challenge for Sezzle</h1>
        <Display />
      </div>
      <div style={{ display: "flex", width: "80%", margin: "50px" }}>
        <div className="number-pad">
          <ClearButton />
          <BackButton />
          <NegativeButton />
          <FunctionButton onClick={handleFunctionButtonClick} buttonValue="/" />
          <NumberButton onClick={handleNumberButtonClick} buttonValue={7} />
          <NumberButton onClick={handleNumberButtonClick} buttonValue={8} />
          <NumberButton onClick={handleNumberButtonClick} buttonValue={9} />
          <FunctionButton onClick={handleFunctionButtonClick} buttonValue="*" />
          <NumberButton onClick={handleNumberButtonClick} buttonValue={4} />
          <NumberButton onClick={handleNumberButtonClick} buttonValue={5} />
          <NumberButton onClick={handleNumberButtonClick} buttonValue={6} />
          <FunctionButton onClick={handleFunctionButtonClick} buttonValue="-" />
          <NumberButton onClick={handleNumberButtonClick} buttonValue={1} />
          <NumberButton onClick={handleNumberButtonClick} buttonValue={2} />
          <NumberButton onClick={handleNumberButtonClick} buttonValue={3} />
          <FunctionButton onClick={handleFunctionButtonClick} buttonValue="+" />
          <div className="zero-button">
            <NumberButton onClick={handleNumberButtonClick} buttonValue={0} />
          </div>
          <NumberButton onClick={handleNumberButtonClick} buttonValue="." />
          <EqualButton isValid={isValid()} />
        </div>
        <CalcList />
      </div>
    </CalculatorStyles>
  )
};

