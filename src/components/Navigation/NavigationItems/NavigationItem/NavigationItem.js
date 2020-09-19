import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";

function navigationItem(props) {
  return (
    <li className={classes.navigationItem}>
      <NavLink
        exact={props.exact}
        to={props.link}
        activeClassName={classes.active}
      >
        {props.children}
      </NavLink>
    </li>
  );
}

export default navigationItem;
