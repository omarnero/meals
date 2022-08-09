import React, { Fragment, useContext, useState } from "react";
import Modal from "../Ui/Modal";
import classes from "./Cart.module.css";
import CartContext from "../store/CartContext";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const cartIemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cardItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartIemRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  const submitOrderHandler = async (orderData) => {
    setIsSubmiting(true);
    await fetch(
      "https://food-app-b63f2-default-rtdb.firebaseio.com/ordershttps://food-app-b63f2-default-rtdb.firebaseio.com/.json",
      {
        method: "POST",
        body: JSON.stringify({
          data: orderData,
          order: cartCtx.items,
        }),
      }
    );
    setIsSubmiting(false);
    setDidSubmit(true);
    cartCtx.resetItem();
  };
  const hasItems = cartCtx.items.length > 0;
  const isCheckoutChangeHandler = () => {
    setIsCheckout(true);
  };
  const modalAction = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClick}>
        {" "}
        Close
      </button>
      {hasItems && (
        <button
          className={classes.button}
          onClick={isCheckoutChangeHandler}
        >
          Order
        </button>
      )}
    </div>
  );
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const submitingmessage = <p> oredr sending ....</p>;
  const didsubmitingmessage = (
    <Fragment>
      <p>oreder send sucecces</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClick}>
          {" "}
          Close
        </button>
      </div>
    </Fragment>
  );
  const cartContent = (
    <Fragment>
      {cardItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClick} />
      )}
      {!isCheckout && modalAction}
    </Fragment>
  );

  return (
    <Modal onClick={props.onClick}>
      {!isSubmiting && !didSubmit && cartContent}
      {isSubmiting && !didSubmit && submitingmessage}
      {didSubmit && !isSubmiting && didsubmitingmessage}
    </Modal>
  );
};
export default Cart;
