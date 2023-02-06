import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
    return async(dispatch) => {
        const fetchHandler = async() => {
            const res = await fetch('https://shopping-cart-redux-6c029-default-rtdb.firebaseio.com/cartItems.json');
            const data = await res.json()
            return data;
        }
        try {
            const cartData = await fetchHandler();
            dispatch(cartActions.replaceCartData(cartData));
        } catch(e) {
            dispatch(uiActions.showNotification({type: 'error', open: true, message: "Failed to load the cart.."}));
        }
    }
}

export const sendCartData = (cart) => {
    return (dispatch) => {
        dispatch(uiActions.showNotification({
            open: true,
            type: 'warning',
            message: "Sending request..."})
        );
        const sendRequest = async () => {
    
            const res = await fetch(
              'https://shopping-cart-redux-6c029-default-rtdb.firebaseio.com/cartItems.json',
              {
                method: "PUT",
                body: JSON.stringify(cart)
              }
            );
            const data = await res.json();
            dispatch(uiActions.showNotification({type: 'success', open: true, message: "successful added item to the cart.."}));
        }
        try {
            sendRequest();
        } catch (e) {
            dispatch(uiActions.showNotification({type: 'error', open: true, message: "Failed to add the item in cart.."}));
        }
    }

}