import type { RegisterFormValues, UserInfo } from "@/types/auth";
import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../instance";

const registerUser = createAsyncThunk<UserInfo, RegisterFormValues>(
    "auth/registerUser",
    async (formData, { rejectWithValue }) => {
        const userInfo = instance.post("/register", formData).then(res => {
            console.log(res);

            return res.data;
        }).then(data => data)

        if (!userInfo) {
            return rejectWithValue("Error")
        }

        return userInfo;
    }
)

export default registerUser;