import React, { useState } from "react";
import "./styles.css";
import { makeStyles } from '@material-ui/core/styles';
/*Import Components*/
import Chat from "./copm_Chat";
import SendForm from "./copm_SendForm";

function App() {

  const msgSample = { msg: '', author: '' };
  const [msg, msgFunc] = useState("");
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
      '&>div:first-child': {
        backgroundColor: '#60879e',
        width: '100%',
        height: '20%',
        position: 'absolute',
        zIndex: '0',
        top: '0',
      },
    },
    bg: {},
    msg: {
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
    }
  }));
  const classes = useStyles();



  return (
    <main>

      <div className={classes.messenger}>
        <div className={classes.bg}></div>
        <Chat props={{ msgFunc, msgArrFunc, msgSent, msgSentFunc, msgArr }} />
        <SendForm props={{ msg, msgFunc, msgArrFunc, msgArr, msgSentFunc }} />
      </div>
    </main>
  );
}

export default App;
