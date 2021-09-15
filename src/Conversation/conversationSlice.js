import { createSlice } from "@reduxjs/toolkit";

export const conversationSlice = createSlice({
    name: 'conversation',
    initialState: {
        users: [
            { id: 0, name: 'anonymous', avatar: '' },
            { id: 1, name: 'Commander Shepard', avatar: 'https://upload.wikimedia.org/wikipedia/ru/2/20/Commander_Shepard.jpg' },
            {
                id: 2, name: 'Liara T\'Soni', avatar: 'http://myanimeshelf.com//upload/dynamic/2011-11/07/MassEffect2_2011-01-31_23-05-54-84.bmp2.jpg',
                answers: [
                    "Ведите, капитан.",
                    "Сейчас не время!",
                    "Странно.",
                    "Так уже лучше.",
                    " Э...эй? Кто-нибудь может мне помочь, пожалуйста?",
                    "Ладно уж, храни свои секреты)))",
                ]
            },
            {
                id: 3, name: 'Urdnot Wrex', avatar: 'https://pbs.twimg.com/profile_images/565926930256781312/Z6R-hqaD_400x400.jpeg',
                answers: [
                    "Шепард.",
                    "Что-то скучно... Дайте мне убить кого-то.",
                    "Я тебя уважаю, но это не значит, что я тебя не убью.",
                    "Ищи врага своего врага, и ты найдёшь друга.",
                    "Для мертвеца ты отлично выглядишь.",
                    "Гррр.",
                ]
            },
        ],
        chats: [
            { id: 1, chatBuddyId: 2, msgArray: [{ authorId: 2, msg: 'Приветствую.', read: true, time: '' }] },
            { id: 2, chatBuddyId: 3, msgArray: [{ authorId: 3, msg: 'Чё как?', read: true, time: '' }] }
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

