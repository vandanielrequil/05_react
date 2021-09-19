import React from 'react';
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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        position: 'absolute',
        width: '325px',
        height: '92.5%',
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        backgroundColor: theme.palette.secondary.main
    },
    AppBar: {
        width: '100%',
        flexDirection: 'row'
    },
    navChat: {
        margin: '1px 0',
        padding: '10px 10px',
        display: 'flex',
        justifyContent: 'flex-start',
        backgroundColor: theme.palette.secondary.main,
        '&:hover': { backgroundColor: theme.palette.secondary.light },
    },
    currentChat: {
        backgroundColor: theme.palette.primary.light,
    },
    navChatColumn: {
        margin: '0 10px',
        display: 'flex',
        flexDirection: 'column',
        width: '180px',
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
    },
    lastMsg: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '200px',
        textOverflow: 'ellipsis',
    },
    noTselected: {
        textDecoration: 'none',
        color: theme.palette.secondary.dark
    },
    selected: {
        fontSize: '1.2rem',
        fontWeight: '400',
        color: theme.palette.primary.main
    },
    noStyle: {
        textDecoration: 'none',
        color: theme.palette.primary.dark
    },

}));

const LeftContainer = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { users, chats, currentChat } = useSelector((store) => store.conversation);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function setCurrentChat(e) {
        dispatch(chatCurrrentSet(parseInt(e.currentTarget.id)));
    };

    function renderChat() {
        const chatList = chats.map(e => {
            const { avatar } = users.find(el => el.id === e.chatBuddyId);
            const arrLngt = e.msgArray.length;
            const { authorId, msg, time } = e.msgArray[arrLngt - 1];
            const { name } = users.find(el => el.id === authorId);
            const isCurrent = (currentChat.id === e.id) ? classes.currentChat : '';
            return <div key={e.id} >
                <div id={e.id} className={`${classes.navChat} ${isCurrent}`} onClick={(e) => { setCurrentChat(e); }}>
                    <Avatar alt="avatar" src={avatar} />
                    <div className={classes.navChatColumn}><div><i>{name}</i></div><div className={classes.lastMsg}>{msg}</div></div>
                    <div><Typography variant='subtitle2'>{time}</Typography></div>
                </div>
            </div>
        }
        );
        return chatList;
    };

    const chatArray = renderChat();

    return (
        <div><AppBar className={classes.AppBar} position="static">
            <Toolbar variant="regular">
                <IconButton
                    onClick={handleClick}
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <NavLink className={classes.noTselected} activeClassName={classes.selected} to="/signin">Login
                        </NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <NavLink className={classes.noTselected} activeClassName={classes.selected} to="/profile">Profile
                        </NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <NavLink className={classes.noTselected} activeClassName={classes.selected} to="/conversation">Conversations</NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <NavLink className={classes.noTselected} activeClassName={classes.selected} to="/dogs">Dogs API</NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <NavLink className={classes.noTselected} activeClassName={classes.selected} to="/playgroud">Playgroud</NavLink>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <NavLink className={classes.noTselected} activeClassName={classes.selected} to="/firebase">Firebase</NavLink>
                    </MenuItem>
                </Menu>
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
            <div className={classes.wrapper}>

                <NavLink className={classes.noStyle} to="/conversation">{chatArray}</NavLink>

            </div >
        </div>
    );
}

export default LeftContainer;