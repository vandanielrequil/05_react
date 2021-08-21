import React, { useState } from "react";
import "./styles.css";
import CompSendMsg from "./CompSendMsg";

function App() {

  const [message, writeMsg] = useState("");
  let [msgArr, msgArrF] = useState([]);

  return (
    <main>
      <div className="messenger">
        <div className="bg"></div>
        <div className="chat">{msgArr}</div>
        <form className="sendform" action="">
          <textarea
            className="sendtext"
            id="txta1"
            cols="30"
            rows="5"
            value={message}
            onChange={(e) => writeMsg(e.target.value)}
          ></textarea>
          <button className="sendbut" type="button" onClick={(e) => msgArrF = CompSendMsg(message,msgArrF)}>
            Отправить
          </button>
        </form>
      </div>
    </main>
  );
}

export default App;
