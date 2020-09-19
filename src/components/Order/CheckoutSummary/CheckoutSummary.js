import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

function CheckoutSummary(props) {
  return (
    <div className={classes.checkoutSummary}>
      <h1>We hope it tastes well!!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button buttonType="Danger" clicked={props.onCheckoutCancelled}>
        CANCEL
      </Button>
      <Button buttonType="Success" clicked={props.onCheckoutContinue}>
        CONTINUE
      </Button>
    </div>
  );
}

export default CheckoutSummary;
