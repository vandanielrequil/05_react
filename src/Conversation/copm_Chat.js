import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { addMsg } from '../Conversation/conversationSlice'

// This is the area of chat - where messages appear
const Chat = ({ props: { msgFunc, msgSent, msgSentFunc, msgArray } }) => {

    const useStyles = makeStyles(() => ({
        chat: {
            padding: '2%',
            width: '90%',
            height: '70%',
            background: '#fafafa',
            border: '2px solid #313234',
            borderRadius: '2%',
            zIndex: '5',
            overflowX: 'hidden',
            overflowY: 'auto',
            scrollBehavior: 'smooth'
        },
        answer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
        },
        send: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
        }
    }));
    const classes = useStyles();
    const dispatch = useDispatch();

    //Bot answers
    useEffect(() => {
        (function sendAns() {
            if (msgSent) {
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
                    dispatch(addMsg({ msg: ansArr[ansNum], author: 'bot', type: 'answer' }));
                    return clearInterval(timer);
                }
                timer = setInterval(() => answerMsg(), 1000);
                msgSentFunc(false);
            }
        })();
    }, [msgFunc, msgSent, msgSentFunc, msgArray.length, msgArray, dispatch]);

    //adding left or right style to messages and nickname
    const { username, botname } = useSelector(state => state.profile);
    let ans = msgArray.slice(1).map((e, i) => {
        let classChoose = (e.type === 'answer') ? classes.answer : classes.send;
        let nickname;
        if (e.type === 'answer') {
            nickname = <span role="img" aria-label="sheep">🤖<i>{botname}</i></span>
        }
        else {
            nickname = <span role="img" aria-label="sheep">👦<i>{username}</i></span>
        };
        return <div key={1000 + i} className={classChoose}>{nickname} - {e.msg}</div>
    });
    //
    //
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
            msgArray: PropTypes.array.isRequired,
            msgSent: PropTypes.bool.isRequired,
            msgSentFunc: PropTypes.func.isRequired
        })
}

export default Chat;