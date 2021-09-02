import { configureStore } from '@reduxjs/toolkit';
import conversationReducer from './Conversation/conversationSlice';

export default configureStore({
    reducer: {
        conversation: conversationReducer
    }
})
