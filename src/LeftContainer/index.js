import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        position: 'absolute',
        width: '325px',
        height: '100%',
        boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
        backgroundColor: theme.palette.secondary.main
    },
    AppBar: {
        width: '100%'
    },
    navChat: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        backgroundColor: theme.palette.primary.light,
        '&:hover': { backgroundColor: theme.palette.secondary.light },
    },
    navChatColumn: {
        display: 'flex',
        flexDirection: 'column',
        //border: '3px solid Teal'
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(1),
    },
    search: {
        display: 'flex',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%'
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
    }
}));

const LeftContainer = () => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const menuId = 'primary-search-account-menu';

    return (
        <div className={classes.wrapper} >
            <AppBar className={classes.AppBar} position="static">
                <Toolbar variant="regular">
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>

                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.navChat}>
                <Avatar alt="Cindy Baker" src="http://myanimeshelf.com//upload/dynamic/2011-11/07/MassEffect2_2011-01-31_23-05-54-84.bmp2.jpg" />
                <div className={classes.navChatColumn}><div>sadfdsf</div><div>derfgdfgfg</div></div>
                <div><Typography
                    //    variant='h1'
                    //variant= 'h2'
                    //variant= 'h3'
                    //variant= 'h4'
                    //variant= 'h5'
                    //variant= 'h6'
                    //variant= 'subtitle1'
                    variant='subtitle2'
                //variant= 'body1'
                //variant= 'body2'
                //variant= 'caption'
                //variant= 'button'
                //variant= 'overline'
                //variant= 'srOnly'
                //variant= 'inherit'

                >sadfdsf</Typography></div>
            </div>
        </div >
    );
}

export default LeftContainer;