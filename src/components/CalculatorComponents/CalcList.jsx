import React, { useContext } from "react";
import { DisplayStyles } from "../styles/Styles";
import { NumberContext } from './NumberProvider';



const CalcList = () => {
  const { calculations } = useContext(NumberContext);

  return (
    <DisplayStyles
      style={{
        width: "500px",
        height: "432px",
        display: "block",
      }}
    >
      <h1 className="text-primary text-center">Calculations</h1>
      <ul className="list-group">
        {calculations.map(item => {
          return (
            <li key={item.id} className="list-group-item" style={{ color: '#333', fontSize: '30px' }}>
              {item.number1} {item.operator} {item.number2} = {item.total}
            </li>
          );
        })
        }
      </ul>
    </DisplayStyles>
  );
}
export { CalcList };