import React from "react";
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.module.css";

function logo(props) {
  return (
    <div className={classes.logo} style={{ height: props.height }}>
      <img src={burgerLogo} alt="Burger Logo" />
    </div>
  );
}

export default logo;
