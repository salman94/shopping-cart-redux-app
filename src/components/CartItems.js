import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const itemLists = useSelector(state => state.cart.itemLists);
  const cartItems = itemLists.map((item) =>
    <li key={item.id}>
      <CartItem
        id={item.id}
        quantity={item.quantity}
        price={item.price}
        name={item.name} 
        total={item.totalPrice}
      />
    </li>
);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems}
      </ul>
    </div>
  );
};
export default CartItems;
