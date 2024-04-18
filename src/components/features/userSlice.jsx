import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllUsers, getUserProfile, updateUserProfile } from './userAPI';

const initialState = {
    userData: {},
    usersData: [],
    status: 'idle',
    error: null,
};

export const getUserProfileAsync = createAsyncThunk(
    'user/getUserProfile',
    async () => {
        try {
            const userData = await getUserProfile();
            return userData;
        } catch (error) {
            throw error;
        }
    }
);

export const getAllUsersAsync = createAsyncThunk(
    'user/getAllUsers',
    async () => {
        try {
            const usersData = await getAllUsers();
            return usersData;
        } catch (error) {
            console.error('Error fetching all users:', error);
            throw error;
        }
    }
);

export const updateUserProfileAsync = createAsyncThunk(
    'user/updateUserProfile',
    async (formData) => {
        try {
            const updatedUserData = await updateUserProfile(formData);
            return updatedUserData;
        } catch (error) {
            throw error;
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserProfileAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getUserProfileAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.userData = action.payload;
            })
            .addCase(getUserProfileAsync.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error.message;
            })
            .addCase(updateUserProfileAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateUserProfileAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.updatedUserData = action.payload;
            })
            .addCase(updateUserProfileAsync.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error.message;
            })
            .addCase(getAllUsersAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getAllUsersAsync.fulfilled, (state, action) => {
                state.status = 'success';
                state.usersData = action.payload;
            })
            .addCase(getAllUsersAsync.rejected, (state, action) => {
                state.status = 'idle';
                state.error = action.error.message;
            });
    },
});

export const selectUserData = (state) => state.user.userData;
export const selectUpdateUserData = (state) => state.user.updatedUserData;
export const selectAllUsers = (state) => state.user.usersData;

export default userSlice.reducer;
