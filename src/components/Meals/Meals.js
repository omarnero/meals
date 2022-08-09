import React, { Fragment } from "react";
import AvailableMales from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMales />
    </Fragment>
  );
};
export default Meals;
