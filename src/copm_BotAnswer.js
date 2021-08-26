import React, { useEffect } from 'react';
import PropTypes from "prop-types";

const BotAnswer = (msgFunc, msgArr, msgArrFunc, msgSent, msgSentFunc) => {

    return useEffect(() => {
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
    }, [msgFunc, msgArrFunc, msgSent, msgSentFunc, msgArr.length]);
}

BotAnswer.propTypes = {
    msgFusnc: PropTypes.func.isRequired
}

export default BotAnswer;