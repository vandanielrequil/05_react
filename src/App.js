import React, { useState, useEffect } from "react";
import "./styles.css";
import CompSendMsg from "./CompSendMsg";

function App() {

  const msgSample = { message: '', author: '' };
  const [message, writeMsg] = useState("");
  const [msgArr, msgArrFunc] = useState([msgSample]);
  const [msgSent, msgSentFunc] = useState(false);


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
  }, [msgSent, msgArr.length]);


  return (
    <main>
      <div className="messenger">
        <div className="bg"></div>
        <div className="chat">{msgArr.map(e => e.message)}</div>
        <form className="sendform" action="">
          <textarea
            className="sendtext"
            id="txta1"
            cols="30"
            rows="5"
            value={message}
            onChange={(e) => writeMsg(e.target.value)}
            onKeyDown={(e) => { if (e.code === "Enter") { CompSendMsg(message, msgArrFunc, msgArr, msgSentFunc); } }}
          ></textarea>
          <button className="sendbut" type="button"
            onClick={(e) => {
              CompSendMsg(message, msgArrFunc, msgArr, msgSentFunc);
            }}
          >
            Отправить
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
