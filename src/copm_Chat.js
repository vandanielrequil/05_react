import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';

const Chat = (props) => {
    const useStyles = makeStyles(() => ({
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
    }));

    const classes = useStyles();
    return <div className={classes.chat}>{props.msgArr.map(e => e.msg)}</div>

}

Chat.propTypes = {
    msgArr: PropTypes.array.isRequired
}

export default Chat;