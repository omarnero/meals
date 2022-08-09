import React from "react";
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  removeItem: () => {},
  resetItem: () => {},
});
export default CartContext;
