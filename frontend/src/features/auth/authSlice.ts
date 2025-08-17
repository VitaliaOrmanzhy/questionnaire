import registerUser from "@/features/auth/authActions";
import type { User } from "@/types/auth";
import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
    userInfo: User | null,
    isLoading: boolean,
    error: string | null
}

const initialState: AuthState = {
    userInfo: null,
    isLoading: false,
    error: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userInfo = action.payload.userInfo
        })
    }
})

export const authReducer = authSlice.reducer;