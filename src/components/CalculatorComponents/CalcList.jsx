import React, { useContext, useEffect, useState } from "react";
import { CalcListStyle } from "../styles/Styles";
import { NumberContext } from './NumberProvider';
import io from 'socket.io-client'
const socket = io("/");

const CalcList = () => {
  const { calculations } = useContext(NumberContext);
  const [response, setResponse] = useState("");

  useEffect(() => {
    socket.on('calculation-sent', (data) => {
      setResponse(data)
    });

  }, [response])

  return (
    <CalcListStyle className="calc-list-container">
      <h1>Calculations</h1>
      <ul>
        {calculations.map(item => {
          return (
            <li key={item.id} style={{ color: '#333', fontSize: '20px' }} >
              {item.number1} {item.operator} {item.number2} = { item.total} <br />
              {item.created_at}
            </li>
          );
        })
        }
      </ul>
    </CalcListStyle >
  );
}
export { CalcList };