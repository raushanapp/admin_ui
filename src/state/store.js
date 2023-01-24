import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    data: [],
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducer: {
        setData: (state, action) => {
            state.data = action.payload;
        }
    }
});

export const { setData } = userSlice.actions;
export default userSlice.reducer;