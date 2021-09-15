import { createSlice } from "@reduxjs/toolkit";

export const DOG_URL = 'https://dog.ceo/api/breeds/image/random';

export const dogsSlice = createSlice({
    name: 'dogs',
    initialState: {
        loading: false,
        error: false,
        data: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setData: (state, action) => {
            state.data = action.payload
        },
    }
})

export const { setLoading, setError, setData, } = dogsSlice.actions;

export default dogsSlice.reducer;

