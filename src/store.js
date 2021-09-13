import { configureStore } from '@reduxjs/toolkit';
import conversationReducer from './Conversation/conversationSlice';
import profileReducer from './Profile/profileSlice';
import thunkMiddleware from 'redux-thunk';

export default configureStore({
    reducer: {
        conversation: conversationReducer,
        profile: profileReducer
    },
    middleware: [thunkMiddleware]
});
