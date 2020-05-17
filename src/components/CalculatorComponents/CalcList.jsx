import React, { useContext } from "react";
import { CalcListStyle } from "../styles/Styles";
import { NumberContext } from './NumberProvider';



const CalcList = () => {
  const { calculations } = useContext(NumberContext);

  return (
    <CalcListStyle className="calc-list-container">
      <h1>Calculations</h1>
      <ul>
        {calculations.map(item => {
          return (
            <li key={item.id} style={{ color: '#333', fontSize: '30px' }}>
              {item.number1} {item.operator} {item.number2} = {item.total}
            </li>
          );
        })
        }
      </ul>
    </CalcListStyle>
  );
}
export { CalcList };