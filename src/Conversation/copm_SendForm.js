import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import { chatAddMsg } from '../Conversation/conversationSlice';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';


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
    const dispatch = useDispatch();
    const { chats, users } = useSelector((state) => state.conversation);

    //Send message
    function CompSendMsg(msg, msgFunc) {
        if (!!msg === true) {
            dispatch(chatAddMsg({ id: 0, msg: msg, authorId: 1, time: `${moment().format('H:mm:ss')}` }));
            msgFunc('');
            return true;
        }
    };

    //Send message by enter
    function sendMsgByEnter(e) {
        if (e.code === "Enter") {
            e.preventDefault();
            CompSendMsg(msg, msgFunc);
        }
    }

    return <form className={classes.sendform} action="">
        <TextField
            variant="outlined"
            multiline
            minRows={4}
            className={classes.sendtext}
            id="txta1"
            value={msg}
            onChange={(e) => msgFunc(e.target.value)}
            onKeyDown={(e) => { sendMsgByEnter(e) }}
        ></TextField >
        <Button className={classes.button}
            variant="contained" color="primary"
            onClick={(e) => {
                CompSendMsg(msg, msgFunc);
            }}>
            Отправить
        </Button>
    </form>
}

SendForm.propTypes = {
    props: PropTypes.shape({
        msg: PropTypes.string.isRequired,
        msgSentFunc: PropTypes.func.isRequired
    })
}

export default SendForm;