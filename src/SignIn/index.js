import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import { changeAuth } from '../Profile/profileSlice';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
//import { firebaseApp } from '../Firebase';

export default function SignIn() {
    const [registered, registeredSet] = useState(true);
    const [email, emailSet] = useState('');
    const [password, passwordSet] = useState('');
    const [firstName, firstNameSet] = useState('');
    const [lastName, lastNameSet] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const { isAuthenticated } = useSelector(state => state.profile);

    const auth = getAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // // eslint-disable-next-line no-console
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // });
        if (registered) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('Signed in');
                    dispatch(changeAuth(true));
                    history.push("/");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('Registered');
                    history.push("/signin");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                });
        };
    };

    const unLogged = (
        <Container component="main" maxWidth="xs" style={{ margin: '3vh 0 0 35vw' }}>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {registered ? 'Sign in' : 'Sign up'}
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <Grid container spacing={2}>
                        {!registered
                            ? <>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="fname"
                                        name="firstName"
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        value={firstName}
                                        onChange={e => firstNameSet(e.target.value)}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="lname"
                                        value={lastName}
                                        onChange={e => lastNameSet(e.target.value)}
                                    />
                                </Grid>
                            </>
                            : null}
                        <Grid item xs={12}>
                            <TextField
                                required
                                autoFocus
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={e => emailSet(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                value={password}
                                onChange={e => passwordSet(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        style={{ margin: "20px 0 10px 0" }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        color="primary"
                    >
                        {registered ? 'Sign in' : 'Sign up'}
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            {/* <Link href="#" variant="body2">
                                Forgot password?
                            </Link> */}
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2" onClick={e => registeredSet(!registered)}>
                                {registered ? "Don't have an account? Sign Up" : "Already have an account? Sign in"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );

    const logged = (<Container component="main" maxWidth="xs" style={{ margin: '3vh 0 0 35vw' }}>
        <CssBaseline />
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography component="h1" variant="h5">
                You're already logged in
            </Typography>
            <Button
                style={{ margin: "20px 0 10px 0" }}
                type="action"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
                onClick={e => dispatch(changeAuth(false))}
            >
                Log out
            </Button>
        </Box>
    </Container>);

    return (isAuthenticated ? logged : unLogged);
}