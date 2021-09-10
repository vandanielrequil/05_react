import { configureStore } from '@reduxjs/toolkit';
import conversationReducer from './Conversation/conversationSlice';
import profileReducer from './Profile/profileSlice';

export default configureStore({
    reducer: {
        conversation: conversationReducer,
        profile: profileReducer
    }
})
