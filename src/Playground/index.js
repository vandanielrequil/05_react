//import { useContext } from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
// import { MyContext } from '../';
//import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        padding: '5vh'
    }
}));

const Playground = (props) => {

    const classes = useStyles();

    //Context
    //const contexValues = useContext(MyContext);
    //console.log(contexValues);
    //console.log('COMP props are ', props);

    //Clock
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    function timeOn() { setTime(new Date().toLocaleTimeString()) };
    setInterval(timeOn, 1000);

    // const { countOfMessages, lastMessageText //, msgArray
    // } = useSelector(state => state.conversation);



    return <div className={classes.wrapper}><div>This is Playground and now is {time}</div>

    </div>
}

// const authHOC = function (Component) {
//     return (props) => {
//         return <Component userInfo={{ userId: 1, userName: 'Dan' }} {...props} />;
//     }
// }

export default Playground;