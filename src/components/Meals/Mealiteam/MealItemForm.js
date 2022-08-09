import React, { useRef, useState } from "react";
import Input from "../../Ui/Input";
import classes from "./MealItemForm.module.css";
const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsVaild, setAmountIsVaild] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 0 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsVaild(false);
      return;
    }
    props.onAddToCard(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amountIsVaild && <p>please entere correct value</p>}
    </form>
  );
};
export default MealItemForm;
