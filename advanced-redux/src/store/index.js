import { configureStore, createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        isShowing: true,
        items: [{ id:Math.random().toFixed(2)  * 100, title: "test", quantity: 3, total: 18, price: 6 }],
    },
    reducers: {
        toggleShow: (state) => {
            state.isShowing = !state.isShowing;
        },
        addItem: (state, action) => {
            const item = action.payload;
            const indexOfItem = state.items.findIndex(i => i.title === item.title);
            if (indexOfItem === -1) {
                state.items.push({
                    id:Math.random().toFixed(2) * 100,
                    title: item.title,
                    quantity: item.quantity,
                    price: item.price,
                    total: item.price * item.quantity,
                });
            } else {
                state.items[indexOfItem].quantity += item.quantity;
                state.items[indexOfItem].total = state.items[indexOfItem].quantity * state.items[indexOfItem].price;
            }
        },
        addSingleItem: (state, action) => {
            const titleOfItem = action.payload;
            console.log(titleOfItem);
            const indexOfItem = state.items.findIndex(i => i.title === titleOfItem);
            state.items[indexOfItem].quantity += 1;
            state.items[indexOfItem].total = state.items[indexOfItem].quantity * state.items[indexOfItem].price;
        },
        removeSingleItem: (state, action) => {
            const titleOfItem = action.payload;
            const indexOfItem = state.items.findIndex(i => i.title === titleOfItem);
            state.items[indexOfItem].quantity -= 1;
            state.items[indexOfItem].total = state.items[indexOfItem].quantity * state.items[indexOfItem].price;
        }
    }
})


export const store = configureStore({reducer: cartSlice.reducer});


export const cartActions = cartSlice.actions;
