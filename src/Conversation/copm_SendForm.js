import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { incWithMessage, addMsg } from '../Conversation/conversationSlice';
import TextField from '@material-ui/core/TextField';


// This is area of send form - button, input etc
const SendForm = ({ props: { msg, msgFunc, msgArray, msgSentFunc } }) => {

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

    function CompSendMsg(msg, msgFunc, msgArray, msgSentFunc) {
        if (!!msg === true) {
            dispatch(addMsg({ msg: msg, author: 'human', type: 'send' }));
            // msgArrFunc((a) => [...a, { msg: mess, author: 'human' } ]);
            msgFunc('');

            dispatch(incWithMessage(msg));

            return msgSentFunc(true);
        }
    };

    function sendMsgByEnter(e) {
        if (e.code === "Enter") {
            e.preventDefault();
            CompSendMsg(msg, msgFunc, msgArray, msgSentFunc);
        }
    }

    return <form className={classes.sendform} action="">
        <TextField
            variant="outlined"
            multiline='true'
            maxRows='4'
            className={classes.sendtext}
            id="txta1"
            cols="30"
            rows="5"
            value={msg}
            onChange={(e) => msgFunc(e.target.value)}
            onKeyDown={(e) => { sendMsgByEnter(e) }}
        ></TextField >
        <Button className={classes.button}
            variant="contained" color="primary"
            onClick={(e) => {
                CompSendMsg(msg, msgFunc, msgArray, msgSentFunc);
            }}>
            Отправить
        </Button>
    </form>
}

SendForm.propTypes = {
    props: PropTypes.shape({
        msg: PropTypes.string.isRequired,
        msgArray: PropTypes.array.isRequired,
        msgSentFunc: PropTypes.func.isRequired
    })
}

export default SendForm;