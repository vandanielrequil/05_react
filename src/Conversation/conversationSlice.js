import { createSlice } from "@reduxjs/toolkit";

export const conversationSlice = createSlice({
    name: 'conversation',
    initialState: {
        countOfMessages: 0,
        lastMessageText: 'MessageText',
        msgArray: [{ msg: 'initMsg', author: 'initAuthor', type: 'initType' }],
        users: [
            { id: 0, name: 'anonymous', avatar: '' },
            { id: 1, name: 'Commander Shepard', avatar: 'https://upload.wikimedia.org/wikipedia/ru/2/20/Commander_Shepard.jpg' },
            { id: 2, name: 'Liara T\'Soni', avatar: 'http://myanimeshelf.com//upload/dynamic/2011-11/07/MassEffect2_2011-01-31_23-05-54-84.bmp2.jpg' },
            { id: 3, name: 'Urdnot Wrex', avatar: 'https://static.wikia.nocookie.net/masseffect/images/0/01/ME_wrex_charshot.png/revision/latest?cb=20210620061307' },
        ],
        chats: [{ id: 0, msg: 'initMsg', authorId: 0, read: 'false', time: '' }],
    },
    reducers: {
        incWithoutMessage: (state) => {
            state.countOfMessages += 1;
        },
        addMsg: (state, action) => {
            state.msgArray.push(action.payload);
        },
        chatAddMsg: (state, action) => { state.chats.push(action.payload) }
    }
})

export const { incWithoutMessage, addMsg, chatAddMsg } = conversationSlice.actions;

export default conversationSlice.reducer;

