import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';

// This is the area of chat - where messages appear
const Chat = ({ props: { msgFunc } }) => {

    const useStyles = makeStyles((theme) => ({
        chat: {
            padding: '2%',
            margin: '0 0 3% 0',
            width: '100%',
            height: '65%',
            background: 'rgba(250, 250, 250, .35)',
            zIndex: '5',
            overflowX: 'hidden',
            overflowY: 'auto',
            scrollBehavior: 'smooth',
            display: 'flex',
            flexDirection: 'column',
        },
        wrapeprAnswer: {
            display: 'flex',
            justifyContent: 'flex-end'
        },
        wrapeprSend: {
            display: 'flex',
            justifyContent: 'flex-start'
        },
        answer: {
            margin: '3px 5px',
            alignSelf: 'flex-end',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            padding: '5px 20px',
            backgroundColor: theme.palette.primary.light,
            borderRadius: '5px 5px 5px 5px'
        },
        send: {
            margin: '3px 5px',
            alignSelf: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '5px 20px',
            backgroundColor: theme.palette.primary.light,
            borderRadius: '5px 5px 5px 5px'
        }
    }));
    const classes = useStyles();
    const { users, chats, currentChat } = useSelector(state => state.conversation);
    const curChat = chats.find(e => e.id === currentChat.id);

    //adding left or right style to messages 
    let ans = curChat.msgArray.map((e, i) => {
        let classWrapper, classChoose, nickname, avatarUrl;
        if (e.authorId !== 1) {
            let { name, avatar } = users.find(e => e.id === curChat.chatBuddyId);
            avatarUrl = avatar;
            nickname = name;
            classChoose = classes.answer;
            classWrapper = classes.wrapeprAnswer;
        }
        else {
            let { name, avatar } = users.find(e => e.id === 1);
            avatarUrl = avatar;
            nickname = name;
            classChoose = classes.send;
            classWrapper = classes.wrapeprSend;
        };
        return <div key={i} className={classWrapper}><Avatar src={avatarUrl} alt="chat buddy photo" />
            <div className={classChoose}><i>{nickname}</i> {e.msg}</div>
        </div>
    });

    //auto scroll down
    const chatElem = useRef(<></>);
    useEffect(e => {
        chatElem.current.scrollTop = chatElem.current.scrollHeight;
    });

    return <div ref={chatElem} className={classes.chat}>{ans}</div>
}


Chat.propTypes = {
    props:
        PropTypes.shape({
            msgFunc: PropTypes.func.isRequired
        })
}

export default Chat;