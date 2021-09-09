import React, { useEffect } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { chatCurrrentSet } from '../Conversation/conversationSlice'

const useStyles = makeStyles((theme) => ({
    wrapper: {
        position: 'absolute',
        width: '325px',
        height: '100%',
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        backgroundColor: theme.palette.secondary.main
    },
    AppBar: {
        width: '100%'
    },
    navChat: {
        margin: '1px 0',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        backgroundColor: theme.palette.primary.light,
        '&:hover': { backgroundColor: theme.palette.secondary.light },
    },
    navChatColumn: {
        display: 'flex',
        flexDirection: 'column',
        //border: '3px solid Teal'
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    search: {
        display: 'flex',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%'
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
    }
}));

const LeftContainer = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { currentChat, users, chats } = useSelector((store) => store.conversation);


    function setCurrentChat(e) {
        dispatch(chatCurrrentSet(parseInt(e.currentTarget.id)));
    };

    function renderChat() {
        const chatList = chats.map(e => {
            const { name, avatar } = users.find(el => parseInt(el.id) === parseInt(e.chatBuddyId));
            const arrLngt = e.msgArray.length;
            const { msg, time } = e.msgArray[arrLngt - 1];
            return <>
                <div key={e.id} id={e.id} className={classes.navChat} onClick={(e) => { setCurrentChat(e); }}>
                    <Avatar alt="avatar" src={avatar} />
                    <div className={classes.navChatColumn}><div>{name}</div><div>{msg}</div></div>
                    <div><Typography variant='subtitle2'>{time}</Typography></div>
                </div>
            </>
        }
        );
        return chatList;
    };

    const chatArray = renderChat();

    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.AppBar} position="static">
                <Toolbar variant="regular">
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            {chatArray}
        </div >
    );
}

export default LeftContainer;