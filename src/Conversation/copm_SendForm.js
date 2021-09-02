import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { incWithMessage, addMsg } from '../Conversation/conversationSlice'


// This is area of send form - button, input etc
const SendForm = ({ props: { msg, msgFunc, msgArray, msgSentFunc } }) => {

    const useStyles = makeStyles(() => ({
        sendform: {
            padding: '2%',
            width: '90%',
            height: '20%',
            background: '#fafafa',
            border: '2px solid #313234',
            borderRadius: '2%',
            zIndex: '5',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        sendtext: {
            resize: 'none',
            width: '90%',
            height: '70%',
        },
        button: {
            alignSelf: 'flex-end',
            marginTop: '3%',
            width: '35%',
            height: '30%'
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
        <textarea
            className={classes.sendtext}
            id="txta1"
            cols="30"
            rows="5"
            value={msg}
            onChange={(e) => msgFunc(e.target.value)}
            onKeyDown={(e) => { sendMsgByEnter(e) }}
        ></textarea>
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