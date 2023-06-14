import { combineReducers, configureStore, createSlice, createStore } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0,
    show: true,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state, action) {
            state.counter = state.counter + action.payload;
        },
        decrement(state) {
            state.counter--;
        },
        toggleShow(state) {
            state.show = !state.show;
        }
    }
})

const initialAuthSlice = {
    loggedIn: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthSlice,
    reducers: {
        login(state) {
            state.loggedIn = true;
        },
        logout(state) {
            state.loggedIn = false;
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer,
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;


