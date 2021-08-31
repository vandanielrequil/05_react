import { useContext, useState } from 'react';
import { MyContext } from '../';



const Playground = (props) => {

    const contexValues = useContext(MyContext);
    //console.log(contexValues);
    //console.log('COMP props are ', props);

    const [time, setTime] = useState(new Date().toLocaleTimeString());
    function timeOn() { setTime(new Date().toLocaleTimeString()) };
    setInterval(timeOn, 1000);

    return <div>
        This is Playground, and it's {time}
    </div>
}

const authHOC = function (Component) {
    console.log(Component.props);
    return (props) => {
        console.log('HOC props are ', props);
        return <Component userInfo={{ userId: 1, userName: 'Dan' }} {...props} />;
    }
}

export default authHOC(Playground);