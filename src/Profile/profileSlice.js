import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        isAuthenticated: false,
        username: 'anonymous',
        email: '',
        password: ''
    },
    reducers: {
        setUserName: (state, action) => {
            state.username = action.payload;
        },
        changeAuth: (state, action) => {
            state.isAuthenticated = action.payload;
        },
    }
}
);

export const { setUserName, changeAuth } = profileSlice.actions;

export default profileSlice.reducer;