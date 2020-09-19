import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import BackDrop from "../../UI/BackDrop/BackDrop";
import { Aux } from "../../../hoc/Wrapper";

function sideDrawer(props) {
  let attachedClasses = [classes.sideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.sideDrawer, classes.Open];
  }
  return (
    <Aux>
      <BackDrop showAnim={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  );
}

export default sideDrawer;
