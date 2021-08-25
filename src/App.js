import React, { useState, useEffect } from "react";
import "./styles.css";
import CompSendMsg from "./CompSendMsg";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



function App() {

  const msgSample = { message: '', author: '' };
  const [message, writeMsg] = useState("");
  const [msgArr, msgArrFunc] = useState([msgSample]);
  const [msgSent, msgSentFunc] = useState(false);


  const useStyles = makeStyles(() => ({
    messenger: {
      width: '400px',
      height: '70vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      backgroundColor: '#e3e3e3',
      position: 'relative',
      zIndex: '0',
      border: '2px solid #313234',
    },
    bg: {
      backgroundColor: '#60879e',
      width: '100%',
      height: '20%',
      position: 'absolute',
      zIndex: '0',
      top: '0',
    },
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
    message: {
      margin: '1%'
    },
    send: {
      overflow: 'auto',
    },
    answer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      color: 'red'
    },
  }));


  const classes = useStyles();


  useEffect(() => {

    (function sendAns() {
      if (msgSent) {
        writeMsg('');
        const ansArr = [
          "Я выпотрошу тебя и всю твою семью",
          "Твоя душа принадлежит мне",
          "И не надейся на быструю смерть",
          "Да начнётся истребление",
        ];
        let timer;
        function answerMsg() {
          let ansNum = parseInt(Math.random() * ansArr.length);
          let ans = <div key={msgArr.length + 1000} className="message message__answer">{ansArr[ansNum]}</div>;
          msgArrFunc((a) => [...a,
          { message: ans, author: 'bot' }
          ]);
          return clearInterval(timer);
        }
        timer = setInterval(() => answerMsg(), 1000);
        msgSentFunc(false);
      }
    })();
  }, [msgSent, msgArr.length, classes.bg]);

  //className={classes.message.answer}

  return (
    <main>
      <div className={classes.messenger}>
        <div className={classes.bg}></div>
        <div className={classes.chat}>{msgArr.map(e => e.message)}</div>
        <form className={classes.sendform} action="">
          <textarea
            className={classes.sendtext}
            id="txta1"
            cols="30"
            rows="5"
            value={message}
            onChange={(e) => writeMsg(e.target.value)}
            onKeyDown={(e) => { if (e.code === "Enter") { e.preventDefault(); CompSendMsg(message, msgArrFunc, msgArr, msgSentFunc); } }}
          ></textarea>
          <Button className={classes.button}
            variant="contained" color="primary"
            onClick={(e) => {
              CompSendMsg(message, msgArrFunc, msgArr, msgSentFunc);
            }}>
            Отправить
          </Button>
        </form>
      </div>
    </main>
  );
}

export default App;
