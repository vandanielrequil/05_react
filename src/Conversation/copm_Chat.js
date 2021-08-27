import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';

const Chat = ({ props: { msgFunc, msgArrFunc, msgSent, msgSentFunc, msgArr } }) => {

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
    }));

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
                    let ans = <div key={msgArr.length + 1000} className="msg msg__answer">{ansArr[ansNum]}</div>;
                    msgArrFunc((a) => [...a,
                    { msg: ans, author: 'bot' }
                    ]);
                    return clearInterval(timer);
                }
                timer = setInterval(() => answerMsg(), 1000);
                msgSentFunc(false);
            }
        })();
    }, [msgFunc, msgArrFunc, msgSent, msgSentFunc, msgArr.length, msgArr]);

    const classes = useStyles();

    return <div className={classes.chat}>{msgArr.map(e => e.msg)}</div>
}

Chat.propTypes = {
    props:
        PropTypes.shape({
            msgFunc: PropTypes.func.isRequired,
            msgArrFunc: PropTypes.func.isRequired,
            msgSent: PropTypes.bool.isRequired,
            msgSentFunc: PropTypes.func.isRequired
        })
}

export default Chat;