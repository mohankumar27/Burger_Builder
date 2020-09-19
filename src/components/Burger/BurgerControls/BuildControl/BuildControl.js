import React from "react";
import classes from "./BuildControl.module.css";

function buildControl(props) {
  return (
    <div className={classes.buildControl}>
      <div className={classes.label}>{props.label}</div>
      <button
        className={classes.Less}
        disabled={props.disableStatus}
        onClick={props.removed}
      >
        Less
      </button>
      <button className={classes.More} onClick={props.added}>
        More
      </button>
    </div>
  );
}

export default buildControl;
