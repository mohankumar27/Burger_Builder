import React from "react";
import classes from "./BackDrop.module.css";

function backDrop(props) {
  return props.showAnim ? (
    <div className={classes.backDrop} onClick={props.clicked}></div>
  ) : null;
}

export default backDrop;
