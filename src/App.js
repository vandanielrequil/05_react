import React, { useState } from 'react';
import './styles.css';


function App() {

  const [message, writeMsg] = useState('');
  const [msgArr, msgArrF] = useState([]);


  function sendMsg(e) {
    if (message) { msgArrF(a => [...a, message]); console.log('Here1') }
    else { console.log('Here2'); return };
    console.log(msgArr);
    msgArr.forEach(a => console.log(a));
    writeMsg('');
  }

  return (
    <main>
      <div className="messenger">

        <div className="bg"></div>
        <div className="chat"></div>

        <form className="sendform" action="">
          <textarea className="sendtext" id="txta1" cols="30" rows="5" value={message} onChange={e => writeMsg(e.target.value)}></textarea>
          <button className="sendbut" type='button' onClick={e => sendMsg(e)} >Отправить</button>
        </form>

      </div>
    </main>
  );
}

export default App;
