import React from 'react';
import TextField from '@material-ui/core/TextField';

import { useSelector, useDispatch } from 'react-redux';
import { setUserName } from './profileSlice';


const Profile = () => {

    const { username } = useSelector(state => state.profile);
    const dispatch = useDispatch();

    return <TextField id="username-input"
        label="Enter your username"
        variant="filled"
        value={username}
        onChange={e => {
            dispatch(setUserName(e.target.value));
        }}
    />
}

export default Profile;