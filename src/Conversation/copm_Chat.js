import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { chatAddMsg } from '../Conversation/conversationSlice';
import moment from 'moment';

// This is the area of chat - where messages appear
const Chat = ({ props: { msgFunc, msgSent, msgSentFunc } }) => {

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
        answer: {
            margin: '2px',
            alignSelf: 'flex-end',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            padding: '5px 20px',
            backgroundColor: theme.palette.primary.light,
            borderRadius: '5px 5px 5px 5px'
        },
        send: {
            margin: '2px',
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
    const dispatch = useDispatch();
    const { users, chats } = useSelector(state => state.conversation);

    //Bot answers
    useEffect(() => {
        (function sendAns() {
            if (chats[chats.length - 1].authorId === 1) {
                msgFunc('');
                const ansArr = [
                    "Я выпотрошу тебя и всю твою семью",
                    "Твоя душа принадлежит мне",
                    "И не надейся на быструю смерть",
                    "Да начнётся истребление",
                ];
                let timer;
                function answerMsg() {
                    let ansNum = parseInt(Math.random() * ansArr.length);
                    dispatch(chatAddMsg({ id: 0, msg: ansArr[ansNum], authorId: 2, time: `${moment().format('H:mm:ss')}` }));
                    return clearInterval(timer);
                }
                timer = setInterval(() => answerMsg(), 1000);
                msgSentFunc(false);
            }
        })();
    }, [msgFunc, msgSent, msgSentFunc, dispatch, chats]);

    //adding left or right style to messages and nickname
    let ans = chats.slice(1).map((e, i) => {
        let classChoose = (e.authorId === 1) ? classes.send : classes.answer;
        let nickname;
        if (e.authorId !== 1) {
            nickname = <span role="img" aria-label="sheep">🤖<i>Bot</i></span>
        }
        else {
            nickname = <span role="img" aria-label="sheep">👦<i>username</i></span>
        };
        return <div key={1000 + i} className={classChoose}>{nickname} - {e.msg}</div>
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
            msgFunc: PropTypes.func.isRequired,
            msgSent: PropTypes.bool.isRequired,
            msgSentFunc: PropTypes.func.isRequired
        })
}

export default Chat;