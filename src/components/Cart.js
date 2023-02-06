import React from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";
const Cart = () => {
  const quantity = useSelector(state => state.cart.totalItem);
  const dispatch = useDispatch();
  const onShowClick = () => {
    dispatch(cartActions.showCart());
  }
  return (
    <div className="cartIcon">
      <button onClick={onShowClick}>
        <h3>Cart: {quantity} Items</h3>
      </button>
      
    </div>
  );
};

export default Cart;
