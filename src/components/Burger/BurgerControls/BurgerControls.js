import React from "react";
import classes from "./BurgerControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
];

function burgerControls(props) {
  let isPurchasable = true;
  for (let key in props.disableInfo) {
    if (!props.disableInfo[key]) {
      isPurchasable = false;
      break;
    }
  }
  return (
    <div className={classes.burgerControls}>
      <p>
        Current Price : <strong>$ {props.price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          disableStatus={props.disableInfo[ctrl.type]}
          added={() => props.addIngredient(ctrl.type)}
          removed={() => props.removeIngredient(ctrl.type)}
        />
      ))}
      <button
        disabled={isPurchasable}
        className={classes.OrderButton}
        onClick={props.Ordered}
      >
        {props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}
      </button>
    </div>
  );
}

export default burgerControls;
