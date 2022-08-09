import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";
function App() {
  const [cartIsShow, setCartIsShow] = useState(false);
  const showcart = () => {
    setCartIsShow(true);
  };
  const hidecart = () => {
    setCartIsShow(false);
  };
  return (
    <CartProvider>
      {cartIsShow && <Cart onClick={hidecart} />}
      <Header onClick={showcart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
