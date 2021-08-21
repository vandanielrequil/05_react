const CompSendMsg = function CompSendMsg(message, msgArrF, msgArr) {

  function sendAns() {

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
      msgArrF((a) => [...a, ans]);
      return clearInterval(timer);
    }
    timer = setInterval(() => answerMsg(), 1000);
  }

  if (!!message === true) {

    let mess = <div key={msgArr.length} className="message message__send">{message}</div>;
    msgArrF((a) => [...a, mess]);
    sendAns();
  }
  return msgArrF;
};

export default CompSendMsg;