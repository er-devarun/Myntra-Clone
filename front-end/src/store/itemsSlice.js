import { createSlice } from '@reduxjs/toolkit';

let items = [];

const itemSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addInitialItems: (state, action) => {
            items = action.payload;
            return action.payload;
        },
        displaySearchItem: (state, action) => {
            return items.filter((item) => item.item_name.toLowerCase().replace(/[^a-zA-Z ]/g, "").includes(action.payload.toLowerCase()));
        },
    }
});

export const itemsActions = itemSlice.actions;

export default itemSlice;