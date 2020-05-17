import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";

const NumberButton = ({ buttonValue, onClick }) => {
  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button type="button" onClick={() => {
      handleSetDisplayValue(buttonValue);
      onClick();
    }
    }>
      {buttonValue}
    </button>
  );
};

export { NumberButton };
