import React, { useState, useEffect } from "react";
import io from 'socket.io-client'
const socket = io("https://calculator-sezzle.herokuapp.com/");

export const NumberContext = React.createContext(0);

export function NumberProvider(props) {
  const [number, setNumber] = useState("");
  const [storedNumber, setStoredNumber] = useState(""); //sets the numbers used in the calculation
  const [functionType, setFunctionType] = useState(""); // grabs and sets the operator used for the calculation
  const [calculations, setCalculations] = useState([]); // sets the object for the database

  useEffect(() => {
    socket.on('calculation-sent', (data) => {
      getCalculations(data)
    });
  }, [calculations]);

  const handleSetDisplayValue = (num) => {
    if ((!number.includes(".") || num !== ".") && number.length < 8) {
      setNumber(`${ (number + num).replace(/^0+/, "") }`);
    }
  };

  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber("");
  };

  const handleClearValue = () => {
    setNumber("");
    setStoredNumber("");
    setFunctionType("");
  };

  const handleBackButton = () => {
    if (number !== "") {
      const deletedNumber = number.slice(0, number.length - 1);
      setNumber(deletedNumber);
    }
  };
  // Grabs the operation type and sets it in state for the doMath() below.
  const handleSetCalcFunction = (type) => {
    if (number) {
      setFunctionType(type);
      handleSetStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };
  // Handles the state of the number from -neg to +pos
  const handleToggleNegative = () => {
    if (number) {
      if (number > 0) {
        setNumber(`-${ number }`);
      } else {
        const positiveNumber = number.slice(1);
        setNumber(positiveNumber);
      }
    } else if (storedNumber > 0) {
      setStoredNumber(`-${ storedNumber }`);
    } else {
      const positiveNumber = storedNumber.slice(1);
      setStoredNumber(positiveNumber);
    }
  };
  const doMath = () => {
    let finalNumber;
    let calc_obj;
    let d = new Date();
    let date = d.toUTCString();
    if (number && storedNumber) {
      switch (functionType) {
        case "+":
          setStoredNumber(
            `${
            Math.round(
              `${ (parseFloat(storedNumber) + parseFloat(number)) * 100 }`
            ) / 100
            }`
          );

          finalNumber = finalNumber = parseInt(storedNumber) + parseInt(number);
          calc_obj = { number1: parseInt(storedNumber), operator: functionType, number2: parseInt(number), total: finalNumber, created_at: date };
          console.log("adding", finalNumber);
          break;
        case "-":
          setStoredNumber(
            `${
            Math.round(
              `${ (parseFloat(storedNumber) - parseFloat(number)) * 1000 }`
            ) / 1000
            }`
          );
          finalNumber = parseInt(storedNumber) - parseInt(number);
          calc_obj = { number1: parseInt(storedNumber), operator: functionType, number2: parseInt(number), total: finalNumber, created_at: date };
          // console.log(finalNumber);
          break;
        case "/":
          setStoredNumber(
            `${
            Math.round(
              `${ (parseFloat(storedNumber) / parseFloat(number)) * 1000 }`
            ) / 1000
            }`
          );
          finalNumber = parseInt(storedNumber) / parseInt(number);
          calc_obj = { number1: parseInt(storedNumber), operator: functionType, number2: parseInt(number), total: finalNumber, created_at: date };
          // console.log(finalNumber);
          break;
        case "*":
          setStoredNumber(
            `${
            Math.round(
              `${ parseFloat(storedNumber) * parseFloat(number) * 1000 }`
            ) / 1000
            }`
          );
          finalNumber = parseInt(storedNumber) * parseInt(number);
          calc_obj = { number1: parseInt(storedNumber), operator: functionType, number2: parseInt(number), total: finalNumber, created_at: date };
          // console.log(finalNumber);
          break;
        default:
          break;
      }
      setNumber("");
    }

    console.log(calc_obj);

    // POST calc_obj to the db and fire getCalculations
    fetch('/api/calculations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(calc_obj)
    }).then((response) => {
      socket.emit('calc-passed', response)
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then((data) => {
      socket.emit('calc-passed', data)
    }).catch((err) => {
      console.log(err)
    });
  };


  //Get Call to populate CalcList
  const getCalculations = async () => {
    let result = await fetch(`/api/calculations`);
    let calc_obj = await result.json();
    setCalculations(calc_obj);
  }

  return (
    <NumberContext.Provider
      value={{
        doMath,
        functionType,
        handleBackButton,
        handleClearValue,
        handleSetCalcFunction,
        handleSetDisplayValue,
        handleSetStoredValue,
        handleToggleNegative,
        calculations,
        number,
        storedNumber,
        setNumber
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

