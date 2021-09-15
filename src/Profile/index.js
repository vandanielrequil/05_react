import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName } from './profileSlice';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        padding: '2vh 0',
        display: 'flex',
        justifyContent: 'center'
    }
}));


const Profile = () => {
    const classes = useStyles();
    const { username } = useSelector(state => state.profile);
    const dispatch = useDispatch();

    return <div className={classes.wrapper}><TextField id="username-input"
        label="Enter your username"
        variant="filled"
        value={username}
        onChange={e => {
            dispatch(setUserName(e.target.value));
        }} />
    </div>
}

export default Profile;