import { createSlice } from "@reduxjs/toolkit";

export const authDataSlice = createSlice({
    name: "authData",
    initialState: {
        value: {
            user: {},
            isAuthenticated: false
        }
    },
    reducers: {
        setCurrentUser: (state, action) => {
            state.value = action.payload;
        },
        clearCurrentUser: (state, action) => {
            state.value = {
                user: {},
                isAuthenticated: false
            }
        }
    }
});

export const { setCurrentUser, clearCurrentUser } = authDataSlice.actions;

export default authDataSlice.reducer;