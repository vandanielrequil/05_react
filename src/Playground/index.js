// import { useContext, useState } from 'react';
// import { MyContext } from '../';
import { useSelector } from 'react-redux';



const Playground = (props) => {


    //Context
    //const contexValues = useContext(MyContext);
    //console.log(contexValues);
    //console.log('COMP props are ', props);

    //Clock
    // const [time, setTime] = useState(new Date().toLocaleTimeString());
    // function timeOn() { setTime(new Date().toLocaleTimeString()) };
    //setInterval(timeOn, 1000);

    const { countOfMessages, lastMessageText //, msgArray
    } = useSelector(state => state.conversation);



    return <><div>This is Playground</div>
        <br />
        <div> countOfMessages {countOfMessages}; </div>
        <div> lastMessageText {lastMessageText}; </div>
        <br />
    </>
}

// const authHOC = function (Component) {
//     return (props) => {
//         return <Component userInfo={{ userId: 1, userName: 'Dan' }} {...props} />;
//     }
// }

export default Playground;