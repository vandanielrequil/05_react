import { makeStyles } from '@material-ui/styles';
import { initializeApp } from "firebase/app";
// Firestore - collection
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
//Realtime database
import { getDatabase, ref, set } from "firebase/database";

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2vh'
    }
}));

const firebaseConfig = {
    apiKey: "AIzaSyC90elfM4OZj1_qw0bze-Xu7wzTgVXkXgw",
    authDomain: "gb-react-project-a1914.firebaseapp.com",
    projectId: "gb-react-project-a1914",
    storageBucket: "gb-react-project-a1914.appspot.com",
    messagingSenderId: "839858123419",
    databaseURL: "https://gb-react-project-a1914-default-rtdb.europe-west1.firebasedatabase.app/",
    appId: "1:839858123419:web:7cf308f34c18ea9c9f0c3e"
};


export const firebaseApp = initializeApp(firebaseConfig);
export const collection1 = getFirestore();
export const database = getDatabase();

const testCollection = async () => {
    try {
        const docRef = await addDoc(collection(collection1, "users"), {
            first: "Alan",
            middle: "Mathison",
            last: "Turing",
            born: 1912
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}
//test();


function testRTDatabase(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}
testRTDatabase(1, 'TestName', 'asd@masd.er', 'wwww');

const FbApp = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <h1>React & Firebase</h1>
            <code>
                <pre>{JSON.stringify(firebaseApp.options, null, 2)}</pre>
            </code>
        </div>
    );
}

export default FbApp;



