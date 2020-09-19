import React from "react";
import classes from "./Button.module.css";

function button(props) {
  return (
    <button
      className={[classes.button, classes[props.buttonType]].join(" ")}
      onClick={props.clicked}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

export default button;
