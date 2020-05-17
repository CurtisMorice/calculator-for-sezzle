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
        onClick();
      }
      }
    >
      {buttonValue}
    </button>
  );
};

export { FunctionButton };
