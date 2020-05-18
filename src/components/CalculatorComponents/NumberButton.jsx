import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";

const NumberButton = ({ buttonValue, onClick, e }) => {

  const { handleSetDisplayValue } = useContext(NumberContext);
  return (
    <button type="button" onClick={(e) => {
      handleSetDisplayValue(buttonValue);
      onClick(); // boolean check for = button not to disable =equal button before all values are passed
    }
    }>
      {buttonValue}
    </button>
  );
};

export { NumberButton };
