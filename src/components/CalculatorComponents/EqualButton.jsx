import React, { useContext } from "react";
import { NumberContext } from "./NumberProvider";

const EqualButton = ({ isValid }) => { // is valid is to disable or enable this button
  const { doMath } = useContext(NumberContext);

  return (
    <button
      className="white-button"
      disabled={!isValid}
      type="button"
      onClick={
        () => {
          doMath()
        }
      }>
      =
    </button>
  );

};
export { EqualButton };
