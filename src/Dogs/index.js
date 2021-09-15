import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { DOG_URL, setLoading, setData, setError } from './dogsSlice';
import { useDispatch } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2vh'
    },
    imgBox: {
        margin: '20px 0',
        maxWidth: '1000px',
        maxHeight: '650px'
    }
}));

const getDogPhoto = () => async (dispatch, getState) => {
    const { dogs: { loading, error, data, } } = getState();
    if (!loading) {
        try {
            dispatch(setError(false));
            dispatch(setLoading(true));
            const response = await fetch(DOG_URL);
            const result = await response.json().then(e => e.message);
            dispatch(setData(result));
        }
        catch (e) {
            dispatch(setError(true));
            throw new Error('Smthng went wrong');
        }
        finally {
            dispatch(setLoading(false));
        }
    }
}
    ;

const Dogs = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { loading, error, data } = useSelector((state) => state.dogs);


    const getDogPhotoDispatch = useCallback(
        () => { dispatch(getDogPhoto()) }, [dispatch]
    );

    useEffect(() => {
        getDogPhotoDispatch()
    }, [getDogPhotoDispatch]);

    console.log(data);
    return <div className={classes.wrapper}>
        <Button color='primary' variant="contained" disabled={loading} onClick={(e) => getDogPhotoDispatch()}> <Typography>Покажи собаку ♡</Typography> </Button>
        <div className={classes.imgBox}>
            {error && <h2>Возникла ошибка</h2>}
            {loading && <CircularProgress />}
            {!loading && !error && data && <img src={data} alt='O-ooo' />}
        </div>
    </div>
}

export default Dogs;