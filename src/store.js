import { configureStore, combineReducers } from '@reduxjs/toolkit';
import conversationReducer from './Conversation/conversationSlice';
import profileReducer from './Profile/profileSlice';
import thunkMiddleware from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import dogsReducer from './Dogs/dogsSlice';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['dogs']
};

const reducers = combineReducers({ conversation: conversationReducer, profile: profileReducer, dogs: dogsReducer });
const persistedReducer = persistReducer(persistConfig, reducers)

export default configureStore({
    reducer: persistedReducer,
    middleware: [thunkMiddleware]
});


// export default configureStore({
//     reducer: {
//         conversation: conversationReducer,
//         profile: profileReducer
//     },
//     middleware: [thunkMiddleware]
// });
