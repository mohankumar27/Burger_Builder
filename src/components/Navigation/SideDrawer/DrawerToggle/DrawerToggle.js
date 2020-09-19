import React from "react";
import classes from "./DrawerToggle.module.css";

function drawerToggle(props) {
  return (
    <div className={classes.drawerToggle} onClick={props.toggle}>
      <div />
      <div />
      <div />
    </div>
  );
}

export default drawerToggle;
