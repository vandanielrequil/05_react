import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        margin: '0 0 2% 0',
    },
}));

export default function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >

                    <Tab component={Link} to="/" label='HOME'></Tab>
                    <Tab component={Link} label="Conversation" to="/conversation" />
                    <Tab component={Link} label="Playgroud" to="/playgroud" />
                    <Tab component={Link} label="Profile" to="/profile" />

                </Tabs>
            </AppBar>

        </div >
    );
}