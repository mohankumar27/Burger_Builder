import React from "react";
import classes from "./ToolBar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

function toolBar(props) {
  return (
    <header className={classes.toolBar}>
      <DrawerToggle toggle={props.toggleSideBar} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav className={classes.DeskTopOnly}>
        <NavigationItems isAuthenticated={props.isAuth} />
      </nav>
    </header>
  );
}

export default toolBar;
