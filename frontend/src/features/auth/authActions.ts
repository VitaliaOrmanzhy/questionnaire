import type { LoginFormValues, RegisterFormValues } from "@/types/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../instance";
import type { UserInfo } from "@/types/user";

export const registerUser = createAsyncThunk<UserInfo, RegisterFormValues>(
    "auth/registerUser",
    async (formData, { rejectWithValue }) => {
        const userInfo = instance.post("/auth/register", formData)
            .then(res => {
            console.log(res);

            return res.data;
        }).then(data => data)

        if (!userInfo) {
            return rejectWithValue("Error")
        }

        return userInfo;
    }
)

export const loginUser = createAsyncThunk<UserInfo, LoginFormValues>(
    "auth/loginUser",
    async (formData) => {
        const response = instance.post("/auth/login", formData)
            .then(res => res.data)
            .then(data => data)
        
        return response;
    }
)