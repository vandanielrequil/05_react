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
            { id: 3, name: 'Urdnot Wrex', avatar: 'https://pbs.twimg.com/profile_images/565926930256781312/Z6R-hqaD_400x400.jpeg' },
        ],
        chats: [
            { id: 1, chatBuddyId: 2, msgArray: [{ authorId: 2, msg: 'Hello there', read: true, time: '' }] },
            { id: 2, chatBuddyId: 3, msgArray: [{ authorId: 3, msg: 'Hi', read: true, time: '' }] }
        ],
        currentChat: { id: 1, },

    },
    reducers: {
        chatAddMsg: (state, action) => {
            let currChat = state.chats.find(e => e.id === state.currentChat.id);
            let arrLenght = currChat.msgArray.length;
            state.chats.find(e => e.id === action.payload.chatId).msgArray[arrLenght - 1].read = true;
            state.chats.find(e => e.id === action.payload.chatId).msgArray.push(action.payload.msg);

        },
        chatCurrrentSet: (state, action) => { state.currentChat.id = parseInt(action.payload) }
    }
})

export const { chatAddMsg, chatCurrrentSet } = conversationSlice.actions;

export default conversationSlice.reducer;

