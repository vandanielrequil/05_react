import { createSlice } from "@reduxjs/toolkit";

export const conversationSlice = createSlice({
    name: 'conversation',
    initialState: {
        countOfMessages: 0,
        lastMessageText: 'MessageText'
    },
    reducers: {
        incWithoutMessage: (state) => {
            state.countOfMessages += 1;
        },
        incWithMessage: (state, action) => {
            state.countOfMessages += 1;
            state.lastMessageText = action.payload;
        }
    }
})

export const { incWithoutMessage, incWithMessage } = conversationSlice.actions;

export default conversationSlice.reducer;