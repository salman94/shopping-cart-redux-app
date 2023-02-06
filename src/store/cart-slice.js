import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemLists: [],
        totalItem: 0,
        totalCartPrice: 0,
        showCart: false,
        isChanged: false,
    },
    reducers: {
        addToCart(state, actions) {
            const newItem = actions.payload;
            const existingItem = state.itemLists.find((item) => item.id === newItem.id);
            state.isChanged = true;
            if(existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                state.itemLists.push({
                    name: newItem.name,
                    quantity: 1,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    id: newItem.id,
                });
                state.totalItem++;
            }
            state.totalCartPrice += newItem.price;
        },
        removeFromCart(state, actions) {
            const id = actions.payload;
            const existingItem = state.itemLists.find((item) => item.id === id);
            state.isChanged = true;
            if(existingItem.quantity === 1) {
                state.itemLists = state.itemLists.filter((item) => item.id !== id);
                state.totalItem--;
            } else {
                existingItem.totalPrice -= existingItem.price;
                existingItem.quantity--;
            }
            state.totalCartPrice -= existingItem.price;
        },
        showCart(state) {
            state.showCart = !state.showCart
        },
        replaceCartData(state, actions) {
            state.itemLists = actions.payload.itemLists;
            state.totalItem = actions.payload.totalItem;
            state.totalCartPrice = actions.payload.totalCartPrice;
        },
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;