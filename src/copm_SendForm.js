import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const SendForm = (props) => {

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

    function CompSendMsg(msg, msgArrFunc, msgArr, msgSentFunc) {
        if (!!msg === true) {

            let mess = <div key={msgArr.length} className="msg msg__send">{msg}</div>;
            msgArrFunc((a) => [...a,
            { msg: mess, author: 'human' }
            ]);
            return msgSentFunc(true);
        }
    };

    return <form className={classes.sendform} action="">
        <textarea
            className={classes.sendtext}
            id="txta1"
            cols="30"
            rows="5"
            value={props.msg}
            onChange={(e) => props.msgFunc(e.target.value)}
            onKeyDown={(e) => { if (e.code === "Enter") { e.preventDefault(); CompSendMsg(props.msg, props.msgArrFunc, props.msgArr, props.msgSentFunc); } }}
        ></textarea>
        <Button className={classes.button}
            variant="contained" color="primary"
            onClick={(e) => {
                CompSendMsg(props.msg, props.msgArrFunc, props.msgArr, props.msgSentFunc);
            }}>
            Отправить
        </Button>
    </form>
}

SendForm.propTypes = {
    msg: PropTypes.string.isRequired,
    msgArrFunc: PropTypes.func.isRequired,
    msgArr: PropTypes.array.isRequired,
    msgSentFunc: PropTypes.func.isRequired
}

export default SendForm;