import React, { useRef, useState } from "react";
import classes from "./Checkout.module.css";
const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;
const Checkout = (props) => {
  const [fiv, setfiv] = useState({
    name: true,
    street: true,
    postalcode: true,
    city: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const confirmHandler = (event) => {
    event.preventDefault();
    const enterdname = nameInputRef.current.value;
    const enterdstreet = streetInputRef.current.value;
    const enterdpostalCode = postalCodeInputRef.current.value;
    const enterdcity = cityInputRef.current.value;
    const validName = !isEmpty(enterdname);
    const validStreet = !isEmpty(enterdstreet);
    const validCity = !isEmpty(enterdcity);
    const validPostalCode = isFiveChars(enterdpostalCode);
    setfiv({
      name: validName,
      street: validStreet,
      postalcode: validPostalCode,
      city: validCity,
    });
    const formIsValid =
      validName && validStreet && validCity && validPostalCode;
    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enterdname,
      street: enterdstreet,
      postalcode: enterdpostalCode,
      city: enterdcity,
    });
  };
  const nameClasses = `${classes.control} ${fiv.name ? "" : classes.invalid}`;
  const streetClasses = `${classes.control} ${
    fiv.street ? "" : classes.invalid
  }`;
  const postalcodeClasses = `${classes.control} ${
    fiv.postalcode ? "" : classes.invalid
  }`;
  const cityClasses = `${classes.control} ${fiv.city ? "" : classes.invalid}`;
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!fiv.name && <p>please entere correct Name</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!fiv.street && <p>please entere correct street</p>}
      </div>
      <div className={postalcodeClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!fiv.postalcode && <p>please entere correct postalcode</p>}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!fiv.city && <p>please entere correct city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default Checkout;
