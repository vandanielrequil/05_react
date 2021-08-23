const CompSendMsg = function CompSendMsg(message, msgArrFunc, msgArr, msgSentFunc) {

  if (!!message === true) {

    let mess = <div key={msgArr.length} className="message message__send">{message}</div>;
    msgArrFunc((a) => [...a,
    { message: mess, author: 'human' }
    ]);
    msgSentFunc(true);
  }
  return true;
};

export default CompSendMsg;