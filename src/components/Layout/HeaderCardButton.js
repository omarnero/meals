import React, { useContext, useState, useEffect } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
import CartContext from "../store/CartContext";
const HeaderCardButton = (props) => {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const [bump, setBump] = useState(false);
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBump(true);
    const timer = setTimeout(() => {
      setBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const totalAmont = items.reduce((cuurent, item) => {
    return cuurent + item.amount;
  }, 0);
  const BtnClasses = `${classes.button} ${bump ? classes.bump : ""}`;
  return (
    <div className={BtnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Card</span>
      <span className={classes.badge}> {totalAmont}</span>
    </div>
  );
};
export default HeaderCardButton;
