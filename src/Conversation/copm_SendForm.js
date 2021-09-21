import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { chatAddMsg } from '../Conversation/conversationSlice';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import { UploadHistory } from '../Firebase'


// This is area of send form - button, input etc
const SendForm = ({ props: { msg, msgFunc } }) => {

    const useStyles = makeStyles(() => ({
        sendform: {
            padding: '2%',
            width: '100%',
            height: '25%',
            background: 'rgba(250, 250, 250, .35)',
            zIndex: '5',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        sendtext: {
            resize: 'none',
            width: '90%',
            height: '50%',
        },
        button: {
            alignSelf: 'flex-end',
            marginTop: '2%',
            width: '25%',
            height: '20%'
        },
    }));
    const classes = useStyles();
    const dispatchOne = useDispatch();
    const { currentChat } = useSelector((state) => state.conversation);

    //Send message
    function sendMsg(msg, msgFunc) {
        if (!!msg === true) {
            dispatchOne(chatAddMsg({
                chatId: currentChat.id,
                msg: {
                    authorId: 1,
                    msg: msg,
                    read: false,
                    time: `${moment().format('H:mm:ss')}`
                }
            }));
            msgFunc('');
            //dispatchOne(testDisp(msg));
            return true;
        }
    };

    const sendMsgByEnterAndBotAnswerThunk = (msg, msgFunc) => (dispatch, getState) => {
        const { conversation } = getState();
        const currentChat = conversation.currentChat;
        const curChat = conversation.chats.find(e => e.id === currentChat.id);
        const msgArray = curChat.msgArray;
        sendMsg(msg, msgFunc);
        msgFunc('');
        const { answers } = conversation.users.find(e => e.id === curChat.chatBuddyId);
        if (msgArray[msgArray.length - 1].authorId !== 1) {
            msgFunc('');
            let timer;
            function answerMsg() {
                let ansNum = parseInt(Math.random() * answers.length);
                dispatch(chatAddMsg({
                    chatId: currentChat.id,
                    msg: { authorId: curChat.chatBuddyId, msg: answers[ansNum], read: true, time: `${moment().format('H:mm:ss')}` },
                }
                ));
                dispatch(UploadHistory());
                return clearInterval(timer);
            }
            timer = setInterval(() => answerMsg(), 1000);
        }
        //
    }

    function sendMsgByButton(e, msg, msgFunc) {
        e.preventDefault();
        dispatchOne(sendMsgByEnterAndBotAnswerThunk(msg, msgFunc));
    }

    function sendMsgByEnter(e, msg, msgFunc) {
        if (e.code === "Enter") {
            e.preventDefault();
            dispatchOne(sendMsgByEnterAndBotAnswerThunk(msg, msgFunc));
        }
    }

    return <form className={classes.sendform} action="">
        <TextField
            variant="outlined"
            multiline
            minRows={3}
            maxRows={3}
            className={classes.sendtext}
            id="txta1"
            value={msg}
            onChange={(e) => msgFunc(e.target.value)}
            onKeyDown={(e) => { sendMsgByEnter(e, msg, msgFunc) }}
        ></TextField >
        <Button className={classes.button}
            variant="contained" color="primary"
            onClick={(e) => {
                sendMsgByButton(e, msg, msgFunc);
            }}>
            Отправить
        </Button>
    </form>
}

SendForm.propTypes = {
    props: PropTypes.shape({
        msg: PropTypes.string.isRequired
    })
}

export default SendForm;