import React, { Fragment } from "react";
import reactimg from "../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h2>Meals</h2>
        <HeaderCardButton onClick={props.onClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={reactimg} alt="footpic" />
      </div>
    </Fragment>
  );
};
export default Header;
