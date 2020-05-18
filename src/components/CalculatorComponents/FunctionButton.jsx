import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";

const FunctionButton = ({ buttonValue, onClick
}) => {
  const { handleSetCalcFunction } = useContext(NumberContext);
  return (
    <button
      className="function-button"
      type="button"
      onClick={() => {
        handleSetCalcFunction(buttonValue);
        onClick();// boolean check for = button not to disable =equal button before all values are passed
      }
      }
    >
      {buttonValue}
    </button>
  );
};

export { FunctionButton };
