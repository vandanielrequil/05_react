const CompSendMsg = function CompSendMsg(message, msgArrF) {

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
      let ans = <div className="message message__answer">{ansArr[ansNum]}</div>;
      msgArrF((a) => [...a, ans]);
      return clearInterval(timer);
    }
    timer = setInterval(() => answerMsg(), 1000);
  }

  if (!!message === true) {
    console.log(message + ' ' + !!message);
    let mess = <div className="message message__send">{message}</div>;
    msgArrF((a) => [...a, mess]);
    sendAns();
  }
  return msgArrF;
};

export default CompSendMsg;