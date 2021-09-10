import { createTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

export const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[500],
            light: blueGrey[100],
        },
        secondary: {
            main: '#fafaff', //ghostWhite
            light: '#eeedf0' //
        },
    },
});

