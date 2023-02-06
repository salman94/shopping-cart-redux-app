import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: "auth",
    initialState: {isLoggedIn: false},
    reducers: {
        logIn(state) {
            state.isLoggedIn = true;
        },
        logOut(state) {
            state.isLoggedIn = false; 
        }
    }
});

export const actions = authSlice.actions;