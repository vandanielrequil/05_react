import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        username: 'anonymous',
        botname: 'Arthas Menethil'
    },
    reducers: {
        setUserName: (state, action) => {
            state.username = action.payload;
        }
    }
}
);

export const { setUserName } = profileSlice.actions;

export default profileSlice.reducer;