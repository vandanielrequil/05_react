import React, { useState } from "react";
import "./styles.css";
import { makeStyles } from '@material-ui/core/styles';
import Chat from "./copm_Chat";
import SendForm from "./copm_SendForm";
import msbg from "./msbg.jpg";

function Conversation() {

  const [msg, msgFunc] = useState("");

  ;

  const useStyles = makeStyles((theme) => ({
    topBar: {
      backgroundColor: theme.palette.primary.main,
      width: '100%',
      height: '64px',
      boxShadow: 'inset 2px 2px 7px -1px #000000'
    },
    conversation: {
      marginLeft: '325px',
      backgroundImage: `url(${msbg})`,
      backgroundSize: 'cover',
      width: 'calc(100vw - 325px)',
      height: 'calc(100vh - 60px)',
      display: 'grid',
      gridTemplateColumns: '1fr 10fr 10fr 10fr',
      gridTemplateRows: '1fr 20fr 1fr',
      backgroundColor: theme.palette.primary.light,

    },
    chatWrapper: {
      gridColumn: '2 / 5',
      gridRow: '2 / 4',
      width: '80%',
      height: '100%',
      // display: 'flex',
      // flexDirection: 'column',
      // justifyContent: 'space-between'

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

      <div className={classes.topBar}></div>
      <div className={classes.conversation}>
        {/* I really dont like and idea of spamming list of props like 'dummy=dummy', so I've done it this way */}
        <div className={classes.chatWrapper}>
          <Chat props={{ msgFunc }} />
          <SendForm props={{ msg, msgFunc }} />
        </div>
      </div>
    </main>
  );
}

export default Conversation;
