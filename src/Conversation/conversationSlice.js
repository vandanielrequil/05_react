import { createSlice } from "@reduxjs/toolkit";

export const conversationSlice = createSlice({
    name: 'conversation',
    initialState: {
        countOfMessages: 0,
        lastMessageText: 'MessageText',
        msgArray: [{ msg: 'initMsg', author: 'initAuthor', type: 'initType' }]
    },
    reducers: {
        incWithoutMessage: (state) => {
            state.countOfMessages += 1;
        },
        incWithMessage: (state, action) => {
            state.countOfMessages += 1;
            state.lastMessageText = action.payload;
        },
        addMsg: (state, action) => {
            state.msgArray.push(action.payload);
        }
    }
})

export const { incWithoutMessage, incWithMessage, addMsg } = conversationSlice.actions;

export default conversationSlice.reducer;

